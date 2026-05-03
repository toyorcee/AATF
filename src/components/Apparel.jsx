import React from 'react';
import { motion } from 'framer-motion';

const Apparel = () => {
  return (
    <section id="apparel" className="bg-[#F8FAFC] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
             <p className="text-[#28557E] font-bold tracking-widest uppercase mb-4 text-sm sm:text-base">Official Merchandise</p>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0D3976] mb-6 leading-tight">
               Forum Apparel & <br className="hidden md:block" /> 
               Professional Gear
             </h2>
             <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
               Show your pride and professional identity with our official AATF branded apparel. 
               Our gear is designed for comfort, durability, and a professional look on the job.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
               <button className="bg-[#28557E] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#1a3a57] transition-all shadow-lg hover:-translate-y-1 active:scale-95">
                 Inquire for Orders
               </button>
             </div>
          </motion.div>
          
          {/* Single Image Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-[1.2] w-full"
          >
            <div className="relative group">
              <div className="overflow-hidden rounded-3xl bg-white shadow-2xl border border-gray-100 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(40,85,126,0.15)]">
                <img 
                  src="/apparel.jpeg" 
                  alt="Official AATF Apparel" 
                  className="w-full h-auto object-contain p-4 md:p-10 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/800x600/28557E/FFFFFF?text=AATF+Apparel';
                  }}
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="absolute -bottom-6 -right-6 md:bottom-10 md:-right-10 bg-[#D9A227] text-[#0D3976] p-6 md:p-8 rounded-2xl shadow-xl transform rotate-3 hidden sm:block"
              >
                <p className="text-xl md:text-2xl font-black leading-tight uppercase">
                  Premium <br /> Quality
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Apparel;
