'use client';

import { useState, useEffect, useRef } from 'react';

export default function InteractiveCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      title: 'Custom Applications',
      description: 'Tailored software solutions built from scratch to meet your unique business requirements and drive operational efficiency.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20custom%20software%20application%20dashboard%20with%20elegant%20dark%20navy%20interface%2C%20professional%20mobile%20app%20development%20concept%2C%20sophisticated%20user%20interface%20design%20with%20gold%20accents%2C%20clean%20code%20visualization%2C%20high-tech%20application%20development%20environment&width=800&height=500&seq=carousel-1&orientation=landscape',
      cta: 'Learn More',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store platforms with seamless payment processing, inventory management, and customer analytics.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20platform%20interface%20with%20elegant%20product%20showcase%2C%20modern%20online%20shopping%20experience%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20sophisticated%20retail%20technology%20solution%2C%20sleek%20marketplace%20design%20with%20shopping%20cart&width=800&height=500&seq=carousel-2&orientation=landscape',
      cta: 'Explore Features',
      gradient: 'from-green-600 to-teal-600'
    },
    {
      title: 'POS Systems',
      description: 'Advanced point-of-sale systems with real-time analytics, inventory tracking, and multi-location support.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20point%20of%20sale%20system%20with%20sleek%20touch%20interface%2C%20professional%20retail%20POS%20terminal%20with%20dark%20navy%20design%20and%20gold%20accents%2C%20sophisticated%20cash%20register%20technology%2C%20elegant%20business%20payment%20processing%20system&width=800&height=500&seq=carousel-3&orientation=landscape',
      cta: 'View Demo',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Business Automation',
      description: 'Comprehensive workflow automation, CRM integration, and process optimization to streamline your operations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20automation%20dashboard%20with%20workflow%20visualization%2C%20modern%20enterprise%20software%20interface%2C%20dark%20navy%20corporate%20design%20with%20golden%20data%20connections%2C%20sophisticated%20process%20automation%20concept%2C%20elegant%20business%20intelligence%20platform&width=800&height=500&seq=carousel-4&orientation=landscape',
      cta: 'Get Started',
      gradient: 'from-purple-600 to-pink-600'
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isPaused, slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
  };

  return (
    <section className="py-0 bg-slate-900 overflow-hidden">
      <div className="relative">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full relative h-[600px] flex items-center">
              <div 
                className="absolute inset-0 bg-gradient-to-r opacity-90"
                style={{
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} opacity-80`}></div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-left">
                    <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
                      {slide.title}
                    </h3>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed font-inter">
                      {slide.description}
                    </p>
                    <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl whitespace-nowrap cursor-pointer">
                      {slide.cta}
                    </button>
                  </div>
                  
                  <div className="relative">
                    <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-64 object-cover object-top rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 cursor-pointer z-20"
        >
          <i className="ri-arrow-left-line text-2xl"></i>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 cursor-pointer z-20"
        >
          <i className="ri-arrow-right-line text-2xl"></i>
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                index === currentSlide 
                  ? 'bg-amber-400 w-8' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}