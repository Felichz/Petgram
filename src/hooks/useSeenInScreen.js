import { useState, useEffect, useRef } from 'react';

export const useSeenInScreen = () => {
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        Promise.resolve(
            window.IntersectionObserver || import('intersection-observer')
        ).then(() => {
            const observer = new window.IntersectionObserver((entries) => {
                const { isIntersecting } = entries[0];

                if (isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            });
            observer.observe(ref.current);
        });
    }, [ref]);

    return [visible, ref];
};
