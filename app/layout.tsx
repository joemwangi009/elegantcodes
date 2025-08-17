
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import { generateOrganizationSchema, generateWebsiteSchema, siteConfig } from '@/lib/seo';
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
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'ElegantCodes - Custom Software Development Solutions',
    template: '%s | ElegantCodes'
  },
  description: 'Transform your business with custom IT solutions. We specialize in mobile apps, web applications, e-commerce platforms, POS systems, and business automation.',
  keywords: [
    'custom software development',
    'mobile app development',
    'web application development',
    'e-commerce solutions',
    'POS systems',
    'business automation',
    'IT consulting',
    'software consulting',
    'enterprise software',
    'cloud solutions'
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
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: 'ElegantCodes - Custom Software Development Solutions',
    description: 'Transform your business with custom IT solutions. We specialize in mobile apps, web applications, e-commerce platforms, POS systems, and business automation.',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Custom Software Development Solutions',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    title: 'ElegantCodes - Custom Software Development Solutions',
    description: 'Transform your business with custom IT solutions.',
    images: [siteConfig.ogImage],
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
    canonical: siteConfig.url,
  },
  category: 'technology',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f59e0b' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' }
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://media.istockphoto.com" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//media.istockphoto.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema())
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema())
          }}
        />
      </head>
      <body className="font-inter antialiased">
        <div id="__next">{children}</div>
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-amber-500 text-slate-900 px-4 py-2 rounded-lg font-semibold z-50 focus:outline-none"
        >
          Skip to main content
        </a>
        
        {/* Performance Monitor (Development Only) */}
        <PerformanceMonitor />
      </body>
    </html>
  );
}
