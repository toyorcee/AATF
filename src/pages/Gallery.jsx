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
            style={{ color: '#2370C7', fontWeight: 900, fontSize: '20px', lineHeight: '100%' }}
            className="mb-1"
          >
            MEDIA
          </p>
          <h1 
            style={{ fontWeight: 600, fontSize: '32px', lineHeight: '100%' }}
            className="text-[#0D3976]"
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
              className={`px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 border ${
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
            style={{ backgroundColor: '#D9A227', color: '#0D3976' }}
            className="px-10 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all flex items-center gap-2 mx-auto"
          >
            See More <span className="text-2xl">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
