// components/WhyChooseUsSimple.tsx
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface BenefitItem {
  title: string;
  description: string;
  stats?: string;
}

interface WhyChooseUsSimpleProps {
  title?: string;
  title1?: string;
  subtitle?: string;
  benefits?: BenefitItem[];
}

const WhyChooseUsSimple: React.FC<WhyChooseUsSimpleProps> = ({
  title = "Why Choose Our",
  title1 = "Services",
  subtitle = "Experience excellence with our dedicated team and proven track record",
  benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with 10+ years average UAE market experience handling complex documentation",
      stats: "15+ Certified Experts"
    },
    {
      title: "Fast Processing",
      description: "Average 24-48 hour turnaround with priority service options for urgent requirements",
      stats: "98% On-Time Delivery"
    },
    {
      title: "Client Focused",
      description: "Personalized support with dedicated relationship managers for seamless experience",
      stats: "10,000+ Happy Clients"
    },
    {
      title: "100% Secure",
      description: "Bank-level encryption and confidential handling ensuring complete privacy protection",
      stats: "Zero Security Breaches"
    },
    {
      title: "Success Guarantee",
      description: "Industry-leading success rate with satisfaction guarantee on all standard services",
      stats: "99.7% Success Rate"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock multilingual support available via multiple communication channels",
      stats: "Always Available"
    }
  ]
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[#BC9753] font-semibold text-sm tracking-wide">OUR ADVANTAGES</span>
            <div className="h-px w-8 bg-blue-600" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {title} <span className="text-[#BC9753]">{title1}</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              {/* Card */}
              <div className="h-full p-8 border border-gray-200 rounded-2xl bg-white hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                
                {/* Number Indicator */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                    <span className="text-[#BC9753] font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-100 to-transparent" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2475A9] transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {benefit.description}
                  </p>
                  
                  {/* Stats */}
                  {benefit.stats && (
                    <div className="inline-block px-4 py-2 bg-[#F5F5F5] text-[#BC9753] rounded-lg text-sm font-semibold">
                      {benefit.stats}
                    </div>
                  )}
                </div>

                {/* Bottom Border Effect */}
                <div className="mt-8 pt-6 border-t border-gray-100 group-hover:border-[#BC9753] transition-colors">
                  <div className="h-1 w-12 bg-gradient-to-r from-[#BC9753] to-[#BC9753] rounded-full group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSimple;