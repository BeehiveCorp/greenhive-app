import { StatusTheme, Theme } from './styled';

export enum FontSize {
  SuperSmall = 12,
  Small = 14,
  Medium = 16,
  Large = 20,
  SuperLarge = 24,
}

export enum FontFamily {
  Regular = 'Montserrat_400Regular',
  SemiBold = 'Montserrat_600SemiBold',
  Bold = 'Montserrat_700Bold',
}

const StatusColors: StatusTheme = {
  error: '#FF3838',
  warning: '#FFB302',
  success: '#00F060',
  info: '#2DCCFF',
};

export const DarkTheme: Theme = {
  background: '#080C0A',
  container: '#101312',
  border: '#1D1D1D',
  title: '#FFFFFF',
  text: '#616462',
  primary: '#3A7347',
  secondary: '#C4D2A0',
  ...StatusColors,
};

export const LightTheme: Theme = Object.freeze({
  background: '#DEE2D4',
  container: '#D9DECE',
  border: '#B9BEAA',
  title: '#000000',
  text: '#5B5E55',
  primary: '#3A7347',
  secondary: '#C4D2A0',
  ...StatusColors,
});
