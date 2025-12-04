import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -8 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group cursor-pointer overflow-hidden relative"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        {/* Icon with Background */}
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-md">
          <Icon size={32} className="text-white" />
        </div>
        
        {/* Title */}
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {desc}
        </p>
        
        {/* Arrow Icon */}
        <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 gap-1 transition-all">
          <span>Learn More</span>
          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;