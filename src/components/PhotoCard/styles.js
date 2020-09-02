import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Article = styled.article`
    margin: 0 10px;
    min-height: 200px;
    border-radius: 10px;
    box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.2),
        inset 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
`;

export const ImgWrapper = styled.div`
    border-radius: 10px 10px 0 0;
    display: block;
    position: relative;
    height: 0;
    overflow: hidden;
    padding: 56.25% 0 0 0;
    width: 100%;
`;

export const Img = styled.img`
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
    opacity: 0;

    ${({ loaded }) => loaded && 'opacity: 1;'}
    ${({ loaded }) => loaded && fadeIn({ time: '250ms' })}
`;
