import { useState, useEffect } from 'react';


function useOnScroll(ref, rootMargin = '0px', threshold = 1.0) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {

        const observer = new window.IntersectionObserver(
            ([entry]) => {
                setIntersecting(entry.isIntersecting);
            },
            {
                rootMargin,
            },
            {
                threshold
            }
        );
        if (ref.current) {
            observer.observe(ref.current);

            // cleanup function
            return () => {
                observer.disconnect(ref);
            };
        }

    }, [ref, rootMargin, threshold]);

    return isIntersecting;
}


export default useOnScroll;
