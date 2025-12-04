import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../types';

const BlogPage: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: 'Complete Guide to Business Setup in UAE 2024',
      date: '2024-01-15',
      excerpt: 'Everything you need to know about starting a business in the UAE, including mainland vs free zone options, licensing requirements, and step-by-step process.',
      category: 'Business Setup'
    },
    {
      title: 'Golden Visa Requirements and Application Process',
      date: '2024-01-10',
      excerpt: 'Latest updates on Golden Visa eligibility criteria, required documents, application timeline, and benefits of UAE long-term residency.',
      category: 'Visa Services'
    },
    {
      title: 'Family Visa Process Simplified: A Complete Guide',
      date: '2024-01-05',
      excerpt: 'Step-by-step guide to sponsoring your family in the UAE, including salary requirements, documentation, and processing timeline.',
      category: 'Family Visa'
    },
    {
      title: 'Understanding Document Attestation in UAE',
      date: '2023-12-28',
      excerpt: 'Comprehensive guide to document attestation process, required authorities, timeline, and tips for smooth processing.',
      category: 'Attestation'
    },
    {
      title: 'Mainland vs Free Zone: Which is Right for Your Business?',
      date: '2023-12-20',
      excerpt: 'Detailed comparison of mainland and free zone company setup options, including costs, benefits, and restrictions.',
      category: 'Business Setup'
    },
    {
      title: 'New UAE Visa Regulations 2024: What You Need to Know',
      date: '2023-12-15',
      excerpt: 'Overview of the latest changes in UAE visa regulations and how they affect residents and businesses.',
      category: 'Visa Services'
    }
  ];

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-4"
        >
          Our Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          Stay updated with the latest news, guides, and insights about UAE documentation and visa services
        </motion.p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            >
              <div className="mb-3">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {post.category}
                </span>
              </div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-900 hover:text-blue-600 transition">
                {post.title}
              </h2>
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                <Calendar size={16} />
                <span>{formatDate(post.date)}</span>
              </div>
              <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
              <button className="text-blue-600 font-semibold hover:gap-3 flex items-center gap-2 transition-all group">
                Read More 
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;