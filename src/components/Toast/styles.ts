import { Platform, TextStyle } from 'react-native';

import styled from 'styled-components/native';
import chroma from 'chroma-js';
import { BlurView } from 'expo-blur';

import { DEVICE_DIMENSIONS, FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';
import { BlurWrapperProps, TitleProps } from './types';

export const BlurWrapper = styled(BlurView).attrs(({ theme }) => ({
  tint: theme.name,
  intensity: Platform.OS === 'ios' ? 56 : 100,
}))<BlurWrapperProps>`
  background-color: ${({ theme, accent }) =>
    chroma(accent ?? theme.info)
      [theme.name === 'dark' ? 'darken' : 'brighten'](5)
      .alpha(0.3)
      .hex()};

  align-items: ${({ hasDescription }) => (hasDescription ? 'flex-start' : 'center')};

  padding: 16px;
  overflow: hidden;
  flex-direction: row;
  border-radius: 8px;
  width: ${() => DEVICE_DIMENSIONS.width - GLOBAL_METRICS.horizontalSpacing * 2}px;
`;

export const Content = styled.View`
  margin-left: 16px;
  flex-shrink: 1;
`;

export const getTitleStyle = ({
  hasDescription,
  accent,
  theme,
}: TitleProps): TextStyle => {
  return {
    fontFamily: FONT_FAMILY.SemiBold,
    marginBottom: hasDescription ? 8 : 0,
    color: hasDescription ? theme.title : accent,
  };
};
