import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { AuthStackNavigation, PublicStackNavigation } from './components';
import { useTheme } from 'styled-components/native';

export default function Navigation() {
  const { background, name } = useTheme();

  const authenticated = true;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: background }}>
      <StatusBar style={name === 'dark' ? 'light' : 'dark'} />

      <NavigationContainer>
        {authenticated ? <AuthStackNavigation /> : <PublicStackNavigation />}
      </NavigationContainer>
    </SafeAreaView>
  );
}
