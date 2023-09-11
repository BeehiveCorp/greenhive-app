import { createStackNavigator } from '@react-navigation/stack';

import AuthBottomNavigation from '../AuthBottomNavigation';

import { Articles, Article } from '@/screens';

import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthBottomNavigation" component={AuthBottomNavigation} />
      <Stack.Screen name="Articles" component={Articles} />
      <Stack.Screen name="Article" component={Article} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
