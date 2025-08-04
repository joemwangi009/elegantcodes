
'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentBg, setCurrentBg] = useState(0);
  
  const backgrounds = [
    'https://readdy.ai/api/search-image?query=Animated%20circuit%20board%20patterns%20with%20flowing%20data%20streams%2C%20dark%20navy%20background%20with%20gold%20electrical%20connections%2C%20high-tech%20digital%20network%20visualization%2C%20modern%20technology%20infrastructure%2C%20elegant%20electronic%20pathways%20with%20glowing%20elements%2C%20sophisticated%20tech%20animation%20concept&width=1920&height=1080&seq=hero-bg-anim-1&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Modern%20app%20interface%20wireframes%20floating%20in%20space%2C%20elegant%20UI%20elements%20with%20dark%20navy%20and%20gold%20color%20scheme%2C%20sophisticated%20software%20development%20visualization%2C%20clean%20mobile%20and%20web%20application%20mockups%2C%20professional%20tech%20design%20animation%20concept&width=1920&height=1080&seq=hero-bg-anim-2&orientation=landscape',
    'https://readdy.ai/api/search-image?query=Dynamic%20data%20visualization%20with%20flowing%20charts%20and%20graphs%2C%20professional%20analytics%20dashboard%20elements%2C%20dark%20navy%20background%20with%20golden%20data%20points%2C%20modern%20business%20intelligence%20animation%2C%20elegant%20information%20technology%20concept&width=1920&height=1080&seq=hero-bg-anim-3&orientation=landscape'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToQuote = () => {
    document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${bg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      ))}
      
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-8 font-poppins leading-tight">
            Transform Your Business
            <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text block mt-4">
              with Elegant IT Solutions
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-inter">
            Custom Apps, E-commerce, POS, and More Tailored to Your Needs
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={scrollToQuote}
              className="group relative bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl whitespace-nowrap cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button
              onClick={scrollToServices}
              className="group relative border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-12 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl whitespace-nowrap cursor-pointer overflow-hidden"
            >
              <span className="relative z-10">Explore Solutions</span>
              <div className="absolute inset-0 bg-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToServices} className="text-amber-400 cursor-pointer hover:text-amber-300 transition-colors">
          <i className="ri-arrow-down-line text-3xl"></i>
        </button>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
