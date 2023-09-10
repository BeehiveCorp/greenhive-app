import { StatusTheme, Theme } from './styled';

export const STATUS_COLORS: StatusTheme = {
  error: '#FF3838',
  warning: '#FFB302',
  success: '#00F060',
  info: '#2DCCFF',
};

export const DARK_THEME: Theme = Object.freeze({
  name: 'dark',
  background: '#09120E',
  container: '#101916',
  border: '#16211D',
  title: '#DCDCDC',
  text: '#767A77',
  primary: '#3A7347',
  secondary: '#C4D2A0',
  ...STATUS_COLORS,
});

export const LIGHT_THEME: Theme = Object.freeze({
  name: 'light',
  background: '#F5F5F5',
  container: '#FFFFFF',
  border: '#E0E0E0',
  title: '#545454',
  text: '#898989',
  primary: '#3A7347',
  secondary: '#769F10',
  ...STATUS_COLORS,
});
