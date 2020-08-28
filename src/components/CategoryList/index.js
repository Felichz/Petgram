import React from 'react';

import { Category } from '../Category';

import { List } from './styles';
import { categories } from '../../../api/db.json';

export const CategoryList = () => {
    return (
        <List>
            {categories.map((category, i) => (
                <li key={i}>
                    <Category {...category} />
                </li>
            ))}
        </List>
    );
};
