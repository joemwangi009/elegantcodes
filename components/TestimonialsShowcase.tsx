'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  avatar: string;
  rating: number;
  verified: boolean;
  project: string;
  results: string[];
}

interface TestimonialsShowcaseProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

export default function TestimonialsShowcase({ 
  testimonials: propTestimonials, 
  title = "What Our Clients Say",
  subtitle = "Real feedback from satisfied clients",
  maxItems = 3
}: TestimonialsShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer Martinez",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow",
      quote: "ElegantCodes transformed our business operations with a custom CRM system that increased our efficiency by 300%. Their attention to detail and professional approach exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Custom CRM System",
      results: ["300% efficiency increase", "Real-time data synchronization", "Advanced analytics dashboard"]
    },
    {
      id: 2,
      name: "David Thompson",
      position: "Founder & CEO, RetailPro Chain",
      company: "RetailPro",
      quote: "The POS system they developed for our retail chain has revolutionized our operations. The real-time inventory tracking and reporting features have saved us countless hours and improved our bottom line by 40%.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "POS System",
      results: ["40% bottom line improvement", "Real-time inventory tracking", "Automated reporting"]
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "Director of Technology, EcoShop Inc.",
      company: "EcoShop",
      quote: "Our e-commerce platform built by ElegantCodes has been instrumental in our growth. The user experience is exceptional and our conversion rates have improved by 65% since launch.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "E-commerce Platform",
      results: ["65% conversion rate improvement", "Multi-vendor marketplace", "Sustainability verification"]
    }
  ];

  const testimonials = propTestimonials || defaultTestimonials;
  const displayedTestimonials = testimonials.slice(0, maxItems);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-amber-400 text-sm`}
      />
    ));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayedTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + displayedTestimonials.length) % displayedTestimonials.length);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-amber-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-poppins">
            {title}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-inter">
            {subtitle}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            {/* Quote */}
            <div className="text-center mb-8">
              <i className="ri-double-quotes-l text-5xl text-amber-400 mb-6 block"></i>
              <blockquote className="text-xl lg:text-2xl text-slate-700 font-inter leading-relaxed">
                "{displayedTestimonials[currentIndex].quote}"
              </blockquote>
            </div>

            {/* Client Info */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img
                src={displayedTestimonials[currentIndex].avatar}
                alt={displayedTestimonials[currentIndex].name}
                className="w-16 h-16 rounded-full object-cover object-top shadow-lg"
              />
              <div className="text-center">
                <div className="text-xl font-bold text-slate-900 font-poppins">
                  {displayedTestimonials[currentIndex].name}
                </div>
                <div className="text-amber-600 font-inter">
                  {displayedTestimonials[currentIndex].position}
                </div>
                <div className="text-slate-500 text-sm">
                  {displayedTestimonials[currentIndex].company}
                </div>
              </div>
            </div>

            {/* Rating and Verification */}
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-1">
                {renderStars(displayedTestimonials[currentIndex].rating)}
                <span className="text-sm text-slate-500 ml-2">
                  ({displayedTestimonials[currentIndex].rating}.0)
                </span>
              </div>
              {displayedTestimonials[currentIndex].verified && (
                <div className="flex items-center space-x-1">
                  <i className="ri-checkbox-circle-fill text-green-500 text-sm"></i>
                  <span className="text-sm text-green-600 font-medium">Verified Client</span>
                </div>
              )}
            </div>

            {/* Project Info */}
            <div className="text-center">
              <div className="text-sm text-slate-500 mb-2">
                Project: <span className="font-medium text-slate-700">
                  {displayedTestimonials[currentIndex].project}
                </span>
              </div>
              
              {/* Key Results */}
              <div className="flex flex-wrap justify-center gap-2">
                {displayedTestimonials[currentIndex].results.slice(0, 2).map((result, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <i className="ri-check-line mr-1"></i>
                    {result}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          {displayedTestimonials.length > 1 && (
            <>
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <i className="ri-arrow-left-line text-xl"></i>
              </button>
              
              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <i className="ri-arrow-right-line text-xl"></i>
              </button>
            </>
          )}
        </div>

        {/* Dots Indicator */}
        {displayedTestimonials.length > 1 && (
          <div className="flex justify-center space-x-3 mt-8">
            {displayedTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 cursor-pointer ${
                  index === currentIndex
                    ? 'bg-amber-400 w-8'
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/testimonials"
            className="inline-flex items-center px-6 py-3 bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200"
          >
            View All Testimonials
            <i className="ri-arrow-right-line ml-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
} 