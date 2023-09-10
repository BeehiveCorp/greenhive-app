import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '@/navigation/components/AuthStackNavigation/types';

export type ArticlesScreenProps = {
  route: RouteProp<AuthStackParamList, 'Articles'>;
  navigation: StackNavigationProp<AuthStackParamList, 'Articles'>;
};
