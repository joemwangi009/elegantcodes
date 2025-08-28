
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
  title: 'ElegantCodes – Premier IT Consulting & Custom Software Development',
  description: 'ElegantCodes provides expert IT consulting, custom software, and mobile app development services for businesses worldwide. Trusted to deliver innovation and results.',
  keywords: [
    'ElegantCodes',
    'ElegantCodes software development',
    'ElegantCodes IT solutions',
    'ElegantCodes company',
    'ElegantCodes Kenya',
    'ElegantCodes Europe',
    'ElegantCodes USA',
    'ElegantCodes Australia',
    'ElegantCodes Canada',
    'ElegantCodes Germany',
    'ElegantCodes France',
    'ElegantCodes UK',
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
    title: 'ElegantCodes – Premier IT Consulting & Custom Software Development',
    description: 'ElegantCodes provides expert IT consulting, custom software, and mobile app development services for businesses worldwide. Trusted to deliver innovation and results.',
    type: 'website',
    images: [
      {
        url: 'https://elegantcodes.com/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Premier IT Consulting & Custom Software Development'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ElegantCodes – Premier IT Consulting & Custom Software Development',
    description: 'ElegantCodes provides expert IT consulting, custom software, and mobile app development services for businesses worldwide. Trusted to deliver innovation and results.',
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
