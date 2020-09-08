import React from 'react';

import { FavList } from '../dataContainers/FavList';
import { ContentLayout } from './ContentLayout';

const Favs = () => (
    <ContentLayout
        title="Favorites"
        subtitle="Your personal favorite list."
        showSubtitle={false}
    >
        <FavList />
    </ContentLayout>
);

export default Favs;
