import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const StatsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  
  const [clients, setClients] = useState(0);
  const [visas, setVisas] = useState(0);
  const [companies, setCompanies] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimatedRef.current) return;

    hasAnimatedRef.current = true;

    // Animate 5000+
    const animateClients = () => {
      let start = 0;
      const end = 5000;
      const duration = 10000;
      const increment = end / (duration / 16);
      
      const counter = () => {
        start += increment;
        if (start < end) {
          setClients(Math.floor(start));
          requestAnimationFrame(counter);
        } else {
          setClients(end);
        }
      };
      requestAnimationFrame(counter);
    };

    // Animate 10000+
    const animateVisas = () => {
      let start = 0;
      const end = 10000;
      const duration = 25000;
      const increment = end / (duration / 16);
      
      const counter = () => {
        start += increment;
        if (start < end) {
          setVisas(Math.floor(start));
          requestAnimationFrame(counter);
        } else {
          setVisas(end);
        }
      };
      setTimeout(() => requestAnimationFrame(counter), 300);
    };

    // Animate 50+
    const animateCompanies = () => {
      let start = 0;
      const end = 50;
      const duration = 1500;
      const increment = end / (duration / 16);
      
      const counter = () => {
        start += increment;
        if (start < end) {
          setCompanies(Math.floor(start));
          requestAnimationFrame(counter);
        } else {
          setCompanies(end);
        }
      };
      setTimeout(() => requestAnimationFrame(counter), 600);
    };

    animateClients();
    animateVisas();
    animateCompanies();
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Happy Clients */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-[#BC9753] mb-2">
              {clients}
              <span className="ml-1">+</span>
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </motion.div>

          {/* Visas Processed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-[#BC9753] mb-2">
              {visas}
              <span className="ml-1">+</span>
            </div>
            <div className="text-gray-600">Visas Processed</div>
          </motion.div>

          {/* Companies Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-[#BC9753] mb-2">
              {companies}
              <span className="ml-1">+</span>
            </div>
            <div className="text-gray-600">Companies Setup</div>
          </motion.div>

          {/* Customer Support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-[#BC9753] mb-2">
              24
              <span className="ml-1">/7</span>
            </div>
            <div className="text-gray-600">Customer Support</div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
