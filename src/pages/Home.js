import React from 'react';
import { PetCardList } from '../dataContainers/PetCardList';

export const Home = ({ categoryId }) => <PetCardList categoryId={categoryId} />;
