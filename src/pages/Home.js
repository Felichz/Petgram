import React from 'react';
import { PetCardList } from '../dataContainers/PetCardList';
import { Helmet } from 'react-helmet';
import { ContentLayout } from './ContentLayout';

const HomeComponent = ({ categoryId }) => (
    <ContentLayout title="Home">
        <Helmet>
            <title>Petgram | For animal lovers!</title>
            <meta
                name="description"
                content="Petgram is a place to explore amazing photos and share that what makes your pet special. And yes, there are a lot of kitten photos here too!"
            ></meta>
        </Helmet>
        <PetCardList categoryId={categoryId} />
    </ContentLayout>
);

export const Home = React.memo(
    HomeComponent,
    (prevProps, props) => prevProps.categoryId === props.categoryId
);
