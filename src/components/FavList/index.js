import React from 'react';

import { Link, Img } from './styles';

export const FavList = ({ favs = [] }) => (
    <div>
        {favs.map((fav) => (
            <Link to={`/detail/${fav.id}`} key={fav.id}>
                <Img src={fav.src} />
            </Link>
        ))}
    </div>
);
