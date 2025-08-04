
'use client';

interface ProjectHeroProps {
  project: {
    title: string;
    tagline: string;
    category: string;
    heroImage: string;
  };
}

export default function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative h-96 lg:h-[500px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${project.heroImage})` }}
      >
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="mb-4">
              <span className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wider">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-poppins leading-tight">
              {project.title}
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-200 font-inter leading-relaxed">
              {project.tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
