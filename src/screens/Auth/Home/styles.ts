import styled from 'styled-components/native';
import chroma from 'chroma-js';

import { Text, Box } from '@/components';
import { DEVICE_DIMENSIONS, FONT_FAMILY, FONT_SIZE, GLOBAL_METRICS } from '@/theme';

export const Label = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.text};
  margin-bottom: 16px;
  font-size: ${FONT_SIZE.Small}px;
`;

export const Ambinews = styled(Box)`
  margin-top: 40px;
`;

export const Article = styled(Box)`
  background-color: ${({ theme }) => theme.container};
  padding: 12px;
  width: ${DEVICE_DIMENSIONS.width * 0.6}px;
  border-radius: 8px;
`;

export const Missions = styled(Box)`
  margin-top: 32px;
  padding: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
`;

export const Item = styled(Box)`
  background-color: ${({ theme }) => theme.container};
  padding: 12px;
  width: 110px;
  border-radius: 8px;
  margin-right: 12px;
`;

export const ItemText = styled(Text)`
  font-family: ${FONT_FAMILY.SemiBold};
  color: ${({ theme }) => theme.title};
  font-size: ${FONT_SIZE.Small}px;
  margin-top: 24px;
`;

export const Rpg = styled(Box)`
  margin-top: 32px;
  padding: 0 ${GLOBAL_METRICS.horizontalSpacing}px;
`;

export const Chapter = styled(Box)`
  background-color: ${({ theme }) => theme.container};
  padding: 16px;
  border-radius: 8px;
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
