import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineCalendar, HiArrowNarrowRight } from 'react-icons/hi';

const News = () => {
  const newsItems = [
    {
      date: 'April 12, 2026',
      tag: 'Event',
      title: 'AATF Annual Skills Competition 2026',
      description: 'Join us for our biggest annual event where artisans showcase their skllls and compete for recognition. Categories include electrical work, plumbing, capentry and more.'
    },
    {
      date: 'April 12, 2026',
      tag: 'Training',
      title: 'New Advanced Welding Certification Program',
      description: 'Join us for our biggest annual event where artisans showcase their skllls and compete for recognition. Categories include electrical work, plumbing, capentry and more.'
    },
    {
      date: 'April 12, 2026',
      tag: 'Announcement',
      title: 'Member Benefits Updates - New Insurance Plan',
      description: 'Join us for our biggest annual event where artisans showcase their skllls and compete for recognition. Categories include electrical work, plumbing, capentry and more.'
    },
    {
      date: 'April 12, 2026',
      tag: 'Event',
      title: 'Networking Mixer- Meet & Connect',
      description: 'Join us for our biggest annual event where artisans showcase their skllls and compete for recognition. Categories include electrical work, plumbing, capentry and more.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="news" className="bg-white py-24 px-4 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3976] mb-4">Latest News & Updates</h2>
          <p className="text-gray-500 text-lg">Stay informed about AATF events, announcements and opportunities</p>
        </motion.div>

        {/* News List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {newsItems.map((news, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-md transition-all group"
            >
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="flex items-center gap-2 text-[#4F4F4FCC]">
                  <HiOutlineCalendar size={20} />
                  <span className="font-medium">{news.date}</span>
                </div>
                <span 
                  style={{ backgroundColor: '#28557E26', color: '#0D3976' }}
                  className="px-4 py-1 rounded-full text-sm font-bold"
                >
                  {news.tag}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0D3976] mb-4 group-hover:text-accent transition-colors">
                {news.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {news.description}
              </p>

              <button className="text-accent font-bold flex items-center gap-2 hover:gap-4 transition-all">
                Read More <HiArrowNarrowRight />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="border-2 border-[#0D3976] text-[#0D3976] px-12 py-3 rounded-lg font-bold text-lg hover:bg-[#0D3976] hover:text-white transition-all">
            View all News
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
