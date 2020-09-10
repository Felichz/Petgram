import React from 'react';
import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

const Icon = styled(GoMarkGithub)`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    padding: 3px;
    color: white;
    background: rgba(0, 0, 0, 0.2);
    transition: 200ms;

    &:hover,
    &:active {
        color: #161616;
        background: transparent;
        padding: 0;
    }
`;

export const SourceCodeLink = () => (
    <a href="https://github.com/Felichz/Petgram" target="blank">
        <Icon />
    </a>
);
