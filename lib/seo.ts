// SEO Utility Functions for IT Services Company
// Comprehensive keyword clustering and SEO optimization

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: 'website' | 'article';
  schema?: any;
}

// Keyword Clusters for Pillar-Cluster SEO Structure
export const KEYWORD_CLUSTERS = {
  // Cluster 1: IT Consulting and Solutions
  IT_CONSULTING: [
    'IT consulting services',
    'IT solutions company',
    'global IT services',
    'IT outsourcing company',
    'end-to-end IT services',
    'technology consulting Europe',
    'best IT company worldwide',
    'trusted IT solutions provider',
    'scalable IT services',
    'next-gen IT solutions',
    'enterprise IT solutions',
    'tech companies in Nairobi',
    'IT solutions in Kenya',
    'IT solutions company Kenya',
    'IT solutions company Africa',
    'IT solutions company Europe',
    'IT solutions company USA',
    'IT solutions company Canada',
    'IT solutions company Australia',
    'IT solutions company UK',
    'IT solutions company Germany',
    'IT solutions company France'
  ],

  // Cluster 2: Software Development
  SOFTWARE_DEVELOPMENT: [
    'custom software development',
    'offshore software development',
    'enterprise software company',
    'leading software development firm',
    'progressive web apps',
    'custom software development Europe',
    'custom software development Kenya',
    'custom software development USA',
    'custom software development Canada',
    'custom software development Australia',
    'custom software development UK',
    'custom software development Germany',
    'custom software development France',
    'offshore software development Africa',
    'offshore software development Europe',
    'offshore software development USA',
    'offshore software development Canada',
    'offshore software development Australia',
    'offshore software development UK',
    'offshore software development Germany',
    'offshore software development France'
  ],

  // Cluster 3: App Development
  APP_DEVELOPMENT: [
    'mobile app development company',
    'Android app development',
    'iOS app development',
    'cross-platform app development',
    'Flutter app development',
    'React development services',
    'Node.js developers',
    'mobile app development company Africa',
    'mobile app development company Australia',
    'mobile app development company USA',
    'mobile app development company Canada',
    'mobile app development company UK',
    'mobile app development company Germany',
    'mobile app development company France',
    'Android app development Kenya',
    'Android app development Australia',
    'Android app development USA',
    'Android app development Canada',
    'Android app development UK',
    'Android app development Germany',
    'Android app development France',
    'iOS app development Kenya',
    'iOS app development Australia',
    'iOS app development USA',
    'iOS app development Canada',
    'iOS app development UK',
    'iOS app development Germany',
    'iOS app development France',
    'Flutter app development Kenya',
    'Flutter app development Africa',
    'Flutter app development Europe',
    'Flutter app development USA',
    'Flutter app development Canada',
    'Flutter app development UK',
    'Flutter app development Germany',
    'Flutter app development France',
    'React development services Kenya',
    'React development services USA',
    'React development services Canada',
    'React development services UK',
    'React development services Germany',
    'React development services France',
    'Node.js developers Kenya',
    'Node.js developers Africa',
    'Node.js developers Europe',
    'Node.js developers USA',
    'Node.js developers Canada',
    'Node.js developers UK',
    'Node.js developers Germany',
    'Node.js developers France'
  ],

  // Cluster 4: Web Development
  WEB_DEVELOPMENT: [
    'web development company',
    'ecommerce website development',
    'web3 development services',
    'web development company Africa',
    'web development company Europe',
    'web development company USA',
    'web development company Canada',
    'web development company UK',
    'web development company Germany',
    'web development company France',
    'ecommerce website development Kenya',
    'ecommerce website development Africa',
    'ecommerce website development Europe',
    'ecommerce website development USA',
    'ecommerce website development Canada',
    'ecommerce website development UK',
    'ecommerce website development Germany',
    'ecommerce website development France',
    'web3 development services Kenya',
    'web3 development services Africa',
    'web3 development services Europe',
    'web3 development services USA',
    'web3 development services Canada',
    'web3 development services UK',
    'web3 development services Germany',
    'web3 development services France'
  ],

  // Cluster 5: Cloud Services
  CLOUD_SERVICES: [
    'cloud application development',
    'cloud migration services',
    'cloud infrastructure management',
    'AWS cloud consulting',
    'Azure cloud services',
    'Google Cloud partner',
    'cloud security provider',
    'cloud application development Kenya',
    'cloud application development Africa',
    'cloud application development Europe',
    'cloud application development USA',
    'cloud application development Canada',
    'cloud application development UK',
    'cloud application development Germany',
    'cloud application development France',
    'AWS cloud consulting Kenya',
    'AWS cloud consulting Africa',
    'AWS cloud consulting Europe',
    'AWS cloud consulting USA',
    'AWS cloud consulting Canada',
    'AWS cloud consulting UK',
    'AWS cloud consulting Germany',
    'AWS cloud consulting France',
    'Azure cloud services Kenya',
    'Azure cloud services Africa',
    'Azure cloud services Europe',
    'Azure cloud services USA',
    'Azure cloud services Canada',
    'Azure cloud services UK',
    'Azure cloud services Germany',
    'Azure cloud services France',
    'Google Cloud partner Kenya',
    'Google Cloud partner Africa',
    'Google Cloud partner Europe',
    'Google Cloud partner USA',
    'Google Cloud partner Canada',
    'Google Cloud partner UK',
    'Google Cloud partner Germany',
    'Google Cloud partner France'
  ],

  // Cluster 6: Cybersecurity
  CYBERSECURITY: [
    'cybersecurity company',
    'IT security solutions',
    'penetration testing services',
    'ethical hacking company',
    'data protection solutions',
    'managed security services',
    'SOC as a service',
    'cyber threat management',
    'network security services',
    'cybersecurity company Kenya',
    'cybersecurity company Africa',
    'cybersecurity company Europe',
    'cybersecurity company USA',
    'cybersecurity company Canada',
    'cybersecurity company UK',
    'cybersecurity company Germany',
    'cybersecurity company France',
    'IT security solutions Kenya',
    'IT security solutions Africa',
    'IT security solutions Europe',
    'IT security solutions USA',
    'IT security solutions Canada',
    'IT security solutions UK',
    'IT security solutions Germany',
    'IT security solutions France',
    'penetration testing services Kenya',
    'penetration testing services Africa',
    'penetration testing services Europe',
    'penetration testing services USA',
    'penetration testing services Canada',
    'penetration testing services UK',
    'penetration testing services Germany',
    'penetration testing services France'
  ],

  // Cluster 7: AI and Machine Learning
  AI_ML: [
    'AI development company',
    'machine learning services',
    'natural language processing solutions',
    'AI chatbot development',
    'computer vision services',
    'AI development company Kenya',
    'AI development company Africa',
    'AI development company Europe',
    'AI development company USA',
    'AI development company Canada',
    'AI development company UK',
    'AI development company Germany',
    'AI development company France',
    'machine learning services Kenya',
    'machine learning services Africa',
    'machine learning services Europe',
    'machine learning services USA',
    'machine learning services Canada',
    'machine learning services UK',
    'machine learning services Germany',
    'machine learning services France',
    'natural language processing solutions Kenya',
    'natural language processing solutions Africa',
    'natural language processing solutions Europe',
    'natural language processing solutions USA',
    'natural language processing solutions Canada',
    'natural language processing solutions UK',
    'natural language processing solutions Germany',
    'natural language processing solutions France'
  ],

  // Cluster 8: Emerging Technologies
  EMERGING_TECH: [
    'blockchain development company',
    'IoT solutions provider',
    'metaverse development company',
    'blockchain development company Kenya',
    'blockchain development company Africa',
    'blockchain development company Europe',
    'blockchain development company USA',
    'blockchain development company Canada',
    'blockchain development company UK',
    'blockchain development company Germany',
    'blockchain development company France',
    'IoT solutions provider Kenya',
    'IoT solutions provider Africa',
    'IoT solutions provider Europe',
    'IoT solutions provider USA',
    'IoT solutions provider Canada',
    'IoT solutions provider UK',
    'IoT solutions provider Germany',
    'IoT solutions provider France',
    'metaverse development company Kenya',
    'metaverse development company Africa',
    'metaverse development company Europe',
    'metaverse development company USA',
    'metaverse development company Canada',
    'metaverse development company UK',
    'metaverse development company Germany',
    'metaverse development company France'
  ],

  // Cluster 9: DevOps and Containerization
  DEVOPS: [
    'DevOps consulting services',
    'Docker container services',
    'Kubernetes consulting',
    'DevOps consulting services Kenya',
    'DevOps consulting services Africa',
    'DevOps consulting services Europe',
    'DevOps consulting services USA',
    'DevOps consulting services Canada',
    'DevOps consulting services UK',
    'DevOps consulting services Germany',
    'DevOps consulting services France',
    'Docker container services Kenya',
    'Docker container services Africa',
    'Docker container services Europe',
    'Docker container services USA',
    'Docker container services Canada',
    'Docker container services UK',
    'Docker container services Germany',
    'Docker container services France',
    'Kubernetes consulting Kenya',
    'Kubernetes consulting Africa',
    'Kubernetes consulting Europe',
    'Kubernetes consulting USA',
    'Kubernetes consulting Canada',
    'Kubernetes consulting UK',
    'Kubernetes consulting Germany',
    'Kubernetes consulting France'
  ],

  // Cluster 10: Industry-Specific IT Solutions
  INDUSTRY_SPECIFIC: [
    'fintech software development',
    'healthcare IT solutions',
    'retail IT consulting',
    'logistics IT solutions',
    'education technology development',
    'manufacturing IT systems',
    'government IT services',
    'real estate software solutions',
    'travel app development',
    'fintech software development Kenya',
    'fintech software development Africa',
    'fintech software development Europe',
    'fintech software development USA',
    'fintech software development Canada',
    'fintech software development UK',
    'fintech software development Germany',
    'fintech software development France',
    'healthcare IT solutions Kenya',
    'healthcare IT solutions Africa',
    'healthcare IT solutions Europe',
    'healthcare IT solutions USA',
    'healthcare IT solutions Canada',
    'healthcare IT solutions UK',
    'healthcare IT solutions Germany',
    'healthcare IT solutions France'
  ],

  // Cluster 11: Regional IT Providers (Africa/Kenya Focus)
  REGIONAL_AFRICA: [
    'Kenya IT solutions company',
    'Africa IT solutions provider',
    'Kenya cybersecurity company',
    'Africa fintech software development',
    'Kenya IT solutions company',
    'Kenya IT solutions company agency',
    'Kenya IT solutions company company',
    'Kenya IT solutions company firm',
    'Kenya IT solutions company solutions',
    'Kenya IT solutions company services',
    'Kenya IT solutions company consulting',
    'Kenya IT solutions company provider',
    'Kenya IT solutions company solutions',
    'Kenya IT solutions company agency',
    'Kenya IT solutions company company',
    'Kenya IT solutions company firm',
    'Kenya IT solutions company solutions',
    'Kenya IT solutions company services',
    'Kenya IT solutions company consulting',
    'Kenya IT solutions company provider'
  ],

  // Cluster 12: Regional IT Providers (Europe/Global)
  REGIONAL_GLOBAL: [
    'Europe IT solutions',
    'Germany web development company',
    'UK IT security solutions',
    'USA trusted IT solutions provider',
    'Australia custom IT development',
    'Europe IT solutions',
    'Europe IT solutions agency',
    'Europe IT solutions company',
    'Europe IT solutions firm',
    'Europe IT solutions solutions',
    'Europe IT solutions services',
    'Europe IT solutions consulting',
    'Europe IT solutions provider',
    'Germany web development company',
    'Germany web development company agency',
    'Germany web development company company',
    'Germany web development company firm',
    'Germany web development company solutions',
    'Germany web development company services',
    'Germany web development company consulting',
    'Germany web development company provider',
    'UK IT security solutions',
    'UK IT security solutions agency',
    'UK IT security solutions company',
    'UK IT security solutions firm',
    'UK IT security solutions solutions',
    'UK IT security solutions services',
    'UK IT security solutions consulting',
    'UK IT security solutions provider'
  ]
};

