import { createGlobalStyle } from 'styled-components';
import { NProgressBar } from './nprogress';
import { Swal } from './swal';

export const GlobalStyles = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button {
        margin: 0;
        padding: 0;
    }

    ul {
        list-style: none;
    }

    a {
        outline: none;
    }

    button {
        background: transparent;
        border: 0;
        outline: 0;
    }

    body {
        background: linear-gradient(90deg, #e05e0370, #fe02fa70);
        min-height: 100vh;
        margin: 0 auto;
        max-width: 500px;
        overflow: hidden;
        /* overscroll-behavior: none; */
        width: 100%;
    }

    #root {
        background: #fefefe;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
        /* overflow-x: hidden; */
        min-height: 100vh;
    }

    ${Swal}
    ${NProgressBar}
`;
