import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { PublicStackParamList } from '@/navigation/components/PublicStackNavigation/types';

export type SignInScreenProps = {
  route: RouteProp<PublicStackParamList, 'SignIn'>;
  navigation: StackNavigationProp<PublicStackParamList, 'SignIn'>;
};
