import React from 'react';

import { PetCard } from '../../dataContainers/PetCard';
import { ListItem } from './styles';

export const PhotoCardList = ({ photos }) => (
    <ul>
        {photos.map((photo) => (
            <ListItem key={photo.id}>
                <PetCard {...photo} />
            </ListItem>
        ))}
    </ul>
);
