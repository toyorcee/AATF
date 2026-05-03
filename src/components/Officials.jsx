import React from 'react';
import { motion } from 'framer-motion';

const Officials = () => {
  const images = [
    '/comrade-ojo.jpeg',
    '/Ajayi-t.jpeg',
    '/AGS.jpeg',
    '/exco1.jpeg',
    '/exco2.jpeg',
    '/exco3.jpeg',
    '/exco4.jpeg',
    '/exco5.jpeg',
    '/exco6.jpeg',
    '/exco7.jpeg',
    '/exco8.jpeg',
    '/exco9.jpeg',
    '/exco10.jpeg',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="exco" className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-16"
        >
          <p className="text-[#1B7A3D] font-bold tracking-widest uppercase mb-2 text-sm sm:text-base">Our Leadership</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D3976] mb-4 uppercase tracking-tight">Meet Our <span className="text-[#1B7A3D]">Executives</span></h2>
          <div className="h-1.5 w-24 bg-[#1B7A3D] mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            The dedicated team driving AATF mission to empower artisans and build Nigeria.
          </p>
        </motion.div>

        {/* Tight Grid Structure */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.05 } }
          }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
        >
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              variants={fadeUp}
              className="relative aspect-square overflow-hidden rounded-2xl bg-gray-50 shadow-md border border-gray-100 group"
            >
              <img 
                src={img} 
                alt={`AATF Official ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Officials;
