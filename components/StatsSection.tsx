'use client';

import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    industries: 0,
    clients: 0,
    satisfaction: 0,
    countries: 0,
    awards: 0
  });
  
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    {
      key: 'projects',
      target: 1200,
      label: 'Projects Completed',
      icon: 'ri-rocket-line',
      suffix: '+',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-900'
    },
    {
      key: 'industries',
      target: 25,
      label: 'Industries Served',
      icon: 'ri-building-line',
      suffix: '+',
      color: 'from-emerald-500 to-emerald-600',
      bgColor: 'bg-emerald-50',
      textColor: 'text-emerald-900'
    },
    {
      key: 'clients',
      target: 450,
      label: 'Happy Clients',
      icon: 'ri-team-line',
      suffix: '+',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-900'
    },
    {
      key: 'satisfaction',
      target: 99,
      label: 'Client Satisfaction',
      icon: 'ri-thumb-up-line',
      suffix: '%',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'bg-amber-50',
      textColor: 'text-amber-900'
    },
    {
      key: 'countries',
      target: 35,
      label: 'Countries Reached',
      icon: 'ri-global-line',
      suffix: '+',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      textColor: 'text-red-900'
    },
    {
      key: 'awards',
      target: 15,
      label: 'Industry Awards',
      icon: 'ri-trophy-line',
      suffix: '+',
      color: 'from-indigo-500 to-indigo-600',
      bgColor: 'bg-indigo-50',
      textColor: 'text-indigo-900'
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    stats.forEach((stat, index) => {
      let start = 0;
      const duration = 2500;
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
      className="py-24 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-28 h-28 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8 font-poppins">
            Our <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text">Impact</span> in Numbers
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-inter leading-relaxed">
            Delivering excellence through measurable results and lasting partnerships across the globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center group bg-white rounded-3xl p-8 shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 border border-slate-200 hover:border-amber-500/50`}
              style={{
                animation: isVisible ? `fadeInUp 0.8s ease-out ${index * 0.15}s both` : 'none'
              }}
            >
              <div className="relative mb-8">
                <div className={`w-24 h-24 mx-auto bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-2xl group-hover:shadow-amber-500/50`}>
                  <i className={`${stat.icon} text-3xl text-white`}></i>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>
              </div>
              
              <div className="mb-6">
                <div className="text-5xl lg:text-6xl font-bold text-slate-900 mb-4 font-poppins group-hover:text-amber-500 transition-colors duration-300">
                  {counters[stat.key as keyof typeof counters].toLocaleString()}{stat.suffix}
                </div>
                <div className="text-lg text-slate-600 font-inter font-medium group-hover:text-slate-900 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
              
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full group-hover:w-24 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Additional Impact Metrics */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="text-3xl font-bold text-amber-500 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="text-3xl font-bold text-amber-500 mb-2">5+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="text-3xl font-bold text-amber-500 mb-2">100%</div>
              <div className="text-slate-600">Project Success Rate</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg">
              <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
              <div className="text-slate-600">Team Members</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }

        .delay-1000 { animation-delay: 1s; }
        .delay-1500 { animation-delay: 1.5s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
}