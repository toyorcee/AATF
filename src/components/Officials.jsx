import React from 'react';
import { motion } from 'framer-motion';

const Officials = () => {
  const excos = [
    {
      name: 'COMRADE BAMIDELE OJO',
      role: 'CO-ORDINATOR AATF, ABUJA NIGERIA',
      image: '/bm-2.jpeg'
    },
    {
      name: 'COMRADE STEPHEN KINGSLEY ADILE G',
      role: 'SECRETARY AATF',
      image: '/exco6.jpeg'
    },
    {
      name: 'COMRADE STEPHEN WISDOM OGAVUDA',
      role: 'TREASURER',
      image: '/bm-4.jpeg'
    },
    {
      name: 'COMRADE UBRIHAM BOLARIN AWEDA',
      role: 'BOT MEMBER, FINANCIAL SECRETARY',
      image: '/bm-3.jpeg'
    },
    {
      name: 'ASSISTANT GENERAL SECRETARY',
      role: 'EXECUTIVE OFFICE',
      image: '/AGS.jpeg'
    },
    {
      name: 'COMRADE FAITH IBRAHIM OYINDAMOLA',
      role: 'WOMEN CO-ORDINATOR AATF',
      image: '/exco5.jpeg'
    },
    {
      name: 'COMRADE BOB THINKOS AJAYI',
      role: 'CHIEF SECURITY AATF',
      image: '/Ajayi-t.jpeg'
    },
    {
      name: 'COMRADE OMOLARA DANIEL',
      role: 'WELFARE AATF',
      image: '/exco8.jpeg'
    },
    {
      name: 'COMRADE ISMAILA MAMMAN',
      role: 'PRO AATF',
      image: '/exco10.jpeg'
    },
    {
      name: 'COMRADE LAMPY BELLO',
      role: 'ORGANIZING SECRETARY AATF',
      image: '/Bello.jpeg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="exco" className="relative py-32 px-4 bg-[#F1F5F9] overflow-hidden">
      {/* Background Artistic Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#1B7A3D]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0D3976]/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#1B7A3D] font-black uppercase tracking-[0.4em] text-xs mb-4">AATF OPERATIONAL HUB</p>
            <h2 className="text-5xl md:text-7xl font-black text-[#0D3976] leading-none tracking-tighter">
              Meet Our <br />
              <span className="text-[#1B7A3D] inline-block mt-2">Executives</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="h-2 w-20 bg-[#1B7A3D] mb-6 rounded-full"></div>
            <p className="text-gray-500 font-medium text-lg leading-relaxed">
              The dynamic operational team ensuring the day-to-day progress and empowerment of all artisans in the Federal Capital Territory.
            </p>
          </motion.div>
        </div>

        {/* Artistic Exco Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {excos.map((exco, index) => (
            <motion.div 
              key={index} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="relative group h-[450px] bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-white"
            >
              {/* Image Area */}
              <div className="absolute inset-0">
                <img 
                  src={exco.image} 
                  alt={exco.name} 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x800/0D3976/FFFFFF?text=AATF+EXCO';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3976] via-[#0D3976]/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              </div>

              {/* Floating Content Hub */}
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <motion.div 
                  className="bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border-t-2 border-[#1B7A3D] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                >
                  <p className="text-[#1B7A3D] font-black text-[10px] uppercase tracking-[0.2em] mb-2">{exco.role}</p>
                  <h3 className="text-[#0D3976] font-black text-lg leading-tight uppercase group-hover:text-[#1B7A3D] transition-colors">{exco.name}</h3>
                </motion.div>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-[#1B7A3D] rounded-full animate-pulse"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Officials;
