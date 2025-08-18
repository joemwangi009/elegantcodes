'use client'

import Head from 'next/head'
import { 
  generateMetaTags, 
  generateOrganizationSchema, 
  generateServiceSchema, 
  generateLocalBusinessSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  SEOConfig 
} from '@/lib/seo'

interface SEOHeadProps {
  config: SEOConfig
  breadcrumbs?: Array<{name: string, url: string}>
  faqs?: Array<{question: string, answer: string}>
  region?: string
  service?: string
}

export default function SEOHead({ 
  config, 
  breadcrumbs, 
  faqs, 
  region, 
  service 
}: SEOHeadProps) {
  const { title, description, keywords, canonical, ogImage, ogType, schema } = config

  // Generate additional schema markup based on props
  const additionalSchemas = []
  
  // Add organization schema to all pages
  additionalSchemas.push(generateOrganizationSchema())
  
  // Add service schema if service is specified
  if (service) {
    additionalSchemas.push(generateServiceSchema(service, description, keywords))
  }
  
  // Add local business schema for regional pages
  if (region && service) {
    additionalSchemas.push(generateLocalBusinessSchema(region, service))
  }
  
  // Add breadcrumb schema if breadcrumbs are provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    additionalSchemas.push(generateBreadcrumbSchema(breadcrumbs))
  }
  
  // Add FAQ schema if FAQs are provided
  if (faqs && faqs.length > 0) {
    additionalSchemas.push(generateFAQSchema(faqs))
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="ElegantCodes - Global IT Solutions" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@elegantcodes" />
      
      {/* Regional Targeting with hreflang */}
      <link rel="alternate" hrefLang="en" href={canonical} />
      <link rel="alternate" hrefLang="en-ke" href={canonical.replace('/en/', '/kenya/')} />
      <link rel="alternate" hrefLang="en-eu" href={canonical.replace('/en/', '/europe/')} />
      <link rel="alternate" hrefLang="en-us" href={canonical.replace('/en/', '/usa/')} />
      <link rel="alternate" hrefLang="en-au" href={canonical.replace('/en/', '/australia/')} />
      <link rel="alternate" hrefLang="en-ca" href={canonical.replace('/en/', '/canada/')} />
      <link rel="alternate" hrefLang="en-de" href={canonical.replace('/en/', '/germany/')} />
      <link rel="alternate" hrefLang="en-fr" href={canonical.replace('/en/', '/france/')} />
      <link rel="alternate" hrefLang="en-gb" href={canonical.replace('/en/', '/uk/')} />
      
      {/* Additional Meta Tags for IT Services */}
      <meta name="author" content="ElegantCodes" />
      <meta name="company" content="ElegantCodes" />
      <meta name="category" content="IT Services" />
      <meta name="classification" content="Technology" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Mobile and Performance Optimization */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="ElegantCodes" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Schema.org Structured Data */}
      {additionalSchemas.map((schemaMarkup, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: schemaMarkup }}
        />
      ))}
      
      {/* Custom schema if provided */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
      
      {/* Additional SEO Meta Tags */}
      <meta name="google-site-verification" content="your-verification-code" />
      <meta name="msvalidate.01" content="your-bing-verification-code" />
      <meta name="yandex-verification" content="your-yandex-verification-code" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      
      {/* Business Information */}
      <meta property="og:street-address" content="Nairobi, Kenya" />
      <meta property="og:locality" content="Nairobi" />
      <meta property="og:region" content="Nairobi" />
      <meta property="og:postal-code" content="00100" />
      <meta property="og:country-name" content="Kenya" />
      
      {/* Contact Information */}
      <meta property="og:phone_number" content="+254-XXX-XXX-XXX" />
      <meta property="og:email" content="info@elegantcodes.com" />
      
      {/* Business Hours */}
      <meta property="og:business_hours" content="Monday-Friday 9:00 AM-6:00 PM EAT" />
      
      {/* Service Areas */}
      <meta name="geo.region" content="KE" />
      <meta name="geo.placename" content="Nairobi" />
      <meta name="geo.position" content="-1.2921;36.8219" />
      <meta name="ICBM" content="-1.2921, 36.8219" />
      
      {/* Language and Region */}
      <meta httpEquiv="content-language" content="en" />
      <meta name="language" content="English" />
      <meta name="coverage" content="Worldwide" />
      <meta name="target" content="all" />
      
      {/* Content Type and Purpose */}
      <meta name="content-type" content="text/html" />
      <meta name="content-language" content="en" />
      <meta name="content-script-type" content="text/javascript" />
      <meta name="content-style-type" content="text/css" />
      
      {/* Cache Control */}
      <meta httpEquiv="cache-control" content="public" />
      <meta httpEquiv="expires" content="86400" />
      <meta httpEquiv="pragma" content="no-cache" />
      
      {/* Security Headers */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
      
      {/* Performance and Analytics */}
      <meta name="google-analytics" content="your-ga-code" />
      <meta name="google-tag-manager" content="your-gtm-code" />
      
      {/* Additional Business Keywords */}
      <meta name="business:contact_data:street_address" content="Nairobi, Kenya" />
      <meta name="business:contact_data:locality" content="Nairobi" />
      <meta name="business:contact_data:region" content="Nairobi" />
      <meta name="business:contact_data:postal_code" content="00100" />
      <meta name="business:contact_data:country_name" content="Kenya" />
      <meta name="business:contact_data:phone_number" content="+254-XXX-XXX-XXX" />
      <meta name="business:contact_data:email" content="info@elegantcodes.com" />
      
      {/* Service Areas and Specializations */}
      <meta name="business:service_area:locality" content="Nairobi, Kenya, Africa, Europe, USA, Australia, Canada, Germany, France, UK" />
      <meta name="business:service_area:region" content="Global" />
      <meta name="business:service_area:country" content="Worldwide" />
      
      {/* Business Categories */}
      <meta name="business:category" content="IT Services, Software Development, Web Development, Mobile App Development, Cloud Services, Cybersecurity, AI Development, DevOps, Consulting" />
      
      {/* Business Hours and Availability */}
      <meta name="business:business_hours:day" content="Monday" />
      <meta name="business:business_hours:start" content="09:00" />
      <meta name="business:business_hours:end" content="18:00" />
      <meta name="business:business_hours:timezone" content="EAT" />
      
      {/* Service Descriptions */}
      <meta name="service:name" content="IT Consulting and Solutions" />
      <meta name="service:description" content="Comprehensive IT services including software development, cloud solutions, cybersecurity, and AI development" />
      <meta name="service:provider" content="ElegantCodes" />
      <meta name="service:area" content="Global" />
      
      {/* Technology Stack */}
      <meta name="technology:programming_languages" content="JavaScript, TypeScript, Python, Java, C#, PHP, Ruby, Go, Rust, Swift, Kotlin" />
      <meta name="technology:frameworks" content="React, Next.js, Angular, Vue.js, Node.js, Django, Flask, Spring Boot, .NET, Laravel, Ruby on Rails" />
      <meta name="technology:databases" content="MySQL, PostgreSQL, MongoDB, Redis, Elasticsearch, Cassandra, DynamoDB" />
      <meta name="technology:cloud_platforms" content="AWS, Azure, Google Cloud, DigitalOcean, Heroku, Vercel, Netlify" />
      <meta name="technology:devops_tools" content="Docker, Kubernetes, Jenkins, GitLab CI/CD, GitHub Actions, Terraform, Ansible" />
      
      {/* Industry Focus */}
      <meta name="industry:focus" content="Fintech, Healthcare, Retail, Logistics, Education, Manufacturing, Government, Real Estate, Travel, E-commerce" />
      <meta name="industry:experience" content="5+ years" />
      <meta name="industry:certifications" content="AWS Certified, Microsoft Certified, Google Cloud Certified, CISSP, PMP" />
      
      {/* Client Base */}
      <meta name="clients:size" content="Startups, SMEs, Enterprises, Government Agencies" />
      <meta name="clients:industries" content="Technology, Finance, Healthcare, Retail, Manufacturing, Education, Government" />
      <meta name="clients:geography" content="Kenya, Africa, Europe, USA, Australia, Canada, Germany, France, UK" />
      
      {/* Project Portfolio */}
      <meta name="portfolio:projects" content="100+" />
      <meta name="portfolio:success_rate" content="95%" />
      <meta name="portfolio:client_satisfaction" content="98%" />
      <meta name="portfolio:delivery_time" content="On-time delivery guarantee" />
      
      {/* Awards and Recognition */}
      <meta name="awards:recognition" content="Best IT Company, Top Software Development Firm, Excellence in Innovation, Customer Choice Award" />
      <meta name="awards:year" content="2023, 2024" />
      
      {/* Team and Expertise */}
      <meta name="team:size" content="50+ professionals" />
      <meta name="team:expertise" content="Software Engineers, DevOps Engineers, Data Scientists, AI Specialists, Cybersecurity Experts, Project Managers, Business Analysts" />
      <meta name="team:experience" content="5-15 years average experience" />
      
      {/* Quality and Standards */}
      <meta name="quality:standards" content="ISO 27001, ISO 9001, CMMI Level 3, Agile/Scrum methodologies" />
      <meta name="quality:testing" content="Automated testing, CI/CD pipelines, Code review, Security testing, Performance testing" />
      <meta name="quality:support" content="24/7 support, SLA guarantees, Maintenance contracts, Training programs" />
    </Head>
  )
} 