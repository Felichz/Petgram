import styled from 'styled-components';
import { fadeIn } from '../../styles/animations';

export const Button = styled.button`
    z-index: 1;
    bottom: 10px;
    right: 8px;
    display: flex;
    align-items: center;
    padding: 8px 12px;
    border-radius: 7px;

    cursor: pointer;

    svg {
        margin-right: 4px;
        ${fadeIn({ time: '150ms' })}
    }
`;
