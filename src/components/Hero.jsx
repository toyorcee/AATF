import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiSearch } from 'react-icons/hi';

const Hero = () => {
  return (
    <section className="bg-primary text-white overflow-hidden relative h-[calc(100vh-96px)] min-h-[600px] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl">
          {/* Welcome Tag */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ width: '300px', height: '40px', borderRadius: '30px' }}
            className="bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10"
          >
            <span className="text-white font-semibold text-xs tracking-wide">Welcome to AATF</span>
          </motion.div>
          
          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold leading-tight mb-6"
          >
            Empowering Artisans <br />
            & Technicinas
          </motion.h1>
          
          {/* Subtext */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-white/90 mb-10 max-w-2xl leading-relaxed"
          >
            The Abuja Artisans & Technicians forum is a professional platform 
            dedicated to connecting skilled craftspeople, promoting 
            excellence and advancing the technical industry in Abuja.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button 
              style={{ 
                width: '320px', 
                height: '72px', 
                borderRadius: '10px',
                backgroundColor: '#D9A227',
                color: '#0D3976'
              }}
              className="font-bold text-xl hover:brightness-110 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              Join Our Community
              <HiArrowRight size={28} className="group-hover:translate-x-2 transition-transform" />
            </button>
            
            <button 
              style={{ 
                width: '320px', 
                height: '72px', 
                borderRadius: '10px',
                borderColor: '#FFFFFF',
                borderWidth: '2px',
                color: '#FFFFFF',
                backgroundColor: 'transparent'
              }}
              className="font-bold text-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-4"
            >
              <HiSearch size={28} />
              Verify Member
            </button>
          </motion.div>
        </div>
      </div>

      {/* Decorative patterns to match the premium feel */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-3xl rounded-full"></div>
      <div className="absolute top-1/4 -left-10 w-40 h-40 bg-white/5 blur-2xl rounded-full"></div>
    </section>
  );
};

export default Hero;
