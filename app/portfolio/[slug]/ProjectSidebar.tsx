
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ProjectSidebarProps {
  project: {
    client: string;
    duration: string;
    team: string;
    category: string;
    technologies: Array<{
      name: string;
      icon: string;
    }>;
  };
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const scrollTop = window.scrollY;
        const shouldBeSticky = scrollTop > 300;
        setIsSticky(shouldBeSticky);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const projectHighlights = [
    { label: 'Client', value: project.client, icon: 'ri-building-line' },
    { label: 'Duration', value: project.duration, icon: 'ri-time-line' },
    { label: 'Team Size', value: project.team, icon: 'ri-team-line' },
    { label: 'Category', value: project.category, icon: 'ri-folder-line' },
  ];

  const navigationItems = [
    { label: 'Overview', href: '#overview', icon: 'ri-file-text-line' },
    { label: 'Challenges', href: '#challenges', icon: 'ri-alert-line' },
    { label: 'Solutions', href: '#solutions', icon: 'ri-lightbulb-line' },
    { label: 'Tech Stack', href: '#technologies', icon: 'ri-code-line' },
    { label: 'Results', href: '#results', icon: 'ri-trophy-line' },
  ];

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <aside className={`transition-all duration-300 ${isSticky ? 'lg:sticky lg:top-24' : ''}`}>
      <div className="space-y-8">
        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6 font-poppins">
            Project Details
          </h3>
          
          <div className="space-y-4">
            {projectHighlights.map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-amber-500/20 rounded-lg">
                  <i className={`${item.icon} text-amber-400 text-sm`}></i>
                </div>
                <div>
                  <p className="text-slate-400 text-sm font-medium">{item.label}</p>
                  <p className="text-white font-semibold font-inter">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-6 font-poppins">
            Quick Navigation
          </h3>
          
          <nav className="space-y-2">
            {navigationItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-700 transition-colors duration-200 cursor-pointer group"
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className={`${item.icon} text-sm group-hover:text-amber-400`}></i>
                </div>
                <span className="font-medium font-inter">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 rounded-xl p-6 border border-amber-500/20">
          <h3 className="text-xl font-bold text-white mb-4 font-poppins">
            Interested in This Solution?
          </h3>
          <p className="text-slate-300 mb-6 font-inter">
            Get a customized solution tailored to your business needs.
          </p>
          
          <div className="space-y-3">
            <Link
              href="/#contact"
              className="block w-full bg-amber-500 hover:bg-amber-600 text-slate-900 px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Start Your Project
            </Link>
            
            <Link
              href="/#quote"
              className="block w-full bg-slate-700 hover:bg-slate-600 text-white px-4 py-3 rounded-lg font-semibold text-center transition-colors duration-200 whitespace-nowrap cursor-pointer"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
          <h3 className="text-xl font-bold text-white mb-4 font-poppins">
            Share This Project
          </h3>
          
          <div className="flex space-x-3">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && navigator.share) {
                  navigator.share({
                    title: `ElegantCodes - ${project.client}`,
                    url: currentUrl,
                  });
                } else if (typeof window !== 'undefined' && navigator.clipboard) {
                  navigator.clipboard.writeText(currentUrl);
                }
              }}
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
              aria-label="Share project"
            >
              <div className="w-5 h-5 flex items-center justify-center mx-auto">
                <i className="ri-share-line text-sm"></i>
              </div>
            </button>
            
            <a
              href={`https://twitter.com/intent/tweet?text=Check out this amazing project by ElegantCodes&url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
              aria-label="Share on Twitter"
            >
              <div className="w-5 h-5 flex items-center justify-center mx-auto">
                <i className="ri-twitter-line text-sm"></i>
              </div>
            </a>
            
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-slate-700 hover:bg-slate-600 text-white px-3 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
              aria-label="Share on LinkedIn"
            >
              <div className="w-5 h-5 flex items-center justify-center mx-auto">
                <i className="ri-linkedin-line text-sm"></i>
              </div>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
