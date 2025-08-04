
'use client';

interface ServiceHeroProps {
  service: {
    category: string;
    title: string;
    subtitle: string;
    description: string;
    image: string;
  };
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative py-20 bg-slate-900 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover object-top opacity-30"
        />
        <div className="absolute inset-0 bg-slate-900/70"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 bg-amber-500/20 rounded-full mb-6">
            <span className="text-amber-400 text-sm font-semibold">{service.category}</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-poppins">
            {service.title}
          </h1>
          
          <p className="text-xl lg:text-2xl text-amber-400 mb-8 font-inter">
            {service.subtitle}
          </p>
          
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-inter">
            {service.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer">
              Get Started Today
            </button>
            <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute -bottom-1 left-0 w-full">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-20">
          <path 
            d="M0,80 C300,120 900,0 1200,80 L1200,120 L0,120 Z" 
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
}
