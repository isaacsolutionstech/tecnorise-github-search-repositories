import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0px;
    padding: 0px;
    user-select: none;
    box-sizing: inherit;
    line-height: inherit;
  }

  html {
    font-size: 16px;
  }

  body, #root {
    color: #A7A1AE;
    font-weight: 300;
    min-height: 100vh;
    line-height: 1.42em;
    background: #1F2739;
    font-family: "Poppins", sans-serif;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
  }

  strong {
    color: #1f1f1f;
    font-weight: bolder;
  }
`;
