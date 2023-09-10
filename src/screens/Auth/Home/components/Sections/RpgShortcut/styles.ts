import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import chroma from 'chroma-js';

import { FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';
import { Box, Text } from '@/components';

export const Container = styled(Box)`
  background-color: ${({ theme }) => theme.container};
  border-radius: 8px;
  margin: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
  padding: 16px;
`;

export const Difficulty = styled(Box)`
  background-color: ${({ theme }) => chroma(theme.error).alpha(0.1).hex()};
  padding: 4px 12px;
  align-items: center;
  border-radius: 24px;
`;

export const DifficultyText = styled(Text)`
  color: ${({ theme }) => theme.error};
  font-size: ${FONT_SIZE.Small}px;
  font-family: ${FONT_FAMILY.Bold};
  align-self: center;
`;

export default StyleSheet.create({
  heroAvatar: {
    width: 40,
    height: 40,
    marginRight: 8,
    borderRadius: 20,
  },
});
