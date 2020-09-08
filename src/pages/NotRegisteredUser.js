import React, { useState, useContext } from 'react';
import { Context } from '../Context';

import { UserForm } from '../components/UserForm';
import { Hr } from './styles';

import { useRegisterMutation } from '../dataHooks/useRegisterMutation';
import { useLoginMutation } from '../dataHooks/useLoginMutation';

const NotRegisteredUser = () => {
    const { activateAuth } = useContext(Context);

    const [registerMutation, { loading: loadingA }] = useRegisterMutation();
    const [loginMutation, { loading: loadingB }] = useLoginMutation();
    const loading = loadingA || loadingB;

    const [loginError, setLoginError] = useState();
    const [registerError, setRegisterError] = useState();

    const register = ({ email, password }) => {
        registerMutation({
            variables: {
                input: { email, password },
            },
        })
            .then(({ data }) => activateAuth(data.signup))
            // eslint-disable-next-line no-unused-vars
            .catch((err) => {
                if (err.message === 'User already exists') {
                    setRegisterError(err.message);
                } else {
                    setRegisterError('An error has ocurred');
                }
            });
    };

    const login = ({ email, password }) => {
        loginMutation({
            variables: {
                input: { email, password },
            },
        })
            .then(({ data }) => {
                if (data.login) {
                    activateAuth(data.login);
                } else {
                    setLoginError('Invalid login');
                }
            })
            // eslint-disable-next-line no-unused-vars
            .catch((err) => {
                setLoginError('Invalid login');
            });
    };

    return (
        <>
            <UserForm
                type="register"
                onSubmit={(formData) => register(formData)}
                disabled={loading}
                errorMsg={registerError}
            />
            <Hr />
            <UserForm
                type="login"
                onSubmit={(formData) => login(formData)}
                disabled={loading}
                errorMsg={loginError}
            />
        </>
    );
};

export default NotRegisteredUser;
