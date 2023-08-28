import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AuthStackNavigation, PublicStackNavigation } from './components';
import { useTheme } from 'styled-components/native';
import { useUser } from '@/contexts/UserContext';

export default function Navigation() {
  const { name } = useTheme();
  const { user } = useUser();

  const authenticated = !!user?.id;

  return (
    <>
      <StatusBar style={name === 'dark' ? 'light' : 'dark'} />

      <NavigationContainer>
        {authenticated ? <AuthStackNavigation /> : <PublicStackNavigation />}
      </NavigationContainer>
    </>
  );
}
