import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { PublicStackParamList } from '@/navigation/components/PublicStackNavigation/types';

export type LoginScreenProps = {
  route: RouteProp<PublicStackParamList, 'Login'>;
  navigation: StackNavigationProp<PublicStackParamList, 'Login'>;
};
