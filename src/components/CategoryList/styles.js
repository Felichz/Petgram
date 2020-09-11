import styled, { css } from 'styled-components';
import { bounceTranslation } from '../../styles/animations';

export const FixedCategories = styled.div`
    overflow: hidden;
    background: #fff;
    border-radius: 0px 0px 60px 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    top: -25%;
    left: 0;
    right: 0;
    margin: 0 auto;
    max-width: 400px;
    padding-top: 40px;
    position: fixed;
    transform: scale(0.75);
    z-index: 1;

    opacity: 0;
    transition: opacity 300ms;

    ${(props) => {
        if (props.show)
            return [
                css`
                    top: -40px;
                    opacity: 1;
                `,
                bounceTranslation({
                    time: '300ms',
                    from: '-25%',
                    to: '-40px',
                }),
            ];
        else
            return bounceTranslation({
                time: '300ms',
                from: '-40px',
                to: '-25%',
            });
    }}
`;

export const List = styled.ul`
    display: flex;
    /* overflow: scroll; */
    width: 100%;
    margin-bottom: 15px;

    li {
        padding: 0 8px;
        list-style: none;
    }
`;
