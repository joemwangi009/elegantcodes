'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      id: 1,
      title: "Custom Software Development",
      subtitle: "Transform your business with tailored solutions",
      description: "We create powerful, scalable applications that drive growth and efficiency for your business.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=600&fit=crop&crop=center",
      ctaText: "Get Started",
      ctaLink: "/#contact"
    },
    {
      id: 2,
      title: "Business Intelligence & Analytics",
      subtitle: "Turn data into actionable insights",
      description: "Leverage the power of your data with advanced analytics and reporting solutions.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",
      ctaText: "Learn More",
      ctaLink: "/services"
    },
    {
      id: 3,
      title: "Mobile App Development",
      subtitle: "Native iOS & Android Solutions",
      description: "Create engaging mobile experiences that connect with your customers on every device.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center",
      ctaText: "View Portfolio",
      ctaLink: "/portfolio"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      subtitle: "Complete Online Store Platforms",
      description: "Build powerful e-commerce platforms that drive sales and enhance customer experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
      ctaText: "Explore Services",
      ctaLink: "/services"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroSlides.length]);

  // Pause auto-play on hover
  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden bg-slate-900"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Hero Carousel */}
      <div className="relative h-screen">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${slide.overlay}`} />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className={`animate-fade-in-up delay-${index * 200}`}>
                  <h1 className="hero-title font-poppins text-white mb-6 animate-fade-in">
                    {slide.title}
                    <span className={`text-transparent bg-gradient-to-r ${slide.accent} bg-clip-text block mt-4`}>
                      {slide.subtitle}
                    </span>
                  </h1>

                  <p className="hero-subtitle text-slate-300 mb-8 max-w-4xl mx-auto animate-slide-up">
                    {slide.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <button
                      onClick={scrollToQuote}
                      className="group relative bg-gradient-to-r from-white to-slate-100 hover:from-slate-100 hover:to-white text-slate-900 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl whitespace-nowrap cursor-pointer overflow-hidden"
                    >
                      <span className="relative z-10">Get a Quote</span>
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>

                    <button
                      onClick={scrollToServices}
                      className="group relative border-2 border-white text-white hover:bg-white hover:text-slate-900 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl whitespace-nowrap cursor-pointer overflow-hidden"
                    >
                      <span className="relative z-10">Explore Solutions</span>
                      <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
        >
          <i className="ri-arrow-left-line text-2xl"></i>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 z-20"
        >
          <i className="ri-arrow-right-line text-2xl"></i>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/75'
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <button 
            onClick={scrollToServices} 
            className="text-white cursor-pointer hover:text-slate-200 transition-colors"
          >
            <i className="ri-arrow-down-line text-3xl"></i>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-emerald-500/10 rounded-full blur-xl animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-amber-500/10 rounded-full blur-xl animate-float-delayed"></div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }

        .delay-0 { animation-delay: 0ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-600 { animation-delay: 600ms; }

        /* Professional font sizing */
        .hero-title {
          font-size: clamp(3rem, 7vw, 4.5rem); /* Adjust base and max sizes */
          line-height: 1.1;
        }

        .hero-subtitle {
          font-size: clamp(1.2rem, 3vw, 1.5rem); /* Adjust base and max sizes */
          line-height: 1.3;
        }

        .hero-description {
          font-size: clamp(1rem, 2.5vw, 1.25rem); /* Adjust base and max sizes */
          line-height: 1.4;
        }

        .hero-button-text {
          font-size: clamp(1rem, 2vw, 1.1rem); /* Adjust base and max sizes */
        }
      `}</style>
    </section>
  );
}