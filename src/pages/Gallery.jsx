import React from 'react';

const Gallery = () => {
  const [activeTab, setActiveTab] = React.useState('All');

  const tabs = ['All', 'EVENTS', 'PROJECTS', 'AWARDS', 'MEMBERS'];

  const images = [
    { src: '/Gallery1.png', title: 'Electrical Workshop', category: 'PROJECTS' },
    { src: '/Gallery2.png', title: 'Plumbing Training', category: 'EVENTS' },
    { src: '/Gallery3.png', title: 'Community Meeting', category: 'MEMBERS' },
    { src: '/Gallery4.png', title: 'Site Inspection', category: 'PROJECTS' },
    { src: '/Gallery5.png', title: 'Award Ceremony', category: 'AWARDS' },
    { src: '/Gallery6.png', title: 'Technical Seminar', category: 'EVENTS' },
    { src: '/Gallery7.png', title: 'Skill Competition', category: 'AWARDS' },
    { src: '/Gallery8.png', title: 'Member Networking', category: 'MEMBERS' },
    { src: '/Gallery9.png', title: 'Certification Day', category: 'AWARDS' },
    { src: '/Gallery10.png', title: 'Industry Visit', category: 'PROJECTS' },
    { src: '/Gallery11.png', title: 'Tool Demonstration', category: 'EVENTS' },
    { src: '/Gallery12.png', title: 'Forum Launch', category: 'MEMBERS' },
  ];

  const filteredImages = activeTab === 'All' 
    ? images 
    : images.filter(img => img.category === activeTab);

  return (
    <div className="bg-white min-h-screen pt-24 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <p 
            className="mb-1 text-[#2370C7] font-[900] text-base sm:text-lg lg:text-xl leading-none"
          >
            MEDIA
          </p>
          <h1 
            className="text-[#0D3976] font-semibold text-2xl sm:text-3xl md:text-4xl leading-none"
          >
            Photo Gallery
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 sm:px-8 sm:py-3 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 border ${
                activeTab === tab 
                  ? 'bg-[#28557E] text-white border-[#28557E]' 
                  : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20">
          {filteredImages.map((img, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl bg-gray-100 aspect-square shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  e.target.src = 'https://placehold.co/600x600/28557E/FFFFFF?text=AATF+Gallery';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D3976]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-bold text-lg">{img.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <button 
            className="bg-accent text-primary px-8 py-3 sm:px-10 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:brightness-110 transition-all flex items-center gap-2 mx-auto"
          >
            See More <span className="text-xl sm:text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
