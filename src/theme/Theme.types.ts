type ColorsScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

type Colors = {
  white: string;
  black: string;
  text: string;
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  gray: ColorsScale;
};

type FontSize = {
  xs: string;
  sm: string;
  md: string;
  base: string;
  base2: string;
  base3: string;
  intermediary: string;
  lg: string;
  xl: string;
};

type Breakpoint = {
  sm: string;
  md: string;
  lg: string;
  xl: string;
};

export type Spacing = {
  xs: string;
  xs2: string;
  sm: string;
  md: string;
  base: string;
  lg: string;
  lg2: string;
  xl: string;
  xxl: string;
};

type FontFamily = {
  base: string;
};

type FontWeight = {
  base: number;
  bold: number;
  medium: number;
};

type LineHeight = {
  base: string;
  high: string;
};

type Radius = {
  sm: string;
  md: string;
  lg: string;
  xs: string;
};

export type ThemeType = {
  colors: Colors;
  fontSize: FontSize;
  fontFamily: FontFamily;
  breakpoint: Breakpoint;
  spacing: Spacing;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  radius: Radius;
};
