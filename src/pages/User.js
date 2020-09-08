import React from 'react';

import styled from 'styled-components';
import { ContentLayout } from './ContentLayout';
import { SubmitButton } from '../components/SubmitButton';
import { userSession } from '../Context';

const LogoutButton = styled(SubmitButton)`
    margin: 0 auto;
`;

export const User = () => (
    <ContentLayout title="User">
        <LogoutButton onClick={userSession.logout}>Logout</LogoutButton>
    </ContentLayout>
);
