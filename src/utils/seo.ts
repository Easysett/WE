interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface ServiceSchema {
  title: string;
  description: string;
  price?: string;
  provider?: {
    name: string;
    url: string;
  };
}

interface BlogPostSchema {
  title: string;
  description: string;
  image?: string;
  author: string;
  datePublished: string;
  dateModified?: string;
}

/**
 * Update all meta tags for SEO
 */
export const updateMetaTags = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime
}: MetaTags): void => {
  try {
    document.title = title;
    const updateMetaTag = (
      selector: string,
      _attribute: string,
      content: string
    ): void => {
      let element = document.querySelector(selector);
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        if (selector.includes('property')) {
          element.setAttribute('property', selector.split('="')[1].split('"]')[0]);
        } else {
          element.setAttribute('name', selector.split('="')[1].split('"]')[0]);
        }
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Standard meta tags
    updateMetaTag('meta[name="description"]', 'content', description);
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', 'content', keywords);
    }
    if (author) {
      updateMetaTag('meta[name="author"]', 'content', author);
    }

    // Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:type"]', 'content', type);
    
    if (url) {
      updateMetaTag('meta[property="og:url"]', 'content', url);
      updateMetaTag('link[rel="canonical"]', 'href', url);
    }
    
    if (image) {
      updateMetaTag('meta[property="og:image"]', 'content', image);
      updateMetaTag('meta[property="og:image:secure_url"]', 'content', image);
      updateMetaTag('meta[property="og:image:alt"]', 'content', title);
    }

    // Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    if (image) {
      updateMetaTag('meta[name="twitter:image"]', 'content', image);
    }

    // Article specific tags
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('meta[property="article:published_time"]', 'content', publishedTime);
      }
      if (modifiedTime) {
        updateMetaTag('meta[property="article:modified_time"]', 'content', modifiedTime);
      }
      if (author) {
        updateMetaTag('meta[property="article:author"]', 'content', author);
      }
    }

    console.log(' Meta tags updated successfully');
  } catch (error) {
    console.error('Error updating meta tags:', error);
  }
};

/**
 * Generate and inject structured data (JSON-LD)
 */
const injectStructuredData = (id: string, data: Record<string, unknown>): void => {
  try {
    // Remove existing script with same ID
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    // Create and inject new script
    const script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
    
    console.log(` Structured data injected: ${id}`);
  } catch (error) {
    console.error('Error injecting structured data:', error);
  }
};

/**
 * Generate service schema
 */
export const generateServiceSchema = ({
  title,
  description,
  price,
  provider = { name: 'Easyset Business Solutions LLC', url: 'https://easyset.ae' }
}: ServiceSchema): void => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: title,
    description: description,
    provider: {
      '@type': 'Organization',
      name: provider.name,
      url: provider.url
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates'
    },
    serviceType: title,
    ...(price && { offers: {
      '@type': 'Offer',
      price: price,
      priceCurrency: 'AED'
    }})
  };

  injectStructuredData('service-schema', schema);
};

/**
 * Generate organization schema
 */
export const generateOrganizationSchema = (): void => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Easyset Business Solutions LLC',
    url: 'https://easyset.ae',
    logo: 'https://easyset.ae/logo.png',
    description: 'Professional documentation and visa services in UAE',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'AE',
      addressRegion: 'Dubai',
      addressLocality: 'Dubai'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+971-XX-XXX-XXXX',
      contactType: 'Customer Service',
      email: 'info@easyset.ae',
      availableLanguage: ['English', 'Arabic']
    },
    sameAs: [
      'https://facebook.com/easyset',
      'https://instagram.com/easyset',
      'https://linkedin.com/company/easyset'
    ]
  };

  injectStructuredData('organization-schema', schema);
};

/**
 * Generate breadcrumb schema
 */
export const generateBreadcrumbSchema = (items: BreadcrumbItem[]): void => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };

  injectStructuredData('breadcrumb-schema', schema);
};

/**
 * Generate blog post schema
 */
export const generateBlogPostSchema = ({
  title,
  description,
  image,
  author,
  datePublished,
  dateModified
}: BlogPostSchema): void => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    image: image,
    author: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Organization',
      name: 'UAE DocuVisa',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uaedocuvisa.ae/logo.png'
      }
    },
    datePublished: datePublished,
    dateModified: dateModified || datePublished
  };

  injectStructuredData('blog-post-schema', schema);
};

/**
 * Generate FAQ schema
 */
export const generateFAQSchema = (faqs: { question: string; answer: string }[]): void => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  injectStructuredData('faq-schema', schema);
};

/**
 * Generate local business schema
 */
export const generateLocalBusinessSchema = (): void => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'UAE DocuVisa',
    image: 'https://uaedocuvisa.ae/logo.png',
    '@id': 'https://uaedocuvisa.ae',
    url: 'https://uaedocuvisa.ae',
    telephone: '+971-XX-XXX-XXXX',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Office 123, Business Tower',
      addressLocality: 'Dubai',
      addressRegion: 'Dubai',
      postalCode: '00000',
      addressCountry: 'AE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.2048,
      longitude: 55.2708
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '14:00'
      }
    ],
    sameAs: [
      'https://facebook.com/uaedocuvisa',
      'https://instagram.com/uaedocuvisa',
      'https://linkedin.com/company/uaedocuvisa'
    ]
  };

  injectStructuredData('local-business-schema', schema);
};

/**
 * Update canonical URL
 */
export const updateCanonicalUrl = (url: string): void => {
  try {
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (link) {
      link.href = url;
    } else {
      link = document.createElement('link');
      link.rel = 'canonical';
      link.href = url;
      document.head.appendChild(link);
    }
    console.log(' Canonical URL updated:', url);
  } catch (error) {
    console.error('Error updating canonical URL:', error);
  }
};

/**
 * Generate sitemap entry (for dynamic generation)
 */
export const generateSitemapEntry = (
  url: string,
  priority: number = 0.5,
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' = 'weekly'
): string => {
  const lastmod = new Date().toISOString().split('T')[0];
  return `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

/**
 * Initialize SEO for page
 */
export const initializeSEO = (metaTags: MetaTags, schemaType?: 'service' | 'blog' | 'organization'): void => {
  updateMetaTags(metaTags);
  
  // Always add organization schema
  generateOrganizationSchema();
  
  // Add specific schema based on type
  if (schemaType === 'service' && metaTags.title && metaTags.description) {
    generateServiceSchema({
      title: metaTags.title,
      description: metaTags.description
    });
  } else if (schemaType === 'blog' && metaTags.title && metaTags.description) {
    generateBlogPostSchema({
      title: metaTags.title,
      description: metaTags.description,
      author: metaTags.author || 'UAE DocuVisa Team',
      datePublished: metaTags.publishedTime || new Date().toISOString(),
      dateModified: metaTags.modifiedTime,
      image: metaTags.image
    });
  }
  
  if (metaTags.url) {
    updateCanonicalUrl(metaTags.url);
  }
};

export default {
  updateMetaTags,
  generateServiceSchema,
  generateOrganizationSchema,
  generateBreadcrumbSchema,
  generateBlogPostSchema,
  generateFAQSchema,
  generateLocalBusinessSchema,
  updateCanonicalUrl,
  generateSitemapEntry,
  initializeSEO
};