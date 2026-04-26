import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiOutlineLightBulb, 
  HiOutlineWrench, 
  HiOutlineHome, 
  HiOutlinePaintBrush, 
  HiOutlineShieldCheck, 
  HiOutlineBolt, 
  HiOutlineFire
} from 'react-icons/hi2';
import { FaHammer } from 'react-icons/fa6';

const TradeServices = () => {
  const services = [
    {
      title: 'Electrical Work',
      description: 'Professional electrical installation maintenance and repairs for residential and commercial properties.',
      icon: <HiOutlineLightBulb size={32} />,
    },
    {
      title: 'Plumbing Services',
      description: 'Expert plumbing solutions including Installations, repairs and maintenance of water systems.',
      icon: <HiOutlineWrench size={32} />,
    },
    {
      title: 'Capentary & Joinery',
      description: 'Custom furniture, cabinetry, and woodwork with traditional and modern craftsmanship.',
      icon: <FaHammer size={28} />,
    },
    {
      title: 'Construction & Masonry',
      description: 'Skilled masonry, bricklaying and construction services for building projects.',
      icon: <HiOutlineHome size={32} />,
    },
    {
      title: 'Painting & Decoration',
      description: 'Professional interior and exterior painting with decorative finishes and designs.',
      icon: <HiOutlinePaintBrush size={32} />,
    },
    {
      title: 'HVAC & Cooling',
      description: 'Installation and maintenance of heating, ventilation and air conditioning systems.',
      icon: <HiOutlineShieldCheck size={32} />,
    },
    {
      title: 'Electronics & Repairs',
      description: 'Repair and maintenance of electronic appliances and technical equipment.',
      icon: <HiOutlineBolt size={32} />,
    },
    {
      title: 'Welding & Metal Work',
      description: 'Professional welding, metal fabrication and structural steel work.',
      icon: <HiOutlineFire size={32} />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="bg-[#28557E] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-6">Our Trade Services</h2>
          <p className="text-white/80 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            AATF brings together expertise across mutiple trades and technical specifications
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-[#1A8628] mb-6 transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-[#0D3976] mb-4">{service.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TradeServices;
