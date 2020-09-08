import React from 'react';
import { PetCardList } from '../dataContainers/PetCardList';
import { HelmetConfig } from './HelmetConfig';
import { ContentLayout } from './ContentLayout';

const HomeComponent = ({ categoryId }) => (
    <ContentLayout title="Home" helmet={false}>
        <HelmetConfig
            title="For animal lovers!"
            description="Petgram is a place to explore amazing photos and share that what makes your pet special. And yes, there are a lot of kitten photos here too!"
        />

        <PetCardList categoryId={categoryId} />
    </ContentLayout>
);

const Home = React.memo(
    HomeComponent,
    (prevProps, props) => prevProps.categoryId === props.categoryId
);

export default Home;
