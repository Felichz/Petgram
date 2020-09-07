import React from 'react';
import { useGetPhotos } from '../dataHooks/useGetPhotos';

import { PhotoCardList } from '../components/PhotoCardList';

export const PetCardList = ({ categoryId }) => {
    const { photos } = useGetPhotos(categoryId);
    console.log(photos);

    return <PhotoCardList photos={photos} />;
};
