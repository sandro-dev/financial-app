import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  :root {
    --background: #F0F2F5;
    
    --blue: #5429CC;
    --blue-light: #6933FF;
    --green: #33CC95;
    --red: #E52E4D;
    --white: #FFFFFF;
    
    --text-title: #363F5F;
    --text-body: #969CB2;
  }

  * {
    border: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--background);
  }

  button {
    cursor: pointer;
  }


`;