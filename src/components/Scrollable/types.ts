import { ScrollViewProps } from 'react-native';

export type ScrollableProps = {
  mainNavigation?: boolean;
  paddingTop?: number;
  paddingBottom?: number;
} & ScrollViewProps;
