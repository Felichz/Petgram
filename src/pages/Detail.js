import React from 'react';
import { PetDetail } from '../dataContainers/PetDetail';
import { ContentLayout } from './ContentLayout';

const Detail = ({ petId }) => (
    <ContentLayout title="Photo detail">
        <PetDetail petId={petId} />
    </ContentLayout>
);
export default Detail;
