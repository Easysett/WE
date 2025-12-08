import { motion, type Variants } from 'framer-motion';
import { FileText, CheckCircle, AlertCircle, Scale, Zap, Users, Lock, BarChart3 } from 'lucide-react';

const TermsConditionsPage = () => {
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
      icon: FileText,
      title: 'Acceptance of Terms',
      content: 'By accessing and using this website and our services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by the above, please do not use this service.',
      points: ['Agreement Binding', 'Legal Terms', 'Service Usage', 'Compliance Required', 'Acceptance Consent']
    },
    {
      icon: Scale,
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials on EasySet\'s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.',
      points: ['Limited License', 'Personal Use Only', 'Non-Commercial', 'Temporary Access', 'Intellectual Property']
    },
    {
      icon: AlertCircle,
      title: 'Disclaimer of Warranties',
      content: 'The materials on EasySet\'s website are provided on an "as-is" basis. EasySet makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including any implied warranties or conditions of merchantability, fitness for particular purpose, or non-infringement of intellectual property.',
      points: ['As-Is Basis', 'No Warranties', 'No Guarantees', 'Service Limitations', 'Accuracy Disclaimer']
    },
    {
      icon: Zap,
      title: 'Limitations of Liability',
      content: 'In no event shall EasySet or its suppliers be liable for any damages including, without limitation, direct, indirect, special, incidental, or consequential damages, loss of data or profits, whether in an action of contract, negligence or other torturous action arising out of or in connection with the use or performance of materials on this website.',
      points: ['Liability Caps', 'Damage Limitations', 'No Consequential Damages', 'Risk Assumption', 'Third-party Claims']
    },
    {
      icon: Users,
      title: 'User Responsibilities',
      content: 'Users agree to provide accurate, complete, and truthful information. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree not to use our services for unlawful purposes.',
      points: ['Accurate Information', 'Account Security', 'Confidentiality', 'Lawful Use', 'Personal Responsibility']
    },
    {
      icon: Lock,
      title: 'Intellectual Property Rights',
      content: 'All content on our website, including text, graphics, logos, images, and software, is the property of EasySet or its content suppliers and is protected by international copyright laws.',
      points: ['Copyright Protection', 'Trademark Rights', 'Content Ownership', 'Reproduction Restrictions', 'License Grant']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1554224311-beee415c15cb?q=80&w=2070"
            alt="Terms & Conditions"
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
              Terms & <span className="text-[#2476AA] font-[viga]">Conditions</span>
            </motion.h1>
            
            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md"
            >
              Please read these terms carefully before using our services
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
              Welcome to <span className="text-[#2476AA] font-[viga]">EasySet</span>. These Terms and Conditions ("Terms") govern your access to and use of our website, applications, and services. By accessing and using our services, you agree to comply with these terms and all applicable laws and regulations.
            </p>
            <p>
              EasySet reserves the right to modify these terms at any time. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes. We encourage you to review these terms periodically to stay informed about your rights and responsibilities.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Terms Sections */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-7xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Our <span className="text-[#BD9855]">Terms & Conditions</span>
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

      {/* Additional Terms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Important <span className="text-[#BD9855]">Policies</span>
            </h2>
            
            <div className="space-y-8">
              {/* Service Changes */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Service Modifications</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  EasySet reserves the right to modify or discontinue our services with or without notice. We shall not be liable to you or to any third party for any modification, suspension, or discontinuance of our services.
                </p>
              </motion.div>

              {/* Payment Terms */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Payment Terms</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-justify mb-4">
                  All fees and charges are payable in accordance with the pricing and payment terms specified for our services. We accept various payment methods and reserve the right to refuse service if payment is not received.
                </p>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>• Payment must be made before service commencement</p>
                  <p>• Refund policy applies only within specified timeframes</p>
                  <p>• Late payments may result in service suspension</p>
                </div>
              </motion.div>

              {/* Prohibited Conduct */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Prohibited Conduct</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-justify mb-4">
                  You agree not to engage in any of the following prohibited behaviors:
                </p>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p>• Harassing or causing harm to our personnel</p>
                  <p>• Providing false or fraudulent information</p>
                  <p>• Attempting to gain unauthorized access to our systems</p>
                  <p>• Sharing your account credentials with unauthorized persons</p>
                  <p>• Using our services for illegal purposes</p>
                </div>
              </motion.div>

              {/* Indemnification */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lock className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Indemnification</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  You agree to indemnify and hold harmless EasySet, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of our services or violation of these terms.
                </p>
              </motion.div>

              {/* Governing Law */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#F5F5F5] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Scale className="w-6 h-6 text-[#BD9855]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Governing Law</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  These Terms and Conditions are governed by and construed in accordance with the laws of the United Arab Emirates, without regard to its conflict of law provisions. Any legal action or proceeding shall be subject to the exclusive jurisdiction of the courts in the UAE.
                </p>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                whileHover={{ y: -4 }}
                className="group bg-gradient-to-r from-[#2475A9]/5 to-[#BD9855]/5 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 p-8"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#2475A9] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Questions or Concerns?</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg mb-4">
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-semibold">Email:</span> support@easyset.ae</p>
                  <p><span className="font-semibold">Address:</span> EasySet Documentation Services, UAE</p>
                  <p><span className="font-semibold">Business Hours:</span> Sunday to Thursday, 9:00 AM - 6:00 PM</p>
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
            Agreement Acceptance
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            By using our website and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.
          </p>
          <p className="text-white/80">
            <span className="text-[#BD9855]">Last Updated:</span> December 2024
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;