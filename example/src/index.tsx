import "react-app-polyfill/ie11";
import React from "react";
import { createRoot } from "react-dom/client";

import { App } from "./app";
import initialStyleGuide from "./style-guide";

import { StyledGuideProvider } from "../../src/state";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <StyledGuideProvider value={initialStyleGuide}>
    <App />
  </StyledGuideProvider>
);
