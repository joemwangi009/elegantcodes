
'use client';

interface ServiceCTAProps {
  ctaText: string;
  serviceTitle: string;
}

export default function ServiceCTA({ ctaText, serviceTitle }: ServiceCTAProps) {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
      <div className="max-w-2xl mx-auto">
        <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 font-poppins">
          Ready to Get Started with {serviceTitle}?
        </h3>
        <p className="text-slate-300 mb-8 font-inter leading-relaxed">
          Transform your business with our expert solutions. Our team is ready to discuss your specific 
          requirements and create a customized approach that delivers results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer transform hover:scale-105">
            {ctaText}
          </button>
          <button className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer">
            Schedule Consultation
          </button>
        </div>
        
        <div className="flex items-center justify-center mt-8 space-x-8 text-slate-400">
          <div className="flex items-center">
            <i className="ri-time-line mr-2"></i>
            <span className="text-sm">Quick Response</span>
          </div>
          <div className="flex items-center">
            <i className="ri-shield-check-line mr-2"></i>
            <span className="text-sm">Guaranteed Quality</span>
          </div>
          <div className="flex items-center">
            <i className="ri-customer-service-2-line mr-2"></i>
            <span className="text-sm">Expert Support</span>
          </div>
        </div>
      </div>
    </div>
  );
}
