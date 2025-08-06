
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies.",
      icon: "ri-global-line",
      image: "https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%2C%20multiple%20screens%20showing%20code%20and%20websites%2C%20professional%20developer%20environment%2C%20clean%20desk%20setup%2C%20high%20quality%20photography&width=400&height=300&seq=services-web&orientation=landscape",
      features: ["Responsive Design", "SEO Optimization", "Performance", "Security"]
    },
    {
      id: 2,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: "ri-smartphone-line",
      image: "https://readdy.ai/api/search-image?query=Mobile%20app%20development%20workspace%2C%20smartphones%20and%20tablets%20displaying%20apps%2C%20modern%20mobile%20development%20environment%2C%20clean%20desk%20setup%2C%20high%20quality%20photography&width=400&height=300&seq=services-mobile&orientation=landscape",
      features: ["Native Development", "Cross-platform", "App Store Optimization", "Push Notifications"]
    },
    {
      id: 3,
      title: "E-commerce",
      description: "Complete online store solutions with payment processing and inventory management.",
      icon: "ri-shopping-cart-line",
      image: "https://readdy.ai/api/search-image?query=E-commerce%20website%20development%2C%20online%20shopping%20interface%2C%20modern%20e-commerce%20platform%2C%20professional%20online%20store%20design%2C%20high%20quality%20photography&width=400&height=300&seq=services-ecommerce&orientation=landscape",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics"]
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions for your applications.",
      icon: "ri-cloud-line",
      image: "https://readdy.ai/api/search-image?query=Cloud%20computing%20and%20infrastructure%2C%20server%20room%20or%20data%20center%2C%20modern%20cloud%20technology%2C%20professional%20IT%20environment%2C%20high%20quality%20photography&width=400&height=300&seq=services-cloud&orientation=landscape",
      features: ["AWS/Azure/GCP", "DevOps", "Monitoring", "Backup & Recovery"]
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
