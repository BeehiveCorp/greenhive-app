import React, { ReactNode, createContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { ThemeProvider as StyledThemeProvider } from 'styled-components/native';

import { DarkTheme, LightTheme } from '@/theme';
import { Theme } from '@/theme/styled';

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
  const [theme, setTheme] = useState<Theme>(DarkTheme);
  const systemTheme = useColorScheme();

  const useDeviceTheme = () => {
    setTheme(systemTheme === ThemeSchemes.Dark ? DarkTheme : LightTheme);
  };

  const useStoredTheme = async () => {
    const storedTheme = await AsyncStorage.getItem('@appTheme');

    if (!storedTheme) {
      useDeviceTheme();
      return;
    }

    setTheme(storedTheme === ThemeSchemes.Dark ? DarkTheme : LightTheme);
  };

  const toggle = async () => {
    const newTheme = theme === DarkTheme ? LightTheme : DarkTheme;

    const newThemeScheme =
      theme === DarkTheme ? ThemeSchemes.Light : ThemeSchemes.Dark;

    setTheme(newTheme);

    await AsyncStorage.setItem('@appTheme', newThemeScheme);
  };

  useEffect(() => {
    useStoredTheme();
  }, []);

  return (
    <ThemeContext.Provider value={{ toggle }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider };
