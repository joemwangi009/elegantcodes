
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Apps' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ecommerce', label: 'E-commerce' },
    { id: 'pos', label: 'POS Systems' },
  ];

  const projects = [
    {
      id: 1,
      title: 'TechFlow CRM',
      category: 'web',
      slug: 'techflow-crm',
      description: 'Custom CRM solution for technology companies with advanced analytics and automation.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20CRM%20dashboard%20interface%20with%20elegant%20data%20visualization%2C%20modern%20customer%20relationship%20management%20system%2C%20dark%20navy%20corporate%20design%20with%20gold%20accents%2C%20sophisticated%20business%20analytics%20platform%2C%20sleek%20workflow%20management%20interface%2C%20clean%20professional%20software%20design&width=500&height=350&seq=portfolio-1&orientation=landscape',
    },
    {
      id: 2,
      title: 'RetailPro POS',
      category: 'pos',
      slug: 'retailpro-pos',
      description: 'Advanced point-of-sale system for retail chains with real-time inventory management.',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20point%20of%20sale%20interface%20with%20clean%20design%2C%20professional%20POS%20system%20dashboard%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20elegant%20touch%20screen%20interface%2C%20sophisticated%20retail%20technology%20solution%2C%20sleek%20payment%20processing%20system&width=500&height=350&seq=portfolio-2&orientation=landscape',
    },
    {
      id: 3,
      title: 'EcoShop Marketplace',
      category: 'ecommerce',
      slug: 'ecoshop-marketplace',
      description: 'Sustainable e-commerce platform connecting eco-friendly brands with conscious consumers.',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'Vercel'],
      image: 'https://readdy.ai/api/search-image?query=Elegant%20e-commerce%20marketplace%20interface%20with%20sustainable%20product%20displays%2C%20modern%20online%20shopping%20platform%2C%20dark%20navy%20design%20with%20gold%20accents%2C%20sophisticated%20retail%20website%20layout%2C%20clean%20product%20catalog%20design%2C%20professional%20marketplace%20visualization&width=500&height=350&seq=portfolio-3&orientation=landscape',
    },
    {
      id: 4,
      title: 'HealthSync Mobile',
      category: 'mobile',
      slug: 'healthsync-mobile',
      description: 'Healthcare management app connecting patients with healthcare providers seamlessly.',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'GraphQL'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20mobile%20application%20interface%20with%20clean%20medical%20design%2C%20modern%20health%20management%20app%20screens%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20sophisticated%20medical%20technology%20solution%2C%20sleek%20patient%20care%20interface%2C%20clean%20mobile%20app%20design&width=500&height=350&seq=portfolio-4&orientation=landscape',
    },
    {
      id: 5,
      title: 'FinanceTracker Pro',
      category: 'web',
      slug: 'financetracker-pro',
      description: 'Personal finance management platform with AI-powered insights and budgeting tools.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Azure'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20financial%20dashboard%20with%20elegant%20data%20visualization%2C%20modern%20finance%20management%20interface%2C%20dark%20navy%20corporate%20design%20with%20gold%20accents%2C%20sophisticated%20banking%20application%2C%20sleek%20budget%20tracking%20system%2C%20clean%20financial%20analytics%20platform&width=500&height=350&seq=portfolio-5&orientation=landscape',
    },
    {
      id: 6,
      title: 'EventMaster App',
      category: 'mobile',
      slug: 'eventmaster-app',
      description: 'Comprehensive event management mobile application for organizers and attendees.',
      technologies: ['Flutter', 'Node.js', 'Redis', 'Google Cloud'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20event%20management%20mobile%20app%20interface%20with%20elegant%20event%20displays%2C%20professional%20event%20planning%20application%2C%20dark%20navy%20design%20with%20gold%20highlights%2C%20sophisticated%20event%20coordination%20system%2C%20sleek%20mobile%20interface%20design%2C%20clean%20event%20booking%20platform&width=500&height=350&seq=portfolio-6&orientation=landscape',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Our <span className="text-amber-400">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto font-inter">
            Explore our recent projects and see how we've helped businesses transform 
            their operations with cutting-edge technology solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-amber-500 text-slate-900'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-slate-800 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 font-poppins">{project.title}</h3>
                <p className="text-slate-400 mb-4 font-inter">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-slate-700 text-amber-400 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link
                  href="/services"
                  className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-200 cursor-pointer"
                >
                  View Project
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
