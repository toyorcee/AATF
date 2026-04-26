import React from 'react';
import { FaXTwitter, FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer id="contact" className="bg-[#28557E] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo and Description */}
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3">
              <div className="w-16 h-16 sm:w-14 sm:h-14 bg-[#1257A9] rounded-full flex items-center justify-center font-bold text-xl sm:text-lg border border-white/10 shrink-0">
                AATF
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h2 className="text-2xl sm:text-xl font-bold leading-tight">AATF</h2>
                <p style={{ color: '#E8E8E8' }} className="text-[10px] sm:text-xs uppercase tracking-widest sm:tracking-tighter">Abuja Artisans & Technical Forum</p>
              </div>
            </div>
            <p style={{ color: '#E8E8E8' }} className="text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
              Empowering skilled artisans and technicians in Abuja through community, training and professional development.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-10 text-center sm:text-left">
            <h3 className="text-base font-bold mb-6">Quick Links</h3>
            <ul style={{ color: '#E8E8E8' }} className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Member Directory</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">News</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="text-center sm:text-left">
            <h3 className="text-base font-bold mb-6">Resources</h3>
            <ul style={{ color: '#E8E8E8' }} className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Training Programs</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Tools & Equipment</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Industry Standards</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h3 className="text-base font-bold mb-2">Connect with Us</h3>
            <div className="flex gap-2 justify-center sm:justify-start">
              {[
                { icon: <FaXTwitter size={18} />, link: '#' },
                { icon: <FaWhatsapp size={18} />, link: '#' },
                { icon: <FaInstagram size={18} />, link: '#' },
                { icon: <FaTiktok size={18} />, link: '#' }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link}
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold mb-1">Email</p>
              <a href="mailto:info@aatfabuja.org" style={{ color: '#E8E8E8' }} className="text-sm hover:text-white transition-colors">
                info@aatfabuja.org
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{ color: '#E8E8E8', fontSize: '12px', fontWeight: 400, lineHeight: '100%' }}
          className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-[10px] sm:text-xs">© 2026 AATF - Abuja Artisans & Technicians Forum. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
