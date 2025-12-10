import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';
import { feedbacks } from '../data/feedbacks';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(2);

  // Responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else {
        setItemsPerView(2);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const maxIndex = Math.ceil(feedbacks.length / itemsPerView) - 1;
  const startIdx = currentIndex * itemsPerView;
  const visibleFeedbacks = feedbacks.slice(startIdx, startIdx + itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 justify-center mb-6">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-6 h-6 ${
              index < rating
                ? 'fill-[#BD9855] text-[#BD9855]'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="py-20 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Side - Title and Navigation */}
            <div className="lg:col-span-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  What Others Say<br />
                  <span className="text-[#BD9855]">About Us</span>
                </h2>
                <p className="text-gray-500 text-lg mb-8">Testimonials</p>
                
                {/* Navigation Buttons - Desktop Only */}
                <div className="hidden lg:flex gap-4">
                  <button
                    onClick={handlePrevious}
                    className="w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-700" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
                    aria-label="Next testimonials"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-700" />
                  </button>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Testimonials */}
            <div className="lg:col-span-8">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                className={`grid gap-6 ${
                  itemsPerView === 1 ? 'grid-cols-1' : 'md:grid-cols-2'
                }`}
              >
                {visibleFeedbacks.map((feedback) => (
                  <div
                    key={feedback.id}
                    className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
                  >
                    {/* Quote Icon */}
                    <Quote className="w-12 h-12 text-gray-300 absolute top-2 right-6" />
                    
                    {/* Testimonial Text */}
                    <p className="text-gray-700 leading-relaxed mb-6 text-justify min-h-[180px] flex items-center justify-center relative z-10">
                      {feedback.text}
                    </p>

                    {/* Rating */}
                    {renderStars(feedback.rating)}

                    {/* Author */}
                    <div className="text-center">
                      <h4 className="font-bold text-gray-900 text-lg uppercase tracking-wide">
                        {feedback.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Navigation Buttons - Mobile Only */}
              <div className="flex lg:hidden justify-center gap-4 mt-8">
                <button
                  onClick={handlePrevious}
                  className="w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
                  aria-label="Previous testimonials"
                >
                  <ChevronLeft className="w-6 h-6 text-gray-700" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-gray-50"
                  aria-label="Next testimonials"
                >
                  <ChevronRight className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;