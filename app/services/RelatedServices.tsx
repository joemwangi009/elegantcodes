
'use client';

interface RelatedServicesProps {
  currentService: string;
  services: Record<string, any>;
  setActiveService: (service: string) => void;
}

export default function RelatedServices({ currentService, services, setActiveService }: RelatedServicesProps) {
  const currentCategory = services[currentService].category;
  
  // Get related services from the same category, excluding current service
  const relatedServices = Object.entries(services)
    .filter(([key, service]) => service.category === currentCategory && key !== currentService)
    .slice(0, 3);

  if (relatedServices.length === 0) return null;

  const handleServiceClick = (serviceKey: string) => {
    setActiveService(serviceKey);
    // Scroll to top of services section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-slate-900 mb-4 font-poppins">
          Related <span className="text-amber-500">Services</span>
        </h3>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-inter">
          Explore other solutions in the {currentCategory} category that might interest you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {relatedServices.map(([serviceKey, service]) => (
          <div
            key={serviceKey}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer overflow-hidden"
            onClick={() => handleServiceClick(serviceKey)}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/20 transition-colors duration-300"></div>
              <div className="absolute top-4 left-4">
                <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-xs font-semibold">
                  {service.category}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-200 font-poppins">
                {service.title}
              </h4>
              <p className="text-slate-600 mb-4 leading-relaxed font-inter">
                {service.subtitle}
              </p>
              
              <div className="flex items-center justify-between">
                <button 
                  className="text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleServiceClick(serviceKey);
                  }}
                >
                  Learn More
                </button>
                <div className="w-10 h-10 flex items-center justify-center bg-slate-100 group-hover:bg-amber-500 rounded-full transition-all duration-200">
                  <i className="ri-arrow-right-line text-slate-600 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-200"></i>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
