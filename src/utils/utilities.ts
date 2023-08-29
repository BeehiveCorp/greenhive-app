import Toast from 'react-native-toast-message';

import { TOAST_VARIANTS } from './constants';
import { ShowToastProps } from './types';

export const showToast = ({
  variant = TOAST_VARIANTS.Info,
  message,
  description,
  duration = 1000 * 3,
}: ShowToastProps) =>
  Toast.show({
    type: variant,
    props: {
      message,
      description,
    },
    visibilityTime: duration,
  });

export function getRelativeUri(path: string): string {
  return `http://localhost:3333${path}`;
}
