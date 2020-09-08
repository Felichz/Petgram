import styled from 'styled-components';

export const Hr = styled.div`
    width: 100%;
    height: 20px;
    border-bottom: 1px solid #eee;
    text-align: center;
    box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
    padding: 10px;

    h1 {
        font-weight: 500;
        color: #222;
        margin-bottom: 10px;
    }

    h2 {
        text-align: center;
        margin-top: -15px;
        font-weight: 400;
        font-size: 22px;
        margin-bottom: 10px;
        color: #222;
    }

    h1,
    p {
        text-align: center;
    }
`;
