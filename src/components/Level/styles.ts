import { FONT_FAMILY, FONT_SIZE } from '@/theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  position: relative;
`;

export const LevelNumber = styled.Text`
  font-size: ${FONT_SIZE.SuperSmall}px;
  font-family: ${FONT_FAMILY.Bold};
  color: #fff;
`;
