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
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    },
    {
      id: 2,
      name: "David Thompson",
      position: "Founder & CEO, RetailPro Chain",
      company: "RetailPro",
      quote: "The POS system they developed for our retail chain has revolutionized our operations. The real-time inventory tracking and reporting features have saved us countless hours and improved our bottom line by 40%.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "Director of Technology, EcoShop Inc.",
      company: "EcoShop",
      quote: "Our e-commerce platform built by ElegantCodes has been instrumental in our growth. The user experience is exceptional and our conversion rates have improved by 65% since launch.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      position: "Marketing Director, DataSync Analytics",
      company: "DataSync",
      quote: "The analytics dashboard they created provides insights we never had before. It's become an essential tool for our decision-making process and has helped us increase ROI by 200%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    },
    {
      id: 5,
      name: "Emily Chen",
      position: "CTO, HealthSync Medical",
      company: "HealthSync",
      quote: "The mobile app they developed for our healthcare platform is HIPAA-compliant and user-friendly. Patient engagement has increased by 80% and appointment no-shows decreased by 70%.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    },
    {
      id: 6,
      name: "Robert Johnson",
      position: "VP of Operations, FinanceTracker Pro",
      company: "FinanceTracker",
      quote: "Their AI-powered financial management platform has revolutionized how we handle personal finance. User savings rates improved by 85% and budget adherence by 60%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    },
    {
      id: 7,
      name: "Lisa Anderson",
      position: "Event Director, EventMaster Corp",
      company: "EventMaster",
      quote: "The event management platform they built handles everything from ticketing to networking. We've managed over 1M events successfully with 95% customer satisfaction.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    },
    {
      id: 8,
      name: "James Wilson",
      position: "Product Manager, CloudTech Solutions",
      company: "CloudTech",
      quote: "ElegantCodes delivered our cloud infrastructure project on time and under budget. Their expertise in scalable architecture has been crucial for our rapid growth.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true
    }
  ];

  const companies = [
    {
      name: "TechFlow Solutions",
      logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "RetailPro Chain",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "EcoShop Inc.",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "DataSync Analytics",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "HealthSync Medical",
      logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "FinanceTracker Pro",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "EventMaster Corp",
      logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "CloudTech Solutions",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "InnovateLab",
      logo: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=150&h=60&fit=crop&crop=center"
    },
    {
      name: "GlobalTech Systems",
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=150&h=60&fit=crop&crop=center"
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-amber-400 text-lg`}
      />
    ));
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
          className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 mb-20 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600"></div>
          
          <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="min-w-full text-center px-4 sm:px-8">
                <div className="mb-6 sm:mb-8">
                  <i className="ri-double-quotes-l text-4xl sm:text-5xl lg:text-6xl text-amber-400 mb-4 sm:mb-6 block"></i>
                  <blockquote className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-slate-700 font-inter leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto px-2">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover object-top shadow-lg"
                  />
                  <div className="text-center sm:text-left">
                    <div className="text-lg sm:text-xl font-bold text-slate-900 font-poppins">{testimonial.name}</div>
                    <div className="text-amber-600 font-inter text-sm sm:text-base">{testimonial.position}</div>
                    <div className="text-xs sm:text-sm text-slate-500">{testimonial.company}</div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex justify-center items-center space-x-1 mb-2">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Verified Badge */}
                {testimonial.verified && (
                  <div className="flex justify-center items-center space-x-2">
                    <i className="ri-checkbox-circle-fill text-green-500 text-xs sm:text-sm"></i>
                    <span className="text-xs sm:text-sm text-green-600 font-medium">Verified Client</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center space-x-2 sm:space-x-3 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentTestimonial
                    ? 'bg-amber-400 w-6 sm:w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 font-poppins">
            Trusted by Leading Companies
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8">
            Partnering with industry leaders across diverse sectors
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
          {companies.map((company, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-3 sm:p-4 hover:scale-110 transition-transform duration-200 group">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 sm:h-10 lg:h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 mb-2"
              />
              <span className="text-xs sm:text-sm text-slate-600 text-center font-medium group-hover:text-slate-900 transition-colors duration-300">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}