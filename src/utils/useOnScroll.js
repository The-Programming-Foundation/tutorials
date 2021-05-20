import React, { useState, useEffect, useRef } from 'react';


function useOnScroll(ref, rootMargin = '0px') {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            }
        );
        if (ref.current) {
            observer.observe(ref.current);
        }
        // cleanup function
        return () => {
            observer.unobserve(ref.current);
        };
    }, []);

    return isIntersecting;
}

export default useOnScroll;
