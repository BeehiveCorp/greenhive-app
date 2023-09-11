import React, { ReactNode, createContext, useContext, useMemo, useRef } from 'react';

import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

import { LEVEL_UP_DIFFICULTY_FACTOR } from '@/utils/constants';

import { useUser } from './UserContext';
import { UserService } from '@/services';

import BottomSheet from '@/components/BottomSheet';
import Level from '@/components/Level';
import Box from '@/components/Box';
import Button from '@/components/Button';

type UpdateStatsParams = {
  ambicoinsGains: number;
  xpGains: number;
};

type GamificationContextType = {
  updateStats: ({ ambicoinsGains, xpGains }: UpdateStatsParams) => void;
  nextLevelXpNeeded: number;
};

const UserContext = createContext<GamificationContextType | undefined>(undefined);

export const GamificationProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { user, storeUser } = useUser();

  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  const updateStats = async ({ ambicoinsGains, xpGains }: UpdateStatsParams) => {
    const { data, error } = await UserService.updateGamifiedStats({
      ambicoins_gains: ambicoinsGains,
      xp_gains: xpGains,
      user_id: user?.id ?? '',
    });

    if (error) return;

    if (user!.level < data!.level) {
      setTimeout(() => {
        bottomSheetRef?.current?.expand();
      }, 500);
    }

    // @ts-expect-error
    storeUser({
      ...user,
      ambicoins: data!.ambicoins,
      xp: data!.xp,
      level: data!.level,
    });
  };

  const getAmbicoins = async () => {
    updateStats({
      xpGains: 0,
      ambicoinsGains: 100,
    });

    bottomSheetRef?.current?.close();
  };

  const difficulty = LEVEL_UP_DIFFICULTY_FACTOR.Medium;

  const level = user?.level ?? 1;

  const nextLevelXpNeeded = useMemo(
    () => Math.pow((level + 1) * difficulty, 2),
    [user?.level]
  );

  return (
    <UserContext.Provider value={{ updateStats, nextLevelXpNeeded }}>
      {children}

      <BottomSheet
        ref={bottomSheetRef}
        title="Parabéns!"
        description="Você conquistou um novo nível"
        snapPoints={[480]}
        bottomInset={64}
      >
        <Box alignItemsCenter>
          <Level level={user?.level} size={200} />
        </Box>

        <Button
          text="Recolher Ambicoins"
          primary
          style={{ marginTop: 32 }}
          icon="leaf-circle-outline"
          onPress={getAmbicoins}
        />

        <Button
          text="Recolher Ambicoins e publicar"
          secondary
          style={{ marginTop: 16 }}
          icon="share-all-outline"
          onPress={getAmbicoins}
        />
      </BottomSheet>
    </UserContext.Provider>
  );
};

export const useGamification = (): GamificationContextType => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error('useGamification must be used within a GamificationProvider');

  return context;
};
