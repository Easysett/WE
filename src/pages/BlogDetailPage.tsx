import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin, Mail, Phone } from 'lucide-react';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Blog posts data
  const blogPosts: Record<string, any> = {
    'business-setup-uae-2024': {
      title: 'Complete Guide to Business Setup in UAE 2024',
      date: '2024-01-15',
      author: 'EasySet Team',
      category: 'Business Setup',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      content: `
        <h2>Introduction to Business Setup in UAE</h2>
        <p>The United Arab Emirates has become one of the most attractive destinations for entrepreneurs and businesses worldwide. With its strategic location, world-class infrastructure, and business-friendly policies, the UAE offers exceptional opportunities for business growth and expansion.</p>
        
        <p>In this comprehensive guide, we'll walk you through everything you need to know about setting up a business in the UAE in 2024, including the latest regulations, costs, and step-by-step procedures.</p>

        <h2>Why Choose UAE for Your Business?</h2>
        <p>The UAE offers numerous advantages for businesses:</p>
        <ul>
          <li><strong>Strategic Location:</strong> Gateway between East and West, perfect for international trade</li>
          <li><strong>Zero Corporate Tax:</strong> Most free zones offer 0% corporate tax for up to 50 years</li>
          <li><strong>100% Foreign Ownership:</strong> Recent changes allow full foreign ownership in many sectors</li>
          <li><strong>World-Class Infrastructure:</strong> State-of-the-art facilities and logistics</li>
          <li><strong>Diverse Economy:</strong> Opportunities across multiple sectors</li>
          <li><strong>Political Stability:</strong> Safe and secure business environment</li>
        </ul>

        <h2>Types of Business Entities in UAE</h2>
        
        <h3>1. Mainland Company</h3>
        <p>A mainland company allows you to conduct business anywhere in the UAE and internationally. Key features include:</p>
        <ul>
          <li>Can trade within UAE and internationally</li>
          <li>No restrictions on office location</li>
          <li>Can participate in government tenders</li>
          <li>Requires a local service agent (for some activities)</li>
          <li>Subject to UAE corporate tax regulations</li>
        </ul>

        <h3>2. Free Zone Company</h3>
        <p>Free zones offer special incentives and benefits for businesses:</p>
        <ul>
          <li>100% foreign ownership</li>
          <li>0% corporate and personal income tax</li>
          <li>100% repatriation of capital and profits</li>
          <li>No currency restrictions</li>
          <li>Simplified company setup process</li>
          <li>Access to world-class business infrastructure</li>
        </ul>

        <h2>Step-by-Step Business Setup Process</h2>
        <p>Follow these essential steps to establish your business in the UAE successfully.</p>

        <h2>Why Choose EasySet for Your Business Setup?</h2>
        <p>At EasySet, we simplify the entire business setup process with expert guidance, complete documentation support, and competitive pricing.</p>

        <h2>Contact EasySet for Expert Assistance</h2>
        <p>Ready to start your business in UAE? Our expert team is here to guide you through every step of the process. Contact us today!</p>
      `
    },
    'golden-visa-requirements': {
      title: 'Golden Visa Requirements and Application Process',
      date: '2024-01-10',
      author: 'EasySet Team',
      category: 'Visa Services',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074',
      content: `
        <h2>Understanding the UAE Golden Visa</h2>
        <p>The UAE Golden Visa is a long-term residence visa that enables foreign nationals to live, work, and study in the UAE without the need for a national sponsor. This prestigious visa offers 5 or 10-year renewable residence permits.</p>

        <h2>Who is Eligible for the Golden Visa?</h2>
        
        <h3>1. Investors</h3>
        <p>Investors can qualify through:</p>
        <ul>
          <li>Public investment of at least AED 10 million in an investment fund</li>
          <li>Property investment of at least AED 2 million</li>
          <li>Investment in existing or new commercial companies valued at not less than AED 500,000</li>
        </ul>

        <h3>2. Entrepreneurs</h3>
        <p>Entrepreneurs must demonstrate previous or current project with minimum capital of AED 500,000 and approval from an accredited UAE business incubator.</p>

        <h3>3. Specialized Talents</h3>
        <p>Individuals in specialized fields including doctors, scientists, artists, engineers, and technology experts with valid employment contracts.</p>

        <h2>Key Benefits of the Golden Visa</h2>
        <ul>
          <li><strong>Long-term Residency:</strong> 5 or 10-year renewable visa</li>
          <li><strong>No Sponsor Required:</strong> Complete independence</li>
          <li><strong>Family Inclusion:</strong> Sponsor spouse, children, and parents</li>
          <li><strong>Unlimited Travel:</strong> No maximum stay outside UAE period</li>
        </ul>

        <h2>Application Process</h2>
        <p>Step-by-step guide to applying for your Golden Visa with EasySet's expert assistance.</p>

        <h2>How EasySet Can Help</h2>
        <p>Our comprehensive Golden Visa services include eligibility assessment, document preparation, application submission, and post-visa support.</p>

        <h2>Let EasySet Help You</h2>
        <p>Ready to apply for your Golden Visa? Contact EasySet today for a free consultation! Call us: +971 55 491 2339</p>
      `
    },
    'family-visa-process-guide': {
      title: 'Family Visa Process Simplified: A Complete Guide',
      date: '2024-01-05',
      author: 'EasySet Team',
      category: 'Family Visa',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070',
      content: `
        <h2>Introduction to Family Visa in UAE</h2>
        <p>Sponsoring your family to live with you in the UAE is one of the most rewarding experiences. This comprehensive guide will walk you through the entire family visa sponsorship process.</p>

        <h2>Eligibility Criteria</h2>
        <p>To sponsor your family in the UAE, you must meet certain requirements:</p>
        <ul>
          <li>Minimum salary requirement (varies by emirate)</li>
          <li>Valid residence visa</li>
          <li>Suitable accommodation</li>
          <li>Health insurance for family members</li>
        </ul>

        <h2>Required Documents</h2>
        <p>Complete list of documents needed for family visa application including marriage certificates, birth certificates, passport copies, and more.</p>

        <h2>Step-by-Step Process</h2>
        <p>Follow our detailed guide to successfully sponsor your family members.</p>

        <h2>Processing Timeline and Costs</h2>
        <p>Understand the timeline and budget required for family visa processing.</p>

        <h2>Contact EasySet for Assistance</h2>
        <p>Our team can help you with every step of the family visa process. Get in touch today!</p>
      `
    }
  };

  const currentPost = blogPosts[slug || 'business-setup-uae-2024'];

  // If post doesn't exist, redirect to blog page
  if (!currentPost) {
    navigate('/blog');
    return null;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={currentPost.image}
            alt={currentPost.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => navigate('/blog')}
              className="flex items-center gap-2 text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Blog
            </motion.button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                {currentPost.category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg"
            >
              {currentPost.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-white/90"
            >
              <div className="flex items-center gap-2">
                <User size={18} />
                <span>{currentPost.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} />
                <span>{new Date(currentPost.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={18} />
                <span>{currentPost.readTime}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="lg:col-span-3"
            >
              <div 
                className="prose prose-lg max-w-none
                  prose-headings:text-gray-900 prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-[#2576AA]
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
                  prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
                  prose-ul:my-6 prose-ul:space-y-2
                  prose-li:text-gray-700 prose-li:leading-relaxed
                  prose-strong:text-gray-900 prose-strong:font-semibold"
                dangerouslySetInnerHTML={{ __html: currentPost.content }}
              />

              {/* Share Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Share this article</h3>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                    Facebook
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                    <Twitter size={20} />
                    Twitter
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                    <Linkedin size={20} />
                    LinkedIn
                  </button>
                </div>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-12 p-8 bg-gradient-to-r from-[#2576AA] to-[#1a5a85] rounded-2xl text-white"
              >
                <h3 className="text-2xl font-bold mb-3">Need Help with Your Application?</h3>
                <p className="mb-6 text-white/90">
                  Our expert team is ready to assist you. Get in touch today for a free consultation!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="px-6 py-3 bg-white text-[#2576AA] rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Contact Us
                  </Link>
                  <button className="px-6 py-3 bg-[#BC9754] text-white rounded-lg font-semibold hover:bg-[#a88545] transition-colors">
                    WhatsApp Us
                  </button>
                </div>
              </motion.div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Share2 size={20} className="text-[#2576AA]" />
                    Quick Links
                  </h3>
                  <div className="space-y-3">
                    <Link to="/contact" className="block text-sm text-gray-700 hover:text-[#2576AA] transition-colors">
                      Contact Information
                    </Link>
                    <Link to="/services/business-setup" className="block text-sm text-gray-700 hover:text-[#2576AA] transition-colors">
                      Our Services
                    </Link>
                    <Link to="/contact" className="block text-sm text-gray-700 hover:text-[#2576AA] transition-colors">
                      Get a Quote
                    </Link>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#2576AA] to-[#1a5a85] p-6 rounded-xl text-white">
                  <h3 className="text-lg font-bold mb-3">Have Questions?</h3>
                  <p className="text-sm text-white/90 mb-4">
                    Our team is here to help you 24/7
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone size={16} />
                      <span>+971 55 491 2339</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail size={16} />
                      <span>info@easyset.ae</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;