
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface RelatedProjectsProps {
  currentProjectId?: number;
}

const allProjects = [
  {
    id: 1,
    title: 'TechFlow CRM',
    slug: 'techflow-crm',
    category: 'Web Application',
    description: 'Custom CRM solution for technology companies with advanced analytics.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: 2,
    title: 'RetailPro POS',
    slug: 'retailpro-pos',
    category: 'POS System',
    description: 'Advanced point-of-sale system for retail chains with real-time inventory.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: 3,
    title: 'EcoShop Marketplace',
    slug: 'ecoshop-marketplace',
    category: 'E-commerce Platform',
    description: 'Sustainable e-commerce platform connecting eco-friendly brands.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: 4,
    title: 'HealthSync Mobile',
    slug: 'healthsync-mobile',
    category: 'Mobile Application',
    description: 'Healthcare management app connecting patients with providers.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: 5,
    title: 'FinanceTracker Pro',
    slug: 'financetracker-pro',
    category: 'Web Application',
    description: 'Personal finance management platform with AI-powered insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center',
  },
  {
    id: 6,
    title: 'EventMaster App',
    slug: 'eventmaster-app',
    category: 'Mobile Application',
    description: 'Comprehensive event management mobile application.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&fit=crop&crop=center',
  },
];

export default function RelatedProjects({ currentProjectId }: RelatedProjectsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const relatedProjects = allProjects
    .filter(project => project.id !== currentProjectId)
    .slice(0, 5);

  const visibleProjects = relatedProjects.slice(currentIndex, currentIndex + 3);
  const canGoNext = currentIndex + 3 < relatedProjects.length;
  const canGoPrev = currentIndex > 0;

  const nextSlide = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Related Projects</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore other projects that showcase our expertise
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {relatedProjects.map((project) => (
            <Link
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video bg-slate-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <span className="text-amber-600 text-sm font-medium uppercase tracking-wide">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 group-hover:text-amber-600 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
