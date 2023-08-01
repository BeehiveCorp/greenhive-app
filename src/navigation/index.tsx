import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { AuthStackNavigation, PublicStackNavigation } from './components';
import { useTheme } from 'styled-components/native';

export default function Navigation() {
  const { background, name } = useTheme();

  const authenticated = true;

  return (
    <>
      <StatusBar style={name === 'dark' ? 'light' : 'dark'} />

      <NavigationContainer>
        {authenticated ? <AuthStackNavigation /> : <PublicStackNavigation />}
      </NavigationContainer>
    </>
  );
}
