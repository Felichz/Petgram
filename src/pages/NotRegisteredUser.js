import React from 'react';
import Context from '../Context';

import { UserForm } from '../components/UserForm';
import { Hr } from './styles';

export const NotRegisteredUser = () => (
    <Context.Consumer>
        {({ activateAuth }) => (
            <>
                <UserForm onSubmit={activateAuth} type="login" />
                <Hr />
                <UserForm type="register" />
            </>
        )}
    </Context.Consumer>
);
