import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useIsFirstRender } from 'usehooks-ts';
import chroma from 'chroma-js';

import Animated, {
  BounceIn,
  BounceOut,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import { useTheme } from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useUser } from '@/contexts/UserContext';
import { useGamification } from '@/contexts/GamificationContext';

import Avatar from '../Avatar';
import Box from '../Box';
import Level from '../Level';

import {
  Bar,
  Progress,
  Container,
  Xp,
  NextLevel,
  AvatarContainer,
  LevelContainer,
  Ambicoins,
  Quantity,
} from './styles';

const XpProgress = () => {
  const { user } = useUser();
  const { nextLevelXpNeeded, updateStats } = useGamification();
  const theme = useTheme();
  const isFirstRender = useIsFirstRender();

  const [xpTextWidth, setXpTextWidth] = useState(0);
  const [maxBarWidth, setMaxBarWidth] = useState(0);

  const [animatedAmbicoins, setAnimatedAmbicoins] = useState<number>(0);

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

  const textAnimationStyle = useAnimatedStyle(() => {
    return {
      opacity: withSpring(1),
      transform: [
        {
          scale: withSpring(1),
        },
      ],
    };
  }, [user?.ambicoins]);

  const animate = (currentValue: number) => {
    const targetValue = user?.ambicoins || 0;
    let increment = 1;
    const maxInterval = 75;
    const minInterval = 1;

    if (currentValue < targetValue) {
      const updateValue = (newValue: number) => {
        setAnimatedAmbicoins(newValue);

        if (newValue < targetValue) {
          const remainingDifference = targetValue - newValue;
          increment = Math.ceil(remainingDifference / 10);

          const interval = Math.max(
            minInterval,
            Math.min(maxInterval, 1000 / increment)
          );

          setTimeout(() => {
            updateValue(newValue + increment);
          }, interval);
        }
      };

      updateValue(currentValue + increment);
    }
  };

  useEffect(() => {
    if (isFirstRender) return;

    if (user?.ambicoins !== animatedAmbicoins) {
      animate(animatedAmbicoins);
    }
  }, [user?.ambicoins]);

  useEffect(() => {
    setAnimatedAmbicoins(user?.ambicoins || 0);
  }, []);

  return (
    <Container>
      <AvatarContainer>
        <Avatar size={40} />

        <LevelContainer>
          <Level size={32} level={user?.level} />
        </LevelContainer>
      </AvatarContainer>

      <Box horizontal alignItemsCenter style={{ flex: 1, position: 'relative' }}>
        <Box style={{ flex: 1, height: 4 }}>
          <Xp
            onLayout={(e) => setXpTextWidth(e.nativeEvent.layout.width)}
            xpTextWidth={+xpTextWidth.toFixed(0)}
            percentage={percentage}
            style={animatedProgressLeft}
          >
            {user?.xp} /{' '}
            <Text style={{ color: chroma(theme.secondary).alpha(0.4).hex() }}>
              {nextLevelXpNeeded} xp
            </Text>
          </Xp>

          <Bar onLayout={(e) => setMaxBarWidth(e.nativeEvent.layout.width)}>
            <Progress style={animatedProgressWidth} />
          </Bar>
        </Box>

        <NextLevel>LVL {(user?.level ?? 1) + 1}</NextLevel>
      </Box>

      <Ambicoins horizontal alignItemsCenter>
        <MaterialCommunityIcons
          name="leaf-circle-outline"
          size={24}
          color={theme.background}
        />

        <Quantity
          onPress={() => {
            updateStats({ ambicoinsGains: 100, xpGains: 280 });
          }}
        >
          <Animated.Text
            entering={BounceIn}
            exiting={BounceOut}
            style={[textAnimationStyle]}
          >
            {Math.round(animatedAmbicoins)}
          </Animated.Text>
        </Quantity>
      </Ambicoins>
    </Container>
  );
};

export default XpProgress;
