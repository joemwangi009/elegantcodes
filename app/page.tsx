
import type { Metadata } from 'next';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ServiceStepsSection from '@/components/ServiceStepsSection';
import PortfolioSection from '@/components/PortfolioSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactQuoteSection from '@/components/ContactQuoteSection';
import Footer from '@/components/Footer';
import { generateServiceSchema, generatePortfolioSchema, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Custom Software Development Solutions | ElegantCodes',
  description: 'Transform your business with custom IT solutions. Expert mobile app development, web applications, e-commerce platforms, POS systems, and business automation services.',
  keywords: [
    'custom software development',
    'mobile app development',
    'web application development',
    'e-commerce solutions',
    'POS systems',
    'business automation',
    'IT consulting services',
    'software development company',
    'enterprise software solutions',
    'cloud computing services'
  ],
  openGraph: {
    title: 'Custom Software Development Solutions | ElegantCodes',
    description: 'Transform your business with custom IT solutions. Expert mobile app development, web applications, e-commerce platforms, POS systems, and business automation services.',
    type: 'website',
    images: [
      {
        url: 'https://elegantcodes.com/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Custom Software Development Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Solutions | ElegantCodes',
    description: 'Transform your business with custom IT solutions. Expert mobile app development, web applications, e-commerce platforms, POS systems, and business automation services.',
    images: ['https://elegantcodes.com/og-homepage.jpg']
  },
  alternates: {
    canonical: 'https://elegantcodes.com/'
  }
};

export default function Home() {
  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "ElegantCodes - Custom Software Development Solutions",
            "description": "Transform your business with custom IT solutions. We specialize in mobile apps, web applications, e-commerce platforms, POS systems, and business automation.",
            "url": "https://elegantcodes.com",
            "mainEntity": [
              generateServiceSchema({
                name: "Custom Software Development",
                description: "Tailored software solutions for businesses",
                category: "Software Development",
                url: "https://elegantcodes.com/services",
                image: "https://elegantcodes.com/services-software.jpg"
              }),
              generateServiceSchema({
                name: "Mobile App Development",
                description: "iOS and Android mobile applications",
                category: "Mobile Development",
                url: "https://elegantcodes.com/services/mobile-development",
                image: "https://elegantcodes.com/services-mobile.jpg"
              }),
              generateServiceSchema({
                name: "E-commerce Solutions",
                description: "Complete online store platforms",
                category: "E-commerce",
                url: "https://elegantcodes.com/services/ecommerce",
                image: "https://elegantcodes.com/services-ecommerce.jpg"
              })
            ],
            "breadcrumb": generateBreadcrumbSchema([
              { name: "Home", url: "https://elegantcodes.com" }
            ])
          })
        }}
      />
      
      <div className="min-h-screen bg-white">
        <Header />
        
        <main id="main-content">
          <HeroSection />
          <ServicesSection />
          <ServiceStepsSection />
          <PortfolioSection />
          <TestimonialsSlider />
          <AboutSection />
          <StatsSection />
          <BlogSection />
          <ContactQuoteSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
