import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { AuthStackParamList } from '@/navigation/components/AuthStackNavigation/types';

export type HomeScreenProps = {
  route: RouteProp<AuthStackParamList, 'Home'>;
  navigation: StackNavigationProp<AuthStackParamList, 'Home'>;
};
