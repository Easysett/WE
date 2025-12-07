import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NavigationService } from '../types';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const services: NavigationService[] = [
    { name: 'Business Setup', path: '/services/business-setup' },
    { name: 'Visa Services', path: '/services/visa-services' },
    {name: 'American Visa Services', path: '/services/american-visa' },
    { name: 'Family Visa Services', path: '/services/family-visa' },
    { name: 'Golden Visa Services', path: '/services/golden-visa' },
    { name: 'Amer & Tasheel Services', path: '/services/amer-tasheel' },
    { name: 'Attestation', path: '/services/attestation' },
    { name: 'Translation', path: '/services/translation' },
    { name: 'Notary & Legal Services', path: '/services/notary-legal' },
    { name: 'Typing Services', path: '/services/typing' }
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-5">
          <Link to="/" className="flex items-center">
            <img 
              src="/logo.png" 
              alt="UAE Easyset Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-1">
            <nav className="flex items-center space-x-1">
            <Link 
              to="/" 
              className="px-4 py-2 text-gray-700 hover:text-[#2475A9] font-medium transition-all hover:bg-blue-50 rounded-lg"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="px-4 py-2 text-gray-700 hover:text-[#2475A9] font-medium transition-all hover:bg-blue-50 rounded-lg"
            >
              About Us
            </Link>
            <Link 
              to="/services/golden-visa" 
              className="px-4 py-2 text-gray-700 hover:text-[#BC9754] font-medium transition-all hover:bg-blue-50 rounded-lg"
            >
              Golden Visa
            </Link>
            <Link 
              to="/services/american-visa" 
              className="px-4 py-2 text-gray-700 hover:text-[#2475A9] font-medium transition-all hover:bg-blue-50 rounded-lg"
            >
              American Visa
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-4 py-2 text-gray-700 hover:text-[#2475A9] font-medium transition-all hover:bg-blue-50 rounded-lg flex items-center gap-1">
                 Services
                <ChevronDown size={16} className="transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                <div className="py-3 px-2">
                  {services.map((service, idx) => (
                    <Link
                      key={idx}
                      to={service.path}
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100 hover:text-[#2475A9] transition-all rounded-lg font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link 
              to="/blog" 
              className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-all hover:bg-blue-50 rounded-lg"
            >
              Blog
            </Link>
            </nav>

            {/* Contact Button - Desktop */}
            <Link 
              to="/contact" 
              className="ml-4 relative px-8 py-3 bg-gradient-to-r from-[#2576AA] to-[#2576AA] text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:from-[#BC9754] hover:to-[#BC9754] transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#BC9754] to-[#BC9754] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-4 border-t border-gray-100 mt-2"
            >
              <div className="pt-4 space-y-1">
                <Link 
                  to="/" 
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition" 
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition" 
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link 
                  to="/services/american-visa"  
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition" 
                  onClick={() => setIsOpen(false)}
                >
                  American Visa
                </Link>
                <Link 
                  to="/services/golden-visa" 
                  className="block py-3 px-4 text-gray-700 hover:text-[#BC9753] hover:bg-blue-50 rounded-lg font-medium transition" 
                  onClick={() => setIsOpen(false)}
                >
                  Golden Visa
                </Link>
                
                <div>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition"
                  >
                    Services
                    <ChevronDown 
                      size={16} 
                      className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 space-y-1 mt-1"
                      >
                        {services.map((service, idx) => (
                          <Link
                            key={idx}
                            to={service.path}
                            className="block py-2 px-4 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/blog" 
                  className="block py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg font-medium transition" 
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                
                {/* Contact Button - Mobile */}
                <Link 
                  to="/contact" 
                  className="block mt-4 py-3 px-4 bg-gradient-to-r from-[#2576AA] to-[#2576AA] text-white text-center font-semibold rounded-full shadow-lg hover:shadow-xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;