import styled from 'styled-components';

export const Anchor = styled.a`
    display: flex;
    flex-direction: column;
    width: 75px;
    text-align: center;
    text-decoration: none;
    color: black;
`;

export const ImgWrapper = styled.div`
    height: 75px;
    border-radius: 50%;
    border: 1px solid #ddd;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2),
        inset 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;
