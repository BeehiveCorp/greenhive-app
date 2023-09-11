import styled from 'styled-components/native';

import { Text, Box } from '@/components';
import { FONT_FAMILY, FONT_SIZE } from '@/theme';

export const Article = styled.TouchableOpacity.attrs(() => ({
  activeOpacity: 0.8,
}))`
  background-color: ${({ theme }) => theme.container};
  padding: 12px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const Title = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.title};
  font-size: ${FONT_SIZE.Small}px;
  margin-top: 24px;
`;

export const Read = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.primary};
  font-size: ${FONT_SIZE.Small}px;
  margin-left: 4px;
`;
