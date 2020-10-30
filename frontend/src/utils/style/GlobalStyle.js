import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle `
    * {
        box-sizing: border-box;
        margin: 0;
        padding:0;
    }

    html,
    body {
        font-family: 'PT Sans', sans-serif;
        font-size: 16px;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #eee;
    }
`;