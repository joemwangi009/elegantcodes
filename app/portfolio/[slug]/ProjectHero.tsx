
'use client';

interface ProjectHeroProps {
  project: {
    title: string;
    description: string;
    category: string;
    heroImage: string;
    client: string;
    duration: string;
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
            
            <p className="text-xl lg:text-2xl text-slate-200 font-inter leading-relaxed mb-6">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-6 text-slate-300">
              <div className="flex items-center">
                <i className="ri-building-line mr-2"></i>
                <span className="font-medium">Client: {project.client}</span>
              </div>
              <div className="flex items-center">
                <i className="ri-time-line mr-2"></i>
                <span className="font-medium">Duration: {project.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
