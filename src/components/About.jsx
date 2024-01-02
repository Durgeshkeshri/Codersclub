import React, { useState, useEffect } from 'react';
import './Body.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { images } from './TeamData';

const About = () => {
  // Initial data for multiple cards
  const initialCardData = [
    {
      image: images[0],
      name: 'Durgesh Keshri',
      title: 'Founder',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[1],
      name: 'Rudra Mourya', title: 'Event Head',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[2],
      name: 'Chirag Patil', title: 'PR Head',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[3],
      name: 'Akshay Sharma', title: 'Media',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[4],
      name: 'Abhisekh Gupta', title: 'Technical Head',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[5],
      name: 'Vivek Gupta', title: 'Media Head',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[6],
      name: 'Vivek More', title: 'Event Organiser',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[7],
      name: 'Danish Shaikh', title: 'Co-Founder',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[8],
      name: 'Ashfaque Shaikh', title: 'Co-Founder',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    {
      image: images[9],
      name: 'Anand Gaud', title: 'Event Organiser',
      instagram: 'https://www.instagram.com/durgesh.keshri',
      twitter: 'https://twitter.com/DurgeshKeshri',
      linkedin: 'https://www.linkedin.com/in/durgesh-keshri',
    },
    // Add similar objects for other team members
    // ...
  ];

  // State to manage card data and index
  const [cardIndex, setCardIndex] = useState(0);

  // Function to update card data
  const updateCardData = () => {
    setCardIndex((prevIndex) => (prevIndex + 1) % initialCardData.length);
  };

  // Use useEffect to update card data every two seconds
  useEffect(() => {
    const intervalId = setInterval(updateCardData, 2000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array to run the effect only once on mount

  const currentCard = initialCardData[cardIndex];

  return (
<>
  <hr className="border-inherit border-slate-800" />
  <h3 className="text-white mt-8 font-serif text-center 2xl:text-7xl xl:text-6xl md:text-5xl max-md:text-[3rem]">About Us</h3>
  <div className="md:h-[750px] sm:min-h-screen max-sm:h-[450px] flex flex-col items-center">
    <div className="w-full max-md:w-[500px] md:w-[700px] max-sm:w-[300px] h-[250px] mt-5">
      <div className="flex flex-col items-center bg-white w-full p-4 rounded-xl">
        <img className="w-96 max-md:w-[480px] md:w-[620px] md:h-[500px] max-sm:h-60 sm:h-96 rounded-2xl" src={currentCard.image} alt="Card" />
        <div className="mt-4 max-sm:text-2xl sm:text-3xl md:text-4xl">
          <h2 className="font-serif text-center md:mb-2">{currentCard.name}</h2>
          <p className="font-serif text-center">{currentCard.title}</p>
          <div className="social-media-links flex justify-center gap-2 mt-2">
            <a href={currentCard.instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="w-6 h-6" icon={faInstagram} style={{ color: '#E4405F' }} />
            </a>
            <a href={currentCard.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="w-6 h-6" icon={faTwitter} style={{ color: '#1DA1F2' }} />
            </a>
            <a href={currentCard.linkedin} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon className="w-6 h-6" icon={faLinkedin} style={{ color: '#0077B5' }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default About;
