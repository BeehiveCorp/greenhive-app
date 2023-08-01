import { createStackNavigator } from '@react-navigation/stack';

import AuthBottomNavigation from '../AuthBottomNavigation';

const Stack = createStackNavigator();

const AuthNavigation: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="AuthBottomNavigation" component={AuthBottomNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
