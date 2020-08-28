import styled from 'styled-components';
import { appearFromTop } from '../../styles/animations';
import { keyframes } from 'styled-components';

const fadeInKeyframes = keyframes`
    from {
        filter: blur(5px);
        opacity:0;
    }

    to {
        filter:blur(0);
        opacity:1;
    }
`;

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    margin-bottom: 15px;

    &.fixed {
        background: #fff;
        border-radius: 0px 0px 60px 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        top: -40px;
        left: 0;
        right: 0;
        margin: 0 auto;
        max-width: 400px;
        padding: 5px;
        padding-top: 40px;
        position: fixed;
        transform: scale(0.75);
        z-index: 1;

        ${appearFromTop({
            time: '300ms',
            from: '-25%',
            to: '-40px',
        })}
    }

    li {
        padding: 0 8px;
        list-style: none;
    }
`;
