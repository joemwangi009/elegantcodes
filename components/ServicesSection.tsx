
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      title: 'Custom Applications',
      description: 'Tailored software solutions designed to meet your specific business needs and requirements.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center',
      link: '/services'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store platforms that drive sales and enhance customer experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop&crop=center',
      link: '/services'
    },
    {
      title: 'POS Systems',
      description: 'Advanced point-of-sale solutions for retail and restaurant businesses.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop&crop=center',
      link: '/services'
    },
    {
      title: 'Business Automation',
      description: 'Streamline operations with intelligent automation and workflow solutions.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      link: '/services'
    }
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
                      <i className={`ri-smartphone-line text-2xl text-slate-900`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 font-poppins">{service.title}</h3>
                  </div>
                  
                  <p className="text-slate-600 mb-6 font-inter leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {/* The features list was removed from the services array, so this loop will be empty */}
                  </ul>
                  
                  <Link
                    href={service.link}
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
