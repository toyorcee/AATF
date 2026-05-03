import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About us', to: '/#about' },
    { name: 'Services', to: '/#services' },
    { name: 'Member Directory', to: '/#directory' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'News', to: '/#news' },
    { name: 'Contact', to: '/#contact' },
  ];

  const handleScroll = (id) => {
    if (location.pathname === '/') {
      const element = document.getElementById(id.replace('/#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/' && !location.hash;
    if (to.includes('#')) return location.hash === '#' + to.split('#')[1];
    return location.pathname === to;
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100 h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          {/* Logo & Title */}
          <Link to="/" className="flex items-center gap-3">
            <img src="/AATF-LOGO.png" alt="AATF Logo" className="h-16 w-auto" />
            <div className="flex flex-col leading-tight">
              <span className="font-extrabold text-black text-sm sm:text-base md:text-xl uppercase tracking-tight">Abuja Artisans and</span>
              <span className="font-extrabold text-black text-sm sm:text-base md:text-xl uppercase tracking-tight">Technicians Forum</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center space-x-10">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => handleScroll(link.to)}
                className={({ isActive }) => {
                  const active = link.to === '/gallery' ? isActive : isLinkActive(link.to);
                  return `text-[15px] font-semibold transition-all duration-300 relative group ${
                    active 
                      ? 'text-accent border-b-2 border-accent pb-1' 
                      : 'text-gray-900 hover:text-accent'
                  }`;
                }}
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2 focus:outline-none hover:text-accent transition-colors duration-300"
            >
              {isOpen ? <HiX size={32} /> : <HiMenu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl z-50 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-8 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => {
                  handleScroll(link.to);
                  setIsOpen(false);
                }}
                className={({ isActive }) => {
                  const active = link.to === '/gallery' ? isActive : isLinkActive(link.to);
                  return `block px-3 py-3 text-sm font-bold rounded-md transition-colors duration-200 ${
                    active ? 'text-accent bg-gray-50' : 'text-gray-900 hover:text-accent hover:bg-gray-50'
                  }`;
                }}
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Contact Info */}
            <div className="pt-6 pb-2 px-3 border-t border-gray-100 mt-4">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">Contact Info</p>
              <div className="space-y-3">
                <a href="mailto:abujaartisansforum1@gmail.com" className="block text-sm font-medium text-gray-600 hover:text-accent">
                  abujaartisansforum1@gmail.com
                </a>
                <p className="text-sm font-medium text-gray-600">
                  Abuja, Nigeria
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
