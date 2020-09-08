import React, { useContext, Suspense } from 'react';
import { Router, Redirect } from '@reach/router';
import { GlobalStyles } from './styles/globalStyles';

import { Scrollbars } from 'react-custom-scrollbars';
import { Logo } from './components/Logo';
import { CategoryList } from './components/CategoryList/';
const NotFound = React.lazy(() => import('./pages/NotFound'));
const Home = React.lazy(() => import('./pages/Home'));
const Detail = React.lazy(() => import('./pages/Detail'));
const Favs = React.lazy(() => import('./pages/Favs'));
const User = React.lazy(() => import('./pages/User'));
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'));
import { NavBar } from './components/NavBar/';

import { Context } from './Context';

export const App = () => {
    const { isAuth } = useContext(Context);

    return (
        <Suspense fallback={<div />}>
            <GlobalStyles />

            <Scrollbars
                style={{ height: 'calc(100vh - 50px)', width: '100%' }}
                autoHide={true}
            >
                <Logo />
                <CategoryList />
                <Router>
                    <NotFound default />

                    <Home path="/" />
                    <Home path="/pet/:categoryId" />
                    <Detail path="/detail/:petId" />

                    {isAuth ? (
                        <>
                            <Redirect from="/login" to="/" noThrow />
                            <Favs path="/favs" />
                            <User path="/user" />
                        </>
                    ) : (
                        <>
                            <NotRegisteredUser path="/login" />
                            <Redirect from="/favs" to="/login" noThrow />
                            <Redirect from="/user" to="/login" noThrow />
                        </>
                    )}
                </Router>
            </Scrollbars>

            <NavBar />
        </Suspense>
    );
};
