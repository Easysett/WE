import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { 
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#EDF3F5] to-[#EDF3F5] text-[#2475A9]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/logo.png" 
                alt="Easyset Logo" 
                className="h-12 w-auto object-contain"
              />
            </Link>
            {/* Social Icons */}
            <div className="flex gap-3 mt-6 ">
              <a target='_blank'
                rel="noopener"
                href="https://www.facebook.com/share/1C1i27yzck/?mibextid=wwXIfr" 
                aria-label="Facebook"
                className="bg-[#F5F5F5] hover:bg-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 text-[#BC9753]"
              >
                <FaFacebookF size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Instagram"
                className="bg-[#F5F5F5] hover:bg-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 text-[#BC9753]"
              >
                <FaInstagram size={18} />
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn"
                className="bg-[#F5F5F5] hover:bg-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 text-[#BC9753]"
              >
                <FaLinkedinIn size={18} />
              </a>
              <a 
                href="#" 
                aria-label="Twitter"
                className="bg-[#F5F5F5] hover:bg-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 text-[#BC9753]"
              >
                <FaTwitter size={18} />
              </a>
              <a 
                href="https://wa.me/+971554912339" 
                aria-label="WhatsApp"
                className="bg-[#F5F5F5] hover:bg-white p-3 rounded-lg transition-all duration-300 transform hover:scale-110 text-[#BC9753]"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#2475A9] relative inline-block">
              Quick Links
              <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Services', path: '/services/business-setup' },
                { name: 'Blog', path: '/blog' },
                { name: 'Contact', path: '/contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-all duration-300 hover:translate-x-1 group"
                  >
                    <ChevronRight size={16} className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#2475A9] relative inline-block">
              Our Services
              <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-green-500"></span>
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Business Setup', path: '/services/business-setup' },
                { name: 'Visa Services', path: '/services/visa-services' },
                { name: 'Golden Visa', path: '/services/golden-visa' },
                { name: 'Family Visa', path: '/services/family-visa' },
                { name: 'Attestation', path: '/services/attestation' },
                { name: 'Translation Services', path: '/services/translation' },
                { name: 'Amer Services', path: '/services/amer-tasheel' },
                { name: 'PRO Services', path: '/services/pro-services' }
              ].map((service, index) => (
                <li key={index}>
                  <div className="flex items-center gap-2 text-gray-800 hover:text-gray-700 transition-all duration-300 hover:translate-x-1 group cursor-pointer">

                    <Link to={service.path} className="flex items-center gap-2 text-gray-900 hover:text-gray-700 transition-all duration-300 hover:translate-x-1 group">
                      <ChevronRight size={16} className="text-green-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span>{service.name}</span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-[#2475A9] relative inline-block">
              Contact Us
              <span className="absolute bottom-0 right-0 w-1/2 h-0.5 bg-purple-500"></span>
            </h4>
            <div className="space-y-4">
              
              {/* Phone */}
              <a
                href="tel:+971554912339"
                className="flex items-start gap-3 group hover:bg-gray-300 p-3 rounded-lg transition-all duration-300"
              >
                <div className="bg-[#F5F5F5] p-2 rounded-lg group-hover:bg-white transition-colors">
                  <Phone size={18} className="text-[#BC9753]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-700">+971 55 491 2339</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@easyset.ae"
                className="flex items-start gap-3 group hover:bg-gray-300 p-3 rounded-lg transition-all duration-300"
              >
                <div className="bg-[#F5F5F5] p-2 rounded-lg group-hover:bg-white transition-colors">
                  <Mail size={18} className="text-[#BC9753]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-700">info@easyset.ae</p>
                </div>
              </a>

              {/* Address */}
              <a
                href="https://maps.google.com/?q=Al Fardan Metro Station, Sheikh Zaid Road, Dubai UAE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 group hover:bg-gray-300 p-3 rounded-lg transition-all duration-300"
              >
                <div className="bg-[#F5F5F5] p-2 rounded-lg group-hover:bg-white transition-colors">
                  <MapPin size={18} className="text-[#BC9753]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Address</p>
                  <p className="text-gray-700 text-sm">
                    Al Fardan Metro Station,<br />
                    Sheikh Zaid Road, Dubai UAE
                  </p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-800 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Easyset Business Solutions LLC. All rights reserved.
            </div>
            
            <div className="flex gap-6 text-sm">
              <Link to="/privacy" className="text-gray-700 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-700 hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/sitemap.xml" className="text-gray-700 hover:text-white transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;