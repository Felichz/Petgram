import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Article = styled.article`
    padding: 0 10px;
`;

export const ImgWrapper = styled.div`
    border-radius: 10px;
    display: block;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
    box-shadow: 7px 8px 10px rgba(0, 0, 0, 0.3),
        inset 0px 0px 10px 2px rgba(0, 0, 0, 0.3);

    ${fadeIn({ time: '2s' })}

    img {
        height: 100%;
        object-fit: cover;
        position: absolute;
        top: 0;
        width: 100%;
        ${fadeIn()}
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding-top: 8px;

    svg {
        margin-right: 4px;
    }
`;
