'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    industries: 0,
    clients: 0,
    satisfaction: 0
  });
  
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      key: 'projects',
      target: 150,
      label: 'Projects Delivered',
      icon: 'ri-rocket-line',
      suffix: '+'
    },
    {
      key: 'industries',
      target: 15,
      label: 'Industries Served',
      icon: 'ri-building-line',
      suffix: '+'
    },
    {
      key: 'clients',
      target: 85,
      label: 'Happy Clients',
      icon: 'ri-team-line',
      suffix: '+'
    },
    {
      key: 'satisfaction',
      target: 98,
      label: 'Satisfaction Rate',
      icon: 'ri-thumb-up-line',
      suffix: '%'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      let start = 0;
      const duration = 2000;
      const increment = stat.target / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= stat.target) {
          setCounters(prev => ({ ...prev, [stat.key]: stat.target }));
          clearInterval(timer);
        } else {
          setCounters(prev => ({ ...prev, [stat.key]: Math.floor(start) }));
        }
      }, 16);
    });
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20professional%20office%20environment%20with%20team%20collaboration%2C%20elegant%20workspace%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20business%20meeting%20room%2C%20high-tech%20corporate%20interior%2C%20professional%20teamwork%20atmosphere%2C%20sleek%20modern%20architecture&width=1920&height=600&seq=stats-bg-1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-slate-900/85"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Our <span className="text-amber-400">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-inter">
            Delivering excellence through measurable results and lasting partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                  <i className={`${stat.icon} text-3xl text-slate-900`}></i>
                </div>
                <div className="absolute inset-0 w-24 h-24 mx-auto bg-amber-400/30 rounded-full blur-xl group-hover:scale-125 transition-transform duration-500"></div>
              </div>
              
              <div className="mb-4">
                <div className="text-5xl lg:text-6xl font-bold text-white mb-2 font-poppins">
                  {counters[stat.key as keyof typeof counters]}{stat.suffix}
                </div>
                <div className="text-xl text-slate-300 font-inter group-hover:text-amber-400 transition-colors">
                  {stat.label}
                </div>
              </div>
              
              <div className="w-16 h-1 bg-amber-400 mx-auto rounded-full group-hover:w-24 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}