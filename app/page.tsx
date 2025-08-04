
import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';
import { ScrollAnimation, PersonalizedServiceRecommendations, ReturningUserWelcome } from '@/components/ClientHomeContent';

// Dynamically import heavy components with loading states
const InteractiveCarousel = dynamic(() => import('@/components/InteractiveCarousel'), {
  loading: () => <div className="h-96 bg-slate-100 animate-pulse rounded-lg" />
});

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96 bg-slate-100 animate-pulse rounded-lg" /></div></div>
});

const PortfolioSection = dynamic(() => import('@/components/PortfolioSection'), {
  loading: () => <div className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96 bg-slate-100 animate-pulse rounded-lg" /></div></div>
});

const StatsSection = dynamic(() => import('@/components/StatsSection'), {
  loading: () => <div className="py-20 bg-slate-900"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-32 bg-slate-800 animate-pulse rounded-lg" /></div></div>
});

const TestimonialsSlider = dynamic(() => import('@/components/TestimonialsSlider'), {
  loading: () => <div className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96 bg-slate-100 animate-pulse rounded-lg" /></div></div>
});

const AboutSection = dynamic(() => import('@/components/AboutSection'), {
  loading: () => <div className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96 bg-slate-100 animate-pulse rounded-lg" /></div></div>
});

const BlogSection = dynamic(() => import('@/components/BlogSection'), {
  loading: () => <div className="py-20 bg-slate-50"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96 bg-slate-100 animate-pulse rounded-lg" /></div></div>
});

const QuoteSection = dynamic(() => import('@/components/QuoteSection'), {
  loading: () => <div className="py-20 bg-slate-900"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-64 bg-slate-800 animate-pulse rounded-lg" /></div></div>
});

const ContactSection = dynamic(() => import('@/components/ContactSection'), {
  loading: () => <div className="py-20 bg-white"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="h-96 bg-slate-100 animate-pulse rounded-lg" /></div></div>
});

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
