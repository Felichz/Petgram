import React, { useState, useEffect } from 'react';

import { Category } from '../Category';

import { List } from './styles';

export const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [showFixed, setShowFixed] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                'https://petgram-server-fb1bpd83d.vercel.app/categories'
            );
            const data = await res.json();
            setCategories(data);
        }
        fetchData();
    }, []);

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

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {categories.map((category, i) => (
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
