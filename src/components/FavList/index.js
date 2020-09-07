import React from 'react';

import { Grid, Link, Img } from './styles';

export const FavList = ({ favs = [] }) => (
    <Grid>
        {favs.map((fav) => (
            <Link to={`/detail/${fav.id}`} key={fav.id}>
                <Img src={fav.src} />
            </Link>
        ))}
    </Grid>
);
