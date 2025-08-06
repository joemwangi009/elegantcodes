
'use client';

interface Service {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  techStack: { name: string; tooltip: string; }[];
  caseStudy: {
    client: string;
    quote: string;
    outcome: string;
    metrics: string[];
  };
  ctaText: string;
}

type Services = Record<string, Service>;

interface ServiceTabsProps {
  services: Services;
  activeService: string;
  setActiveService: (service: string) => void;
}

export default function ServiceTabs({ services, activeService, setActiveService }: ServiceTabsProps) {
  const servicesByCategory = {
    'Custom Applications': ['mobile-apps', 'web-apps', 'desktop-apps', 'api-development'] as string[],
    'E-commerce Solutions': ['shopify', 'woocommerce', 'magento', 'custom-ecommerce'] as string[],
    'POS Systems': ['retail-pos', 'restaurant-pos', 'cloud-pos', 'mobile-pos'] as string[],
    'Business Automation': ['crm-integration', 'workflow-automation', 'erp-solutions', 'ai-automation'] as string[]
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we're not on the homepage, navigate to it and scroll to contact
      window.location.href = '/#contact';
    }
  };

  return (
    <div className="sticky top-24">
      {/* Service Navigation */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-slate-900 mb-4 font-poppins">Our Services</h3>
        
        {Object.entries(servicesByCategory).map(([category, serviceKeys]) => (
          <div key={category} className="mb-6">
            <h4 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">
              {category}
            </h4>
            <div className="space-y-2">
              {serviceKeys.map((serviceKey) => (
                <button
                  key={serviceKey}
                  onClick={() => setActiveService(serviceKey)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer ${
                    activeService === serviceKey
                      ? 'bg-amber-500 text-slate-900 shadow-md'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="text-sm font-medium">
                      {services[serviceKey].title}
                    </span>
                    {activeService === serviceKey && (
                      <i className="ri-arrow-right-line ml-auto"></i>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact Card */}
      <div className="bg-slate-900 rounded-2xl p-6 mt-6">
        <div className="text-center">
          <div className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-full mx-auto mb-4">
            <i className="ri-phone-line text-slate-900 text-xl"></i>
          </div>
          <h4 className="text-lg font-bold text-white mb-2 font-poppins">Need Help Choosing?</h4>
          <p className="text-slate-400 text-sm mb-4">
            Our experts can help you find the perfect solution for your business.
          </p>
          <button 
            onClick={scrollToContact}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer inline-block text-center"
          >
            Get Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
