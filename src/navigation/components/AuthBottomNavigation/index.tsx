import {
  createBottomTabNavigator,
  BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import { Home, Feed, RolePlayingGame } from '@/screens';

import { Box } from '@/components';

const Tab = createBottomTabNavigator();

import useBottomTabStyles, { BlurWrapper } from './styles';
import TabBarItem from '../TabBarItem';

const AuthBottomNavigation: React.FC = () => {
  const bottomTabStyles = useBottomTabStyles();

  const navigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: bottomTabStyles.wrapper,
    tabBarBackground: () => (
      <Box style={bottomTabStyles.background}>
        <BlurWrapper />
      </Box>
    ),
  };

  const screenOptions: BottomTabNavigationOptions = {
    tabBarIcon: ({ focused }) => <TabBarItem focused={focused} />,
  };

  return (
    <Tab.Navigator screenOptions={navigatorOptions}>
      <Tab.Screen options={screenOptions} name="Home" component={Home} />
      <Tab.Screen options={screenOptions} name="Feed" component={Feed} />
      <Tab.Screen
        options={screenOptions}
        name="RolePlayingGame"
        component={RolePlayingGame}
      />
    </Tab.Navigator>
  );
};

export default AuthBottomNavigation;
