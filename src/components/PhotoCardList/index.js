import React from 'react';
import { PhotoCard } from '../PhotoCard';

export const PhotoCardList = () => {
    return (
        <ul>
            {[1, 2, 3].map((id) => (
                <PhotoCard id={id} key={id} />
            ))}
        </ul>
    );
};
