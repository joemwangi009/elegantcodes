'use client';

import { useState } from 'react';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  industry: string;
  quote: string;
  avatar: string;
  rating: number;
  verified: boolean;
  project: string;
  results: string[];
  testimonialDate: string;
}

interface TestimonialsGridProps {
  testimonials?: Testimonial[];
  showFilter?: boolean;
  maxItems?: number;
}

export default function TestimonialsGrid({ 
  testimonials: propTestimonials, 
  showFilter = true, 
  maxItems 
}: TestimonialsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const defaultTestimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jennifer Martinez",
      position: "CEO, TechFlow Solutions",
      company: "TechFlow",
      industry: "Technology",
      quote: "ElegantCodes transformed our business operations with a custom CRM system that increased our efficiency by 300%. Their attention to detail and professional approach exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Custom CRM System",
      results: ["300% efficiency increase", "Real-time data synchronization", "Advanced analytics dashboard"],
      testimonialDate: "March 2024"
    },
    {
      id: 2,
      name: "David Thompson",
      position: "Founder & CEO, RetailPro Chain",
      company: "RetailPro",
      industry: "Retail",
      quote: "The POS system they developed for our retail chain has revolutionized our operations. The real-time inventory tracking and reporting features have saved us countless hours and improved our bottom line by 40%.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "POS System",
      results: ["40% bottom line improvement", "Real-time inventory tracking", "Automated reporting"],
      testimonialDate: "February 2024"
    },
    {
      id: 3,
      name: "Sarah Williams",
      position: "Director of Technology, EcoShop Inc.",
      company: "EcoShop",
      industry: "E-commerce",
      quote: "Our e-commerce platform built by ElegantCodes has been instrumental in our growth. The user experience is exceptional and our conversion rates have improved by 65% since launch.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "E-commerce Platform",
      results: ["65% conversion rate improvement", "Multi-vendor marketplace", "Sustainability verification"],
      testimonialDate: "January 2024"
    },
    {
      id: 4,
      name: "Michael Rodriguez",
      position: "Marketing Director, DataSync Analytics",
      company: "DataSync",
      industry: "Analytics",
      quote: "The analytics dashboard they created provides insights we never had before. It's become an essential tool for our decision-making process and has helped us increase ROI by 200%.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Analytics Dashboard",
      results: ["200% ROI increase", "Real-time insights", "Custom reporting"],
      testimonialDate: "December 2023"
    },
    {
      id: 5,
      name: "Emily Chen",
      position: "CTO, HealthSync Medical",
      company: "HealthSync",
      industry: "Healthcare",
      quote: "The mobile app they developed for our healthcare platform is HIPAA-compliant and user-friendly. Patient engagement has increased by 80% and appointment no-shows decreased by 70%.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Healthcare Mobile App",
      results: ["80% patient engagement increase", "70% reduction in no-shows", "HIPAA-compliant"],
      testimonialDate: "November 2023"
    },
    {
      id: 6,
      name: "Robert Johnson",
      position: "VP of Operations, FinanceTracker Pro",
      company: "FinanceTracker",
      industry: "Finance",
      quote: "Their AI-powered financial management platform has revolutionized how we handle personal finance. User savings rates improved by 85% and budget adherence by 60%.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "AI Finance Platform",
      results: ["85% savings rate improvement", "60% budget adherence", "AI-powered insights"],
      testimonialDate: "October 2023"
    }
  ];

  const testimonials = propTestimonials || defaultTestimonials;

  const categories = [
    { id: 'all', name: 'All Industries' },
    { id: 'technology', name: 'Technology' },
    { id: 'retail', name: 'Retail' },
    { id: 'e-commerce', name: 'E-commerce' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'analytics', name: 'Analytics' }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.industry.toLowerCase() === selectedCategory);

  const displayedTestimonials = maxItems 
    ? filteredTestimonials.slice(0, maxItems)
    : filteredTestimonials;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-amber-400 text-lg`}
      />
    ));
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 font-poppins">
            Client <span className="text-amber-500">Testimonials</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
            Real feedback from real clients who have transformed their businesses with our solutions.
          </p>
        </div>

        {/* Filter */}
        {showFilter && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        )}

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-shadow duration-300">
              {/* Quote */}
              <div className="mb-6">
                <i className="ri-double-quotes-l text-3xl text-amber-400 mb-4 block"></i>
                <blockquote className="text-base text-slate-700 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>

              {/* Client Info */}
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover object-top shadow-md"
                />
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-amber-600 text-sm">{testimonial.position}</div>
                  <div className="text-slate-500 text-sm">{testimonial.company}</div>
                </div>
                {testimonial.verified && (
                  <div className="flex items-center space-x-1">
                    <i className="ri-checkbox-circle-fill text-green-500 text-sm"></i>
                    <span className="text-xs text-green-600 font-medium">Verified</span>
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-sm text-slate-500">({testimonial.rating}.0)</span>
              </div>

              {/* Project Details */}
              <div className="border-t border-slate-200 pt-4">
                <div className="text-sm text-slate-500 mb-2">
                  Project: <span className="font-medium text-slate-700">{testimonial.project}</span>
                </div>
                <div className="text-sm text-slate-500 mb-3">
                  Date: <span className="font-medium text-slate-700">{testimonial.testimonialDate}</span>
                </div>
                
                {/* Key Results */}
                <div className="space-y-2">
                  <div className="text-sm font-medium text-slate-700">Key Results:</div>
                  <ul className="space-y-1">
                    {testimonial.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="text-sm text-slate-600 flex items-center">
                        <i className="ri-check-line text-green-500 mr-2"></i>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {displayedTestimonials.length === 0 && (
          <div className="text-center py-12">
            <i className="ri-search-line text-6xl text-slate-300 mb-4"></i>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No testimonials found</h3>
            <p className="text-slate-500">Try selecting a different category to see more testimonials.</p>
          </div>
        )}

        {/* View All Button */}
        {maxItems && filteredTestimonials.length > maxItems && (
          <div className="text-center mt-12">
            <button className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-200">
              View All Testimonials
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 