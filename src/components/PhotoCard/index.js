import React, { useState } from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { useSeenInScreen } from '../../hooks';

import { Article, ImgWrapper, Img } from './styles';
import { FavButton } from '../FavButton';

export const PhotoCard = ({ id, src = '', likes = 0, liked, toggleLike }) => {
    const [imgLoaded, setImgLoaded] = useState(false),
        [show, cardRef] = useSeenInScreen();

    return (
        <Article ref={cardRef}>
            {show && (
                <Link to={`/detail/${id}`}>
                    <ImgWrapper>
                        <Img
                            src={src}
                            onLoad={() => {
                                setImgLoaded(true);
                            }}
                            loaded={imgLoaded}
                        ></Img>
                    </ImgWrapper>
                </Link>
            )}
            <FavButton likes={likes} liked={liked} onClick={toggleLike} />
        </Article>
    );
};

PhotoCard.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    likes: function (props, propName) {
        const propValue = props[propName];

        if (propValue === undefined) {
            return new Error(`The property '${propName}' is required`);
        }

        if (propValue < 0) {
            return new Error(
                `The property '${propName}' must be greater than or equal to 0`
            );
        }
    },
    liked: PropTypes.bool.isRequired,
    toggleLike: PropTypes.func,
};

export default PhotoCard;
