import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineDocumentText, HiOutlineScale, HiOutlineShieldCheck } from 'react-icons/hi2';

const LegalDocs = () => {
  const docs = [
    {
      title: 'CAC Registration',
      description: 'Official registration document with the Corporate Affairs Commission of Nigeria.',
      file: '/CAC.pdf',
      icon: <HiOutlineShieldCheck size={40} />
    },
    {
      title: 'Operational Certificate',
      description: 'Our certified operational license and recognition of professional standing.',
      file: '/certificate.pdf',
      icon: <HiOutlineDocumentText size={40} />
    },
    {
      title: 'Forum Constitution',
      description: 'The guiding principles, rules, and regulations governing all AATF operations.',
      file: '/Constitution.pdf',
      icon: <HiOutlineScale size={40} />
    }
  ];

  return (
    <section id="legal" className="bg-[#F8FAFC] py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#28557E] mb-6">Legal & Transparency</h2>
          <p className="text-gray-500 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We operate with full transparency and compliance. Access our official registration and governing documents below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {docs.map((doc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-[#28557E] mb-8 p-6 bg-[#28557E]/5 rounded-2xl group-hover:bg-[#28557E] group-hover:text-white transition-all duration-300">
                {doc.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{doc.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10 flex-grow">
                {doc.description}
              </p>
              <a
                href={doc.file}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-8 py-4 bg-[#28557E] text-white rounded-xl font-bold hover:bg-[#1a3a57] transition-all duration-300 shadow-md hover:shadow-lg active:scale-95"
              >
                View Document
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalDocs;
