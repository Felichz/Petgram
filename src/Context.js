import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { client } from './apollo/client';

export const Context = createContext();
export const userSession = {};

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return !!sessionStorage.getItem('token');
    });

    useEffect(() => {
        // Reset store on auth change to update state of likes
        client.resetStore();
    }, [isAuth]);

    const desactivateAuth = () => {
        sessionStorage.removeItem('token');
        setIsAuth(false);
    };
    userSession.logout = desactivateAuth;

    const value = {
        isAuth,
        activateAuth(token) {
            if (token) {
                sessionStorage.setItem('token', token);
                setIsAuth(true);
            }
        },
        desactivateAuth,
    };

    return <Context.Provider value={value}>{children}</Context.Provider>;
};

Provider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default {
    Provider,
    Consumer: Context.Consumer,
};
