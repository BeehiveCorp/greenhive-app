import { TOAST_VARIANTS } from './constants';

export type ShowToastProps = {
  variant?: 'info' | 'success' | 'error' | 'warning';
  message?: string;
  description?: string;
  duration?: number;
};
