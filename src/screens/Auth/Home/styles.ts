import styled from 'styled-components/native';

import { Text, Box } from '@/components';
import { FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';

export const Label = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.text};
  opacity: 0.2;
  font-size: ${FONT_SIZE.Small}px;
`;

export const Row = styled(Box).attrs(() => ({
  horizontal: true,
  spaceBetween: true,
  alignItemsCenter: true,
}))`
  margin-bottom: 12px;
  padding: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
`;
