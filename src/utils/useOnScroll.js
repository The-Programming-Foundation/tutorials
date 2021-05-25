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

            console.log("isInt=", isIntersecting, "obs.ent=", observer.entry, "ref.curr=", ref.current);
            // cleanup function
            return () => {
                observer.disconnect(ref);
            };
        }

    }, [ref, rootMargin, threshold, isIntersecting]);

    return isIntersecting;
}


export default useOnScroll;
