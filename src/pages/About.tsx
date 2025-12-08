import { motion, type Variants } from 'framer-motion';
import { Check, Target, Award, Users, Heart, Shield, Zap } from 'lucide-react';
import WhyChooseUs from '../components/WhyChooseUs';
import CTASection from '../components/CTASection';

const AboutPage = () => {
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
      transition: { type: 'spring' as const, stiffness: 300, damping: 25 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069"
            alt="About EasySet"
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
              About <span className="text-[#2476AA] font-[viga]">Easyset</span>
            </motion.h1>
            
            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md"
            >
              Effortless Solutions, Every Time – Your trusted partner for documentation and visa services in the UAE
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

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed text-justify">
            <p>
              <span className="text-[#2476AA] font-[viga] text-medium">Easyset</span> is a trusted and professional documentation and visa services provider operating in the United Arab Emirates. With extensive industry experience, we deliver end-to-end solutions tailored for individuals and businesses navigating the UAE's regulatory and administrative requirements.
            </p>
            <p>
              Our mission is to streamline the often complex procedures involved in business setup, visa processing, attestation, and related government services. We ensure our clients enjoy a smooth, hassle-free experience while we efficiently manage all necessary paperwork and formalities—allowing them to focus on their goals with complete peace of mind.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Our Vision & <span className="text-[#BD9855]">Mission</span></h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Vision Card */}
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#2475A9]"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#F5F5F5] rounded-xl flex items-center justify-center mr-4">
                      <Target className="w-8 h-8 text-[#BD9855]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg text-justify">
                    To be the most trusted and reliable documentation and visa services provider in the UAE, known for our professionalism, efficiency, and customer-centric approach.
                  </p>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-[#2475A9]"></div>
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#F5F5F5] rounded-xl flex items-center justify-center mr-4">
                      <Award className="w-8 h-8 text-[#BC9754]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg text-justify">
                    To deliver exceptional services that exceed client expectations through innovation, expertise, and unwavering commitment to quality and compliance.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Core <span className="text-[#BD9855]">Values</span></h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-16">
              The principles that guide everything we do
            </p>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {[
                {
                  icon: Check,
                  title: 'Integrity',
                  description: 'We maintain the highest ethical standards in all our dealings and interactions.',
                  color: 'from-[#F5F5F5] to-[#F5F5F5]'
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We strive for excellence in every service we provide to our valued clients.',
                  color: 'from-[#F5F5F5] to-[#F5F5F5]'
                },
                {
                  icon: Users,
                  title: 'Transparency',
                  description: 'We believe in clear, honest communication and open dialogue with our clients.',
                  color: 'from-[#F5F5F5] to-[#F5F5F5]'
                },
                {
                  icon: Heart,
                  title: 'Customer Focus',
                  description: 'Our clients are at the heart of everything we do, driving our commitment to service.',
                  color: 'from-[#F5F5F5] to-[#F5F5F5]'
                },
                {
                  icon: Shield,
                  title: 'Reliability',
                  description: 'We deliver consistent, dependable services you can trust time and time again.',
                  color: 'from-[#F5F5F5] to-[#F5F5F5]'
                },
                {
                  icon: Zap,
                  title: 'Innovation',
                  description: 'We embrace new technologies and methods to provide efficient, modern solutions.',
                  color: 'from-[#F5F5F5] to-[#F5F5F5]'
                }
              ].map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-[#BD9855]" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{value.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
      <WhyChooseUs />
      <CTASection />
    </div>
  );
};

export default AboutPage;