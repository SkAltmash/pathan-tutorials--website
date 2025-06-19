import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

const toppers = [
  {
    name: 'Prem Ghodmare',
    score: '94 / 100',
    school: 'Bharat School',
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    name: 'Gayatri Shende',
    score: '93 / 100',
    school: 'Holy Cross School',
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    name: 'Shraidhah Harel',
    score: '92 / 100',
    school: 'Bharat School',
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    name: 'Chaitanya Devgade',
    score: '89 / 100',
    school: 'Bharat School',
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    name: 'Atharva Devwar',
    score: '87 / 100',
    school: 'Bharat School',
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    name: 'Tanushree Wankhede',
    score: '83 / 100',
    school: 'Bharat School',
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
  {
    name: 'Vidhi Wathmode',
    score: '80 / 100',
    school: 'Mahesh Gyanpeeth',
    image: 'https://adaptcommunitynetwork.org/wp-content/uploads/2023/09/person-placeholder.jpg',
  },
];

function Results() {
  const [showAll, setShowAll] = useState(false);
  const visibleToppers = showAll ? toppers : toppers.slice(0, 3);

  return (
    <section id="results" className="py-20 px-6 bg-yellow-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 relative inline-block after:block after:w-24 after:h-1 after:bg-yellow-400 after:mx-auto after:mt-2">
          Our Toppers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {visibleToppers.map((student, index) => (
            <motion.div
              key={index}
              className="group p-6 bg-white rounded-2xl shadow-md hover:shadow-yellow-400 transition-transform duration-300 transform hover:-translate-y-1 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-28 h-28 mx-auto mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-full object-cover rounded-full border-4 border-yellow-400"
                />
                <FaMedal className="absolute -bottom-2 -right-2 text-yellow-500 text-3xl bg-white rounded-full p-1 shadow" />
              </div>

              <p className="text-2xl font-bold text-yellow-500">{student.score}</p>
              <p className="mt-2 text-lg font-medium">{student.name}</p>
              <p className="text-sm text-gray-600">{student.school}</p>
            </motion.div>
          ))}
        </div>

        {/* Toggle Button */}
        {toppers.length > 4 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Results;
