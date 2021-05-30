import { useState, useEffect } from 'react';


function useOnScroll(ref) {
    const [isVisible, setIsVisible] = useState(false);
    const [scrolledPast, setScrolledPast] = useState(false);

    useEffect(() => {
        const current = ref.current;
        const options = {
            threshold: 0,
            trackVisibility: true,
            delay: 100
        };
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                // setting note to visible per entry status
                if (entry.isVisible) setIsVisible(true);

                // once idnetified as visible and later on is no loner on screen
                // this setup is required due to the scrolled container notes are based in
                if (isVisible && entry.intersectionRatio === 0) {
                    setScrolledPast(true);
                }
            },
            options
        );

        if (current) {
            observer.observe(current);

            // cleanup function
            return () => {
                observer.unobserve(current);
            };
        }

    }, [ref, isVisible, scrolledPast]);

    return scrolledPast;
}

export default useOnScroll;
