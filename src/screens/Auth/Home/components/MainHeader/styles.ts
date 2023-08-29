import styled from 'styled-components/native';

import { Box, Text } from '@/components';
import { FONT_FAMILY } from '@/theme';

export const Container = styled(Box)``;

export const Data = styled(Box)`
  margin-left: 24px;
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

export const Quantity = styled(Text)`
  color: ${({ theme }) => theme.secondary};
  margin-right: 4px;
`;
