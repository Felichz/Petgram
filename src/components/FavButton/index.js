import React from 'react';
import PropTypes from 'prop-types';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { Button } from './styles';

export const FavButton = ({ liked, likes, onClick }) => (
    <Button onClick={onClick}>
        {liked ? (
            <MdFavorite size="32px" color="#f03434" />
        ) : (
            <MdFavoriteBorder size="32px" />
        )}
        {likes} likes!
    </Button>
);

FavButton.propTypes = {
    liked: PropTypes.bool.isRequired,
    likes: PropTypes.number.isRequired,
    onClick: PropTypes.func,
};
