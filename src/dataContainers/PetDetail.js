import React from 'react';
import { useGetSinglePhoto } from '../dataHooks/useGetSinglePhoto';

import { PetCard } from './PetCard';

export const PetDetail = ({ petId }) => {
    const { photo } = useGetSinglePhoto(petId);

    if (!photo) return false;
    return <PetCard {...photo} />;
};
