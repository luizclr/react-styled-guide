import { useContext } from "react";

import { UseThemeType } from "../../state/hook/types";
import { ThemeContext } from "../../state/context/theme-context";
import { setDarkTheme, setLightTheme } from "../actions";

export const useTheme = (): UseThemeType => {
  const { theme, dispatch } = useContext(ThemeContext);

  return {
    theme,
    setDarkTheme: setDarkTheme(dispatch),
    setLightTheme: setLightTheme(dispatch),
  };
};
