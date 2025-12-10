import React from 'react';
import { motion, type Variants } from 'framer-motion';
import CTASection from '../components/CTASection';
import WhyChooseUs from '../components/WhyChooseUs';

interface Feature {
  text: string;
  image: string;
}

interface ServicePageProps {
  title: string;
  heroImage: string;
  description: string;
  features: Feature[];
}

const ServicePage: React.FC<ServicePageProps> = ({ title, heroImage, description, features }) => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = { 
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 25 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.style.background = 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)';
            }}
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Hero Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            >
              {title}
            </motion.h1>
            
            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md"
            >
              {description}
            </motion.p>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What We <span className="text-primary text-[#BC9753]">Offer</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200"
              >
                {/* Image Container with rounded top */}
                <div className="h-56 overflow-hidden relative bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={feature.image}
                    alt={feature.text}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.style.background = `linear-gradient(135deg, rgb(${59 + idx * 20}, ${130 + idx * 15}, ${246 - idx * 10}) 0%, rgb(${37 + idx * 15}, ${99 + idx * 10}, ${235 - idx * 15}) 100%)`;
                      }
                    }}
                  />
                  
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                
                {/* Content - News article style */}
                <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                  
                  {/* Main text - headline style */}
                  <h3 className="text-gray-900 font-bold leading-snug text-base line-clamp-3 group-hover:text-[#BC9753] transition-colors duration-300">
                    {feature.text}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <WhyChooseUs />
        </div>
      </div>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
};

export default ServicePage;