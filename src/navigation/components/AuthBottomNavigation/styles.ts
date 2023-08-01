import { Platform, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import {
  BOTTOM_TAB_ITEM_SIZE,
  BOTTOM_TAB_WIDTH,
  BOTTOM_TAB_BORDER_WIDTH,
} from '@/navigation/constants';

import { DEVICE_DIMENSIONS } from '@/theme';

import styled, { useTheme } from 'styled-components/native';
import chroma from 'chroma-js';

const useBottomTabStyles = () => {
  const theme = useTheme();

  return StyleSheet.create({
    wrapper: {
      position: 'absolute',

      width: BOTTOM_TAB_WIDTH,
      height: BOTTOM_TAB_ITEM_SIZE,
      left: (DEVICE_DIMENSIONS.width - BOTTOM_TAB_WIDTH) / 2,
      bottom: 32,

      borderRadius: BOTTOM_TAB_WIDTH,
      borderWidth: BOTTOM_TAB_BORDER_WIDTH,
      borderTopWidth: BOTTOM_TAB_BORDER_WIDTH,
      borderColor: theme.border,
      borderTopColor: theme.border,

      elevation: 0,
      shadowOffset: {
        width: 0,
        height: 0,
      },
    },

    background: {
      borderRadius: BOTTOM_TAB_WIDTH,
      overflow: 'hidden',
      backgroundColor: 'transparent',
      ...StyleSheet.absoluteFillObject,
    },
  });
};

export default useBottomTabStyles;

export const BlurWrapper = styled(BlurView).attrs(({ theme }) => ({
  tint: theme.name,
  intensity: Platform.OS === 'ios' ? 48 : 160,
}))`
  width: ${() => BOTTOM_TAB_WIDTH}px;
  background-color: ${({ theme }) => chroma(theme.container).alpha(0.2).hex()};
  ${{ ...StyleSheet.absoluteFillObject }}
`;

export const CommonWrapper = styled.View`
  width: ${() => BOTTOM_TAB_WIDTH}px;
  background-color: ${({ theme }) =>
    chroma(theme.name === 'dark' ? theme.container : theme.background)
      .alpha(0.97)
      .hex()};
  ${{ ...StyleSheet.absoluteFillObject }}
`;
