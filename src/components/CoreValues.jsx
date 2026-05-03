import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineTrophy, HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineUserGroup } from 'react-icons/hi2';

const CoreValues = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'Commitment to superior craftsmanship and technical quality',
      icon: <HiOutlineTrophy size={60} />,
    },
    {
      title: 'Innovations',
      description: 'Embracing modern techniques and continuous improvement',
      icon: <HiOutlineLightBulb size={60} />,
    },
    {
      title: 'Professionalism',
      description: 'Maintaining highest standards of conduct and competence',
      icon: <HiOutlineShieldCheck size={60} />,
    },
    {
      title: 'Unity',
      description: 'Fostering collaboration among members of the forum',
      icon: <HiOutlineUserGroup size={60} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#F3F4F6] rounded-[30px] p-8 sm:p-12 md:p-20 shadow-sm"
        >
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#28557E]">Our Core Values</h2>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {values.map((item, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="flex flex-col items-center text-center group"
              >
                <div 
                  className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-[120px] lg:h-[120px] bg-[#28557E] text-white rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300"
                >
                  <div className="scale-75 sm:scale-90 md:scale-100">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#28557E] mb-3 sm:mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-[250px]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;
