'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Jennifer Martinez",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow",
      quote: "ElegantCodes transformed our business operations with a custom CRM system that increased our efficiency by 300%. Their attention to detail and professional approach exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "David Thompson",
      position: "Founder, RetailPro Chain",
      company: "RetailPro",
      quote: "The POS system they developed for our retail chain has revolutionized our operations. The real-time inventory tracking and reporting features have saved us countless hours.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "Director, EcoShop Inc.",
      company: "EcoShop",
      quote: "Our e-commerce platform built by ElegantCodes has been instrumental in our growth. The user experience is exceptional and our conversion rates have improved significantly.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      position: "Marketing Head, DataSync",
      company: "DataSync",
      quote: "The analytics dashboard they created provides insights we never had before. It's become an essential tool for our decision-making process.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5
    }
  ];

  const companies = [
    {
      name: "TechFlow",
      logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "RetailPro",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "EcoShop",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "DataSync",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "CloudTech",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "DigitalAgency",
      logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=60&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
            Trusted by industry leaders who rely on our innovative solutions to drive their business forward.
          </p>
        </div>

        <div 
          className="relative bg-white rounded-3xl shadow-2xl p-12 mb-20 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
          
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="min-w-full text-center">
                <div className="mb-8">
                  <i className="ri-double-quotes-l text-6xl text-amber-400 mb-6 block"></i>
                  <blockquote className="text-2xl lg:text-3xl text-slate-700 font-inter leading-relaxed mb-8 max-w-4xl mx-auto">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top shadow-lg"
                  />
                  <div className="text-left">
                    <div className="text-xl font-bold text-slate-900 font-poppins">{testimonial.name}</div>
                    <div className="text-amber-600 font-inter">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentTestimonial
                    ? 'bg-amber-400 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 font-poppins">
            Trusted by Leading Companies
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200">
              <img
                src={company.logo}
                alt={company.name}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}