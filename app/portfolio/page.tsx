'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
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

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'TechFlow CRM',
      subtitle: 'Customer Relationship Management System',
      description: 'A comprehensive CRM solution designed to streamline customer management, sales tracking, and business operations for modern enterprises.',
      category: 'Custom Apps',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CRM%20dashboard%20with%20customer%20management%20interface%2C%20modern%20business%20software%20design%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20enterprise%20solution%2C%20professional%20business%20technology&width=400&height=300&seq=portfolio-1&orientation=landscape',
      slug: 'techflow-crm',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      metrics: ['50,000+ users', '99.9% uptime', '40% efficiency gain'],
      color: 'blue',
      gallery: [
        'https://readdy.ai/api/search-image?query=CRM%20dashboard%20main%20interface%2C%20professional%20business%20software&width=800&height=500&seq=techflow-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=CRM%20customer%20management%20screen%2C%20professional%20business%20interface&width=800&height=500&seq=techflow-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=CRM%20analytics%20dashboard%2C%20professional%20business%20intelligence&width=800&height=500&seq=techflow-3&orientation=landscape'
      ]
    },
    {
      id: 2,
      title: 'RetailPro POS',
      subtitle: 'Advanced Point of Sale System',
      description: 'Modern point-of-sale solution with inventory management, customer tracking, and comprehensive reporting for retail businesses.',
      category: 'POS',
      image: 'https://readdy.ai/api/search-image?query=Professional%20point%20of%20sale%20system%20interface%2C%20modern%20retail%20technology%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20business%20solution%2C%20professional%20retail%20software&width=400&height=300&seq=portfolio-2&orientation=landscape',
      slug: 'retailpro-pos',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: ['100+ stores', '60% faster checkout', '99.5% accuracy'],
      color: 'emerald',
      gallery: [
        'https://readdy.ai/api/search-image?query=POS%20system%20interface%2C%20retail%20point%20of%20sale&width=800&height=500&seq=retailpro-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=POS%20inventory%20management%2C%20retail%20system&width=800&height=500&seq=retailpro-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=POS%20sales%20reporting%2C%20retail%20analytics&width=800&height=500&seq=retailpro-3&orientation=landscape'
      ]
    },
    {
      id: 3,
      title: 'EcoShop Marketplace',
      subtitle: 'Multi-Vendor E-commerce Platform',
      description: 'A sophisticated marketplace platform connecting vendors and customers with advanced features and seamless user experience.',
      category: 'E-commerce',
      image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20marketplace%20interface%2C%20modern%20online%20shopping%20platform%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20retail%20solution%2C%20professional%20marketplace%20design&width=400&height=300&seq=portfolio-3&orientation=landscape',
      slug: 'ecoshop-marketplace',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      metrics: ['500+ vendors', '25,000+ products', '200% growth'],
      color: 'purple',
      gallery: [
        'https://readdy.ai/api/search-image?query=ecommerce%20marketplace%20homepage%2C%20online%20shopping&width=800&height=500&seq=ecoshop-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=ecommerce%20product%20listing%2C%20marketplace%20interface&width=800&height=500&seq=ecoshop-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=ecommerce%20vendor%20dashboard%2C%20marketplace%20management&width=800&height=500&seq=ecoshop-3&orientation=landscape'
      ]
    },
    {
      id: 4,
      title: 'HealthSync Mobile',
      subtitle: 'Healthcare Management App',
      description: 'Mobile application for healthcare providers and patients with appointment scheduling, medical records, and telemedicine capabilities.',
      category: 'Custom Apps',
      image: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20mobile%20app%20interface%2C%20modern%20medical%20technology%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20healthcare%20solution%2C%20professional%20medical%20software&width=400&height=300&seq=portfolio-4&orientation=landscape',
      slug: 'healthsync-mobile',
      technologies: ['React Native', 'Firebase', 'Twilio', 'AWS'],
      metrics: ['10,000+ patients', '4.8/5 rating', 'HIPAA compliant'],
      color: 'rose',
      gallery: [
        'https://readdy.ai/api/search-image?query=healthcare%20mobile%20app%20interface%2C%20medical%20app&width=800&height=500&seq=healthsync-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=healthcare%20appointment%20scheduling%2C%20medical%20app&width=800&height=500&seq=healthsync-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=healthcare%20telemedicine%20interface%2C%20medical%20app&width=800&height=500&seq=healthsync-3&orientation=landscape'
      ]
    },
    {
      id: 5,
      title: 'FinanceTracker Pro',
      subtitle: 'Financial Management System',
      description: 'Comprehensive financial management platform for businesses with budgeting, expense tracking, and financial reporting capabilities.',
      category: 'Automation',
      image: 'https://readdy.ai/api/search-image?query=Professional%20financial%20management%20dashboard%2C%20modern%20business%20finance%20software%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20financial%20solution%2C%20professional%20accounting%20software&width=400&height=300&seq=portfolio-5&orientation=landscape',
      slug: 'financetracker-pro',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      metrics: ['$2M+ managed', '80% time savings', 'Real-time reporting'],
      color: 'amber',
      gallery: [
        'https://readdy.ai/api/search-image?query=financial%20management%20dashboard%2C%20finance%20software&width=800&height=500&seq=financetracker-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=financial%20reporting%20interface%2C%20finance%20analytics&width=800&height=500&seq=financetracker-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=financial%20budgeting%20interface%2C%20finance%20planning&width=800&height=500&seq=financetracker-3&orientation=landscape'
      ]
    },
    {
      id: 6,
      title: 'EventMaster App',
      subtitle: 'Event Management Solution',
      description: 'Complete event management platform for organizers with ticketing, attendee management, and event analytics.',
      category: 'Custom Apps',
      image: 'https://readdy.ai/api/search-image?query=Professional%20event%20management%20platform%20interface%2C%20modern%20event%20technology%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20event%20solution%2C%20professional%20event%20software&width=400&height=300&seq=portfolio-6&orientation=landscape',
      slug: 'eventmaster-app',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: ['500+ events', '50,000+ attendees', '95% satisfaction'],
      color: 'indigo',
      gallery: [
        'https://readdy.ai/api/search-image?query=event%20management%20platform%2C%20event%20planning%20software&width=800&height=500&seq=eventmaster-1&orientation=landscape',
        'https://readdy.ai/api/search-image?query=event%20ticketing%20interface%2C%20event%20management&width=800&height=500&seq=eventmaster-2&orientation=landscape',
        'https://readdy.ai/api/search-image?query=event%20analytics%20dashboard%2C%20event%20reporting&width=800&height=500&seq=eventmaster-3&orientation=landscape'
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
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
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
                        <Link
                          href="/#contact"
                          className="block w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                        >
                          Request Similar Project
                        </Link>
                      </div>
                    </div>
                  </div>
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