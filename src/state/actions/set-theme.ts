import { ThemeActionTypes } from "../reducer";
import { ThemeDispatch } from "../theme-state";

export const setLightTheme = (dispatch: ThemeDispatch) => () => {
  dispatch({
    type: ThemeActionTypes.setLightTheme,
  });
};

export const setDarkTheme = (dispatch: ThemeDispatch) => () => {
  dispatch({
    type: ThemeActionTypes.setDarkTheme,
  });
};
