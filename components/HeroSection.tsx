'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  const heroSlides = [
    {
      id: 1,
      title: "Transform Your Business",
      subtitle: "with Elegant IT Solutions",
      description: "Custom Apps, E-commerce, POS, and More Tailored to Your Needs",
      image: "https://readdy.ai/api/search-image?query=Professional%20software%20development%20team%20working%20in%20modern%20office%20with%20multiple%20screens%20showing%20code%20and%20designs%2C%20elegant%20workspace%20with%20dark%20navy%20and%20gold%20theme%2C%20sophisticated%20tech%20company%20environment%2C%20clean%20minimalist%20office%20design%2C%20high-tech%20development%20studio%2C%20professional%20team%20collaboration&width=1920&height=1080&seq=hero-1&orientation=landscape",
      overlay: "from-blue-900/40 via-blue-800/30 to-blue-900/40",
      accent: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      title: "Innovative Solutions",
      subtitle: "for Modern Enterprises",
      description: "Cutting-edge technology solutions that drive growth and efficiency",
      image: "https://readdy.ai/api/search-image?query=Modern%20dashboard%20interface%20with%20data%20visualization%20and%20analytics%2C%20professional%20business%20intelligence%20platform%2C%20elegant%20dark%20navy%20and%20gold%20theme%2C%20sophisticated%20enterprise%20software%2C%20clean%20corporate%20design%2C%20high-tech%20business%20solution&width=1920&height=1080&seq=hero-2&orientation=landscape",
      overlay: "from-emerald-900/40 via-emerald-800/30 to-emerald-900/40",
      accent: "from-emerald-500 to-emerald-600"
    },
    {
      id: 3,
      title: "World-Class Development",
      subtitle: "Delivered with Excellence",
      description: "Premium software solutions crafted with precision and innovation",
      image: "https://readdy.ai/api/search-image?query=Professional%20mobile%20app%20development%20with%20multiple%20devices%20showing%20beautiful%20interfaces%2C%20elegant%20app%20design%20with%20dark%20navy%20and%20gold%20theme%2C%20sophisticated%20mobile%20technology%2C%20clean%20app%20development%20studio%2C%20high-tech%20mobile%20solutions&width=1920&height=1080&seq=hero-3&orientation=landscape",
      overlay: "from-purple-900/40 via-purple-800/30 to-purple-900/40",
      accent: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      title: "Digital Transformation",
      subtitle: "Redefined for Success",
      description: "Empowering businesses with next-generation digital solutions",
      image: "https://readdy.ai/api/search-image?query=Professional%20e-commerce%20platform%20with%20shopping%20cart%20and%20product%20displays%2C%20elegant%20online%20store%20interface%2C%20dark%20navy%20and%20gold%20theme%2C%20sophisticated%20retail%20technology%2C%20clean%20e-commerce%20design%2C%20high-tech%20shopping%20solution&width=1920&height=1080&seq=hero-4&orientation=landscape",
      overlay: "from-amber-900/40 via-amber-800/30 to-amber-900/40",
      accent: "from-amber-500 to-amber-600"
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