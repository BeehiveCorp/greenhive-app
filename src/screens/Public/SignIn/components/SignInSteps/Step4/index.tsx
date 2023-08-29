import { useCallback, useEffect, useState } from 'react';
import { interpolate } from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import { useTheme } from 'styled-components/native';

import { Box, Button } from '@/components';
import { useUser } from '@/contexts/UserContext';
import { THero } from '@/services/HeroService';
import { DEVICE_DIMENSIONS, GLOBAL_METRICS } from '@/theme';
import { getRelativeUri } from '@/utils/utilities';
import { User } from '@/services';

import { HeroCard, Avatar, Name, Description } from './styles';

const Step4: React.FC<{
  onNextStep: () => void;
  openBottomSheet: (hero: THero) => void;
  heroes: THero[];
}> = ({ onNextStep, openBottomSheet, heroes }) => {
  const getInitialIndex = () => {
    const idx = heroes.findIndex((hero) => hero.id === user?.hero_id);
    if (idx !== -1) return idx;
    return 0;
  };

  const theme = useTheme();
  const { user, setUser } = useUser();
  const [selectedHero, setSelectedHero] = useState<THero>(heroes[getInitialIndex()]);

  const itemSize = 240;
  const centerOffset = DEVICE_DIMENSIONS.width / 2 - itemSize / 2;

  const animationStyle = useCallback(
    (value: number) => {
      'worklet';

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-30, -15, 0, 0, 0, 15, 30]
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-5, -4, 0, 4, 5],
        [180, 140, 40, 140, 180]
      );

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.85, 1.1, 0.85, 0.8]
      );

      return {
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
          { scale },
        ],
      };
    },
    [centerOffset]
  );

  const onHeroSelect = () => {
    setUser({ ...user, hero_id: selectedHero.id } as User);
    onNextStep();
  };

  useEffect(() => {
    if (!user?.hero_id) {
      setUser({ ...user, hero_id: heroes[0].id } as User);
    }
  }, []);

  return (
    <>
      <Box style={{ flex: 1 }}>
        <Carousel
          width={itemSize}
          height={itemSize}
          style={{
            width: DEVICE_DIMENSIONS.width,
            height: DEVICE_DIMENSIONS.height / 2,
          }}
          loop
          data={heroes}
          defaultIndex={getInitialIndex()}
          onScrollEnd={(index) => setSelectedHero(heroes[index])}
          renderItem={({ item }) => (
            <HeroCard key={item.id}>
              <Avatar source={{ uri: getRelativeUri(item.avatar_url) }} />

              <Name heading size="lg">
                {item?.name}
              </Name>

              <Description size="sm">{item?.description}</Description>

              <Button
                text="Lore"
                icon="cards-playing-outline"
                containerStyle={{ backgroundColor: theme.background }}
                textStyle={{ color: theme.primary }}
                onPress={() => openBottomSheet(item)}
              />
            </HeroCard>
          )}
          customAnimation={animationStyle}
        />
      </Box>

      <Box style={{ paddingHorizontal: GLOBAL_METRICS.horizontalSpacing }}>
        <Button
          text={`Continuar como ${selectedHero?.name}`}
          primary
          onPress={onHeroSelect}
        />
      </Box>
    </>
  );
};

export default Step4;
