import { ThemeType } from './Theme.types';

export const ThemeDefault: ThemeType = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    text: '#1B2126',
    primary: '#02D72F',
    secondary: '#fff110',
    success: '#BCD952',
    danger: '#FF2A18',
    gray: {
      50: '#F3F3F3',
      100: '#E7E7E7',
      200: '#CECECF',
      300: '#B6B6B7',
      400: '#858586',
      500: '#545556',
      600: '#323335',
      700: '#232426',
      800: '#1C1D1F',
      900: '#121315',
    },
  },
  fontSize: {
    xs: '1rem',
    sm: '1.2rem',
    md: '1.4rem',
    base: '1.6rem',
    base2: '1.8rem',
    base3: '2rem',
    intermediary: '2.2rem',
    lg: '3rem',
    xl: '3.6rem',
  },
  lineHeight: {
    base: 'normal',
    high: '140%',
  },
  fontFamily: {
    base: '"Montserrat", sans-serif;',
  },
  fontWeight: {
    base: 400,
    medium: 500,
    bold: 700,
  },
  breakpoint: {
    sm: '450px',
    md: '768px',
    lg: '1170px',
    xl: '1440px',
  },
  spacing: {
    xs: '0.6rem',
    xs2: '0.8rem',
    sm: '1.2rem',
    md: '1.6rem',
    base: '2rem',
    lg: '2.4rem',
    lg2: '3.2rem',
    xl: '4rem',
    xxl: '4.8rem',
  },
  radius: {
    xs: '4px',
    sm: '6px',
    md: '8px',
    lg: '100px;',
  },
};

export default ThemeDefault;
