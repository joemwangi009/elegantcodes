
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
  title: 'Elegant Codes | Leading Global IT Solutions & Custom Software Development Company',
  description: 'Elegant Codes is your trusted partner for custom software development, mobile apps, web solutions, and IT consulting. Transform your business with Elegant Codes - the premier IT solutions provider across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
  keywords: [
    'Elegant Codes',
    'Elegant Codes software development',
    'Elegant Codes IT solutions',
    'Elegant Codes company',
    'Elegant Codes Kenya',
    'Elegant Codes Europe',
    'Elegant Codes USA',
    'Elegant Codes Australia',
    'Elegant Codes Canada',
    'Elegant Codes Germany',
    'Elegant Codes France',
    'Elegant Codes UK',
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
    title: 'Elegant Codes | Leading Global IT Solutions & Custom Software Development Company',
    description: 'Elegant Codes is your trusted partner for custom software development, mobile apps, web solutions, and IT consulting. Transform your business with Elegant Codes.',
    type: 'website',
    images: [
      {
        url: 'https://elegantcodes.com/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Elegant Codes - Global IT Solutions Provider'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Codes | Leading Global IT Solutions & Custom Software Development Company',
    description: 'Elegant Codes is your trusted partner for custom software development, mobile apps, web solutions, and IT consulting.',
    images: ['https://elegantcodes.com/og-homepage.jpg']
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/'
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
