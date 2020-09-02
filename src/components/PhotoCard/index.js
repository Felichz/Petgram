import React, { useState } from 'react';

import { Article, ImgWrapper, Img } from './styles';
import { FavButton } from '../FavButton';

import { useSeenInScreen } from '../../hooks';

import { Link } from '@reach/router';

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

export default PhotoCard;
