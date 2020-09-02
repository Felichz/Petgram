import React, { useState, useEffect } from 'react';
import { useIsVisible } from '../../hooks/useIsVisible';
import NProgress from 'nprogress';
import { Scrollbars } from 'react-custom-scrollbars';

import { Category } from '../Category';
import { List, FixedCategories } from './styles';

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

    const [isVisible, elementRef] = useIsVisible();

    if (elementRef.current) {
        console.log(elementRef.current);
    }

    // useEffect(() => {
    //     const onScroll = () => {
    //         const currentShowFixed = window.scrollY > 200;
    //         if (showFixed !== currentShowFixed) {
    //             setShowFixed(currentShowFixed);
    //         }
    //     };

    //     document.addEventListener('scroll', onScroll);

    //     return () => {
    //         document.removeEventListener('scroll', onScroll);
    //     };
    // });

    const categoriesArray = loading ? [1, 2, 3, 4, 5] : categories;

    const renderList = () => (
        <List>
            {categoriesArray.map((category, i) => (
                <li key={i}>
                    <Category {...category} path={`/pet/${category.id}`} />
                </li>
            ))}
        </List>
    );

    return (
        <>
            <div ref={elementRef}>
                <Scrollbars autoHeight={true}>{renderList()}</Scrollbars>
            </div>

            <FixedCategories show={!isVisible}>
                <Scrollbars autoHeight={true}>{renderList()}</Scrollbars>
            </FixedCategories>
        </>
    );
};
