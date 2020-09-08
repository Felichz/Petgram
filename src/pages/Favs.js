import React from 'react';

import { Helmet } from 'react-helmet';
import { FavList } from '../dataContainers/FavList';
import { ContentLayout } from './ContentLayout';

const Favs = () => (
    <ContentLayout title="Favorites" subtitle="Your personal favorite list.">
        <Helmet>
            <meta name="description" content="Your personal favorite list." />
        </Helmet>
        <FavList />
    </ContentLayout>
);

export default Favs;
