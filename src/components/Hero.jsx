import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowRight, HiSearch } from 'react-icons/hi';

const Hero = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const bgImages = [
    '/Gallery1.png',
    '/Gallery4.png',
    '/Gallery10.png',
    '/Gallery12.png',
    '/Gallery17.png'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 6000);
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
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: "linear" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={bgImages[currentBg]} 
              className="w-full h-full object-cover"
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
