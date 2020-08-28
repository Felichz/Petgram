import React from 'react';
import { CategoryList } from './components/CategoryList/';
import { PhotoCardList } from './components/PhotoCardList/';
import { GlobalStyles } from './styles/globalStyles';
import { Logo } from './components/Logo';

export const App = () => {
    return (
        <>
            <GlobalStyles />
            <Logo />
            <CategoryList />
            <PhotoCardList />
        </>
    );
};
