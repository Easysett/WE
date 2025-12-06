import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  title: string;
  date: string;
  excerpt: string;
  category: string;
  image?: string;
  slug: string;
}

const BlogPage: React.FC = () => {
  const posts: BlogPost[] = [
    {
      title: 'Complete Guide to Business Setup in UAE 2024',
      date: '2024-01-15',
      excerpt: 'Everything you need to know about starting a business in the UAE, including mainland vs free zone options, licensing requirements, and step-by-step process.',
      category: 'Business Setup',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070',
      slug: 'business-setup-uae-2024'
    },
    {
      title: 'Golden Visa Requirements and Application Process',
      date: '2024-01-10',
      excerpt: 'Latest updates on Golden Visa eligibility criteria, required documents, application timeline, and benefits of UAE long-term residency.',
      category: 'Visa Services',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074',
      slug: 'golden-visa-requirements'
    },
    {
      title: 'Family Visa Process Simplified: A Complete Guide',
      date: '2024-01-05',
      excerpt: 'Step-by-step guide to sponsoring your family in the UAE, including salary requirements, documentation, and processing timeline.',
      category: 'Family Visa',
      image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=2070',
      slug: 'family-visa-process-guide'
    },
    {
      title: 'Understanding Document Attestation in UAE',
      date: '2023-12-28',
      excerpt: 'Comprehensive guide to document attestation process, required authorities, timeline, and tips for smooth processing.',
      category: 'Attestation',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070',
      slug: 'document-attestation-uae'
    },
    {
      title: 'Mainland vs Free Zone: Which is Right for Your Business?',
      date: '2023-12-20',
      excerpt: 'Detailed comparison of mainland and free zone company setup options, including costs, benefits, and restrictions.',
      category: 'Business Setup',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070',
      slug: 'mainland-vs-free-zone'
    },
    {
      title: 'New UAE Visa Regulations 2024: What You Need to Know',
      date: '2023-12-15',
      excerpt: 'Overview of the latest changes in UAE visa regulations and how they affect residents and businesses.',
      category: 'Visa Services',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2069',
      slug: 'uae-visa-regulations-2024'
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Hero Image Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070"
            alt="Blog"
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
              Our Blog
            </motion.h1>
            
            {/* Hero Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto drop-shadow-md"
            >
              Stay updated with the latest news, guides, and insights about UAE documentation and visa services
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

      {/* Blog Posts Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <Link to={`/blog/${post.slug}`}>
                  {/* Image Container */}
                  <div className="h-56 overflow-hidden relative bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        if (target.parentElement) {
                          target.parentElement.style.background = `linear-gradient(135deg, rgb(${59 + idx * 20}, ${130 + idx * 15}, ${246 - idx * 10}) 0%, rgb(${37 + idx * 15}, ${99 + idx * 10}, ${235 - idx * 15}) 100%)`;
                        }
                      }}
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-white/95 backdrop-blur-sm text-[#2576AA] px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                      <Calendar size={16} />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#2576AA] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-justify">
                      {post.excerpt}
                    </p>
                    
                    <div className="text-[#2576AA] font-semibold flex items-center gap-2 transition-all group/btn hover:gap-3">
                      Read More 
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;