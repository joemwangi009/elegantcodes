
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-smartphone-line',
      title: 'Custom Applications',
      description: 'Tailored software solutions built from scratch to meet your unique business requirements and workflow needs.',
      features: ['Mobile & Web Apps', 'API Development', 'Database Design', 'Cloud Integration'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20custom%20software%20application%20interface%20with%20clean%20dark%20navy%20design%2C%20elegant%20user%20interface%20elements%2C%20professional%20dashboard%20with%20gold%20accents%2C%20sophisticated%20app%20development%20visualization%2C%20sleek%20mobile%20and%20web%20application%20design%2C%20high-tech%20programming%20concept&width=400&height=300&seq=service-1&orientation=landscape'
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-commerce Solutions',
      description: 'Complete online store platforms with payment processing, inventory management, and customer experience optimization.',
      features: ['Online Stores', 'Payment Integration', 'Inventory Management', 'Analytics Dashboard'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20platform%20interface%20with%20elegant%20product%20displays%2C%20modern%20online%20shopping%20cart%20design%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20sophisticated%20retail%20technology%20solution%2C%20sleek%20marketplace%20design%2C%20business%20commerce%20visualization&width=400&height=300&seq=service-2&orientation=landscape'
    },
    {
      icon: 'ri-cash-line',
      title: 'POS Systems',
      description: 'Advanced point-of-sale systems for retail and hospitality businesses with real-time reporting and analytics.',
      features: ['Touch Interface', 'Inventory Tracking', 'Sales Reports', 'Multi-location Support'],
      image: 'https://readdy.ai/api/search-image?query=Modern%20point%20of%20sale%20system%20with%20elegant%20touch%20screen%20interface%2C%20professional%20retail%20POS%20terminal%20with%20dark%20navy%20design%20and%20gold%20accents%2C%20sophisticated%20cash%20register%20technology%2C%20sleek%20business%20payment%20system%2C%20high-tech%20retail%20solution&width=400&height=300&seq=service-3&orientation=landscape'
    },
    {
      icon: 'ri-briefcase-line',
      title: 'Business Solutions',
      description: 'Comprehensive enterprise software including CRM, ERP, and workflow automation to streamline operations.',
      features: ['CRM Systems', 'ERP Solutions', 'Workflow Automation', 'Data Analytics'],
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20management%20dashboard%20with%20elegant%20data%20visualization%2C%20modern%20enterprise%20software%20interface%2C%20dark%20navy%20corporate%20design%20with%20gold%20elements%2C%20sophisticated%20business%20analytics%20platform%2C%20sleek%20workflow%20management%20system&width=400&height=300&seq=service-4&orientation=landscape'
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
            Our <span className="text-amber-500">Services</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
            We provide comprehensive IT solutions designed to elevate your business operations 
            and drive digital transformation across all industry sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex flex-col lg:flex-row items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-amber-500 rounded-xl mr-4">
                      <i className={`${service.icon} text-2xl text-slate-900`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-poppins">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 font-inter leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-700">
                        <i className="ri-check-line text-amber-500 mr-3"></i>
                        <span className="font-inter">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    href="/services"
                    className="bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer group-hover:shadow-lg"
                  >
                    Learn More
                  </Link>
                </div>
                
                <div className="lg:w-80">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover object-top rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
