import { getSize } from "react-styled-guide";
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

  .mt-1 {
    margin-top: ${getSize(({ xxxs }) => xxxs)}
  }

  .mt-2 {
    margin-top: ${getSize(({ xxs }) => xxs)}
  }

  .mt-3 {
    margin-top: ${getSize(({ xs }) => xs)}
  }
`;
