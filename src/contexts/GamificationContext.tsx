import { LEVEL_UP_DIFFICULTY_FACTOR } from '@/utils/constants';

import React, { ReactNode, createContext, useContext, useMemo } from 'react';

import { useUser } from './UserContext';
import { UserService } from '@/services';

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

  const updateStats = async ({ ambicoinsGains, xpGains }: UpdateStatsParams) => {
    const { data, error } = await UserService.updateGamifiedStats({
      ambicoins_gains: ambicoinsGains,
      xp_gains: xpGains,
      user_id: user?.id ?? '',
    });

    if (!error) {
      // @ts-expect-error
      storeUser({
        ...user,
        ambicoins: data!.ambicoins,
        xp: data!.xp,
        level: data!.level,
      });
    }
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
    </UserContext.Provider>
  );
};

export const useGamification = (): GamificationContextType => {
  const context = useContext(UserContext);

  if (!context)
    throw new Error('useGamification must be used within a GamificationProvider');

  return context;
};
