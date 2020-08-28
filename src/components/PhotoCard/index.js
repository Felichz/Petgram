import React, { useEffect, useRef, useState } from 'react';

import { Article, ImgWrapper, Button } from './styles';
import { MdFavoriteBorder } from 'react-icons/md';

const DEFAULT_IMAGE =
    'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, src = DEFAULT_IMAGE, likes = 0 }) => {
    const cardRef = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const { isIntersecting } = entries[0];

            if (isIntersecting) {
                setShow(true);
                observer.disconnect();
            }
        });
        observer.observe(cardRef.current);
    }, [cardRef]);

    return (
        <Article ref={cardRef}>
            {show && (
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <img src={src}></img>
                        </ImgWrapper>
                    </a>
                    <Button>
                        <MdFavoriteBorder size="32px" />
                        {likes} likes!
                    </Button>
                </>
            )}
        </Article>
    );
};

export default PhotoCard;
