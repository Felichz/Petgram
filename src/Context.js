import React, { createContext, useState, useEffect } from 'react';
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

export default {
    Provider,
    Consumer: Context.Consumer,
};
