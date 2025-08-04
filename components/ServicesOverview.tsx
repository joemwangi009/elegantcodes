'use client';

import Link from 'next/link';

export default function ServicesOverview() {
  const services = [
    {
      icon: 'ri-smartphone-line',
      title: 'Custom Applications',
      description: 'Tailored mobile and web applications built to your exact specifications.',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'hover:from-blue-600 hover:to-cyan-600'
    },
    {
      icon: 'ri-shopping-cart-line', 
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment processing and inventory management.',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'hover:from-green-600 hover:to-emerald-600'
    },
    {
      icon: 'ri-cash-line',
      title: 'POS Systems',
      description: 'Advanced point-of-sale systems with real-time analytics and reporting.',
      color: 'from-orange-500 to-red-500', 
      hoverColor: 'hover:from-orange-600 hover:to-red-600'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Business Automation',
      description: 'Streamline operations with CRM, ERP, and workflow automation solutions.',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'hover:from-purple-600 hover:to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
            Our Core <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
            Comprehensive IT solutions designed to transform your business operations and drive digital growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 cursor-pointer border border-slate-100 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-16 h-16 flex items-center justify-center bg-gradient-to-br ${service.color} ${service.hoverColor} rounded-xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <i className={`${service.icon} text-2xl text-white`}></i>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-4 font-poppins group-hover:text-slate-800 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 mb-6 font-inter leading-relaxed group-hover:text-slate-700 transition-colors">
                  {service.description}
                </p>
                
                <Link 
                  href="#services"
                  className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors group-hover:translate-x-1 duration-300"
                >
                  Learn More
                  <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
                </Link>
              </div>
              
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}