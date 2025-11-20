import React, { useState, useEffect } from 'react';
import { Cat, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../../constants';
import { BowIcon } from '../UI/BowIcon';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-white/80 backdrop-blur-md shadow-sm' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2 text-2xl font-bold text-pink-500 font-['Quicksand']">
          <div className="relative">
            <div className="bg-pink-100 p-2 rounded-full border-2 border-pink-300 group-hover:scale-110 transition-transform duration-300">
               <Cat size={24} className="text-pink-500" />
            </div>
            <BowIcon className="absolute -top-2 -right-1 w-6 h-4 z-10" color="#f472b6" />
          </div>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Jian Wu
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-slate-600 hover:text-pink-500 font-semibold transition-colors group py-2"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 transition-all group-hover:w-full rounded-full"></span>
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 bg-pink-500 text-white rounded-full font-bold shadow-lg shadow-pink-200 hover:bg-pink-600 hover:shadow-pink-300 hover:-translate-y-0.5 transition-all flex items-center gap-2"
          >
            Say Hi <BowIcon className="w-4 h-3" color="white" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-pink-500"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-t border-pink-100 shadow-lg py-4 flex flex-col items-center space-y-4 animate-fade-in-down">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 text-lg font-medium hover:text-pink-500"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};