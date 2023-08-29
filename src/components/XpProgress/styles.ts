import styled from 'styled-components/native';

import Box from '@/components/Box';
import Text from '@/components/Text';
import { FONT_FAMILY } from '@/theme';

export const Container = styled(Box)`
  margin: 16px 0;
`;

export const Bar = styled.View`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.container};
  overflow: hidden;
`;

export const Progress = styled.View<{ percentage: number }>`
  position: absolute;
  left: 0;
  width: ${({ percentage }) => percentage}%;
  background-color: ${({ theme }) => theme.primary};
  height: 100%;
`;

export const Xp = styled(Text).attrs<{ percentage: number; xpTextWidth: number }>(
  () => ({
    size: 'sm',
  })
)`
  margin-bottom: 8px;
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.primary};
  align-self: flex-start;
  margin-left: ${({ percentage }) => percentage}%;
  transform: translateX(-${({ xpTextWidth }) => xpTextWidth / 2}px);
`;
