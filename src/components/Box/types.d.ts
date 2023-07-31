import { ReactNode } from 'react';
import { ViewProps, ViewStyle } from 'react-native';

type BoxProperties = {
  horizontal?: boolean;
  spaceBetween?: boolean;
  alignItemsCenter?: boolean;
  justifyContentCenter?: boolean;
  style?: ViewStyle;
  children: ReactNode;
} & ViewProps;
