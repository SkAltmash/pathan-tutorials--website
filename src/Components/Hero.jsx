import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      {/* Logo */}
      <motion.img
        src="/Imges/logo.png"
        alt="Pathan Tutorials Logo"
        className="w-28 md:w-36 mb-6 drop-shadow-lg"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-sm tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Pathan Tutorials of Mathematics
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-white opacity-90"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        8th • 9th • 10th • 11th • 12th • MH-CET
      </motion.p>

      {/* Button */}
      <motion.a
        href="#contact"
        className="mt-8 inline-block px-6 py-3 bg-yellow-400 text-black font-semibold rounded-full shadow-md hover:bg-yellow-300 transition"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        Contact Now
      </motion.a>
    </section>
  );
}

export default Hero;
