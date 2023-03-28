import { useContext } from "react";

import { UseThemeType } from "../../state/hook/types";
import { setDarkTheme, setLightTheme } from "../actions";
import { ThemeContext } from "../context";

export const useTheme = (): UseThemeType => {
  const { theme, dispatch } = useContext(ThemeContext);

  return {
    theme,
    setDarkTheme: setDarkTheme(dispatch),
    setLightTheme: setLightTheme(dispatch),
  };
};
