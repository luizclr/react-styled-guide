import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu';
    box-sizing: border-box;
    transition: color 0.5s, background-color 0.5s;
  }

  html, body, #root {
    height: 100%;
  } 
`;
