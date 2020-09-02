import styled from 'styled-components';

export const Form = styled.form`
    max-width: 350px;
    padding: 16px 0;
    margin: 0 auto;
`;

export const Title = styled.h2`
    margin-bottom: 25px;
    font-weight: 500;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    margin: 15px 0;
    padding: 10px 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    display: block;
    padding: 10px 30px;
    font-size: 14px;
    text-align: center;
    border-radius: 3px;
    background: white;
    color: #222;
    border: 1px solid #aaa;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0), inset 1px 1px 3px rgba(0, 0, 0, 0);
    cursor: pointer;

    transition: 200ms;

    &:hover {
        background: #fcfcfc;
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2),
            inset 1px 1px 3px rgba(0, 0, 0, 0.1);
    }
`;
