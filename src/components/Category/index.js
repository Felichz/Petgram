import React from 'react';
import { Anchor, ImgWrapper } from './styles';

export const Category = ({ cover, path, emoji = '?' }) => (
    <Anchor href={path}>
        <ImgWrapper>{cover && <img src={cover} />}</ImgWrapper>
        {emoji}
    </Anchor>
);
