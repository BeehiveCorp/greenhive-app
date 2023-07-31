import styled from 'styled-components/native';

import { FONT_FAMILY, FONT_SIZE } from '@/theme';
import { Theme } from '@/theme/styled';

import { TextProperties } from './types';

const getFontSize = (size?: 'super-sm' | 'sm' | 'md' | 'lg' | 'super-lg') => {
  switch (size) {
    case 'super-sm':
      return FONT_SIZE.SuperSmall;
    case 'sm':
      return FONT_SIZE.Small;
    case 'md':
      return FONT_SIZE.Medium;
    case 'lg':
      return FONT_SIZE.Large;
    case 'super-lg':
      return FONT_SIZE.SuperLarge;
    default:
      return FONT_SIZE.Medium;
  }
};

const getLineHeight = (size?: 'super-sm' | 'sm' | 'md' | 'lg' | 'super-lg') => {
  switch (size) {
    case 'super-sm':
      return FONT_SIZE.SuperSmall * 1.2;
    case 'sm':
      return FONT_SIZE.Small * 1.2;
    case 'md':
      return FONT_SIZE.Medium * 1.2;
    case 'lg':
      return FONT_SIZE.Large * 1.2;
    case 'super-lg':
      return FONT_SIZE.SuperLarge * 1.2;
    default:
      return FONT_SIZE.Medium * 1.2;
  }
};

const getColor = (theme: Theme, heading: boolean) => {
  return heading ? theme.title : theme.text;
};

const getFontFamily = (heading?: boolean) => {
  return heading ? FONT_FAMILY.Bold : FONT_FAMILY.Regular;
};

const Text = styled.Text<TextProperties>`
  font-size: ${({ size }) => getFontSize(size)}px;
  line-height: ${({ size }) => getLineHeight(size)}px;
  font-family: ${({ heading }) => getFontFamily(heading)};
  color: ${({ theme, heading = false }) => getColor(theme, heading)};
`;

export default Text;
