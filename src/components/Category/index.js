import React from 'react';
import { Link, ImgWrapper } from './styles';

export const Category = ({ cover, path, emoji = '?' }) => (
    <Link to={path}>
        <ImgWrapper>{cover && <img src={cover} />}</ImgWrapper>
        {emoji}
    </Link>
);
