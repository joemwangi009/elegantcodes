export interface SEOConfig {
  title: string;
  description: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  structuredData?: Record<string, any>;
  keywords?: string[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  twitterHandle: string;
  linkedinHandle: string;
  githubHandle: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'ElegantCodes',
  description: 'Transform your business with custom IT solutions. We specialize in mobile apps, web applications, e-commerce platforms, POS systems, and business automation.',
  url: 'https://elegantcodes.com',
  ogImage: 'https://elegantcodes.com/og-image.jpg',
  twitterHandle: '@elegantcodes',
  linkedinHandle: 'elegantcodes',
  githubHandle: 'elegantcodes',
  phone: '+1-555-123-4567',
  email: 'info@elegantcodes.com',
  address: {
    street: '123 Tech Street',
    city: 'San Francisco',
    state: 'CA',
    zip: '94105',
    country: 'US'
  }
};

export function generateCanonicalUrl(path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

export function generateMetaTags(config: SEOConfig) {
  const {
    title,
    description,
    canonical,
    noindex = false,
    nofollow = false,
    ogImage,
    ogType = 'website',
    twitterCard = 'summary_large_image',
    keywords = []
  } = config;

  const canonicalUrl = canonical || generateCanonicalUrl();
  const fullTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  const fullDescription = description.length > 160 ? `${description.substring(0, 157)}...` : description;

  return {
    title: fullTitle,
    description: fullDescription,
    canonical: canonicalUrl,
    robots: `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`,
    keywords: keywords.join(', '),
    og: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      image: ogImage || siteConfig.ogImage,
      type: ogType,
      siteName: siteConfig.name,
      locale: 'en_US'
    },
    twitter: {
      card: twitterCard,
      site: siteConfig.twitterHandle,
      title: fullTitle,
      description: fullDescription,
      image: ogImage || siteConfig.ogImage
    }
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      email: siteConfig.email,
      availableLanguage: 'English'
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: siteConfig.address.country
    },
    sameAs: [
      `https://linkedin.com/company/${siteConfig.linkedinHandle}`,
      `https://twitter.com/${siteConfig.twitterHandle}`,
      `https://github.com/${siteConfig.githubHandle}`
    ],
    offers: [
      {
        '@type': 'Service',
        name: 'Custom Software Development',
        description: 'Tailored software solutions for businesses'
      },
      {
        '@type': 'Service',
        name: 'Mobile App Development',
        description: 'iOS and Android mobile applications'
      },
      {
        '@type': 'Service',
        name: 'E-commerce Solutions',
        description: 'Online store platforms and e-commerce development'
      },
      {
        '@type': 'Service',
        name: 'POS Systems',
        description: 'Advanced point-of-sale solutions'
      },
      {
        '@type': 'Service',
        name: 'Business Automation',
        description: 'Streamline operations with custom automation'
      }
    ]
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteConfig.url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  url: string;
  category: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`
      }
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url
    },
    articleSection: article.category
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  category: string;
  url: string;
  image: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    areaServed: 'Worldwide',
    serviceType: service.category,
    url: service.url,
    image: service.image
  };
}

export function generatePortfolioSchema(project: {
  name: string;
  description: string;
  category: string;
  url: string;
  image: string;
  technologies: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    creator: {
      '@type': 'Organization',
      name: siteConfig.name
    },
    genre: project.category,
    url: project.url,
    image: project.image,
    keywords: project.technologies.join(', '),
    dateCreated: new Date().toISOString().split('T')[0]
  };
}

export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
} 