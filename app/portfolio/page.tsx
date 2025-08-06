'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailForm from '@/components/EmailForm';

interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  fallbackImage?: string;
  slug: string;
  technologies: string[];
  metrics: string[];
  color: string;
  gallery: string[];
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'TechFlow CRM',
      subtitle: 'Customer Relationship Management System',
      description: 'A comprehensive CRM solution designed to streamline customer management, sales tracking, and business operations for modern enterprises.',
      category: 'Custom Apps',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CRM%20dashboard%20with%20customer%20analytics%2C%20modern%20business%20management%20interface%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20sales%20pipeline%20visualization%2C%20clean%20corporate%20software%20design&width=400&height=300&seq=portfolio-crm-1&orientation=landscape',
      fallbackImage: 'https://readdy.ai/api/search-image?query=CRM%20system%20interface%20with%20customer%20profiles%2C%20professional%20business%20dashboard%2C%20modern%20enterprise%20software&width=400&height=300&seq=portfolio-crm-2&orientation=landscape',
      slug: 'techflow-crm',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      metrics: ['50,000+ users', '99.9% uptime', '40% efficiency gain'],
      color: 'blue',
      gallery: [
        'https://readdy.ai/api/search-image?query=CRM%20dashboard%20with%20detailed%20customer%20analytics%2C%20professional%20interface%20with%20charts%20and%20graphs%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20modern%20business%20software%20design%2C%20clean%20data%20visualization&width=800&height=500&seq=gallery-crm-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Customer%20profile%20management%20interface%2C%20detailed%20contact%20information%20display%2C%20professional%20CRM%20design%20with%20dark%20navy%20background%2C%20sophisticated%20user%20management%20system&width=800&height=500&seq=gallery-crm-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Sales%20pipeline%20visualization%20with%20drag%20and%20drop%20functionality%2C%20modern%20CRM%20interface%2C%20dark%20navy%20corporate%20design%2C%20professional%20sales%20management%20system&width=800&height=500&seq=gallery-crm-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Advanced%20analytics%20and%20reporting%20dashboard%2C%20professional%20data%20visualization%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20business%20intelligence%20interface&width=800&height=500&seq=gallery-crm-4&orientation=landscape'
      ]
    },
    {
      id: 2,
      title: 'RetailPro POS',
      subtitle: 'Advanced Point of Sale System',
      description: 'Modern point-of-sale solution with inventory management, customer tracking, and comprehensive reporting for retail businesses.',
      category: 'POS',
      image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20point%20of%20sale%20interface%2C%20professional%20POS%20system%20dashboard%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20elegant%20touch%20screen%20interface%2C%20sophisticated%20retail%20technology%20solution%2C%20sleek%20payment%20processing%20system&width=400&height=300&seq=portfolio-pos-1&orientation=landscape',
      fallbackImage: 'https://readdy.ai/api/search-image?query=POS%20system%20with%20inventory%20management%2C%20professional%20retail%20technology%2C%20modern%20checkout%20interface&width=400&height=300&seq=portfolio-pos-2&orientation=landscape',
      slug: 'retailpro-pos',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: ['100+ stores', '60% faster checkout', '99.5% accuracy'],
      color: 'emerald',
      gallery: [
        'https://readdy.ai/api/search-image?query=Retail%20POS%20interface%20with%20product%20catalog%2C%20professional%20point%20of%20sale%20system%2C%20modern%20checkout%20process%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20retail%20technology&width=800&height=500&seq=gallery-pos-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Inventory%20management%20dashboard%20for%20retail%2C%20professional%20stock%20control%20interface%2C%20modern%20retail%20management%20system%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-pos-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Customer%20loyalty%20program%20interface%2C%20professional%20retail%20POS%20system%2C%20modern%20customer%20management%2C%20dark%20navy%20theme%20with%20gold%20highlights&width=800&height=500&seq=gallery-pos-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Retail%20analytics%20and%20reporting%20dashboard%2C%20professional%20business%20intelligence%20interface%2C%20modern%20retail%20analytics%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-pos-4&orientation=landscape'
      ]
    },
    {
      id: 3,
      title: 'EcoShop Marketplace',
      subtitle: 'Multi-Vendor E-commerce Platform',
      description: 'A sophisticated marketplace platform connecting vendors and customers with advanced features and seamless user experience.',
      category: 'E-commerce',
      image: 'https://readdy.ai/api/search-image?query=Multi-vendor%20marketplace%20platform%20interface%2C%20professional%20e-commerce%20dashboard%2C%20modern%20online%20marketplace%20design%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20vendor%20management%20system&width=400&height=300&seq=portfolio-marketplace-1&orientation=landscape',
      fallbackImage: 'https://readdy.ai/api/search-image?query=E-commerce%20marketplace%20with%20vendor%20profiles%2C%20professional%20online%20shopping%20platform%2C%20modern%20marketplace%20interface&width=400&height=300&seq=portfolio-marketplace-2&orientation=landscape',
      slug: 'ecoshop-marketplace',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      metrics: ['500+ vendors', '25,000+ products', '200% growth'],
      color: 'purple',
      gallery: [
        'https://readdy.ai/api/search-image?query=Vendor%20dashboard%20for%20marketplace%2C%20professional%20e-commerce%20management%20interface%2C%20modern%20vendor%20portal%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20product%20management%20system&width=800&height=500&seq=gallery-marketplace-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Product%20catalog%20with%20advanced%20filtering%2C%20professional%20marketplace%20interface%2C%20modern%20e-commerce%20design%2C%20dark%20navy%20corporate%20theme%2C%20sophisticated%20shopping%20experience&width=800&height=500&seq=gallery-marketplace-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Order%20management%20system%20for%20marketplace%2C%20professional%20e-commerce%20dashboard%2C%20modern%20order%20tracking%20interface%2C%20dark%20navy%20theme%20with%20gold%20highlights&width=800&height=500&seq=gallery-marketplace-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Marketplace%20analytics%20and%20revenue%20dashboard%2C%20professional%20business%20intelligence%20interface%2C%20modern%20e-commerce%20analytics%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-marketplace-4&orientation=landscape'
      ]
    },
    {
      id: 4,
      title: 'HealthSync Mobile',
      subtitle: 'Healthcare Management App',
      description: 'Mobile application for healthcare providers and patients with appointment scheduling, medical records, and telemedicine capabilities.',
      category: 'Custom Apps',
      image: 'https://readdy.ai/api/search-image?query=Healthcare%20mobile%20app%20interface%2C%20professional%20medical%20management%20system%2C%20modern%20healthcare%20technology%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20patient%20portal%20design&width=400&height=300&seq=portfolio-health-1&orientation=landscape',
      fallbackImage: 'https://readdy.ai/api/search-image?query=Medical%20app%20with%20appointment%20scheduling%2C%20professional%20healthcare%20interface%2C%20modern%20medical%20technology&width=400&height=300&seq=portfolio-health-2&orientation=landscape',
      slug: 'healthsync-mobile',
      technologies: ['React Native', 'Firebase', 'Twilio', 'AWS'],
      metrics: ['10,000+ patients', '4.8/5 rating', 'HIPAA compliant'],
      color: 'rose',
      gallery: [
        'https://readdy.ai/api/search-image?query=Patient%20portal%20with%20medical%20records%2C%20professional%20healthcare%20interface%2C%20modern%20medical%20app%20design%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20healthcare%20technology&width=800&height=500&seq=gallery-health-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Appointment%20scheduling%20interface%20for%20healthcare%2C%20professional%20medical%20app%20design%2C%20modern%20healthcare%20management%2C%20dark%20navy%20corporate%20theme&width=800&height=500&seq=gallery-health-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Telemedicine%20video%20consultation%20interface%2C%20professional%20healthcare%20app%2C%20modern%20telemedicine%20technology%2C%20dark%20navy%20theme%20with%20gold%20accents&width=800&height=500&seq=gallery-health-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Medical%20analytics%20and%20health%20dashboard%2C%20professional%20healthcare%20analytics%20interface%2C%20modern%20medical%20data%20visualization%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-health-4&orientation=landscape'
      ]
    },
    {
      id: 5,
      title: 'FinanceTracker Pro',
      subtitle: 'Financial Management System',
      description: 'Comprehensive financial management platform for businesses with budgeting, expense tracking, and financial reporting capabilities.',
      category: 'Custom Apps',
      image: 'https://readdy.ai/api/search-image?query=Financial%20management%20dashboard%20interface%2C%20professional%20finance%20tracking%20system%2C%20modern%20budgeting%20and%20expense%20management%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20financial%20analytics&width=400&height=300&seq=portfolio-finance-1&orientation=landscape',
      fallbackImage: 'https://readdy.ai/api/search-image?query=Finance%20tracking%20app%20with%20budgeting%20tools%2C%20professional%20financial%20management%20interface%2C%20modern%20finance%20technology&width=400&height=300&seq=portfolio-finance-2&orientation=landscape',
      slug: 'financetracker-pro',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Plaid'],
      metrics: ['$50M+ tracked', '95% accuracy', '30% cost reduction'],
      color: 'indigo',
      gallery: [
        'https://readdy.ai/api/search-image?query=Budget%20planning%20and%20expense%20tracking%20interface%2C%20professional%20financial%20management%20system%2C%20modern%20budgeting%20dashboard%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20finance%20technology&width=800&height=500&seq=gallery-finance-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Financial%20analytics%20and%20reporting%20dashboard%2C%20professional%20finance%20analytics%20interface%2C%20modern%20financial%20data%20visualization%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-finance-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Investment%20portfolio%20management%20interface%2C%20professional%20financial%20tracking%20system%2C%20modern%20investment%20analytics%2C%20dark%20navy%20theme%20with%20gold%20highlights&width=800&height=500&seq=gallery-finance-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Tax%20planning%20and%20compliance%20dashboard%2C%20professional%20financial%20management%20interface%2C%20modern%20tax%20preparation%20system%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-finance-4&orientation=landscape'
      ]
    },
    {
      id: 6,
      title: 'EventMaster App',
      subtitle: 'Event Management Solution',
      description: 'Complete event management platform for organizers with ticketing, attendee management, and event analytics.',
      category: 'Custom Apps',
      image: 'https://readdy.ai/api/search-image?query=Event%20management%20platform%20interface%2C%20professional%20event%20planning%20system%2C%20modern%20event%20management%20technology%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20event%20planning%20dashboard&width=400&height=300&seq=portfolio-event-1&orientation=landscape',
      fallbackImage: 'https://readdy.ai/api/search-image?query=Event%20planning%20app%20with%20ticketing%20system%2C%20professional%20event%20management%20interface%2C%20modern%20event%20technology&width=400&height=300&seq=portfolio-event-2&orientation=landscape',
      slug: 'eventmaster-app',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: ['1,000+ events', '50,000+ attendees', '98% satisfaction'],
      color: 'amber',
      gallery: [
        'https://readdy.ai/api/search-image?query=Event%20creation%20and%20planning%20interface%2C%20professional%20event%20management%20system%2C%20modern%20event%20planning%20dashboard%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20event%20technology&width=800&height=500&seq=gallery-event-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Ticketing%20and%20registration%20system%2C%20professional%20event%20management%20interface%2C%20modern%20ticketing%20platform%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-event-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Attendee%20management%20and%20check-in%20interface%2C%20professional%20event%20management%20system%2C%20modern%20attendee%20tracking%2C%20dark%20navy%20theme%20with%20gold%20highlights&width=800&height=500&seq=gallery-event-3&orientation=landscape',
        'https://readdy.ai/api/search-image?query=Event%20analytics%20and%20reporting%20dashboard%2C%20professional%20event%20management%20analytics%2C%20modern%20event%20data%20visualization%2C%20dark%20navy%20corporate%20design&width=800&height=500&seq=gallery-event-4&orientation=landscape'
      ]
    }
  ];

  const categories = ['all', 'Custom Apps', 'E-commerce', 'POS', 'Automation'];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      rose: 'from-rose-500 to-rose-600',
      amber: 'from-amber-500 to-amber-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const filteredProjects = portfolioItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setShowRequestForm(false);
    setRequestSuccess(false);
    document.body.style.overflow = 'unset';
  };

  const shareProject = (platform: string, project: PortfolioItem) => {
    const url = `https://elegantcodes.com/portfolio/${project.slug}`;
    const text = `Check out this amazing project: ${project.title} by ElegantCodes`;
    
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  const handleRequestSimilar = () => {
    setShowRequestForm(true);
  };

  const handleRequestSuccess = () => {
    setRequestSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const handleRequestError = (error: string) => {
    console.error('Portfolio request error:', error);
  };

  return (
    <div className="min-h-screen bg-[#1A2A44]">
      <Header />
      
      <main>
        {/* Hero Section with Image Gallery */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background with SVG Wave */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,400 C300,300 900,500 1200,400 L1200,800 L0,800 Z" fill="url(#gradient1)"/>
              <path d="M0,600 C400,500 800,700 1200,600 L1200,800 L0,800 Z" fill="url(#gradient2)"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A017" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#D4A017" stopOpacity="0.05"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A017" stopOpacity="0.05"/>
                  <stop offset="100%" stopColor="#D4A017" stopOpacity="0.02"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4A017]/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#D4A017]/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#D4A017]/10 rounded-full blur-3xl animate-float"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8">
                <span className="text-white/90 text-sm font-semibold">Our Work</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-poppins leading-tight">
                Our <span className="text-transparent bg-gradient-to-r from-[#D4A017] to-[#F4D03F] bg-clip-text">Portfolio</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed mb-12">
                Discover our successful projects and innovative solutions that have transformed businesses across various industries.
              </p>

              {/* Strategic Search Bar */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-[#D4A017] transition-all duration-300"
                  />
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 text-xl"></i>
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeFilter === category
                        ? 'bg-[#D4A017] text-[#1A2A44] shadow-lg'
                        : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {category === 'all' ? 'All Projects' : category}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-slate-400">
                <div className="flex items-center">
                  <i className="ri-check-line text-[#D4A017] mr-2"></i>
                  <span className="text-sm">150+ Projects</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#D4A017] mr-2"></i>
                  <span className="text-sm">50+ Clients</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#D4A017] mr-2"></i>
                  <span className="text-sm">99% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((item) => (
                <article 
                  key={item.id} 
                  className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.description}`}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = item.fallbackImage || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDUwMCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjMUUyQjQ0Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwaDMwMHYxNTBIMTAwVjEwMHoiIGZpbGw9IiM0QTU1N0YiLz4KPHN2ZyB4PSIxMjAiIHk9IjEyMCIgd2lkdGg9IjI2MCIgaGVpZ2h0PSIxMTAiPgo8cmVjdCB3aWR0aD0iMjYwIiBoZWlnaHQ9IjExMCIgZmlsbD0iIzFBMkE0NCIvPgo8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0Q0QTAxNyIvPgo8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0Q0QTAxNyIvPgo8cmVjdCB4PSIxMzAiIHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9IiNEQ0EwMTciLz4KPHN2ZyB4PSIxMCIgeT0iNDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjM0M0QTU1Ii8+Cjx0ZXh0IHg9IjUwIiB5PSIzNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ob3QgQXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${getColorClasses(item.color)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Share Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => shareProject('linkedin', item)}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <i className="ri-linkedin-fill text-sm"></i>
                        </button>
                        <button
                          onClick={() => shareProject('twitter', item)}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <i className="ri-twitter-fill text-sm"></i>
                        </button>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/90 via-[#1A2A44]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="p-6 w-full">
                        <button
                          onClick={() => openModal(item)}
                          className="inline-flex items-center text-white font-semibold hover:text-[#D4A017] transition-colors duration-200"
                        >
                          View Details
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 font-poppins group-hover:text-[#D4A017] transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${getColorClasses(item.color)} bg-clip-text text-transparent`}>
                      {item.subtitle}
                    </p>
                    
                    <p className="text-slate-300 mb-6 font-inter leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Metrics</h4>
                      <div className="space-y-2">
                        {item.metrics.map((metric, index) => (
                          <div key={index} className="flex items-center text-sm text-slate-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(item.color)} mr-3`}></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <button
                      onClick={() => openModal(item)}
                      className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${getColorClasses(item.color)} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}
                    >
                      View Details
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            {/* Sticky Explore More Button */}
            <div className="sticky bottom-8 mt-16 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center bg-gradient-to-r from-[#D4A017] to-[#F4D03F] text-[#1A2A44] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore More Projects
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Modal Header */}
                <div className="p-8 border-b border-slate-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2 font-poppins">
                        {selectedProject.title}
                      </h2>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${getColorClasses(selectedProject.color)} bg-clip-text text-transparent`}>
                        {selectedProject.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors duration-200"
                    >
                      <i className="ri-close-line text-xl"></i>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {!showRequestForm ? (
                    <>
                      {/* Image Gallery */}
                      <div className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {selectedProject.gallery.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${selectedProject.title} - Image ${index + 1}`}
                              className="w-full h-48 object-cover rounded-xl shadow-lg"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Project Details */}
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {selectedProject.description}
                          </p>
                          
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.technologies.map((tech, index) => (
                              <span 
                                key={index} 
                                className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metrics and CTA */}
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Key Achievements</h4>
                          <div className="space-y-3 mb-8">
                            {selectedProject.metrics.map((metric, index) => (
                              <div key={index} className="flex items-center text-slate-600">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(selectedProject.color)} mr-3`}></div>
                                {metric}
                              </div>
                            ))}
                          </div>

                          <div className="space-y-4">
                            <Link
                              href={`/portfolio/${selectedProject.slug}`}
                              className={`block w-full bg-gradient-to-r ${getColorClasses(selectedProject.color)} text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                            >
                              View Full Project
                            </Link>
                            <button
                              onClick={handleRequestSimilar}
                              className="block w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                              Request Similar Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Request Form */
                    <div className="max-w-2xl mx-auto">
                      {requestSuccess ? (
                        <div className="text-center py-12">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="ri-check-line text-3xl text-green-600"></i>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Sent Successfully!</h3>
                          <p className="text-slate-600 mb-6">
                            Thank you for your interest in a similar project. We'll get back to you within 24 hours with a detailed proposal.
                          </p>
                          <button
                            onClick={closeModal}
                            className="bg-gradient-to-r from-[#D4A017] to-[#F4D03F] text-[#1A2A44] px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            Close
                          </button>
                        </div>
                      ) : (
                        <EmailForm
                          formType="portfolio"
                          title={`Request Similar to ${selectedProject.title}`}
                          subtitle={`Tell us about your project requirements and we'll create a custom solution inspired by ${selectedProject.title}.`}
                          submitText="Send Request"
                          showCompany={true}
                          showProjectType={true}
                          showPhone={true}
                          showBudget={true}
                          showTimeline={true}
                          onSuccess={handleRequestSuccess}
                          onError={handleRequestError}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
} 