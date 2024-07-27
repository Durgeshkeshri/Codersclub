import React, { useState, useEffect } from 'react';
import { PiArrowCircleUpFill } from 'react-icons/pi';
// import { FaArrowUp } from 'react-icons/fa';

const TopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setIsVisible(scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-7 lg:right-5 right-2 bg-[dodgerblue] text-white p-3 rounded-full ${isVisible ? 'visible' : 'invisible'
                } transition-opacity duration-300 hover:bg-blue-700 focus:outline-none focus:ring-[cyan] focus:border-[cyan] focus:ring-2 focus:border-2`}
            style={{ opacity: isVisible ? 1 : 0 }}
        >
            <PiArrowCircleUpFill/>
        </button>
    );
};
export default TopButton;
