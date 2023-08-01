import styled from 'styled-components/native';
import chroma from 'chroma-js';

import { Box } from '@/components';

import {
  BOTTOM_TAB_BORDER_WIDTH,
  BOTTOM_TAB_ITEM_SIZE,
} from '@/navigation/constants';

import { TabBarItemProps } from './types';
import { Platform } from 'react-native';

export const Wrapper = styled(Box).attrs(() => ({
  alignItemsCenter: true,
  justifyContentCenter: true,
}))<TabBarItemProps>`
  background-color: ${({ focused, theme }) => {
    const isDarkMode = theme.name === 'dark';

    const background = isDarkMode
      ? theme.background
      : chroma(theme.container).alpha(0.4).hex();

    return focused ? background : 'transparent';
  }};

  height: ${BOTTOM_TAB_ITEM_SIZE - BOTTOM_TAB_BORDER_WIDTH * 2}px;
  width: ${BOTTOM_TAB_ITEM_SIZE - BOTTOM_TAB_BORDER_WIDTH * 2}px;
  bottom: ${Platform.OS === 'ios' ? -15 : 0}px;
  border-radius: ${BOTTOM_TAB_ITEM_SIZE}px;
`;
