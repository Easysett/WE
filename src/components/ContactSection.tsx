import React, { useState, type ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Send } from 'lucide-react';

const HomeContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });

      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#C79F57] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Info - Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-gradient-to-br from-[#2475A9] to-blue-700 rounded-full p-4 mb-4">
              <Phone className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Phone</h3>
            <a href="tel:+971554912339" className="text-[#2475A9] hover:text-blue-700 font-medium mb-2 block">
              +971 55 491 2339
            </a>
            <a href="tel:+971554650123" className="text-[#2475A9] hover:text-blue-700 font-medium">
              +971 55 465 0123
            </a>
          </motion.div>

          {/* Contact Info - Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-gradient-to-br from-[#2475A9] to-blue-700 rounded-full p-4 mb-4">
              <Mail className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <a href="mailto:info@easyset.ae" className="text-[#2475A9] hover:text-blue-700 font-medium mb-2 block">
              info@easyset.ae
            </a>
            <a href="mailto:docs@easyset.ae" className="text-[#2475A9] hover:text-blue-700 font-medium">
              docs@easyset.ae
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 p-6 rounded-lg border border-gray-200"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Send us a Message</h3>
            
            <div className="mb-3">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2475A9] focus:border-transparent transition text-sm"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2475A9] focus:border-transparent transition text-sm"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2475A9] focus:border-transparent transition text-sm"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={3}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2475A9] focus:border-transparent transition resize-none text-sm"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 p-2 bg-green-100 text-green-700 rounded-lg text-xs text-center"
              >
                Thank you! We'll be in touch soon.
              </motion.div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-3 p-2 bg-red-100 text-red-700 rounded-lg text-xs text-center">
                Error sending message. Please try again.
              </div>
            )}

            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-[#2475A9] text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <Send size={16} />
                  Send
                </>
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactSection;