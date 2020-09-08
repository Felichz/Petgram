import React from 'react';

import styled from 'styled-components';
import { ContentLayout } from './ContentLayout';
import { SubmitButton } from '../components/SubmitButton';
import { userSession } from '../Context';

const LogoutButton = styled(SubmitButton)`
    margin: 0 auto;
`;

const User = () => (
    <ContentLayout
        title="User"
        subtitle={'Your user profile and account settings.'}
        showSubtitle={false}
    >
        <LogoutButton onClick={userSession.logout}>Logout</LogoutButton>
    </ContentLayout>
);

export default User;
