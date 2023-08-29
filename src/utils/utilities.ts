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

export function getInitials(name: string): string {
  const trimmedName: string = name.trim();
  const namesArray: string[] = trimmedName.split(' ');

  if (namesArray.length === 1) {
    return trimmedName.slice(0, 2).toUpperCase();
  }

  return namesArray
    .map((n) => n.charAt(0).toUpperCase())
    .join('')
    .slice(0, 2);
}
