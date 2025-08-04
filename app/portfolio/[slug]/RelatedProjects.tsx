
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface RelatedProjectsProps {
  currentProjectId: number;
}

const allProjects = [
  {
    id: 1,
    title: 'TechFlow CRM',
    slug: 'techflow-crm',
    category: 'Web Application',
    description: 'Custom CRM solution for technology companies with advanced analytics.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20CRM%20dashboard%20interface%20with%20elegant%20data%20visualization%2C%20modern%20customer%20relationship%20management%20system%2C%20dark%20navy%20corporate%20design%20with%20gold%20accents%2C%20sophisticated%20business%20analytics%20platform&width=400&height=250&seq=related-1&orientation=landscape',
  },
  {
    id: 2,
    title: 'RetailPro POS',
    slug: 'retailpro-pos',
    category: 'POS System',
    description: 'Advanced point-of-sale system for retail chains with real-time inventory.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20retail%20point%20of%20sale%20interface%20with%20clean%20design%2C%20professional%20POS%20system%20dashboard%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20elegant%20touch%20screen%20interface&width=400&height=250&seq=related-2&orientation=landscape',
  },
  {
    id: 3,
    title: 'EcoShop Marketplace',
    slug: 'ecoshop-marketplace',
    category: 'E-commerce Platform',
    description: 'Sustainable e-commerce platform connecting eco-friendly brands.',
    image: 'https://readdy.ai/api/search-image?query=Elegant%20e-commerce%20marketplace%20interface%20with%20sustainable%20product%20displays%2C%20modern%20online%20shopping%20platform%2C%20dark%20navy%20design%20with%20gold%20accents&width=400&height=250&seq=related-3&orientation=landscape',
  },
  {
    id: 4,
    title: 'HealthSync Mobile',
    slug: 'healthsync-mobile',
    category: 'Mobile Application',
    description: 'Healthcare management app connecting patients with providers.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20mobile%20application%20interface%20with%20clean%20medical%20design%2C%20modern%20health%20management%20app%20screens%2C%20dark%20navy%20theme%20with%20gold%20highlights&width=400&height=250&seq=related-4&orientation=landscape',
  },
  {
    id: 5,
    title: 'FinanceTracker Pro',
    slug: 'financetracker-pro',
    category: 'Web Application',
    description: 'Personal finance management platform with AI-powered insights.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20financial%20dashboard%20with%20elegant%20data%20visualization%2C%20modern%20finance%20management%20interface%2C%20dark%20navy%20corporate%20design%20with%20gold%20accents&width=400&height=250&seq=related-5&orientation=landscape',
  },
  {
    id: 6,
    title: 'EventMaster App',
    slug: 'eventmaster-app',
    category: 'Mobile Application',
    description: 'Comprehensive event management mobile application.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20event%20management%20mobile%20app%20interface%20with%20elegant%20event%20displays%2C%20professional%20event%20planning%20application%2C%20dark%20navy%20design%20with%20gold%20highlights&width=400&height=250&seq=related-6&orientation=landscape',
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
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-poppins">
            Related Projects
          </h2>
          <p className="text-xl text-slate-300 font-inter">
            Explore more of our innovative solutions
          </p>
        </div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <div className="flex space-x-2">
              {relatedProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index >= currentIndex && index < currentIndex + 3
                      ? 'bg-amber-500'
                      : 'bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                disabled={!canGoPrev}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                  canGoPrev
                    ? 'bg-slate-700 hover:bg-slate-600 text-white'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
                aria-label="Previous projects"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              
              <button
                onClick={nextSlide}
                disabled={!canGoNext}
                className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 ${
                  canGoNext
                    ? 'bg-slate-700 hover:bg-slate-600 text-white'
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                }`}
                aria-label="Next projects"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="bg-slate-900 rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/30 transition-colors duration-300"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 font-poppins">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-4 font-inter line-clamp-2">
                    {project.description}
                  </p>
                  
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-amber-400 hover:text-amber-300 font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    View Project
                    <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/#portfolio"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block whitespace-nowrap cursor-pointer"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
