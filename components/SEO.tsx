'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { SEOConfig, generateMetaTags, generateOrganizationSchema, generateWebsiteSchema } from '@/lib/seo';

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
}

export default function SEO({
  title,
  description,
  canonical,
  noindex = false,
  nofollow = false,
  ogImage,
  ogType = 'website',
  twitterCard = 'summary_large_image',
  structuredData,
  keywords = [],
  children
}: SEOProps) {
  const pathname = usePathname();
  const metaTags = generateMetaTags({
    title,
    description,
    canonical,
    noindex,
    nofollow,
    ogImage,
    ogType,
    twitterCard,
    structuredData,
    keywords
  });

  // Default structured data
  const defaultStructuredData = [
    generateOrganizationSchema(),
    generateWebsiteSchema()
  ];

  // Add custom structured data if provided
  const allStructuredData = structuredData 
    ? [...defaultStructuredData, structuredData]
    : defaultStructuredData;

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="robots" content={metaTags.robots} />
        <meta name="author" content="ElegantCodes Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={metaTags.canonical} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={metaTags.og.title} />
        <meta property="og:description" content={metaTags.og.description} />
        <meta property="og:url" content={metaTags.og.url} />
        <meta property="og:image" content={metaTags.og.image} />
        <meta property="og:type" content={metaTags.og.type} />
        <meta property="og:site_name" content={metaTags.og.siteName} />
        <meta property="og:locale" content={metaTags.og.locale} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={metaTags.twitter.card} />
        <meta name="twitter:site" content={metaTags.twitter.site} />
        <meta name="twitter:title" content={metaTags.twitter.title} />
        <meta name="twitter:description" content={metaTags.twitter.description} />
        <meta name="twitter:image" content={metaTags.twitter.image} />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#f59e0b" />
        <meta name="msapplication-TileColor" content="#f59e0b" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ElegantCodes" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://media.istockphoto.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data */}
        {allStructuredData.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(data)
            }}
          />
        ))}
      </Head>
      {children}
    </>
  );
} 