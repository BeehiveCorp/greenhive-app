import { ReactNode } from 'react';
import { TextProps, ViewStyle } from 'react-native';

type TextProperties = {
  size?: 'super-sm' | 'sm' | 'md' | 'lg' | 'super-lg';
  heading?: boolean;
} & TextProps;
