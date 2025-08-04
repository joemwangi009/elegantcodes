
'use client';

import { useState } from 'react';

interface ServiceDetailsProps {
  service: {
    title: string;
    description: string;
    features: string[];
    benefits: string[];
    techStack: Array<{ name: string; tooltip: string; }>;
  };
}

export default function ServiceDetails({ service }: ServiceDetailsProps) {
  const [activeTab, setActiveTab] = useState('features');
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const tabs = [
    { id: 'features', label: 'Key Features', icon: 'ri-list-check-3' },
    { id: 'benefits', label: 'Benefits', icon: 'ri-star-line' },
    { id: 'tech', label: 'Tech Stack', icon: 'ri-code-s-slash-line' }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-poppins">
          {service.title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed font-inter">
          {service.description}
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-slate-200 mb-6">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'border-amber-500 text-amber-600'
                  : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center">
                <i className={`${tab.icon} mr-2`}></i>
                {tab.label}
              </div>
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-[300px]">
        {activeTab === 'features' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 rounded-xl bg-slate-50 hover:bg-amber-50 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <i className="ri-check-line text-slate-900 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{feature}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 rounded-xl bg-slate-50 hover:bg-amber-50 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <i className="ri-star-fill text-slate-900 text-sm"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">{benefit}</h4>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tech' && (
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Technology Stack</h3>
              <p className="text-slate-600 font-inter">
                We use industry-leading technologies to build robust, scalable, and maintainable solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {service.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <div className="bg-slate-50 hover:bg-amber-50 rounded-xl p-4 text-center transition-all duration-200 cursor-pointer group border hover:border-amber-200">
                    <div className="w-12 h-12 flex items-center justify-center bg-slate-900 rounded-lg mx-auto mb-3 group-hover:bg-amber-500 transition-colors duration-200">
                      <i className="ri-code-s-slash-line text-white group-hover:text-slate-900 text-xl"></i>
                    </div>
                    <h4 className="font-semibold text-slate-900 text-sm">{tech.name}</h4>
                  </div>
                  
                  {/* Tooltip */}
                  {hoveredTech === tech.name && (
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-slate-900 text-white text-sm rounded-lg shadow-lg z-10 whitespace-nowrap">
                      {tech.tooltip}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
