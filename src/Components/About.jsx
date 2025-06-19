import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="relative bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-200  text-black overflow-hidden pt-0 pb-20">
      {/* Top SVG Wave */}
      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#facc15' }} // yellow-400
          ></path>
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="/Imges/sir.png"
            alt="Mr. Manjur Pathan"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">About Us</h2>
          <p className="text-lg md:text-xl leading-relaxed text-center md:text-left text-gray-700">
            Mr. Manjur Pathan (B.Sc, M.Sc. Maths) has over 5 years of experience delivering quality coaching in Hinganghat.
            <br /><br />
            <span className="font-semibold text-black">Pathan Tutorials</span> is known for its exceptional results, student-focused teaching, and strong academic values across classes 8th to 12th and MH-CET.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
