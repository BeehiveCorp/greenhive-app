import styled from 'styled-components/native';

import { Text } from '@/components';
import { FONT_FAMILY, FONT_SIZE } from '@/theme';

export const Read = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.primary};
  font-size: ${FONT_SIZE.Small}px;
  margin-left: 4px;
`;
