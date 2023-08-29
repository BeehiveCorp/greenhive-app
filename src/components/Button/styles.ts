import styled from 'styled-components/native';
import chroma from 'chroma-js';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Box from '@/components/Box';
import DefaultText from '@/components/Text';

import { FONT_FAMILY } from '@/theme';

import { ButtonProps } from './types';

export const Container = styled(Box)<ButtonProps>`
  width: 100%;
  height: 54px;
  border-radius: 32px;
  flex-direction: row;
  background-color: ${({ primary, secondary, isDisabled, theme }) => {
    if (isDisabled) return theme.container;
    if (primary) return chroma(theme.primary).alpha(0.1).hex();
    if (secondary) return chroma(theme.secondary).alpha(0.1).hex();
    return theme.container;
  }};
`;

export const Text = styled(DefaultText)<ButtonProps>`
  color: ${({ primary, secondary, isDisabled, theme }) => {
    if (isDisabled) return theme.text;
    if (primary) return theme.primary;
    if (secondary) return theme.secondary;
    return theme.text;
  }};
  font-family: ${FONT_FAMILY.SemiBold};
`;

export const Icon = styled(MaterialCommunityIcons).attrs<ButtonProps>(
  ({ primary, secondary, isDisabled, theme, color }) => ({
    size: 24,
    color: isDisabled
      ? theme.text
      : color
      ? color
      : primary
      ? theme.primary
      : secondary
      ? theme.secondary
      : theme.text,
  })
)``;
