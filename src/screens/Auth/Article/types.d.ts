import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '@/navigation/components/AuthStackNavigation/types';

export type ArticlesScreenProps = {
  route: RouteProp<AuthStackParamList, 'Article'>;
  navigation: StackNavigationProp<AuthStackParamList, 'Article'>;
};

export type ScrollProps = {
  layoutMeasurement: {
    height: number;
  };
  contentOffset: {
    y: number;
  };
  contentSize: {
    height: number;
  };
};
