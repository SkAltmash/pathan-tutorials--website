import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaRegStar, FaChalkboardTeacher, FaRegClock, FaRupeeSign } from 'react-icons/fa';

const reasons = [
  {
    icon: <FaChalkboardTeacher />,
    title: 'Experienced Faculty',
    desc: 'Mr. Manjur Pathan (M.Sc. Maths) brings 5+ years of teaching experience.',
  },
  {
    icon: <FaRegStar />,
    title: 'Result-Oriented Coaching',
    desc: 'Our students consistently score 90+ marks in Maths.',
  },
  {
    icon: <FaUserGraduate />,
    title: 'Personal Attention',
    desc: 'Small batches ensure every student gets focus and support.',
  },
  {
    icon: <FaRegClock />,
    title: 'Regular Tests & Practice',
    desc: 'Weekly assessments & practice papers to boost confidence.',
  },
  {
    icon: <FaRupeeSign />,
    title: 'Affordable Fees',
    desc: 'Get high-quality education at the lowest fees in Hinganghat.',
  },
];

function WhyJoin() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-br from-yellow-50 to-white text-black overflow-hidden">
      {/* SVG Background Shapes */}
      <svg className="absolute top-[-80px] left-[-60px] w-[200px] opacity-30 rotate-12 z-0" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="50" fill="#fbbf24" />
      </svg>
      <svg className="absolute bottom-[-100px] right-[-80px] w-[250px] opacity-30 rotate-45 z-0" viewBox="0 0 100 100">
        <rect width="100" height="100" fill="#fbbf24" rx="20" />
      </svg>
      <svg className="absolute top-[50%] left-[-60px] w-[150px] opacity-20 z-0" viewBox="0 0 100 100">
        <polygon points="50,0 100,100 0,100" fill="#f59e0b" />
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:block after:w-24 after:h-1 after:rounded-full after:bg-yellow-400 after:mx-auto after:mt-2">
          Why Join Pathan Tutorials?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/60 backdrop-blur-sm border border-yellow-100 rounded-2xl shadow-md hover:shadow-yellow-300 transition duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-yellow-500 text-4xl mb-4 transition-transform group-hover:scale-110">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;
