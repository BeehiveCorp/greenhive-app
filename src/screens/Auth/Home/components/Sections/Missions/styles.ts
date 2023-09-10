import styled from 'styled-components/native';

import { Box, Text } from '@/components';
import { FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';

export const Container = styled(Box)`
  padding: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
`;

export const Item = styled(Box)`
  background-color: ${({ theme }) => theme.container};
  padding: 12px;
  width: 110px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const Name = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.title};
  font-size: ${FONT_SIZE.Small}px;
  margin-top: 24px;
`;
