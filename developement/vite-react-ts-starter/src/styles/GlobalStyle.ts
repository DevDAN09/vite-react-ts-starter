import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    html {
        font-size: 62.5%
        -webkit-text-size-adjust: none;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.6rem;
        color: #000;
        line-height: 1.5;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};

        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    #root {
        display: block;
        width: 100%;
        height: 100%;
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }

    ul, ol{
        list-style: none;
    }

    input, button, textarea {
        font-family: inherit;
        font-size: inherit;
    }
`;

export default GlobalStyle;