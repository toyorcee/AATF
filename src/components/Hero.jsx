import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiSearch } from 'react-icons/hi';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    '/0d09a6e6-5ab3-47a6-864e-ae0fe7db15b8.jfif',
    '/0d653409-24dd-47b2-89fd-a13345b0b5a1.jfif',
    '/0e1a5eb2-4e08-4463-abb8-fd02e76d404f.jfif',
    '/10584a59-fc5b-423d-ba8c-7e70470ec776.jfif',
    '/1116b271-ba44-4e9c-b1a2-5680a02e53d5.jfif',
    '/172b6ba5-e3bd-4398-b394-2f612bdd1ea8.jfif',
    '/17da4eab-5f3e-429c-bac5-c90d50f542bf.jfif',
    '/19063b05-4b0a-422b-9d19-58b858f51411.jfif',
    '/19a51750-bf49-4fd8-83f8-437e35c5bfa0.jfif',
    '/1a36985f-c618-4284-8c21-1aaef670e3b0.jfif',
    '/1b95fb0c-37c3-4f4c-a286-c52ce16836d6.jfif',
    '/1b9f3d9f-a49f-4084-aad4-dba01078cad6.jfif',
    '/1e545a8b-fe17-4f47-98f9-0cd4b6a90479.jfif',
    '/1f1d0266-73af-4b6c-9757-65de4bef20de.jfif',
    '/1f8e985e-82c8-4d38-aa28-bb2338fba1d5.jfif',
    '/203acf8d-d3dd-4cfb-b748-ddaf9ed4742c.jfif',
    '/205a6611-d5c4-484e-bbdb-c994ee0e52aa.jfif',
    '/22a21341-d15c-4db6-a5e9-35d77f6349b7.jfif',
    '/252da537-ca1c-4c9c-a8b7-5170ecabc9ba.jfif',
    '/2548f7fa-f9db-48c1-bb9a-ca6085e67684.jfif'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[calc(100vh-96px)] min-h-[600px] flex items-center overflow-hidden bg-[#0D3976]">
      {/* Cinematic Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ 
              duration: 2, // Smooth 2s crossfade
              ease: "easeInOut" 
            }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={bgImages[currentBg]} 
              className="w-full h-full object-cover scale-105" // Slight scale for motion
              alt="Artisan Background"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Dynamic Overlays */}
        <div className="absolute inset-0 bg-[#0D3976]/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D3976] via-[#0D3976]/40 to-transparent z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D3976] via-transparent to-transparent z-10"></div>
        
        {/* Animated Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: Math.random() * 0.5 
            }}
            animate={{ 
              y: [null, "-20px", "20px", null],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 5 + Math.random() * 5, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-[#1B7A3D] rounded-full z-10 pointer-events-none"
          ></motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          {/* Welcome Tag */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-1.5 bg-[#0D3976]/80 backdrop-blur-md border border-white/20 rounded-full mb-4"
          >
            <div className="w-2 h-2 bg-[#1B7A3D] rounded-full animate-pulse"></div>
            <span className="text-white font-black text-[10px] uppercase tracking-[0.3em]">Welcome to AATF Hub</span>
          </motion.div>
          
          {/* Main Title - Compact & Bold */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-black leading-[1.1] mb-4 tracking-tighter text-white"
          >
            Empowering <br />
            <span className="text-[#1B7A3D] drop-shadow-md">Artisans</span> <br />
            & Technicians
          </motion.h1>
          
          {/* Subtext - More Compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl bg-[#0D3976]/30 backdrop-blur-xl border-l-4 border-[#1B7A3D] p-6 mb-6 shadow-2xl"
          >
            <p className="text-base md:text-lg text-white font-bold leading-relaxed italic">
              "The Abuja Artisans and Technicians Forum is a professional platform 
              dedicated to connecting skilled craftspeople, promoting 
              excellence and advancing the technical industry in Abuja."
            </p>
          </motion.div>
          
          {/* Action Buttons - Scaled Down */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full"
          >
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative w-full sm:w-auto px-7 py-4 bg-[#D9A227] text-[#0D3976] rounded-xl font-black text-base overflow-hidden transition-all shadow-xl shadow-[#D9A227]/20"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                Join Our Community
                <HiArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-7 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-black text-base hover:bg-white/20 transition-all flex items-center justify-center gap-4 shadow-xl"
            >
              <HiSearch size={20} className="text-[#1B7A3D]" />
              Verify Member
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
