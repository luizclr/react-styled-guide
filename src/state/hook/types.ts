import { ThemeState } from "../theme-state";

type ThemeActionTypes = {
  setDarkTheme: () => void;
  setLightTheme: () => void;
};

export type UseThemeType = Omit<ThemeState, "dispatch"> & ThemeActionTypes;
