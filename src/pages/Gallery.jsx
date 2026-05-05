import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/galleryData';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(32);

  const tabs = ['All', 'EVENTS', 'PROJECT', 'AWARDS', 'APPAREL'];

  const filteredImages = activeTab === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeTab);

  const displayedImages = filteredImages.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setVisibleCount(32);
  };

  return (
    <div className="bg-[#fcfcfc] min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <p className="mb-2 text-[#2370C7] font-black text-sm sm:text-base tracking-[0.3em] uppercase">Visual Journey</p>
          <h1 className="text-[#0D3976] font-bold text-3xl sm:text-4xl md:text-6xl tracking-tight">Our Gallery</h1>
          <div className="w-20 h-1 bg-[#2370C7] mx-auto mt-6 rounded-full opacity-20" />
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {tabs.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2.5 sm:px-10 sm:py-3.5 rounded-full font-bold text-[10px] sm:text-xs tracking-widest uppercase transition-all duration-500 border-2 ${
                activeTab === tab 
                  ? 'bg-[#0D3976] text-white border-[#0D3976] shadow-2xl shadow-[#0D3976]/30' 
                  : 'bg-white text-gray-400 border-gray-100 hover:border-[#0D3976]/30 hover:text-[#0D3976]'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          <AnimatePresence mode="popLayout">
            {displayedImages.map((img, index) => (
              <motion.div 
                layout
                key={img.src} 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ 
                  duration: 0.6, 
                  delay: (index % 4) * 0.1, 
                  ease: [0.215, 0.61, 0.355, 1] 
                }}
                onClick={() => setSelectedImage(img)}
                className="break-inside-avoid group relative overflow-hidden rounded-[2rem] bg-white shadow-xl hover:shadow-2xl transition-all duration-700 cursor-zoom-in"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.title} 
                    className="w-full h-auto object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/600x800/28557E/FFFFFF?text=AATF+Gallery';
                    }}
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D3976] via-[#0D3976]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                    <motion.div 
                      className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                    >
                      <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold rounded-full mb-3 tracking-widest uppercase border border-white/30">
                        {img.category}
                      </span>
                      <p className="text-white font-bold text-base leading-tight tracking-tight">{img.title}</p>
                    </motion.div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No images found in this category.</p>
          </div>
        )}

        {/* Load More Button */}
        {visibleCount < filteredImages.length && (
          <div className="mt-20 text-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="group relative inline-flex items-center justify-center bg-[#0D3976] text-white px-12 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-[#0D3976]/40 transition-all overflow-hidden min-w-[240px]"
            >
              <span className="relative z-10 uppercase tracking-widest">Load More Experience</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-all hover:rotate-90"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/modal w-full flex justify-center">
                <img 
                  src={selectedImage.src} 
                  alt={selectedImage.title} 
                  className="max-w-full max-h-[85vh] object-contain rounded-3xl shadow-[0_0_100px_rgba(0,0,0,0.5)] border border-white/5"
                />
                
                {/* Modal Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/modal:opacity-100 transition-all duration-500 rounded-b-3xl">
                  <span className="px-4 py-1.5 bg-white text-black text-xs font-black rounded-full mb-4 inline-block tracking-[0.2em] uppercase">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-white text-3xl font-bold tracking-tight">{selectedImage.title}</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .columns-1 { column-count: 1; }
        @media (min-width: 640px) { .sm\\:columns-2 { column-count: 2; } }
        @media (min-width: 1024px) { .lg\\:columns-3 { column-count: 3; } }
        @media (min-width: 1280px) { .xl\\:columns-4 { column-count: 4; } }
      `}</style>
    </div>
  );
};

export default Gallery;


