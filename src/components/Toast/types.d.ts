import { Theme } from '@/theme/styled';

export type ToastProps = {
  variant?: 'info' | 'success' | 'error' | 'warning';
  message?: string;
  description?: string;
};

export type BlurWrapperProps = {
  accent?: string;
  hasDescription?: boolean;
};

export type TitleProps = {
  theme: Theme;
} & BlurWrapperProps;
