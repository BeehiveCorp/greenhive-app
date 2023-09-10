import styled from 'styled-components/native';
import chroma from 'chroma-js';
import { BlurView } from 'expo-blur';
import { Platform } from 'react-native';
import Animated from 'react-native-reanimated';

import Text from '@/components/Text';
import { FONT_FAMILY, GLOBAL_METRICS } from '@/theme';

export const Container = styled(BlurView).attrs(({ theme }) => ({
  tint: theme.name,
  intensity: Platform.OS === 'ios' ? 48 : 100,
}))`
  padding: 64px ${GLOBAL_METRICS.horizontalSpacing}px 12px;
  background-color: ${({ theme }) =>
    chroma(theme.background)
      [theme.name === 'dark' ? 'darken' : 'brighten'](1)
      .alpha(0.7)
      .hex()};
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
`;

export const Bar = styled(Animated.View)`
  height: 6px;
  border-radius: 4px;
  background-color: ${({ theme }) => chroma(theme.primary).alpha(0.4).hex()};
  overflow: hidden;
`;

export const Progress = styled(Animated.View)`
  position: absolute;
  left: 0;
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
`;

export const Xp = styled(Animated.Text)<{ xpTextWidth: number }>`
  position: absolute;
  font-family: ${FONT_FAMILY.Bold};
  color: ${({ theme }) => theme.primary};
  align-self: flex-start;
  transform: translateX(-${({ xpTextWidth }) => xpTextWidth}px);
  top: -24px;
`;

export const NextLevel = styled(Text).attrs(() => ({
  size: 'super-sm',
}))`
  margin-left: 8px;
  font-family: ${FONT_FAMILY.Bold};
  color: ${({ theme }) => chroma(theme.text).alpha(0.2).hex()};
  align-self: flex-end;
`;
