import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  description: string;
  ctaText: string;
  bgGradient: string;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: '/1.svg',
    title: 'Your Gateway to UAE Documentation & Visa Services',
    description: 'Professional, reliable, and efficient documentation and visa services across the UAE',
    ctaText: 'Get Started Today',
    bgGradient: 'from-blue-600 to-blue-800'
  },
  {
    id: 2,
    image: '/2.svg',
    title: 'Business Setup Made Simple',
    description: 'Complete company formation services for Mainland & Free Zone establishments',
    ctaText: 'Start Your Business',
    bgGradient: 'from-emerald-600 to-emerald-800'
  },
  {
    id: 3,
    image: '/3.png',
    title: 'Visa Services Excellence',
    description: 'Comprehensive visa solutions for individuals, families, and businesses',
    ctaText: 'Explore Visa Options',
    bgGradient: 'from-purple-600 to-purple-800'
  },
  {
    id: 4,
    image: '/4.png',
    title: 'Document Attestation & Translation',
    description: 'Certified document processing with guaranteed authenticity',
    ctaText: 'Get Documents Done',
    bgGradient: 'from-orange-600 to-orange-800'
  }
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-gradient-to-r ${heroSlides[currentSlide].bgGradient}`}
        >
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat "
            style={{ backgroundImage: `url(${heroSlides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content */}
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4 text-white">
              <div className="max-w-2xl">
                <motion.h1
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-left text-white"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-left"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 justify-start items-start"
                >
                  <Link 
                    to="/contact" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block text-lg text-center"
                  >
                    {heroSlides[currentSlide].ctaText}
                  </Link>
                  <Link 
                    to="/services" 
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 inline-block text-lg text-center"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;