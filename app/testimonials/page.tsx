'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const testimonials = [
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
    },
    {
      id: 7,
      name: "Lisa Anderson",
      position: "Event Director, EventMaster Corp",
      company: "EventMaster",
      industry: "Events",
      quote: "The event management platform they built handles everything from ticketing to networking. We've managed over 1M events successfully with 95% customer satisfaction.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Event Management Platform",
      results: ["1M+ events managed", "95% customer satisfaction", "Comprehensive ticketing"],
      testimonialDate: "September 2023"
    },
    {
      id: 8,
      name: "James Wilson",
      position: "Product Manager, CloudTech Solutions",
      company: "CloudTech",
      industry: "Cloud Services",
      quote: "ElegantCodes delivered our cloud infrastructure project on time and under budget. Their expertise in scalable architecture has been crucial for our rapid growth.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Cloud Infrastructure",
      results: ["On-time delivery", "Under budget", "Scalable architecture"],
      testimonialDate: "August 2023"
    },
    {
      id: 9,
      name: "Amanda Foster",
      position: "CEO, GreenTech Innovations",
      company: "GreenTech",
      industry: "Sustainability",
      quote: "Their sustainable technology solutions helped us reduce our carbon footprint by 60% while improving operational efficiency. The ROI was immediate and substantial.",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Sustainable Tech Solutions",
      results: ["60% carbon footprint reduction", "Immediate ROI", "Operational efficiency"],
      testimonialDate: "July 2023"
    },
    {
      id: 10,
      name: "Carlos Mendez",
      position: "Operations Director, LogisticsPro",
      company: "LogisticsPro",
      industry: "Logistics",
      quote: "The logistics optimization system they developed reduced our delivery times by 45% and cut operational costs by 30%. It's been a game-changer for our business.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
      rating: 5,
      verified: true,
      project: "Logistics Optimization System",
      results: ["45% delivery time reduction", "30% cost reduction", "Route optimization"],
      testimonialDate: "June 2023"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Industries' },
    { id: 'technology', name: 'Technology' },
    { id: 'retail', name: 'Retail' },
    { id: 'e-commerce', name: 'E-commerce' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'finance', name: 'Finance' },
    { id: 'events', name: 'Events' },
    { id: 'cloud-services', name: 'Cloud Services' }
  ];

  const filteredTestimonials = selectedCategory === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.industry.toLowerCase() === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-amber-400 text-lg`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-poppins">
              Client <span className="text-amber-500">Testimonials</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter mb-8">
              Discover what our clients say about working with ElegantCodes. Real stories from real businesses that have transformed their operations with our innovative solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">98%</div>
                <div className="text-slate-600">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">150+</div>
                <div className="text-slate-600">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">50+</div>
                <div className="text-slate-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-500 mb-2">5.0</div>
                <div className="text-slate-600">Average Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-amber-500 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 hover:shadow-2xl transition-shadow duration-300">
                  {/* Quote */}
                  <div className="mb-6">
                    <i className="ri-double-quotes-l text-4xl text-amber-400 mb-4 block"></i>
                    <blockquote className="text-lg text-slate-700 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover object-top shadow-lg"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-slate-900">{testimonial.name}</div>
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
                    <div className="text-sm text-slate-500 mb-2">Project: <span className="font-medium text-slate-700">{testimonial.project}</span></div>
                    <div className="text-sm text-slate-500 mb-3">Date: <span className="font-medium text-slate-700">{testimonial.testimonialDate}</span></div>
                    
                    {/* Results */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-slate-700">Key Results:</div>
                      <ul className="space-y-1">
                        {testimonial.results.map((result, index) => (
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

            {filteredTestimonials.length === 0 && (
              <div className="text-center py-12">
                <i className="ri-search-line text-6xl text-slate-300 mb-4"></i>
                <h3 className="text-xl font-semibold text-slate-700 mb-2">No testimonials found</h3>
                <p className="text-slate-500">Try selecting a different category to see more testimonials.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-amber-100 mb-8 font-inter">
              Let's discuss how we can transform your business with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors duration-200">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 