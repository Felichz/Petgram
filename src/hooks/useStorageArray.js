import { useState } from 'react';

export const useStorageArray = (key) => {
    const [storedArray, setStoredArray] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem(key)) || [];
        } catch {
            return [];
        }
    });

    const addValue = (value) => {
        try {
            const data = storedArray;
            data.push(value);
            localStorage.setItem(key, JSON.stringify(data));
            setStoredArray(data);
        } catch {
            return false;
        }
    };

    const removeValue = (value) => {
        try {
            const newArray = storedArray.filter((v) => v !== value);
            localStorage.setItem(key, JSON.stringify(newArray));
            setStoredArray(newArray);
        } catch {
            return false;
        }
    };

    return [storedArray, addValue, removeValue];
};
