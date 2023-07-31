import { useCallback, useState } from 'react';
import RNToast, { ToastShowParams } from 'react-native-toast-message';

import * as SplashScreen from 'expo-splash-screen';

import { Login } from '@/screens';
import { Box, Toast } from '@/components';

import { ThemeProvider } from '@/contexts/ThemeContext';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const toastConfig = {
    success: ({ props }: ToastShowParams) => <Toast variant="success" {...props} />,
    error: ({ props }: ToastShowParams) => <Toast variant="error" {...props} />,
    warning: ({ props }: ToastShowParams) => <Toast variant="warning" {...props} />,
    info: ({ props }: ToastShowParams) => <Toast variant="info" {...props} />,
  };

  return (
    <ThemeProvider>
      <Login />
      <RNToast config={toastConfig} topOffset={64} />
    </ThemeProvider>
  );
}
