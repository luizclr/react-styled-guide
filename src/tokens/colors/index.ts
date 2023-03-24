type ColorTokens = {
  darkest: string; // 80% to dark
  darker: string; // 60% to dark
  dark: string; // 40% to dark
  tinyDark: string; // 20% to dark
  medium: string; // default color
  tinyLight: string; // 20% to light
  light: string; // 40% to light
  lighter: string; // 60% to light
  lightest: string; // 80% to light
};

export type Colors = {
  primary: ColorTokens;
  secondary: ColorTokens;
  neutral: ColorTokens;
  success: ColorTokens;
  warning: ColorTokens;
  error: ColorTokens;
};
