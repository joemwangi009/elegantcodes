
'use client';

import { useEffect, useRef, useState } from 'react';

interface ProjectContentProps {
  project: {
    overview: string;
    challenges: string[];
    solutions: string[];
    technologies: Array<{
      name: string;
      icon: string;
    }>;
    results: string[];
  };
}

export default function ProjectContent({ project }: ProjectContentProps) {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.2 }
    );

    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (id: string) => (el: HTMLElement | null) => {
    sectionRefs.current[id] = el;
  };

  const getSectionClass = (id: string) => 
    `transition-all duration-1000 ${
      visibleSections.has(id) 
        ? 'opacity-100 transform translate-y-0' 
        : 'opacity-0 transform translate-y-8'
    }`;

  return (
    <div className="space-y-16">
      <section 
        id="overview"
        ref={setSectionRef('overview')}
        className={getSectionClass('overview')}
      >
        <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
          Project Overview
        </h2>
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <p className="text-lg text-slate-300 leading-relaxed font-inter">
            {project.overview}
          </p>
        </div>
      </section>

      <section 
        id="challenges"
        ref={setSectionRef('challenges')}
        className={getSectionClass('challenges')}
      >
        <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
          Challenges We Faced
        </h2>
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="space-y-4">
            {project.challenges.map((challenge, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-500 rounded-full mt-1">
                  <i className="ri-alert-line text-white text-sm"></i>
                </div>
                <p className="text-lg text-slate-300 font-inter">{challenge}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="solutions"
        ref={setSectionRef('solutions')}
        className={getSectionClass('solutions')}
      >
        <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
          Our Solutions
        </h2>
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="space-y-4">
            {project.solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-500 rounded-full mt-1">
                  <i className="ri-check-line text-white text-sm"></i>
                </div>
                <p className="text-lg text-slate-300 font-inter">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="technologies"
        ref={setSectionRef('technologies')}
        className={getSectionClass('technologies')}
      >
        <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
          Technology Stack
        </h2>
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {project.technologies.map((tech, index) => (
              <div 
                key={index}
                className="group relative bg-slate-700 rounded-lg p-6 hover:bg-slate-600 transition-all duration-200 cursor-pointer"
                title={`Learn more about ${tech.name}`}
              >
                <div className="text-center">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 text-amber-400 text-2xl">
                    <i className={tech.icon}></i>
                  </div>
                  <h3 className="text-lg font-semibold text-white font-inter">
                    {tech.name}
                  </h3>
                </div>
                
                <div className="absolute inset-0 bg-amber-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        id="results"
        ref={setSectionRef('results')}
        className={getSectionClass('results')}
      >
        <h2 className="text-3xl font-bold text-white mb-6 font-poppins">
          Project Results
        </h2>
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-xl p-8 border border-amber-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.results.map((result, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-amber-500 rounded-full">
                  <i className="ri-trophy-line text-slate-900 text-lg"></i>
                </div>
                <p className="text-lg font-semibold text-amber-100 font-inter">
                  {result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
