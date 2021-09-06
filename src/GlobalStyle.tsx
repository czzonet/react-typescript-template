import { createGlobalStyle } from "styled-components";
import { BLUE } from "./cssConfig";

export const GlobalStyle = createGlobalStyle`
  html,body{
    margin: 0;
    padding: 0;
  }

  /* body{
    background-color: ${BLUE};
  } */
`;
