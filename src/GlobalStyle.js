import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::after, ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: ${({theme}) => theme.color.gallery};
        margin: 0 auto;
        padding: 20px;
        max-width: 900px;
        word-break: break-word;
    }
`;