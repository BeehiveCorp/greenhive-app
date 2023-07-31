import 'styled-components/native';

export type StatusTheme = {
  error: string;
  warning: string;
  success: string;
  info: string;
};

export type Theme = {
  name: 'dark' | 'light';
  primary: string;
  secondary: string;
  container: string;
  background: string;
  title: string;
  text: string;
  border: string;
} & StatusTheme;

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
