import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search, Mail } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-gray-800 relative">
            4
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block text-blue-600"
            >
              0
            </motion.span>
            4
          </h1>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the digital universe. 
            Don't worry, let's get you back on track.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Link
            to="/"
            className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
          >
            <Home size={20} />
            Back to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="group border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-8 max-w-md mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Search size={24} className="text-blue-600" />
            Need Help Finding Something?
          </h3>
          <p className="text-gray-600 mb-6">
            Can't find what you're looking for? Our team is here to help you navigate our services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/services"
              className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center"
            >
              Browse Services
            </Link>
            <Link
              to="/contact"
              className="flex-1 bg-blue-100 text-blue-700 px-6 py-3 rounded-lg font-medium hover:bg-blue-200 transition-colors flex items-center justify-center gap-2"
            >
              <Mail size={18} />
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8"
        >
          <p className="text-gray-500 text-sm mb-4">Quick Links you might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Business Setup', path: '/services/business-setup' },
              { name: 'Visa Services', path: '/services/visa-services' },
              { name: 'Contact', path: '/contact' },
              { name: 'About Us', path: '/about' }
            ].map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="text-blue-600 hover:text-blue-700 font-medium text-sm hover:underline transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/4 w-8 h-8 bg-blue-200 rounded-full opacity-50"
        />
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-3/4 right-1/4 w-6 h-6 bg-blue-300 rounded-full opacity-30"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute bottom-1/3 left-3/4 w-4 h-4 bg-blue-400 rounded-full opacity-40"
        />
      </div>
    </div>
  );
};

export default NotFound;