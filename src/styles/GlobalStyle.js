import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  body * {
    font-family: 'Oxygen', sans-serif;
  }

  a {
    color: whitesmoke;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default GlobalStyle;
