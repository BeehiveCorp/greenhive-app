import { createStackNavigator } from '@react-navigation/stack';

import { Login, SignIn } from '@/screens';
import { PublicStackParamList } from './types';

const Stack = createStackNavigator<PublicStackParamList>();

const options = { animationEnabled: false };

const PublicNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default PublicNavigation;
