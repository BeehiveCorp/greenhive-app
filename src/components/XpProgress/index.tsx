import { useState } from 'react';
import { Text } from 'react-native';
import chroma from 'chroma-js';
import { useAnimatedStyle, withSpring } from 'react-native-reanimated';
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
            updateStats({ ambicoinsGains: 10, xpGains: 280 });
          }}
        >
          {user?.ambicoins}
        </Quantity>
      </Ambicoins>
    </Container>
  );
};

export default XpProgress;
