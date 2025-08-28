
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { generateOrganizationSchema, generateLocalBusinessSchema } from '@/lib/seo';
import { PerformanceMonitor } from '@/components/PerformanceOptimizer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.elegantcodes.com'),
  title: {
    default: 'ElegantCodes - Premier IT Consulting & Custom Software Development',
    template: '%s | ElegantCodes - Premier IT Consulting'
  },
  description: 'Leading IT consulting and custom software development company offering comprehensive solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
  keywords: [
    // IT Consulting and Solutions
    'IT consulting services',
    'custom software development',
    'mobile app development',
    'web application development',
    'e-commerce solutions',
    'POS systems',
    'business automation',
    'enterprise software solutions',
    'cloud computing services',
    'cybersecurity solutions',
    'AI development services',
    'DevOps consulting',
    'digital transformation',
    'business process automation',
    'API development services',
    'database design services',
    'software testing services',
    'UI/UX design services',
    'progressive web apps',
    'cross-platform development',
    'IoT solutions provider',
    'metaverse development company',
    
    // DevOps and Containerization
    'DevOps consulting services',
    'Docker container services',
    'Kubernetes consulting',
    
    // Industry-Specific Solutions
    'fintech software development',
    'healthcare IT solutions',
    'retail IT consulting',
    'logistics IT solutions',
    'education technology development',
    'manufacturing IT systems',
    'government IT services',
    'real estate software solutions',
    'travel app development',
    
    // Regional Keywords
    'Kenya IT solutions company',
    'Africa IT solutions provider',
    'Europe IT solutions',
    'Germany web development company',
    'UK IT security solutions',
    'USA trusted IT solutions provider',
    'Australia custom IT development',
    'Canada IT solutions provider',
    'France top IT services company'
  ],
  authors: [{ name: 'ElegantCodes Team' }],
  creator: 'ElegantCodes Team',
  publisher: 'ElegantCodes',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.elegantcodes.com',
    siteName: 'ElegantCodes - Premier IT Consulting',
    title: 'ElegantCodes - Premier IT Consulting & Custom Software Development',
    description: 'Leading IT consulting and custom software development company offering comprehensive solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Premier IT Consulting & Custom Software Development',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elegantcodes',
    creator: '@elegantcodes',
    title: 'ElegantCodes - Premier IT Consulting & Custom Software Development',
    description: 'Leading IT consulting and custom software development company offering comprehensive solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
    images: ['https://www.elegantcodes.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com',
    languages: {
      'en': 'https://www.elegantcodes.com',
      'en-ke': 'https://www.elegantcodes.com/kenya',
      'en-eu': 'https://www.elegantcodes.com/europe',
      'en-us': 'https://www.elegantcodes.com/usa',
      'en-au': 'https://www.elegantcodes.com/australia',
      'en-ca': 'https://www.elegantcodes.com/canada',
      'en-de': 'https://www.elegantcodes.com/germany',
      'en-fr': 'https://www.elegantcodes.com/france',
      'en-gb': 'https://www.elegantcodes.com/uk',
    },
  },
  referrer: 'strict-origin-when-cross-origin',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Google Search Console Verification */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        
        {/* WebSite Schema - Critical for brand visibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "ElegantCodes",
              "url": "https://www.elegantcodes.com",
              "description": "ElegantCodes - Premier IT Consulting & Custom Software Development",
              "publisher": {
                "@type": "Organization",
                "name": "ElegantCodes"
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.elegantcodes.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Organization Schema - Critical for branding and knowledge panel triggering */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ElegantCodes",
              "url": "https://www.elegantcodes.com",
              "logo": "https://www.elegantcodes.com/logo.png",
              "sameAs": [
                "https://www.linkedin.com/company/elegantcodes",
                "https://www.instagram.com/elegantcodes",
                "https://www.techbehemoths.com/company/elegant-codes"
              ],
              "description": "ElegantCodes provides expert IT consulting and custom software development services.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Kenya",
                "addressLocality": "Nairobi"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@elegantcodes.com"
              }
            })
          }}
        />
        
        {/* Additional business schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "ElegantCodes",
              "image": "https://www.elegantcodes.com/office.jpg",
              "telephone": "+254-XXX-XXX-XXX",
              "email": "info@elegantcodes.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Nairobi, Kenya",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi",
                "postalCode": "00100",
                "addressCountry": "KE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -1.2921,
                "longitude": 36.8219
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "priceRange": "$$",
              "paymentAccepted": "Credit Card, Bank Transfer, Mobile Money",
              "currenciesAccepted": "USD, EUR, KES"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  )
}
