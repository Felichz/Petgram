import React from 'react';
import { useGetPhotos } from '../dataHooks/useGetPhotos';

import { PhotoCardList } from '../components/PhotoCardList';

export const PetCardList = ({ categoryId }) => {
    const { photos } = useGetPhotos(categoryId);

    return <PhotoCardList photos={photos} />;
};
