import React, { PropsWithChildren, useMemo, useReducer } from "react";
import { ThemeProvider as StyledComponentsProvider } from "styled-components";

import { StyledGuideProps } from "./types";

import { ThemeTypes } from "../../types";
import { ThemeContext } from "../context";
import { ThemeReducer } from "../reducer";
import { initialThemeState, ThemeState } from "../theme-state";

export const StyledGuideProvider: React.FC<PropsWithChildren<{
  value: StyledGuideProps;
}>> = ({ children, value }) => {
  const getInitialThemeState = (): ThemeState => {
    return {
      ...initialThemeState,
      theme: value.theme || ThemeTypes.light,
    };
  };

  const [themeState, dispatch] = useReducer(ThemeReducer, getInitialThemeState());

  const stateValue = useMemo(
    () => ({
      ...themeState,
      dispatch,
    }),
    [themeState]
  );

  return (
    <ThemeContext.Provider value={stateValue}>
      <StyledComponentsProvider theme={{ ...value, theme: stateValue.theme }}>
        {children}
      </StyledComponentsProvider>
    </ThemeContext.Provider>
  );
};
