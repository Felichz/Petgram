import { useState, useEffect, useRef } from 'react';

export const useIsVisible = () => {
    const [visible, setVisible] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        Promise.resolve(
            window.IntersectionObserver || import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0];

                setVisible(isIntersecting);
            });
            observer.observe(ref.current);
        });
    }, [ref]);

    return [visible, ref];
};
