import React from 'react';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher } from 'react-icons/fa';

function Courses() {
  const courses = ['8th', '9th', '10th', '11th', '12th', 'MH-CET'];

  return (
    <div className="relative overflow-hidden" id="courses">
      {/* Soft Animated Background Blob */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-yellow-200 rounded-full filter blur-3xl opacity-30 animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-yellow-100 rounded-full filter blur-2xl opacity-30 animate-pulse z-0" />

      <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-yellow-50 to-yellow-100 text-black">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:block after:w-20 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-2">
            Courses Offered
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {courses.map((course, index) => (
              <motion.div
                key={course}
                className="group p-6 bg-white rounded-2xl shadow-lg text-xl font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <FaChalkboardTeacher className="text-yellow-500 text-4xl mb-2 group-hover:scale-110 transition-transform duration-300" />
                {course} Class
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Courses;
