import React from 'react';
import { motion } from 'framer-motion';

const BoardMembers = () => {
  const members = [
    {
      id: 1,
      name: 'COMRADE ALI MSHELIA PAUL',
      role: 'BOT CHAIRMAN AATF',
      image: '/bm-1.jpeg'
    },
    {
      id: 2,
      name: 'COMRADE BAMIDELE OJO',
      role: 'CO ORDINATOR AATF, ABUJA',
      image: '/bm-2.jpeg'
    },
    {
      id: 3,
      name: 'COMRADE IBRAHIM AWEDA BOLARINWA',
      role: 'BOT MEMBER/ FINANCIAL SECRETARY',
      image: '/bm-3.jpeg'
    },
    {
      id: 4,
      name: 'COMRADE STEPHEN WISDOM OGAVUDA',
      role: 'BOT MEMBER/TREASURER',
      image: '/bm-4.jpeg'
    },
    {
      id: 5,
      name: 'COMRADE BABATUNDE YUSUF',
      role: 'GIFT MEMBER/BOT',
      image: '/bm-5.jpeg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="bg-[#F8FAFC] py-24 px-4 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.p 
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            className="text-[#1B7A3D] font-black uppercase text-xs sm:text-sm mb-4"
          >
            ESTEEMED LEADERSHIP
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-[#0D3976] tracking-tighter"
          >
            Board of <span className="text-[#1B7A3D]">Trustees</span>
          </motion.h2>
          <div className="h-2 w-32 bg-[#1B7A3D] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Artistic Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-start"
        >
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className={`relative group ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
            >
              {/* Name Overlay (Top) */}
              <div className="absolute -top-6 -left-2 z-20 pointer-events-none">
                <motion.h3 
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + (index * 0.1) }}
                  className="text-xl sm:text-2xl font-black text-[#0D3976] leading-none bg-white/90 backdrop-blur-md px-4 py-3 rounded-lg shadow-2xl border-l-4 border-[#1B7A3D] max-w-[250px] sm:max-w-xs"
                >
                  {member.name}
                </motion.h3>
              </div>

              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gray-200 shadow-2xl transition-all duration-700 group-hover:rounded-[1rem] border-2 border-white">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x800/0D3976/FFFFFF?text=AATF+BOT';
                  }}
                />
                
                {/* Floating Role Badge */}
                <div className="absolute bottom-8 left-0 right-0 px-6">
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="bg-[#0D3976] text-white p-6 rounded-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 border-b-4 border-[#1B7A3D]"
                  >
                    <p className="text-[#1B7A3D] font-black text-[10px] uppercase tracking-[0.3em] mb-2">OFFICIAL ROLE</p>
                    <p className="font-bold text-sm sm:text-base leading-tight uppercase">{member.role}</p>
                  </motion.div>
                </div>

                {/* Glassmorphism Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1B7A3D]/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>

              {/* Background Accent Element */}
              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#1B7A3D]/5 rounded-[2rem] transform group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer Accent */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-4 text-gray-400">
            <div className="w-12 h-px bg-gray-200"></div>
            <p className="text-xs uppercase tracking-[0.5em] font-medium">Wisdom • Integrity • Progress</p>
            <div className="w-12 h-px bg-gray-200"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BoardMembers;
