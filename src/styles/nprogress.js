import { css } from 'styled-components';

export const NProgressBar = css`
    /* Make clicks pass-through */
    #nprogress {
        pointer-events: none;
    }
    #nprogress .bar {
        background: rgba(251, 96, 255, 1);
        background: linear-gradient(90deg, #e05e03, #fe02fa);
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 7px;
        box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
    }

    /* Remove these to get rid of the spinner */
    #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
        box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
        border-radius: 50%;
    }
    #nprogress .spinner-icon {
        width: 30px;
        height: 30px;
        box-sizing: border-box;
        border: solid 5px transparent;
        border-top-color: rgba(251, 96, 255, 1);
        border-left-color: rgba(251, 96, 255, 1);
        border-radius: 50%;
        -webkit-animation: nprogress-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
    }
    .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
    }
    .nprogress-custom-parent #nprogress .spinner,
    .nprogress-custom-parent #nprogress .bar {
        position: absolute;
    }
    @-webkit-keyframes nprogress-spinner {
        0% {
            -webkit-transform: rotate(0deg);
        }
        100% {
            -webkit-transform: rotate(360deg);
        }
    }
    @keyframes nprogress-spinner {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
