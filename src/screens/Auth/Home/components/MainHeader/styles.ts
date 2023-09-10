import styled from 'styled-components/native';

import { Box, Text } from '@/components';
import { FONT_FAMILY, GLOBAL_METRICS } from '@/theme';

export const Container = styled(Box)`
  padding: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
`;

export const Data = styled(Box)`
  margin-left: 20px;
`;

export const Hero = styled(Box)`
  margin-top: 4px;
`;

export const HeroName = styled(Text)`
  color: ${({ theme }) => theme.secondary};
  font-family: ${FONT_FAMILY.SemiBold};
`;

export const Ambicoins = styled(Box)`
  background-color: ${({ theme }) => theme.container};
  padding: 8px;
  border-radius: 8px;
  align-self: flex-start;
`;

export const Quantity = styled(Text).attrs(() => ({ size: 'sm' }))`
  color: ${({ theme }) => theme.secondary};
  margin-right: 4px;
  font-family: ${FONT_FAMILY.SemiBold};
`;

export const AvatarContainer = styled(Box)``;

export const LevelContainer = styled(Box)`
  position: absolute;
  right: -12px;
  bottom: -8px;
`;
