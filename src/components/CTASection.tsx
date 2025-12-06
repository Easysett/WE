import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, CheckCircle2 } from 'lucide-react';

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  backgroundColor?: string;
  phoneNumber?: string;
  highlights?: string[];
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "Ready to Get Started?",
  description = "Contact us today to learn more about how we can help you with our professional services",
  primaryButtonText = "Get in Touch",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Call Us Now",
  secondaryButtonLink = "tel:+971554912339",
  backgroundColor = "bg-[#BC9753]",
  highlights = [
    "Fast & Reliable Service",
    "Expert Team",
    "24/7 Support"
  ]
}) => {
  return (
    <div className={`bg-gradient-to-r ${backgroundColor} py-32 relative overflow-hidden`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-white/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >


          {/* Content */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight"
            >
              {title}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed mb-10"
            >
              {description}
            </motion.p>

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            >
              {highlights.map((highlight, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-2 text-white/90"
                >
                  <CheckCircle2 size={20} className="text-white flex-shrink-0" />
                  <span className="font-semibold">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            {/* Primary Button */}
            <motion.a
              href={primaryButtonLink}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.94 }}
              className="group relative inline-flex items-center justify-center gap-3 bg-white text-[#BC9753] px-12 py-5 rounded-xl font-bold text-lg transition-all shadow-2xl overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-xl"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10 flex items-center gap-2">
                {primaryButtonText}
                <motion.div
                  whileHover={{ x: 6, rotate: 20 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowRight size={22} strokeWidth={2.5} />
                </motion.div>
              </span>
            </motion.a>

            {/* Phone Button */}
            <motion.a
              href={secondaryButtonLink}
              whileHover={{ scale: 1.06, y: -4 }}
              whileTap={{ scale: 0.94 }}
              className="group relative inline-flex items-center justify-center gap-3 bg-white/20 backdrop-blur-md text-white px-12 py-5 rounded-xl font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/40 hover:border-white/70"
            >
              <motion.div
                whileHover={{ rotate: 25 }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Phone size={22} strokeWidth={2.5} />
              </motion.div>
              {secondaryButtonText}
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-12 text-center"
          >
          </motion.div>
        </motion.div>
      </div>

    </div>
  );
};

export default CTASection;