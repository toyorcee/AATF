import React from 'react';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';

const About = () => {
  const points = [
    "Promote professional standards in craftmanship",
    "Provide training and skill development programs",
    "Create networking and business opportunities",
    "Advocate for artisans and technicians"
  ];

  return (
    <section id="about" className="bg-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#28557E] mb-4">About AATF</h2>
          <p className="text-gray-500 text-lg">Understanding our mission and vision for the artisan community</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-[#28557E]">Our Mission</h3>
            
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                To create a vibrant, inclusive community that recognizes, 
                celebrates and support the vital contributions of artisans 
                and technicians in Abuja and beyond. we aim tp provide 
                platforms for skill development, business networking, and 
                professional growth.
              </p>
              <p>
                AATF serves as a bridge connecting skilled professionals 
                with opportunities, resources and a supportive community 
                that values craftmanship and technical excellence.
              </p>
            </div>

            <ul className="space-y-4">
              {points.map((point, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-800 font-medium text-lg">
                  <HiCheckCircle className="text-[#1A8628] flex-shrink-0" size={28} />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-[#28557E] rounded-[40px] overflow-hidden p-8 shadow-2xl">
              <img 
                src="/pinpoint.png" 
                alt="Our Mission Target" 
                className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
