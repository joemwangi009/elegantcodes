
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import StatsSection from '@/components/StatsSection';
import TestimonialsSlider from '@/components/TestimonialsSlider';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import AboutSection from '@/components/AboutSection';
import BlogSection from '@/components/BlogSection';
import QuoteSection from '@/components/QuoteSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <StatsSection />
        <TestimonialsSlider />
        <TestimonialsGrid maxItems={6} showFilter={false} />
        <AboutSection />
        <BlogSection />
        <QuoteSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