// Generate meta tags for SEO
export function generateMetaTags(config: SEOConfig): string {
  const { title, description, keywords, canonical, ogImage, ogType } = config;
  
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords.join(', ')}" />
    <meta name="robots" content="index, follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charset="UTF-8" />
    
    <!-- Canonical URL -->
    <link rel="canonical" href="${canonical}" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:site_name" content="ElegantCodes - Global IT Solutions" />
    
    <!-- Twitter Cards -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    
    <!-- Regional Targeting -->
    <link rel="alternate" hreflang="en-ke" href="${canonical.replace('/en/', '/kenya/')}" />
    <link rel="alternate" hreflang="en-eu" href="${canonical.replace('/en/', '/europe/')}" />
    <link rel="alternate" hreflang="en-us" href="${canonical.replace('/en/', '/usa/')}" />
    <link rel="alternate" hreflang="en-au" href="${canonical.replace('/en/', '/australia/')}" />
    <link rel="alternate" hreflang="en-ca" href="${canonical.replace('/en/', '/canada/')}" />
    <link rel="alternate" hreflang="en-de" href="${canonical.replace('/en/', '/germany/')}" />
    <link rel="alternate" hreflang="en-fr" href="${canonical.replace('/en/', '/france/')}" />
    <link rel="alternate" hreflang="en-gb" href="${canonical.replace('/en/', '/uk/')}" />
  `;
}

// Generate schema markup for different page types
export function generateOrganizationSchema(): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ElegantCodes",
    "url": "https://www.elegantcodes.com",
    "logo": "https://www.elegantcodes.com/logo.png",
    "description": "Global IT solutions provider offering software development, cloud services, cybersecurity, and AI solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Kenya",
      "addressLocality": "Nairobi"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254-XXX-XXX-XXX",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.linkedin.com/company/elegantcodes",
      "https://twitter.com/elegantcodes",
      "https://www.facebook.com/elegantcodes"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Comprehensive IT services including software development, cloud solutions, cybersecurity, and AI development"
    }
  });
}

export function generateServiceSchema(serviceName: string, description: string, keywords: string[]): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "ElegantCodes"
    },
    "serviceType": "IT Services",
    "areaServed": [
      "Kenya", "Africa", "Europe", "USA", "Australia", "Canada", "Germany", "France", "UK"
    ],
    "keywords": keywords.join(", ")
  });
}

export function generateLocalBusinessSchema(region: string, service: string): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `ElegantCodes - ${service} in ${region}`,
    "description": `Leading ${service} provider in ${region}, offering comprehensive IT solutions and consulting services.`,
    "address": {
      "@type": "PostalAddress",
      "addressCountry": region === "Kenya" ? "Kenya" : region === "Europe" ? "Europe" : "Global"
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": region === "Kenya" ? -1.2921 : 0,
        "longitude": region === "Kenya" ? 36.8219 : 0
      }
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "IT Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service
          }
        }
      ]
    }
  });
}

// Generate FAQ schema for service pages
export function generateFAQSchema(faqs: Array<{question: string, answer: string}>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  });
}

// Generate breadcrumb schema
export function generateBreadcrumbSchema(breadcrumbs: Array<{name: string, url: string}>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": crumb.url
    }))
  });
}

// Get random keywords from a specific cluster
export function getRandomKeywordsFromCluster(clusterName: keyof typeof KEYWORD_CLUSTERS, count: number = 5): string[] {
  const cluster = KEYWORD_CLUSTERS[clusterName];
  const shuffled = [...cluster].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Get all keywords from a specific cluster
export function getAllKeywordsFromCluster(clusterName: keyof typeof KEYWORD_CLUSTERS): string[] {
  return KEYWORD_CLUSTERS[clusterName];
}

// Get keywords by region
export function getKeywordsByRegion(region: string): string[] {
  const regionKeywords: string[] = [];
  
  Object.values(KEYWORD_CLUSTERS).forEach(cluster => {
    cluster.forEach(keyword => {
      if (keyword.toLowerCase().includes(region.toLowerCase())) {
        regionKeywords.push(keyword);
      }
    });
  });
  
  return regionKeywords;
}

// Generate title tag (50-60 characters)
export function generateTitle(primaryKeyword: string, region?: string): string {
  const base = `${primaryKeyword} Provider`;
  const regional = region ? ` | ${region} IT Solutions` : " | Global IT Solutions";
  
  let title = base + regional;
  
  if (title.length > 60) {
    title = base + " | ElegantCodes";
  }
  
  return title;
}

// Generate meta description (150-160 characters)
export function generateDescription(primaryKeyword: string, region?: string, callToAction?: string): string {
  const base = `Leading ${primaryKeyword} provider`;
  const regional = region ? ` in ${region}` : " globally";
  const services = " offering comprehensive IT solutions, consulting, and development services";
  const cta = callToAction || "Contact us for expert IT solutions today!";
  
  let description = base + regional + services + ". " + cta;
  
  if (description.length > 160) {
    description = base + regional + services + ". " + "Get expert IT solutions now!";
  }
  
  return description;
}

// Generate Article schema for blog posts
export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
  image: string;
  url: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Elegant Codes",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.elegantcodes.com/logo.png"
      }
    },
    "datePublished": article.publishedDate,
    "dateModified": article.modifiedDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": article.url
    }
  });
}

// Generate Review schema for testimonials
export function generateReviewSchema(review: {
  author: string;
  rating: number;
  reviewBody: string;
  itemReviewed: string;
  datePublished: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": 5
    },
    "reviewBody": review.reviewBody,
    "itemReviewed": {
      "@type": "Service",
      "name": review.itemReviewed
    },
    "datePublished": review.datePublished
  });
}

// Generate HowTo schema for service processes
export function generateHowToSchema(howTo: {
  title: string;
  description: string;
  steps: Array<{name: string, text: string}>;
  totalTime: string;
  difficulty: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": howTo.title,
    "description": howTo.description,
    "totalTime": howTo.totalTime,
    "difficulty": howTo.difficulty,
    "step": howTo.steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text
    }))
  });
}

// Generate SoftwareApplication schema for software services
export function generateSoftwareApplicationSchema(software: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    price: string;
    priceCurrency: string;
  };
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": software.name,
    "description": software.description,
    "applicationCategory": software.applicationCategory,
    "operatingSystem": software.operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": software.offers.price,
      "priceCurrency": software.offers.priceCurrency
    },
    "provider": {
      "@type": "Organization",
      "name": "Elegant Codes"
    }
  });
}

// Generate VideoObject schema for video content
export function generateVideoObjectSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  duration: string;
  url: string;
}): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": video.name,
    "description": video.description,
    "thumbnailUrl": video.thumbnailUrl,
    "uploadDate": video.uploadDate,
    "duration": video.duration,
    "url": video.url,
    "publisher": {
      "@type": "Organization",
      "name": "Elegant Codes"
    }
  });
} 