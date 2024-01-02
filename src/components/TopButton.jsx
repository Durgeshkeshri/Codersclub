import React, { useState, useEffect } from 'react';
import { PiArrowCircleUpFill } from 'react-icons/pi';
// import { FaArrowUp } from 'react-icons/fa';

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Set visibility based on scroll position
            setIsVisible(scrollY > 100);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Remove the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        // Smooth scroll to the top of the page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-7 right-5 bg-[dodgerblue] text-white p-3 rounded-full ${isVisible ? 'visible' : 'invisible'
                } transition-opacity duration-300 hover:bg-blue-700 focus:outline-none focus:ring-[gold] focus:border-[gold] focus:ring-2 focus:border-2`}
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <PiArrowCircleUpFill/>
        </button>
    );
};
export default TopButton;
