// src/components/Winners.js
import React from 'react';
import { initialCardData } from './TeamData';
import { motion } from 'framer-motion';
import './Body.css';

const Winners = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Adjusted scale to 0.8 for 20% reduction
    visible: { opacity: 1, scale: 1 },
  };

  // Use only the first 6 people from initialCardData
  const winnersData = initialCardData.slice(0, 6);

  return (
    <div className="py-14"> {/* Increased py-12 to py-14 for 20% increase */}
      <div className="container mx-auto">
        <h2 className="font-times tracking-wider text-4xl font-semibold text-center mb-7 text-cyan-400">Winners Showcase</h2> {/* Increased text-3xl to text-4xl for 20% increase */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 2xl:px-48"> {/* Increased gap-6 to gap-8 for 20% increase */}
          {winnersData.map((winner, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 rounded-md shadow-md overflow-hidden"> {/* Increased p-4 to p-5 for 20% increase */}
              <div className="relative w-full" style={{ paddingBottom: '72%' }}> {/* Increased paddingBottom to '72%' for 20% increase */}
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="absolute w-full h-full object-center rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{winner.name}</h3> {/* Increased text-lg to text-xl for 20% increase */}
              <p className="text-gray-500 mb-2">{winner.title}</p> {/* Increased mb-1 to mb-2 for 20% increase */}
              <div className="flex justify-center space-x-4"> {/* Increased space-x-3 to space-x-4 for 20% increase */}
                <a href={winner.instagram} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram text-blue-500 hover:text-blue-700"></i>
                </a>
                <a href={winner.twitter} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter text-blue-500 hover:text-blue-700"></i>
                </a>
                <a href={winner.linkedin} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin-in text-blue-500 hover:text-blue-700"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Winners;
