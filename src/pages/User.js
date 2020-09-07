import React from 'react';

import { Content } from './styles';
import { SubmitButton } from '../components/SubmitButton';
import { userSession } from '../Context';

export const User = () => (
    <Content>
        <h1>User</h1>

        <SubmitButton onClick={userSession.logout}>Logout</SubmitButton>
    </Content>
);
