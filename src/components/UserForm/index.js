import React from 'react';

import { useInputValue } from '../../hooks/useInputValue';

import { SubmitButton } from '../SubmitButton';
import { Form, Title, Input, ErrorMsg } from './styles';

export const UserForm = ({ onSubmit, disabled, errorMsg, type }) => {
    const email = useInputValue('');
    const password = useInputValue('');

    const isLogin = type === 'login';

    function handleSubmit(e) {
        e.preventDefault();

        onSubmit({
            email: email.value,
            password: password.value,
        });
    }

    return (
        <Form disabled={disabled} onSubmit={handleSubmit}>
            <Title>{isLogin ? 'Login' : 'Register'}</Title>
            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
            <Input disabled={disabled} placeholder="Email" {...email} />
            <Input
                disabled={disabled}
                placeholder="Password"
                type="password"
                {...password}
            />
            <SubmitButton disabled={disabled}>Send</SubmitButton>
        </Form>
    );
};
