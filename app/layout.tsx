
import type { Metadata, Viewport } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'ElegantCodes - Custom Software Development Solutions',
  description: 'Transform your business with custom IT solutions. We specialize in mobile apps, web applications, e-commerce platforms, POS systems, and business automation.',
  keywords: 'custom software development, mobile apps, web applications, e-commerce, POS systems, business automation, IT solutions',
  authors: [{ name: 'ElegantCodes Team' }],
  openGraph: {
    title: 'ElegantCodes - Custom Software Development Solutions',
    description: 'Transform your business with custom IT solutions. We specialize in mobile apps, web applications, e-commerce platforms, POS systems, and business automation.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElegantCodes - Custom Software Development Solutions',
    description: 'Transform your business with custom IT solutions.',
  },
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="theme-color" content="#1e40af" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ElegantCodes",
              "description": "Custom software development company specializing in mobile apps, web applications, e-commerce, and business automation.",
              "url": "https://elegantcodes.com",
              "logo": "https://elegantcodes.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-123-4567",
                "contactType": "customer service",
                "email": "info@elegantcodes.com"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Tech Street",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94105",
                "addressCountry": "US"
              },
              "sameAs": [
                "https://linkedin.com/company/elegantcodes",
                "https://twitter.com/elegantcodes",
                "https://github.com/elegantcodes"
              ],
              "offers": [
                {
                  "@type": "Service",
                  "name": "Custom Software Development",
                  "description": "Tailored software solutions for businesses"
                },
                {
                  "@type": "Service", 
                  "name": "Mobile App Development",
                  "description": "iOS and Android mobile applications"
                },
                {
                  "@type": "Service",
                  "name": "E-commerce Solutions",
                  "description": "Online store platforms and e-commerce development"
                }
              ]
            })
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
      </body>
    </html>
  );
}
