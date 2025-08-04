'use client';

import { useState, useEffect } from 'react';

export default function TestimonialsSlider() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      quote: "ElegantCodes transformed our business operations with their custom POS system. Sales increased by 40% within the first quarter. Outstanding work!",
      author: "Sarah Johnson",
      position: "CEO, TechRetail Solutions",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20CEO%20portrait%2C%20confident%20executive%20headshot%2C%20corporate%20professional%20photo%2C%20elegant%20business%20attire%2C%20modern%20office%20background%2C%20sophisticated%20leadership%20portrait&width=100&height=100&seq=testimonial-1&orientation=squarish"
    },
    {
      quote: "The e-commerce platform they built for us is simply phenomenal. User experience is seamless, and our online revenue doubled in 6 months.",
      author: "Michael Chen",
      position: "Founder, GreenTech Marketplace",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20business%20man%20founder%20portrait%2C%20confident%20entrepreneur%20headshot%2C%20corporate%20executive%20photo%2C%20modern%20business%20suit%2C%20office%20environment%2C%20professional%20leadership%20image&width=100&height=100&seq=testimonial-2&orientation=squarish"
    },
    {
      quote: "Their custom CRM solution streamlined our entire workflow. We now manage 500+ clients effortlessly. Best investment we've made!",
      author: "Emily Rodriguez",
      position: "Operations Director, ServicePro",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20business%20woman%20director%20portrait%2C%20confident%20female%20executive%20headshot%2C%20corporate%20professional%20photo%2C%20elegant%20business%20attire%2C%20modern%20office%20setting%2C%20sophisticated%20management%20portrait&width=100&height=100&seq=testimonial-3&orientation=squarish"
    },
    {
      quote: "ElegantCodes delivered beyond expectations. Their mobile app increased our customer engagement by 300%. Highly recommended!",
      author: "David Thompson",
      position: "Marketing Head, FinanceFlow",
      avatar: "https://readdy.ai/api/search-image?query=Professional%20business%20man%20marketing%20head%20portrait%2C%20confident%20male%20executive%20headshot%2C%20corporate%20professional%20photo%2C%20modern%20business%20attire%2C%20office%20background%2C%20professional%20leadership%20image&width=100&height=100&seq=testimonial-4&orientation=squarish"
    }
  ];

  const clientLogos = [
    {
      name: "TechCorp",
      logo: "https://readdy.ai/api/search-image?query=Modern%20technology%20company%20logo%20design%2C%20minimalist%20corporate%20brand%2C%20professional%20tech%20business%20logo%2C%20clean%20geometric%20design%2C%20dark%20navy%20and%20gold%20color%20scheme%2C%20elegant%20business%20identity&width=150&height=80&seq=client-logo-1&orientation=landscape"
    },
    {
      name: "InnovateNow",
      logo: "https://readdy.ai/api/search-image?query=Innovation%20company%20logo%20design%2C%20modern%20startup%20brand%2C%20professional%20business%20logo%2C%20sleek%20corporate%20identity%2C%20contemporary%20design%20elements%2C%20elegant%20brand%20mark&width=150&height=80&seq=client-logo-2&orientation=landscape"
    },
    {
      name: "DataFlow",
      logo: "https://readdy.ai/api/search-image?query=Data%20analytics%20company%20logo%2C%20modern%20business%20intelligence%20brand%2C%20professional%20corporate%20logo%2C%20tech%20company%20identity%2C%20clean%20minimal%20design%2C%20sophisticated%20brand%20mark&width=150&height=80&seq=client-logo-3&orientation=landscape"
    },
    {
      name: "CloudTech",
      logo: "https://readdy.ai/api/search-image?query=Cloud%20technology%20company%20logo%2C%20modern%20tech%20business%20brand%2C%20professional%20corporate%20identity%2C%20contemporary%20logo%20design%2C%20elegant%20business%20mark%2C%20sophisticated%20brand%20identity&width=150&height=80&seq=client-logo-4&orientation=landscape"
    },
    {
      name: "DigitalEdge",
      logo: "https://readdy.ai/api/search-image?query=Digital%20agency%20company%20logo%2C%20modern%20business%20brand%2C%20professional%20corporate%20logo%2C%20tech%20company%20identity%2C%20sleek%20design%20elements%2C%20elegant%20brand%20mark&width=150&height=80&seq=client-logo-5&orientation=landscape"
    },
    {
      name: "SmartSolutions",
      logo: "https://readdy.ai/api/search-image?query=Smart%20solutions%20company%20logo%2C%20modern%20business%20intelligence%20brand%2C%20professional%20corporate%20identity%2C%20tech%20company%20logo%20design%2C%20clean%20elegant%20mark%2C%20sophisticated%20business%20brand&width=150&height=80&seq=client-logo-6&orientation=landscape"
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
              <div key={index} className="min-w-full text-center">
                <div className="mb-8">
                  <i className="ri-double-quotes-l text-6xl text-amber-400 mb-6 block"></i>
                  <blockquote className="text-2xl lg:text-3xl text-slate-700 font-inter leading-relaxed mb-8 max-w-4xl mx-auto">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover object-top shadow-lg"
                  />
                  <div className="text-left">
                    <div className="text-xl font-bold text-slate-900 font-poppins">{testimonial.author}</div>
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
          {clientLogos.map((client, index) => (
            <div key={index} className="flex items-center justify-center p-4 hover:scale-110 transition-transform duration-200">
              <img
                src={client.logo}
                alt={client.name}
                className="h-12 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}