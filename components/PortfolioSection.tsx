
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
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop&crop=center',
      fallbackImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&crop=center',
    },
    {
      id: 2,
      title: 'RetailPro POS',
      category: 'pos',
      slug: 'retailpro-pos',
      description: 'Advanced point-of-sale system for retail chains with real-time inventory management.',
      technologies: ['Vue.js', 'Python', 'MongoDB', 'Docker'],
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=350&fit=crop&crop=center',
      fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop&crop=center',
    },
    {
      id: 3,
      title: 'EcoShop Marketplace',
      category: 'ecommerce',
      slug: 'ecoshop-marketplace',
      description: 'Sustainable e-commerce platform connecting eco-friendly brands with conscious consumers.',
      technologies: ['Next.js', 'Stripe', 'Prisma', 'Vercel'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop&crop=center',
      fallbackImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=350&fit=crop&crop=center',
    },
    {
      id: 4,
      title: 'HealthSync Mobile',
      category: 'mobile',
      slug: 'healthsync-mobile',
      description: 'Healthcare management app connecting patients with healthcare providers seamlessly.',
      technologies: ['React Native', 'Firebase', 'TypeScript', 'GraphQL'],
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&h=350&fit=crop&crop=center',
      fallbackImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&h=350&fit=crop&crop=center',
    },
    {
      id: 5,
      title: 'FinanceTracker Pro',
      category: 'web',
      slug: 'financetracker-pro',
      description: 'Personal finance management platform with AI-powered insights and budgeting tools.',
      technologies: ['Angular', 'Spring Boot', 'MySQL', 'Azure'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=350&fit=crop&crop=center',
      fallbackImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=350&fit=crop&crop=center',
    },
    {
      id: 6,
      title: 'EventMaster App',
      category: 'mobile',
      slug: 'eventmaster-app',
      description: 'Comprehensive event management mobile application for organizers and attendees.',
      technologies: ['Flutter', 'Node.js', 'Redis', 'Google Cloud'],
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop&crop=center',
      fallbackImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&h=350&fit=crop&crop=center',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 mb-6 font-poppins">
            Our <span className="text-blue-600">Portfolio</span>
          </h2>
          <p className="text-xl text-blue-700 max-w-3xl mx-auto font-inter">
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
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-700 hover:bg-blue-50 border border-blue-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.description}`}
                  className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = project.fallbackImage || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDUwMCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjMUUyQjQ0Ii8+Cjx0ZXh0IHg9IjI1MCIgeT0iMTc1IiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZTwvdGV4dD4KPHRleHQgeD0iMjUwIiB5PSIyMDAiIGZpbGw9IndoaXRlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIHRleHQtYW5jaG9yPSJtaWRkbGUiPk5vdCBBdmFpbGFibGU8L3RleHQ+Cjwvc3ZnPgo=';
                  }}
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    project.category === 'web' ? 'bg-blue-500' :
                    project.category === 'mobile' ? 'bg-green-500' :
                    project.category === 'ecommerce' ? 'bg-purple-500' :
                    project.category === 'pos' ? 'bg-emerald-500' :
                    'bg-gray-500'
                  }`}>
                    {project.category === 'web' ? 'Web App' :
                     project.category === 'mobile' ? 'Mobile App' :
                     project.category === 'ecommerce' ? 'E-commerce' :
                     project.category === 'pos' ? 'POS System' :
                     project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins">{project.title}</h3>
                <p className="text-gray-600 mb-4 font-inter">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 cursor-pointer"
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
