import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineCalendar, HiOutlineDocumentText, HiOutlineExternalLink, HiOutlineSearch, HiChevronRight } from 'react-icons/hi';
import { HiOutlineGlobeAlt, HiOutlinePresentationChartBar } from 'react-icons/hi2';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const categories = [
    { name: 'All', icon: <HiOutlineGlobeAlt /> },
    { name: 'News Mentions', icon: <HiOutlinePresentationChartBar /> },
    { name: 'Multimedia', icon: <HiOutlineCalendar /> },
  ];

  const getYoutubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const blogItems = [
    {
      id: 12,
      category: 'Multimedia',
      date: 'May 4, 2026',
      title: 'AATF Spotlight: The Artisan Arise Reel',
      description: 'A second perspective on the community growth and technological training at the recent conference.',
      link: '/artisan-arise.mp4',
      type: 'local-video',
      source: 'AATF Media',
      image: '/news-poster.png'
    },
    {
      id: 10,
      category: 'Multimedia',
      date: 'May 4, 2026',
      title: 'Artisans Arise: The Official Documentary Clip',
      description: 'Exclusive behind-the-scenes footage of the Abuja Artisans and Technicians Forum in action.',
      link: '/artisans-arise.mp4',
      type: 'local-video',
      source: 'AATF Media',
      image: '/news-elraposter.png',
      keywords: 'ELRA'
    },
    {
      id: 11,
      category: 'Multimedia',
      date: 'May 4, 2026',
      title: 'Voice of the Artisan: Exclusive Audio Interview',
      description: 'Listen to this powerful audio segment featuring the leaders of the AATF discussing the future of Nigeria\'s informal sector.',
      link: '/artisan-audio.mp3',
      type: 'audio',
      source: 'AATF Radio',
      image: '/Gallery3.png'
    },
    {
      id: 1,
      category: 'News Mentions',
      date: 'May 3, 2026',
      title: 'Modern equipment: Experts call for increased in technological training for artisans',
      description: 'Experts in the technological sector have called on the federal and state governments to increase technological training for artisans in the country.',
      link: 'https://blueprint.ng/modern-equipment-experts-call-for-increased-in-technological-training-for-artisans/',
      type: 'external',
      source: 'Blueprint.ng',
      image: '/artisans-new.jpg'
    },
    {
      id: 2,
      category: 'News Mentions',
      date: 'May 3, 2026',
      title: 'Experts warn lack of tech support for artisans threatens Nigeria’s development',
      description: 'Industry experts warn that the lack of technological support for artisans could hinder Nigeria\'s industrial growth and economic development.',
      link: 'https://gazettengr.com/experts-warn-lack-of-tech-support-for-artisans-threatens-nigerias-development/',
      type: 'external',
      source: 'Gazette NGR',
      image: '/artisans-new.jpg'
    },
    {
      id: 3,
      category: 'News Mentions',
      date: 'May 2, 2026',
      title: 'Modern equipment: why govts should increase technological training artisans in Nigeria – Experts',
      description: 'A call for government intervention in providing modern equipment and training for the informal sector to boost national productivity.',
      link: 'https://discovererngr.com/modern-equipment-why-govts-should-increase-technological-training-artisans-in-nigeria-experts/',
      type: 'external',
      source: 'Discoverer NGR',
      image: '/artisans-new.jpg'
    },
    {
      id: 4,
      category: 'News Mentions',
      date: 'May 1, 2026',
      title: 'X (Prime Reporters) - Nigeria Will Fall Behind!',
      description: 'Media coverage highlighting the urgent need for technological upgrades within the artisan community.',
      link: 'https://x.com/i/status/2049919593624531304',
      type: 'video',
      source: 'X / Prime Reporters',
      image: '/artisans-new.jpg'
    },
    {
      id: 5,
      category: 'News Mentions',
      date: 'April 30, 2026',
      title: 'Nigeria Will Fall Behind!” – Artisan Raises Alarm',
      description: 'A compelling video report on the challenges faced by artisans and the risk of being left behind in the global economy.',
      link: 'https://youtu.be/WTIsCP0znO4',
      type: 'video',
      source: 'YouTube',
      image: '/Gallery7.png'
    },
    {
      id: 6,
      category: 'News Mentions',
      date: 'April 30, 2026',
      title: 'Lack of Tech Training for Artisans Could Set Nigeria Back — Experts',
      description: 'Experts discuss the critical importance of technical education and support for the informal labor force.',
      link: 'https://youtu.be/ZPkEu-el-74?si=PMvi-he9iz18CAoH',
      type: 'video',
      source: 'YouTube',
      image: '/Mediaimg.png'
    }
  ];

  const filteredItems = blogItems.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const searchString = `${item.title} ${item.description} ${item.category} ${item.source} ${item.date} ${item.type} ${item.keywords || ''}`.toLowerCase();
    const matchesSearch = searchString.includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0D3976 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <header className="mb-16 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center justify-center lg:justify-start gap-2 text-[#1B7A3D] font-bold text-xs uppercase tracking-widest mb-4"
          >
            <div className="w-8 h-1 bg-[#1B7A3D]"></div>
            Conference Updates
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-6xl font-black text-[#0D3976] mb-6 tracking-tight"
          >
            Media Hub & <span className="text-[#1B7A3D]">Newsroom</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg sm:text-xl max-w-3xl mx-auto lg:mx-0 leading-relaxed"
          >
            Stay updated with our latest conference highlights, media appearances, and official documents as we professionalize Nigeria's informal sector.
          </motion.p>
        </header>

        {/* Featured Article / Video Background Hero */}
        {activeCategory === 'All' && !searchQuery && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="mb-12 bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col lg:flex-row group border border-gray-100 cursor-pointer h-auto lg:h-[400px] relative"
          >
            <div 
              onClick={() => setSelectedItem({ type: 'local-video', link: '/artisans-arise.mp4', title: 'Artisans Arise' })}
              className="lg:w-1/2 h-64 lg:h-full overflow-hidden relative group/img"
            >
              <video 
                autoPlay 
                muted 
                loop 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/artisans-arise.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/20 group-hover/img:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-md p-4 rounded-full text-white">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center bg-white relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-10 h-0.5 bg-[#1B7A3D]"></span>
                <span className="text-[#1B7A3D] font-bold text-xs uppercase tracking-[0.2em]">Multimedia Spotlight</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D3976] mb-4 leading-tight group-hover:text-[#1B7A3D] transition-colors">
                Artisans Arise: The Future of the Informal Sector
              </h2>
              <p className="text-gray-500 text-base mb-8 leading-relaxed max-w-lg">
                Watch our latest cinematic feature showcasing the resilience and technical evolution of Abuja's artisan community.
              </p>
              <div className="mt-auto">
                <motion.button 
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedItem({ type: 'local-video', link: '/artisans-arise.mp4', title: 'Artisans Arise' })}
                  className="inline-flex bg-[#0D3976] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#0D3976]/90 transition-all items-center gap-3 shadow-lg shadow-[#0D3976]/20"
                >
                  Watch Full Feature <HiChevronRight />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Sidebar */}
          <aside className="lg:w-1/4 space-y-8">
            {/* Search */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <input 
                type="text" 
                placeholder="Search for news, videos or radio interviews..."
                className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#1B7A3D] focus:border-transparent transition-all outline-none shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <HiOutlineSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            </motion.div>

            {/* Categories */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <h3 className="font-bold text-[#0D3976] mb-4 text-lg">Categories</h3>
              <nav className="space-y-1">
                {categories.map((cat, i) => (
                  <motion.button
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + (i * 0.1) }}
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all font-medium cursor-pointer ${
                      activeCategory === cat.name 
                        ? 'bg-[#1B7A3D] text-white shadow-md shadow-[#1B7A3D]/20' 
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {cat.icon}
                      {cat.name}
                    </div>
                    <motion.div
                      animate={{ x: activeCategory === cat.name ? 0 : -10, opacity: activeCategory === cat.name ? 1 : 0 }}
                    >
                      <HiChevronRight />
                    </motion.div>
                  </motion.button>
                ))}
              </nav>
            </motion.div>

            {/* Help Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              whileHover={{ y: -5 }}
              className="bg-[#0D3976] rounded-2xl p-6 text-white overflow-hidden relative group shadow-lg"
            >
              <div className="relative z-10">
                <h3 className="font-bold mb-2 text-lg">Need Assistance?</h3>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">Can't find a specific document or news item? Contact our media desk at abujaartisansforum1@gmail.com or call us directly.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:abujaartisansforum1@gmail.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-[#1B7A3D] text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-colors cursor-pointer hover:bg-[#1B7A3D]/90 text-center"
                  >
                    Email Us
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="tel:08109053304" 
                    className="inline-block bg-white/10 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md transition-colors cursor-pointer hover:bg-white/20 text-center border border-white/20"
                  >
                    Call Us
                  </motion.a>
                </div>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
                  <a href="tel:08109053304" className="hover:text-white transition-colors cursor-pointer">0810 905 3304</a>
                  <a href="tel:09138080220" className="hover:text-white transition-colors cursor-pointer">0913 808 0220</a>
                  <a href="tel:08065371747" className="hover:text-white transition-colors cursor-pointer">0806 537 1747</a>
                </div>
              </div>
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors duration-700"
              ></motion.div>
            </motion.div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => (
                  <motion.article
                    layout
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
                  >
                    {/* Thumbnail */}
                    <div 
                      onClick={() => setSelectedItem(item)}
                      className={`relative h-48 overflow-hidden bg-gray-100 relative group/img ${item.type !== 'video' && item.type !== 'local-video' ? 'cursor-zoom-in' : 'cursor-pointer'}`}
                    >
                      {item.type === 'video' && hoveredItem === item.id && getYoutubeId(item.link) ? (
                        <iframe
                          className="w-full h-full pointer-events-none"
                          src={`https://www.youtube.com/embed/${getYoutubeId(item.link)}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0`}
                          title="Video Preview"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                      ) : item.type === 'local-video' && hoveredItem === item.id ? (
                        <video 
                          autoPlay 
                          muted 
                          loop 
                          className="w-full h-full object-cover pointer-events-none"
                        >
                          <source src={item.link} type="video/mp4" />
                        </video>
                      ) : item.type === 'pdf' ? (
                        <div className="w-full h-full bg-gradient-to-br from-red-50 via-red-100/50 to-white flex flex-col items-center justify-center p-8">
                          <div className="w-20 h-20 bg-red-500 rounded-2xl flex items-center justify-center shadow-xl mb-4 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                          </div>
                          <span className="text-red-600/40 font-black text-2xl uppercase tracking-widest absolute opacity-10 pointer-events-none select-none">OFFICIAL PDF</span>
                        </div>
                      ) : item.type === 'audio' ? (
                        <div className="w-full h-full bg-gradient-to-br from-amber-500 via-[#D9A227] to-[#0D3976] flex flex-col items-center justify-center p-8 overflow-hidden relative">
                          <div className="flex items-end gap-1.5 h-16 z-10">
                            {[...Array(6)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{ height: [20, 64, 30, 50, 20] }}
                                transition={{ 
                                  duration: 1 + Math.random(), 
                                  repeat: Infinity, 
                                  ease: "easeInOut",
                                  delay: i * 0.1
                                }}
                                className="w-2 bg-white/90 rounded-full shadow-lg"
                              />
                            ))}
                          </div>
                          <div className="mt-6 flex items-center gap-3 z-10">
                            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                            <span className="text-white font-black text-xs uppercase tracking-[0.3em]">AATF Radio Live</span>
                          </div>
                          <div className="absolute inset-0 bg-black/20"></div>
                          <span className="text-white/5 font-black text-6xl uppercase tracking-tighter absolute rotate-12 pointer-events-none select-none whitespace-nowrap">VOICE OF THE REPORTER</span>
                        </div>
                      ) : (
                        <>
                          <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{ imageRendering: 'auto' }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                            <div className={`opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-md p-3 rounded-full text-white`}>
                              {item.type === 'video' || item.type === 'local-video' ? (
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z" />
                                </svg>
                              ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                </svg>
                              )}
                            </div>
                          </div>
                        </>
                      )}
                      {/* Play/Audio Icon for Videos/Audio (always visible to signal media) */}
                      {(item.type === 'video' || item.type === 'local-video' || item.type === 'audio') && hoveredItem !== item.id && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-xl border border-white/30">
                            {item.type === 'audio' ? (
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                              </svg>
                            ) : (
                              <svg className="w-8 h-8 fill-current translate-x-0.5" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            )}
                          </div>
                        </div>
                      )}

                      <div className="absolute top-4 left-4">
                        <span className={`text-[9px] uppercase tracking-widest font-black px-3 py-1.5 rounded-lg shadow-sm border border-white/20 backdrop-blur-md ${
                          item.type === 'pdf' ? 'bg-red-500 text-white' : 
                          item.type === 'video' || item.type === 'local-video' ? 'bg-[#1B7A3D] text-white' : 
                          item.type === 'audio' ? 'bg-amber-500 text-white' :
                          item.type === 'image' ? 'bg-purple-500 text-white' :
                          'bg-gray-800 text-white'
                        }`}>
                          {item.type === 'local-video' ? 'Forum Reel' : 
                           item.type === 'audio' ? 'AATF Radio' : 
                           item.type.replace('local-', '')}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                          {item.category}
                        </span>
                        <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                          <HiOutlineCalendar />
                          {item.date}
                        </div>
                      </div>

                      <h2 className="text-lg font-bold text-[#0D3976] mb-3 leading-tight group-hover:text-[#1B7A3D] transition-colors line-clamp-2">
                        {item.title}
                      </h2>
                      
                      <p className="text-gray-500 text-xs mb-6 flex-grow line-clamp-3 leading-relaxed">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Source: {item.source}</span>
                        <a 
                          href={item.link} 
                          target={item.type !== 'internal' ? "_blank" : "_self"}
                          rel="noreferrer"
                          className="flex items-center gap-2 text-[#1B7A3D] font-bold text-xs hover:gap-3 transition-all"
                        >
                          {item.type === 'pdf' ? 'Download Document' : 
                           item.type === 'audio' ? 'Listen Now' :
                           (item.type === 'video' || item.type === 'local-video') ? 'Watch Video' : 
                           item.type === 'image' ? 'View Image' : 'Read Full Article'}
                          {item.type === 'external' || item.type === 'video' || item.type === 'local-video' ? <HiOutlineExternalLink /> : <HiChevronRight />}
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </AnimatePresence>
            </div>

            {filteredItems.length === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-200"
              >
                <div className="text-gray-400 mb-4 flex justify-center">
                  <HiOutlineGlobeAlt size={48} />
                </div>
                <h3 className="text-xl font-bold text-[#0D3976]">No items found</h3>
                <p className="text-gray-500">Try adjusting your search or category filters.</p>
              </motion.div>
            )}
          </main>
        </div>
      </div>

      {/* Media Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-10 cursor-zoom-out"
          >
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors"
              onClick={() => setSelectedItem(null)}
            >
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateX: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${getYoutubeId(selectedItem.link)}?autoplay=1&controls=1&modestbranding=1&rel=0`}
                    title="Video Player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : selectedItem.type === 'local-video' ? (
                <div className="w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
                  <video 
                    controls 
                    autoPlay 
                    className="w-full h-full"
                  >
                    <source src={selectedItem.link} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : selectedItem.type === 'audio' ? (
                <div className="w-full max-w-2xl bg-white rounded-3xl p-10 shadow-2xl text-center">
                  <div className="w-24 h-24 bg-[#1B7A3D] rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg shadow-[#1B7A3D]/20">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0D3976] mb-2">{selectedItem.title}</h3>
                  <p className="text-gray-500 mb-8">{selectedItem.source}</p>
                  <audio controls className="w-full" autoPlay>
                    <source src={selectedItem.link} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              ) : (
                <img 
                  src={selectedItem.image || selectedItem} 
                  alt="Enlarged view" 
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                  style={{ imageRendering: 'high-quality' }}
                />
              )}
              
              <div className="absolute -bottom-12 left-0 right-0 text-center">
                <p className="text-white/40 text-sm font-medium tracking-widest uppercase">Click anywhere to close</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Blog;
