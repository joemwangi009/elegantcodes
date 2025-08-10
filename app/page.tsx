
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
