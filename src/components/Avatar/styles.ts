import chroma from 'chroma-js';
import styled from 'styled-components/native';

import Text from '@/components/Text';
import Box from '@/components/Box';
import { FONT_FAMILY, FONT_SIZE } from '@/theme';

export const Container = styled(Box).attrs<{ size: number }>(() => ({
  justifyContentCenter: true,
  alignItemsCenter: true,
}))`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ size }) => size / 2}px;
  background-color: ${({ theme }) => theme.container};
`;

export const Initials = styled(Text)`
  font-family: ${FONT_FAMILY.Bold};
  font-size: ${FONT_SIZE.Large}px;
  color: ${({ theme }) => chroma(theme.text).alpha(0.4).hex()};
`;
