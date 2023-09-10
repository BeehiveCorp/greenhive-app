import styled from 'styled-components/native';
import chroma from 'chroma-js';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';

import Text from '@/components/Text';
import Box from '@/components/Box';

import { FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';

export const Container = styled(BlurView).attrs(({ theme }) => ({
  tint: theme.name,
  intensity: Platform.OS === 'ios' ? 48 : 100,
}))`
  padding: 64px ${GLOBAL_METRICS.horizontalSpacing}px 12px;
  background-color: ${({ theme }) =>
    chroma(theme.background)
      .darken(theme.name === 'dark' ? 0.2 : 0.05)
      .alpha(0.7)
      .hex()};
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
  flex-direction: row;
  align-items: center;
`;

export const Bar = styled(Animated.View)`
  height: 6px;
  border-radius: 4px;
  background-color: ${({ theme }) => chroma(theme.secondary).alpha(0.4).hex()};
  overflow: hidden;
`;

export const Progress = styled(Animated.View)`
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.secondary};
  height: 100%;
`;

export const Xp = styled(Animated.Text)<{ xpTextWidth: number; percentage: number }>`
  position: absolute;
  font-family: ${FONT_FAMILY.Bold};
  font-size: ${FONT_SIZE.SuperSmall - 2}px;
  color: ${({ theme }) => theme.secondary};
  align-self: flex-start;
  transform: translateX(
    -${({ xpTextWidth, percentage }) => (percentage < 50 ? 0 : xpTextWidth)}px
  );
  top: -18px;
`;

export const NextLevel = styled(Text)`
  margin-left: 8px;
  font-family: ${FONT_FAMILY.Bold};
  font-size: ${FONT_SIZE.SuperSmall - 2}px;
  color: ${({ theme }) => chroma(theme.secondary).alpha(0.4).hex()};
  align-self: flex-end;
`;

export const AvatarContainer = styled(Box)`
  margin-right: 24px;
  margin-top: -8px;
`;

export const LevelContainer = styled(Box)`
  position: absolute;
  right: -8px;
  bottom: -4px;
`;

export const Ambicoins = styled(Box)`
  background-color: ${({ theme }) => theme.primary};
  padding: 2px;
  border-radius: 80px;
  margin-left: 16px;
  width: 64px;
`;

export const Quantity = styled(Text).attrs(() => ({ size: 'super-sm' }))`
  color: ${({ theme }) => theme.background};
  margin-left: 2px;
  font-family: ${FONT_FAMILY.SemiBold};
`;
