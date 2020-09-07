import { css } from 'styled-components';

export const Swal = css`
    .swal-overlay {
        z-index: 9999999999;
    }

    .swal-button {
        background: #e05e03c9;
        &:hover {
            background: #e05e03d4 !important;
        }
        &:active {
            background: #e05e03c9 !important;
        }
        &:focus {
            box-shadow: 0 0 0 1px #fff, 0 0 0 3px #ff863178;
        }
    }
`;
