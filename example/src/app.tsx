import * as React from "react";

import { Welcome } from "./pages/welcome";
import { GlobalStyle } from "./app.styles";

export const App = () => (
  <>
    <GlobalStyle />
    <Welcome />
  </>
);
