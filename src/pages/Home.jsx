// src/pages/Home.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Courses from '../Components/Courses';
import WhyJoin from '../Components/WhyJoin';
import Results from '../Components/Results';
import Contact from '../Components/Contact';
const Home = () => {
  return (
    <div>
       <Hero />
      <About />
      <Courses />
      <WhyJoin />
      <Results />
      <Contact />  
    </div>
  );
};

export default Home;