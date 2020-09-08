import React from 'react';
import PropTypes from 'prop-types';

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

FavList.propTypes = {
    favs: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
        })
    ),
};
