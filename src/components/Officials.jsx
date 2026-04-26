import React from 'react';
import { motion } from 'framer-motion';

const Officials = () => {
  const topOfficial = {
    name: 'Engr. Musa Abdullahi',
    role: 'CHAIRMAN',
    image: '/person1.png'
  };

  const middleOfficials = [
    {
      name: 'Chief Emeka Okafor',
      role: 'VICE CHAIRMAN',
      image: '/person2.png'
    },
    {
      name: 'Mr. Tunde Adeyemi',
      role: 'FINANCIAL SECRETARY',
      image: '/person3.png'
    }
  ];

  const bottomOfficials = [
    {
      name: 'Mrs. Ngozi Eze',
      role: 'PUBLIC RELATIONS OFFICER',
      image: '/person4.png'
    },
    {
      name: 'Engr. Ibrahim Suleiman',
      role: 'TECHNICAL DIRECTOR',
      image: '/person2.png'
    },
    {
      name: 'Mrs. Aisha Bello',
      role: 'GENERAL SECRETARY',
      image: '/person4.png'
    },
    {
      name: 'Engr. Ibrahim Suleiman',
      role: 'TECHNICAL DIRECTOR',
      image: '/person3.png'
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0D3976] mb-4">Our Officials</h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg">
            The dedicated team driving AATF mission to empower artisansa and build Nigeria.
          </p>
        </motion.div>

        {/* Pyramid Structure */}
        <div className="flex flex-col gap-12 items-center">
          
          {/* Top Row */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="w-full max-w-sm"
          >
            <OfficialCard official={topOfficial} />
          </motion.div>

          {/* Middle Row */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl"
          >
            {middleOfficials.map((off, i) => (
              <motion.div key={i} variants={fadeUp}>
                <OfficialCard official={off} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Row */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            {bottomOfficials.map((off, i) => (
              <motion.div key={i} variants={fadeUp}>
                <OfficialCard official={off} />
              </motion.div>
            ))}
          </motion.div>

          {/* View All Button */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12"
          >
            <button className="bg-[#28557E] text-white px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-[#1a3a57] hover:-translate-y-1 transition-all shadow-md active:scale-95">
              View All
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OfficialCard = ({ official }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
    <div className="h-64 overflow-hidden bg-gray-50">
      <img 
        src={official.image} 
        alt={official.name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-5 sm:p-6">
      <p style={{ color: '#1B7A3D' }} className="font-bold text-[10px] sm:text-xs mb-2 tracking-wider uppercase">{official.role}</p>
      <h3 className="text-lg sm:text-xl font-bold text-black">{official.name}</h3>
    </div>
  </div>
);

export default Officials;
