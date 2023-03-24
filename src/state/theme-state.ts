import { Dispatch } from "react";

import { ThemeActions } from "./reducer";

import { ThemeTypes } from "../types";

type ThemeState = {
  theme: ThemeTypes;
  dispatch: ThemeDispatch;
};

export const initialThemeState: ThemeState = {
  theme: ThemeTypes.light,
  dispatch: (() => undefined) as ThemeDispatch,
};

type ThemeDispatch = Dispatch<ThemeActions>;

export { ThemeState, ThemeDispatch };
