import styled from 'styled-components';
import { Link as LinkRouter } from '@reach/router';

export const Nav = styled.nav`
    position: fixed;
    z-index: 1000;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    bottom: 0;
    /*
        The left 0, right 0, and margin 0 auto; properties keep the
        element always centered horizontally
    */
    right: 0;
    left: 0;
    margin: 0 auto;
    height: 50px;
    max-width: 500px;
    width: 100%;
    background: #fcfcfc;
    border-top: 1px solid #e0e0e0;
`;

export const Link = styled(LinkRouter)`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #888;

    &[aria-current]:not(.preventActive) {
        color: black;

        &:after {
            content: '.';
            position: absolute;
            bottom: -6px;
            font-size: 45px;
        }
    }
`;
