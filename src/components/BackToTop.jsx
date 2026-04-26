import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi2';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = scrollHeight / 2;

      if (window.scrollY > scrollThreshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[60] bg-[#28557E] text-white p-3 sm:p-4 rounded-full shadow-2xl flex items-center justify-center border-2 border-white/20 group"
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="3.5" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </motion.div>
          
          {/* Tooltip on hover */}
          <span className="absolute right-full mr-4 bg-[#0D3976] text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Back to top
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
