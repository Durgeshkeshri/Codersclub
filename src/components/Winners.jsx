// src/components/Winners.js
import React, { useEffect, useState } from 'react';
import { initialCardData } from './Data';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import './Body.css';

const Winners = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
  }, []);

  const winnersData = initialCardData.slice(0, 6);

  return (
    <div className="pb-14 pt-8 min-h-screen">
      <div className="container mx-auto">
        <h2 className="hover:scale-105 font-times tracking-wider text-4xl font-semibold text-center mb-7 text-[#05D9FF] custom-text-shadow font-times transition duration-300">
          CodeFusion Winners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 2xl:px-48">
          {winnersData.map((winner, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
              className="bg-white p-5 rounded-md shadow-md overflow-hidden">
              <div className="relative w-full" style={{ paddingBottom: '72%' }}>
                <img
                  src={winner.image}
                  alt={winner.name}
                  className="absolute w-full h-full object-center rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mt-2">{winner.name}</h3>
              <p className="text-gray-800 font-semibold">{winner.title}</p>
              <p className="text-gray-500 font-semibold">{winner.class}</p>
            </motion.div>
          ))}
          {showConfetti && <Confetti />}
        </div>
      </div>
    </div>
  );
};

export default Winners;
