import React, { useState } from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { useStorageArray } from '../hooks';
import { useLikeMutation } from '../dataHooks/useLikeMutation';

export const PetCard = (props) => {
    const { id } = props;

    const [likeAnonymousPhoto] = useLikeMutation();
    const [storedLikes, storeLike, unstoreLike] = useStorageArray('likes');
    const [liked, setLiked] = useState(storedLikes.includes(id));

    function toggleLike() {
        if (liked) {
            unstoreLike(id);
            setLiked(false);
        } else {
            storeLike(id);
            likeAnonymousPhoto({ variables: { input: { id } } });
            setLiked(true);
        }
    }

    return <PhotoCard {...props} liked={liked} toggleLike={toggleLike} />;
};
