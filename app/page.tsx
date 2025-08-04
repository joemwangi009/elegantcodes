
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import InteractiveCarousel from '@/components/InteractiveCarousel';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import QuoteSection from '@/components/QuoteSection';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';
import { PersonalizedServiceRecommendations, ReturningUserWelcome } from '@/components/PersonalizedContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ReturningUserWelcome />
      
      <main>
        <ScrollAnimation animation="fade-in">
          <HeroSection />
        </ScrollAnimation>
        
        <ScrollAnimation animation="slide-up" delay={100}>
          <InteractiveCarousel />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in" delay={200}>
          <div className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <PersonalizedServiceRecommendations />
            </div>
          </div>
        </ScrollAnimation>
        
        <ScrollAnimation animation="slide-up" delay={300}>
          <ServicesSection />
        </ScrollAnimation>
        
        <ScrollAnimation animation="slide-left" delay={100}>
          <PortfolioSection />
        </ScrollAnimation>
        
        <ScrollAnimation animation="scale-up" delay={200}>
          <StatsSection />
        </ScrollAnimation>
        
        <ScrollAnimation animation="slide-right" delay={100}>
          <TestimonialsSlider />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in" delay={150}>
          <AboutSection />
        </ScrollAnimation>
        
        <ScrollAnimation animation="slide-up" delay={100}>
          <BlogSection />
        </ScrollAnimation>
        
        <ScrollAnimation animation="fade-in" delay={200}>
          <QuoteSection />
        </ScrollAnimation>
        
        <ScrollAnimation animation="slide-up" delay={100}>
          <ContactSection />
        </ScrollAnimation>
      </main>
      
      <Footer />
    </div>
  );
}
