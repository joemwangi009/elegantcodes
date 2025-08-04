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
      className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 font-poppins">
            Our <span className="text-blue-600">Impact</span> in Numbers
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto font-inter">
            Delivering excellence through measurable results and lasting partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="text-6xl lg:text-7xl font-bold text-blue-900 mb-3 font-poppins">
                  {counters[stat.key as keyof typeof counters]}{stat.suffix}
                </div>
                <div className="text-lg text-blue-700 font-inter font-medium">
                  {stat.label}
                </div>
              </div>
              
              <div className="w-12 h-1 bg-blue-500 mx-auto rounded-full group-hover:w-20 transition-all duration-300"></div>
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