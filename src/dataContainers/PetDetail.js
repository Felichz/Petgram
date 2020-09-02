import React from 'react';
import { useGetSinglePhoto } from '../dataHooks/useGetSinglePhoto';

import { PhotoCard } from '../components/PhotoCard';

export const PetDetail = ({ petId }) => {
    const { photo } = useGetSinglePhoto(petId);

    return <PhotoCard {...photo} />;
};
