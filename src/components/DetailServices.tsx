import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  image: string;
  description: string;
  features: string[];
}

const DetailServices: React.FC = () => {
  const services: Service[] = [
    {
      id: 'business-setup',
      title: 'Business Setup',
      image: '/images/hero/business.jpeg',
      description: 'Comprehensive business setup solutions for mainland and free zone companies in the UAE.',
      features: ['Company Formation', 'Trade License', 'Bank Account', 'VAT Registration']
    },
    {
      id: 'visa-services',
      title: 'Visa Services',
      image: '/images/hero/visa.png',
      description: 'Complete visa processing services for employment and domestic workers.',
      features: ['Employment Visa', 'Visa Renewal', 'Status Change', 'Medical Testing']
    },
    {
      id: 'family-visa',
      title: 'Family Visa',
      image: '/images/hero/family-visa.jpg',
      description: 'Hassle-free family sponsorship and visa services for your loved ones.',
      features: ['Spouse Visa', 'Children Visa', 'Parents Visa', 'Documentation Support']
    },
    {
      id: 'golden-visa',
      title: 'Golden Visa',
      image: '/images/hero/golden-visa.jpg',
      description: 'Long-term residency solutions through the UAE Golden Visa program.',
      features: ['Investor Visa', 'Entrepreneur Visa', 'Professional Visa', 'Student Visa']
    },
    {
      id: 'amer-tasheel',
      title: 'Amer & Tasheel Services',
      image: '/images/hero/tasheel.jpeg',
      description: 'Complete assistance with Amer and Tasheel center services.',
      features: ['Visa Stamping', 'Emirates ID', 'Status Adjustment', 'Entry Permit']
    },
    {
      id: 'attestation',
      title: 'Attestation Services',
      image: '/images/hero/attestation.jpg',
      description: 'Professional document attestation and legalization services.',
      features: ['Educational Certificates', 'Marriage Certificates', 'Commercial Documents', 'Embassy Attestation']
    },
    {
      id: 'translation',
      title: 'Translation Services',
      image: '/images/hero/translation.png',
      description: 'Certified translation services for all your documentation needs.',
      features: ['Arabic to English', 'English to Arabic', 'Legal Translation', 'Certified Translations']
    },
    {
      id: 'notary-legal',
      title: 'Notary & Legal Services',
      image: '/images/hero/legal.jpg',
      description: 'Professional notary and legal documentation services.',
      features: ['Document Notarization', 'Power of Attorney', 'Contract Drafting', 'Legal Consultation']
    },
    {
      id: 'typing',
      title: 'Typing Services',
      image: '/images/hero/typing.jpeg',
      description: 'Fast and accurate typing services for all government documents.',
      features: ['Government Forms', 'Arabic Typing', 'Application Processing', 'Express Service']
    },
    {
      id: 'travel-services',
      title: 'Travel Services',
      image: '/images/hero/travel.jpg',
      description: 'Complete travel assistance including tickets and hotel bookings.',
      features: ['Flight Tickets', 'Hotel Booking', 'Travel Insurance', 'Visa Processing']
    },
    {
      id: 'insurance-services',
      title: 'Insurance Services',
      image: '/images/hero/insurance.jpg',
      description: 'Comprehensive insurance solutions for health and travel.',
      features: ['Health Insurance', 'Travel Insurance', 'Car Insurance', 'Life Insurance']
    },
    {
      id: 'document-clearance',
      title: 'Document Clearance',
      image: '/images/hero/docu.png',
      description: 'Professional document clearance and processing services.',
      features: ['MOFA Attestation', 'Immigration Clearance', 'Customs Clearance', 'Legalization']
    },
    {
        id: 'pro-services',
        title: 'Professional Services',
        image: '/images/hero/2.png',
        description: 'Comprehensive professional services for individuals and businesses.',
        features: ['Resume Writing', 'Cover Letter Writing', 'Business Plan Writing', 'Legal Consulting']
    },
    {
        id: 'tourist-visa',
        title: 'Tourist Visa',
        image: '/images/hero/tour.png',
        description: 'Hassle-free tourist visa services for your loved ones.',
        features: ['Spouse Visa', 'Children Visa', 'Parents Visa', 'Documentation Support']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: any = {
    hidden: { opacity: 0, y: 30 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white via-blue-50/20 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="h-px w-8 bg-blue-600" />
            <span className="text-[#BC9753] font-semibold text-sm tracking-wide">OUR EXPERTISE</span>
            <div className="h-px w-8 bg-blue-600" />
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Comprehensive <span className="text-[#BC9753]">Services </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end documentation and visa solutions with expert guidance at every step
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 } 
              }}
              className="group relative h-full"
            >
              <Link to={`/services/${service.id}`} className="h-full block">
                {/* Card Background */}
                <div className="h-full rounded-2xl border border-gray-200/60 bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
                  
                  {/* Image Header Section - Optimized for 400x200px images */}
                  <div className="relative h-40 overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                    {/* Image Container with optimized sizing */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          if (target.parentElement) {
                            target.parentElement.style.background = `linear-gradient(135deg, 
                              rgb(${59 + idx * 15}, ${130 + idx * 10}, ${246 - idx * 5}) 0%, 
                              rgb(${37 + idx * 10}, ${99 + idx * 5}, ${235 - idx * 10}) 100%)`;
                          }
                        }}
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                    
                    {/* Service Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/40 to-transparent">
                      <h3 className="text-lg font-bold text-white drop-shadow-lg">
                        {service.title}
                      </h3>
                    </div>
                    
                    {/* Floating Badge */}
                    <motion.div 
                      className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ rotate: 180, scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight size={14} className="text-[#BC9753]" />
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-5 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 2).map((feature, featureIdx) => (
                        <motion.div
                          key={featureIdx}
                          initial={{ opacity: 0, x: -5 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: featureIdx * 0.1 }}
                          className="flex items-center gap-2 text-sm text-gray-600 group-hover:text-gray-800 transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#2475A9] group-hover:bg-purple-500 transition-colors flex-shrink-0" />
                          <span className="line-clamp-1 text-xs">{feature}</span>
                        </motion.div>
                      ))}
                      {service.features.length > 2 && (
                        <div className="text-xs text-[#BC9753] font-medium">
                          +{service.features.length - 2} more services
                        </div>
                      )}
                    </div>

                    {/* CTA Link */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="inline-flex items-center justify-between mt-auto pt-3 border-t border-gray-100 group-hover:border-blue-100 transition-colors"
                    >
                      <span className="text-[#BC9753] font-semibold text-xs group-hover:text-purple-600 transition-colors">
                        View Details
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#F5F5F5] group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                        <ArrowRight size={12} className="text-[#BC9753] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-200/30 transition-all duration-500 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DetailServices;