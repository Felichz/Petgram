import React from 'react';
import { Router } from '@reach/router';
import { GlobalStyles } from './styles/globalStyles';

import { Logo } from './components/Logo';
import { CategoryList } from './components/CategoryList/';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';
import { Favs } from './pages/Favs';
import { User } from './pages/User';
import { NotRegisteredUser } from './pages/NotRegisteredUser';
import { NavBar } from './components/NavBar/';

import Context from './Context';

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Logo />
            <CategoryList />
            <Router>
                <Home path="/" />
                <Home path="/pet/:categoryId" />
                <Detail path="/detail/:petId" />
            </Router>
            <Context.Consumer>
                {({ isAuth }) =>
                    isAuth ? (
                        <Router>
                            <Favs path="/favs" />
                            <User path="/user" />
                        </Router>
                    ) : (
                        <Router>
                            <NotRegisteredUser path="/favs" />
                            <NotRegisteredUser path="/user" />
                        </Router>
                    )
                }
            </Context.Consumer>

            <NavBar />
        </>
    );
};
