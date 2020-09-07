import React, { createContext, useState } from 'react';

export const Context = createContext();

export const userSession = {};

const Provider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(() => {
        return !!sessionStorage.getItem('token');
    });

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
