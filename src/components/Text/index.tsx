import styled from 'styled-components/native';

import { FontSize, FontFamily } from '@/theme';
import { Theme } from '@/theme/styled';

import { TextProperties } from './types';

const getFontSize = (size?: 'super-sm' | 'sm' | 'md' | 'lg' | 'super-lg') => {
  switch (size) {
    case 'super-sm':
      return FontSize.SuperSmall;
    case 'sm':
      return FontSize.Small;
    case 'md':
      return FontSize.Medium;
    case 'lg':
      return FontSize.Large;
    case 'super-lg':
      return FontSize.SuperLarge;
    default:
      return FontSize.Medium;
  }
};

const getColor = (theme: Theme, heading: boolean) => {
  return heading ? theme.title : theme.text;
};

const getFontFamily = (heading?: boolean) => {
  return heading ? FontFamily.Bold : FontFamily.Regular;
};

const Text = styled.Text<TextProperties>`
  font-size: ${({ size }) => getFontSize(size)}px;
  font-family: ${({ heading }) => getFontFamily(heading)};
  color: ${({ theme, heading = false }) => getColor(theme, heading)};
`;

export default Text;
