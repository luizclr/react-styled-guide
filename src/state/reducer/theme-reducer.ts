import { ThemeActions, ThemeActionTypes } from "./types";

import { ThemeTypes } from "../../types";
import { ThemeState } from "../theme-state";

export const ThemeReducer = (state: ThemeState, action: ThemeActions): ThemeState => {
  switch (action.type) {
    case ThemeActionTypes.setLightTheme:
      return {
        ...state,
        theme: ThemeTypes.light,
      };
    case ThemeActionTypes.setDarkTheme:
      return {
        ...state,
        theme: ThemeTypes.dark,
      };
    default:
      return state;
  }
};
