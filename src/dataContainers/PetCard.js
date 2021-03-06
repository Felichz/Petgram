import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { useLikeMutation } from '../dataHooks/useLikeMutation';

export const PetCard = (props) => {
    const { id } = props;

    const [likePhoto, { data }] = useLikeMutation();

    function toggleLike() {
        likePhoto({ variables: { input: { id } } });
    }

    return (
        <PhotoCard
            {...props}
            liked={data?.liked || props.liked}
            toggleLike={toggleLike}
        />
    );
};
