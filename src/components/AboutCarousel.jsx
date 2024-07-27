import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {initialCardData } from './TeamData';

const AboutCarousel = () => {

    const [currentSetIndex, setCurrentSetIndex] = useState(0);
    const isLargeScreen = window.innerWidth >= 1024;
    const cardsPerSet = 3;
    const totalSets = Math.ceil(initialCardData.length / cardsPerSet);

    const nextProfileSet = () => {
        setCurrentSetIndex((prevIndex) => (prevIndex === totalSets - 1 ? 0 : prevIndex + 1));
    };

    const startIndexOfCurrentSet = currentSetIndex * cardsPerSet;

    const renderCards = () => {
        return initialCardData
            .slice(startIndexOfCurrentSet, startIndexOfCurrentSet + cardsPerSet)
            .map((card, index) => (
                <div key={index} className="w-full md:w-1/3 px-4 mb-8"> 
                    <div className="">
                        <img
                            src={card.image}
                            alt={card.name}
                            className="w-96 h-64 rounded-md"
                        />
                    </div>
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{card.name}</h2>
                        <p className="text-gray-600 mb-2">{card.title}</p>
                        <div className="flex space-x-2">
                            <a href={card.instagram} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: '#E4405F' }} icon={faInstagram} className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors" />
                            </a>
                            <a href={card.twitter} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: '#1DA1F2' }} icon={faTwitter} className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors" />
                            </a>
                            <a href={card.linkedin} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon style={{ color: '#0077B5' }} icon={faLinkedin} className="text-2xl text-gray-600 hover:text-indigo-500 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>
            ));
    };

    useEffect(() => {
        const autoplayInterval = setInterval(() => {
            nextProfileSet();
        }, 3000);

        return () => clearInterval(autoplayInterval);
    }, [currentSetIndex]);

    if (!isLargeScreen) {
        return null; 
    }

    return (
        <div className="relative p-4 rounded-md shadow-lg overflow-hidden">
            <hr className="border-inherit border-slate-800" />
            <h3 className="text-[#05D9FF] custom-text-shadow font-times transition duration-300 mt-8 font-serif hover:scale-110 text-center 2xl:text-6xl xl:text-5xl md:text-4xl max-md:text-[2.5rem] mb-8">About Us</h3>
            <div className="max-w-screen-lg mx-auto">
                <div className="relative overflow-hidden rounded-md">
                    <div className="flex">
                        {renderCards()}
                    </div>
                </div>

                {/* <div className="hidden md:flex justify-center mt-4 space-x-2">
                    {[...Array(totalSets).keys()].map((index) => (
                        <div
                            key={index}
                            className={`w-1 h-1 md:w-2 md:h-2 lg:w-3 lg:h-3 rounded-full ${index === currentSetIndex ? 'bg-indigo-500' : 'bg-gray-300'
                                } cursor-pointer`}
                            onClick={() => setCurrentSetIndex(index)}
                        ></div>
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default AboutCarousel;