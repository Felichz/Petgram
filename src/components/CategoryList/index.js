import React, { useState, useEffect } from 'react';
import NProgress from 'nprogress';

import { Category } from '../Category';

import { List } from './styles';

function useCategoriesData() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            NProgress.start();

            const res = await fetch(
                'https://petgram-server-fb1bpd83d.vercel.app/categories'
            );

            const data = await res.json();

            NProgress.done();
            setLoading(false);
            setCategories(data);
        }
        fetchData();
    }, []);

    return { categories, loading };
}

export const CategoryList = () => {
    const { categories, loading } = useCategoriesData();

    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const currentShowFixed = window.scrollY > 200;
            if (showFixed !== currentShowFixed) {
                setShowFixed(currentShowFixed);
            }
        };

        document.addEventListener('scroll', onScroll);

        return () => {
            document.removeEventListener('scroll', onScroll);
        };
    });

    const categoriesArray = loading ? [1, 2, 3, 4, 5] : categories;

    const renderList = (fixed) => (
        <List fixed={fixed}>
            {categoriesArray.map((category, i) => (
                <li key={i}>
                    <Category {...category} />
                </li>
            ))}
        </List>
    );

    return (
        <>
            {renderList()}
            {showFixed && renderList(true)}
        </>
    );
};
