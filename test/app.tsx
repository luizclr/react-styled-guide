import React from "react";

import { Container, Text, Title } from "./app.styles";

import { ThemeTypes, useTheme } from "../src";

export const App: React.FC = () => {
  const { theme, setDarkTheme, setLightTheme } = useTheme();

  const changeTheme = () => {
    if (theme === ThemeTypes.light) setDarkTheme();
    else setLightTheme();
  };

  return (
    <Container data-testid="container">
      <Title data-testid="title">React Styled Guide</Title>
      <Text data-testid="text">
        Current Theme: <span data-testid="theme">{theme}</span>
      </Text>
      <button onClick={() => changeTheme()}>CHANGE THEME</button>
    </Container>
  );
};
