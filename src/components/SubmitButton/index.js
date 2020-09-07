import styled from 'styled-components';

export const SubmitButton = styled.button`
    display: block;
    padding: 10px 30px;
    font-size: 14px;
    text-align: center;
    border-radius: 3px;
    background: white;
    color: #222;
    border: 1px solid #aaa;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0), inset 1px 1px 3px rgba(0, 0, 0, 0);
    text-decoration: none;
    cursor: pointer;

    transition: 200ms;

    &:hover {
        /* background: #fcfcfc; */
        box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2),
            inset 1px 1px 3px rgba(0, 0, 0, 0.1);
    }

    &[disabled] {
        opacity: 0.5;
        background: #c6c6c6;
    }
`;
