import React from 'react';

import { useInputValue } from '../../hooks/useInputValue';

import { Form, Title, Input, Button } from './styles';

export const UserForm = ({ onSubmit, type }) => {
    const email = useInputValue('');
    const password = useInputValue('');

    const isLogin = type === 'login';

    return (
        <Form onSubmit={onSubmit}>
            <Title>{isLogin ? 'Login' : 'Register'}</Title>
            <Input placeholder="Email" {...email} />
            <Input placeholder="Password" type="password" {...password} />
            <Button>Send</Button>
        </Form>
    );
};
