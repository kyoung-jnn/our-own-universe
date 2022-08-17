import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  canvas {
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
