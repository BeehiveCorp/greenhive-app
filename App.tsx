import RNToast, { ToastShowParams } from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

import * as SplashScreen from 'expo-splash-screen';

import { Toast } from '@/components';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { UserProvider } from '@/contexts/UserContext';

import Navigation from '@/navigation';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const toastConfig = {
    success: ({ props }: ToastShowParams) => <Toast variant="success" {...props} />,
    error: ({ props }: ToastShowParams) => <Toast variant="error" {...props} />,
    warning: ({ props }: ToastShowParams) => <Toast variant="warning" {...props} />,
    info: ({ props }: ToastShowParams) => <Toast variant="info" {...props} />,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <UserProvider>
        <ThemeProvider>
          <BottomSheetModalProvider>
            <Navigation />
            <RNToast config={toastConfig} topOffset={64} />
          </BottomSheetModalProvider>
        </ThemeProvider>
      </UserProvider>
    </GestureHandlerRootView>
  );
}
