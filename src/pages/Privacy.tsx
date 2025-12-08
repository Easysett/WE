import { motion, type Variants } from 'framer-motion';
import { Shield, Lock, Eye, FileText, Users, Mail, CheckCircle, AlertCircle } from 'lucide-react';

const PrivacyPolicyPage = () => {
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

  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: 'We collect information you provide directly, including personal details, contact information, and service-related data.',
      points: ['Personal Information', 'Contact Details', 'Service Information', 'Usage Data']
    },
    {
      icon: Lock,
      title: 'How We Use Your Information',
      content: 'Your information is used to provide, maintain, and improve our services, process transactions, send communications, and comply with legal obligations.',
      points: ['Service Delivery', 'Communication', 'Improvement & Analytics', 'Legal Compliance', 'Security & Fraud Prevention']
    },
    {
      icon: Shield,
      title: 'Data Security',
      content: 'We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.',
      points: ['Encryption', 'Secure Servers', 'Access Controls', 'Regular Audits', 'Security Updates']
    },
    {
      icon: Users,
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information. We may share information with trusted partners only to provide services you request.',
      points: ['Service Providers', 'Legal Requirements', 'Business Transfers', 'Your Consent', 'Aggregated Data']
    },
    {
      icon: FileText,
      title: 'Cookies & Tracking',
      content: 'Our website uses cookies and similar tracking technologies to enhance user experience, remember preferences, and analyze website usage.',
      points: ['Session Cookies', 'Persistent Cookies', 'Analytics Tracking','Cookie Control']
    },
    {
      icon: Mail,
      title: 'Your Rights & Choices',
      content: 'You have the right to access, correct, delete, or port your personal information. You can also opt-out of communications and manage your preferences.',
      points: ['Access Rights', 'Correction Rights', 'Deletion Rights', 'Opt-out Options', 'Data Portability']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070"
            alt="Privacy Policy"
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
              Privacy <span className="text-[#2476AA] font-[viga]">Policy</span>
            </motion.h1>
            
            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md"
            >
              We are committed to protecting your privacy and ensuring you have a positive experience
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
              At <span className="text-[#2476AA] font-[viga]">Easyset</span>, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and otherwise process your information across our website and services.
            </p>
            <p>
              Please read this policy carefully to understand our practices regarding your personal data. If you do not agree with our policies and practices, please do not use our website or services. Your use of our website indicates your consent to this Privacy Policy.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our <span className="text-[#BD9855]">Privacy Practices</span>
            </h2>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
            >
              {sections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -8 }}
                    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2475A9] to-[#BD9855]"></div>
                    <div className="p-8">
                      <div className="flex items-start mb-6">
                        <div className="w-16 h-16 bg-[#F5F5F5] rounded-xl flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-8 h-8 text-[#BD9855]" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mt-1">{section.title}</h3>
                      </div>
                      <p className="text-gray-700 leading-relaxed text-lg mb-6 text-justify">
                        {section.content}
                      </p>
                      <div className="space-y-3">
                        {section.points.map((point, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-[#BD9855] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Additional <span className="text-[#BD9855]">Information</span>
            </h2>
            
            <div className="space-y-8">
              {/* Data Retention */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Data Retention</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  We retain your personal information only for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. The retention period depends on the context and purposes of processing.
                </p>
              </motion.div>

              {/* Policy Updates */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Updates to This Policy</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, and other factors. We will notify you of significant changes by posting the updated policy on our website with a new effective date.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Contact Us</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  If you have questions about this Privacy Policy or our privacy practices, please contact us:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Email:</span> info@easyset.ae</p>
                  <p><span className="font-semibold">Address:</span> Easyset Business Services LLC</p>
                  <p><span className="font-semibold">Phone:</span> Available on our Contact page</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#2475A9] to-[#1e5a96] text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="container mx-auto px-4 text-center max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Your Privacy Matters to Us
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            We are committed to maintaining the confidentiality and security of your personal information. Thank you for trusting Easyset with your documentation and visa service needs.
          </p>
          <p className="text-white/80">
            <span className="text-[#BD9855]">Last Updated:</span> December 2025
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;