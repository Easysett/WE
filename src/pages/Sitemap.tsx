import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  Mail,
  ChevronRight
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const pages = [
    {
      title: 'Home',
      path: '/',
      icon: Home,
      description: 'Welcome to Easyset - Your gateway to UAE documentation services'
    },
    {
      title: 'About Us',
      path: '/about',
      icon: Users,
      description: 'Learn about our company, mission, and team'
    },
    {
      title: 'Services',
      path: '/services',
      icon: Briefcase,
      description: 'Comprehensive UAE business and visa services',
      children: [
        { title: 'Business Setup', path: '/services/business-setup' },
        { title: 'Visa Services', path: '/services/visa-services' },
        { title: 'Family Visa', path: '/services/family-visa' },
        { title: 'Golden Visa', path: '/services/golden-visa' },
        { title: 'Amer & Tasheel Services', path: '/services/amer-tasheel' },
        { title: 'Document Attestation', path: '/services/attestation' },
        { title: 'Translation Services', path: '/services/translation' },
        { title: 'Notary & Legal Services', path: '/services/notary-legal' },
        { title: 'Typing Services', path: '/services/typing' }
      ]
    },
    {
      title: 'Blog',
      path: '/blog',
      icon: FileText,
      description: 'Latest updates and insights about UAE business and visa processes'
    },
    {
      title: 'Contact Us',
      path: '/contact',
      icon: Mail,
      description: 'Get in touch with our expert team for assistance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Sitemap
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore all the pages and services available on Easyset Business Solutions
          </p>
        </motion.div>

        {/* Sitemap Content */}
        <div className="max-w-4xl mx-auto">
          {pages.map((page, index) => (
            <motion.div
              key={page.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-gray-200 mb-6 overflow-hidden"
            >
              {/* Main Page */}
              <div className="p-6 border-b border-gray-100">
                <Link 
                  to={page.path}
                  className="flex items-start gap-4 group hover:no-underline"
                >
                  <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors">
                    <page.icon size={24} className="text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {page.title}
                      </h3>
                      <ChevronRight size={20} className="text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <p className="text-gray-600">{page.description}</p>
                  </div>
                </Link>
              </div>

              {/* Subpages */}
              {page.children && (
                <div className="bg-gray-50 p-6">
                  <h4 className="font-semibold text-gray-700 mb-4">Services Included:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {page.children.map((child, childIndex) => (
                      <Link // childIndex is not used here, so it can be removed
                        key={child.path}
                        to={child.path}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all group"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {child.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* XML Sitemap Download */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              XML Sitemap for Search Engines
            </h3>
            <p className="text-gray-600 mb-6">
              For search engine optimization purposes, you can access our XML sitemap which 
              helps search engines discover and index all our pages efficiently.
            </p>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <FileText size={20} />
              View XML Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Sitemap;