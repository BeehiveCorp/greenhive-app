import { useState } from 'react';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { Text } from 'react-native';

import { useUser } from '@/contexts/UserContext';
import { useGamification } from '@/contexts/GamificationContext';
import { FONT_SIZE } from '@/theme';

import Box from '../Box';

import { Bar, Progress, Container, Xp, NextLevel } from './styles';

const XpProgress = () => {
  const { user } = useUser();
  const { nextLevelXpNeeded } = useGamification();

  const [xpTextWidth, setXpTextWidth] = useState(0);
  const [maxBarWidth, setMaxBarWidth] = useState(0);

  const percentage = Math.round((user?.xp ?? 1) * 100) / nextLevelXpNeeded;

  const animatedProgressWidth = useAnimatedStyle(
    () => ({
      width: withSpring((percentage / 100) * maxBarWidth, {
        stiffness: 400,
      }),
    }),
    [percentage, maxBarWidth]
  );

  const animatedProgressLeft = useAnimatedStyle(
    () => ({
      left: withSpring((percentage / 100) * maxBarWidth, {
        stiffness: 400,
      }),
    }),
    [percentage, maxBarWidth]
  );

  return (
    <Container>
      <Box horizontal alignItemsCenter>
        <Box style={{ flex: 1, height: 4 }}>
          <Xp
            onLayout={(e) => setXpTextWidth(e.nativeEvent.layout.width)}
            xpTextWidth={+xpTextWidth.toFixed(0)}
            percentage={percentage}
            style={animatedProgressLeft}
          >
            {user?.xp} /{' '}
            <Text style={{ fontSize: FONT_SIZE.SuperSmall - 4 }}>
              {nextLevelXpNeeded} xp
            </Text>
          </Xp>

          <Bar onLayout={(e) => setMaxBarWidth(e.nativeEvent.layout.width)}>
            <Progress style={animatedProgressWidth} />
          </Bar>
        </Box>

        <NextLevel>LVL {(user?.level ?? 1) + 1}</NextLevel>
      </Box>
    </Container>
  );
};

export default XpProgress;
