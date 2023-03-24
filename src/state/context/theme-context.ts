import { createContext } from "react";

import { initialThemeState, ThemeState } from "../theme-state";

export const ThemeContext = createContext<ThemeState>(initialThemeState);
