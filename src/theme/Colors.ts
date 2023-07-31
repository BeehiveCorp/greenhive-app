import { StatusTheme, Theme } from './styled';

export const STATUS_COLORS: StatusTheme = {
  error: '#FF3838',
  warning: '#FFB302',
  success: '#00F060',
  info: '#2DCCFF',
};

export const DARK_THEME: Theme = Object.freeze({
  name: 'dark',
  background: '#080C0A',
  container: '#101312',
  border: '#1D1D1D',
  title: '#FFFFFF',
  text: '#767A77',
  primary: '#3A7347',
  secondary: '#C4D2A0',
  ...STATUS_COLORS,
});

export const LIGHT_THEME: Theme = Object.freeze({
  name: 'light',
  background: '#DEE2D4',
  container: '#D9DECE',
  border: '#B9BEAA',
  title: '#000000',
  text: '#5B5E55',
  primary: '#3A7347',
  secondary: '#C4D2A0',
  ...STATUS_COLORS,
});
