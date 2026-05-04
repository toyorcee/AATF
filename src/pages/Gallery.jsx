import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const tabs = ['All', 'EVENTS', 'PROJECTS', 'AWARDS', 'MEMBERS', 'APPAREL'];

  const images = [
    { src: '/Gallery1.png', title: 'Artisan Workshop Highlights', category: 'EVENTS' },
    { src: '/Gallery2.png', title: 'Technical Training Session', category: 'PROJECTS' },
    { src: '/Gallery3.png', title: 'Community Leadership Meeting', category: 'MEMBERS' },
    { src: '/Gallery4.png', title: 'Infrastructure Inspection', category: 'PROJECTS' },
    { src: '/Gallery5.png', title: 'AATF Excellence Awards', category: 'AWARDS' },
    { src: '/Gallery6.png', title: 'Regional Seminar Series', category: 'EVENTS' },
    { src: '/Gallery7.png', title: 'Skill Enhancement Workshop', category: 'EVENTS' },
    { src: '/Gallery8.png', title: 'Member Orientation Day', category: 'MEMBERS' },
    { src: '/Gallery9.png', title: 'Forum Registration Drive', category: 'MEMBERS' },
    { src: '/Gallery10.png', title: 'Innovation & Tech Expo', category: 'PROJECTS' },
    { src: '/Gallery11.png', title: 'Tool Distribution Program', category: 'PROJECTS' },
    { src: '/Gallery12.png', title: 'Grand Forum Launch', category: 'EVENTS' },
    { src: '/Gallery13.png', title: 'Executive Strategy Session', category: 'MEMBERS' },
    { src: '/Gallery14.png', title: 'Grassroots Outreach', category: 'EVENTS' },
    { src: '/Gallery15.png', title: 'Youth Artisan Mentorship', category: 'PROJECTS' },
    { src: '/Gallery16.png', title: 'Legal Compliance Briefing', category: 'PROJECTS' },
    { src: '/Gallery17.png', title: 'AATF Partnership Summit', category: 'EVENTS' },
    { src: '/apparel.jpeg', title: 'Official AATF Branding', category: 'APPAREL' },
  ];

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="mb-1 text-[#2370C7] font-[900] text-base sm:text-lg lg:text-xl leading-none tracking-widest">MEDIA</p>
          <h1 className="text-[#0D3976] font-semibold text-2xl sm:text-3xl md:text-5xl leading-none">Photo Gallery</h1>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 border ${
                activeTab === tab 
                  ? 'bg-[#28557E] text-white border-[#28557E] shadow-lg shadow-[#28557E]/20' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, index) => (
              <motion.div 
                layout
                key={img.src} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedImage(img)}
                className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in"
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ imageRendering: 'auto' }}
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x600/28557E/FFFFFF?text=AATF+Gallery';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D3976] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white font-bold text-lg leading-tight">{img.title}</p>
                    <p className="text-white/60 text-xs mt-1 uppercase tracking-widest">{img.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See More Button */}
        <div className="text-center">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent text-primary px-8 py-3 sm:px-10 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:brightness-110 transition-all flex items-center gap-2 mx-auto shadow-xl shadow-accent/20"
          >
            See More <span className="text-xl sm:text-2xl">→</span>
          </motion.button>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 10 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/10"
                style={{ imageRendering: 'high-quality' }}
              />
              <div className="mt-6 text-center">
                <h3 className="text-white text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-white/50 text-sm mt-1 uppercase tracking-widest">{selectedImage.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
