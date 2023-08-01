import React, {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useColorScheme } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SplashScreen from 'expo-splash-screen';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

import { DARK_THEME, LIGHT_THEME } from '@/theme';
import { Theme } from '@/theme/styled';
import { Box } from '@/components';
import { SPLASH_DURATION_IN_MILLISECONDS } from '@/utils/constants';

interface ThemeContextData {
  toggle: () => void;
}

export const ThemeContext = createContext<ThemeContextData>({
  toggle: () => null,
});

enum ThemeSchemes {
  Dark = 'dark',
  Light = 'light',
}

const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appIsReady, setAppIsReady] = useState(true);
  const [theme, setTheme] = useState<Theme>(DARK_THEME);
  const systemTheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady && fontsLoaded) {
      setTimeout(async () => {
        await SplashScreen.hideAsync();
      }, SPLASH_DURATION_IN_MILLISECONDS);
    }
  }, [fontsLoaded]);

  const useDeviceTheme = () => {
    setTheme(systemTheme === ThemeSchemes.Dark ? DARK_THEME : LIGHT_THEME);
  };

  const useStoredTheme = async () => {
    const storedTheme = await AsyncStorage.getItem('@appTheme');

    if (!storedTheme) {
      useDeviceTheme();
      return;
    }

    setTheme(storedTheme === ThemeSchemes.Dark ? DARK_THEME : LIGHT_THEME);
  };

  const toggle = async () => {
    const newTheme = theme === DARK_THEME ? LIGHT_THEME : DARK_THEME;

    const newThemeScheme =
      theme === DARK_THEME ? ThemeSchemes.Light : ThemeSchemes.Dark;

    setTheme(newTheme);

    await AsyncStorage.setItem('@appTheme', newThemeScheme);
  };

  useEffect(() => {
    useStoredTheme();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ toggle }}>
      <StyledThemeProvider theme={theme}>
        <Box onLayout={onLayoutRootView} style={{ flex: 1 }}>
          {children}
        </Box>
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
