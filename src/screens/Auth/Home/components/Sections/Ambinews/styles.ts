import styled from 'styled-components/native';

import { Box, Text } from '@/components';
import { DEVICE_DIMENSIONS, FONT_FAMILY, FONT_SIZE } from '@/theme';

export const Container = styled(Box)``;

export const Article = styled(Box)`
  background-color: ${({ theme }) => theme.container};
  padding: 12px;
  width: ${DEVICE_DIMENSIONS.width * 0.6}px;
  border-radius: 8px;
`;

export const Title = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.title};
  font-size: ${FONT_SIZE.Small}px;
  margin-top: 24px;
`;
