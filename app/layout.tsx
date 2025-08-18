
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
    default: 'ElegantCodes - Global IT Solutions Provider | Software Development, Cloud Services & Cybersecurity',
    template: '%s | ElegantCodes - Global IT Solutions'
  },
  description: 'Leading global IT solutions provider offering comprehensive software development, cloud services, cybersecurity, AI development, and DevOps consulting across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
  keywords: [
    // IT Consulting and Solutions
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
    
    // Software Development
    'custom software development',
    'offshore software development',
    'enterprise software company',
    'leading software development firm',
    'progressive web apps',
    
    // App Development
    'mobile app development company',
    'Android app development',
    'iOS app development',
    'cross-platform app development',
    'Flutter app development',
    'React development services',
    'Node.js developers',
    
    // Web Development
    'web development company',
    'ecommerce website development',
    'web3 development services',
    
    // Cloud Services
    'cloud application development',
    'cloud migration services',
    'cloud infrastructure management',
    'AWS cloud consulting',
    'Azure cloud services',
    'Google Cloud partner',
    'cloud security provider',
    
    // Cybersecurity
    'cybersecurity company',
    'IT security solutions',
    'penetration testing services',
    'ethical hacking company',
    'data protection solutions',
    'managed security services',
    'SOC as a service',
    'cyber threat management',
    'network security services',
    
    // AI and Machine Learning
    'AI development company',
    'machine learning services',
    'natural language processing solutions',
    'AI chatbot development',
    'computer vision services',
    
    // Emerging Technologies
    'blockchain development company',
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
    siteName: 'ElegantCodes - Global IT Solutions',
    title: 'ElegantCodes - Global IT Solutions Provider | Software Development, Cloud Services & Cybersecurity',
    description: 'Leading global IT solutions provider offering comprehensive software development, cloud services, cybersecurity, AI development, and DevOps consulting across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Global IT Solutions Provider',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@elegantcodes',
    creator: '@elegantcodes',
    title: 'ElegantCodes - Global IT Solutions Provider',
    description: 'Leading global IT solutions provider offering comprehensive software development, cloud services, cybersecurity, AI development, and DevOps consulting.',
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
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ElegantCodes",
              "url": "https://www.elegantcodes.com",
              "logo": "https://www.elegantcodes.com/logo.png",
              "description": "Global IT solutions provider offering software development, cloud services, cybersecurity, and AI solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Kenya",
                "addressLocality": "Nairobi",
                "addressRegion": "Nairobi",
                "postalCode": "00100"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+254-XXX-XXX-XXX",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.linkedin.com/company/elegantcodes",
                "https://twitter.com/elegantcodes",
                "https://www.facebook.com/elegantcodes",
                "https://www.instagram.com/elegantcodes"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "IT Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Software Development",
                      "description": "Custom software development, mobile apps, web applications"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cloud Services",
                      "description": "AWS, Azure, Google Cloud consulting and migration"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Cybersecurity",
                      "description": "Security solutions, penetration testing, threat management"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI Development",
                      "description": "Machine learning, natural language processing, computer vision"
                    }
                  }
                ]
              },
              "areaServed": [
                {
                  "@type": "Country",
                  "name": "Kenya"
                },
                {
                  "@type": "Country",
                  "name": "Germany"
                },
                {
                  "@type": "Country",
                  "name": "United Kingdom"
                },
                {
                  "@type": "Country",
                  "name": "United States"
                },
                {
                  "@type": "Country",
                  "name": "Australia"
                },
                {
                  "@type": "Country",
                  "name": "Canada"
                },
                {
                  "@type": "Country",
                  "name": "France"
                }
              ],
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": -1.2921,
                  "longitude": 36.8219
                },
                "geoRadius": "20000"
              },
              "foundingDate": "2020",
              "numberOfEmployees": "50+",
              "award": [
                "Best IT Company 2023",
                "Excellence in Innovation 2024",
                "Customer Choice Award 2024"
              ],
              "knowsAbout": [
                "Software Development",
                "Cloud Computing",
                "Cybersecurity",
                "Artificial Intelligence",
                "DevOps",
                "Digital Transformation"
              ]
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
