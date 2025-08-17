
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
  );
}
