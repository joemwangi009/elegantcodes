
'use client';

import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      title: "IT Consulting",
      description: "Strategic IT consulting and digital transformation services to optimize your business operations.",
      icon: "ri-customer-service-line",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SVQlMjBjb25zdWx0aW5nfGVufDB8fDB8fHww",
      features: ["Digital Transformation", "IT Strategy", "Process Optimization", "Technology Assessment"],
      link: "/services/it-consulting"
    },
    {
      id: 2,
      title: "Software Development",
      description: "Custom software development services including web applications, enterprise solutions, and business automation.",
      icon: "ri-code-s-slash-line",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      features: ["Custom Development", "Enterprise Solutions", "API Development", "Database Design"],
      link: "/services/software-development"
    },
    {
      id: 3,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android with modern development practices.",
      icon: "ri-smartphone-line",
      image: "https://images.unsplash.com/photo-1609851451108-e937620f1210?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9iaWxlJTIwQXBwcyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      features: ["Native Development", "Cross-platform", "App Store Optimization", "Push Notifications"],
      link: "/services/mobile-apps"
    },
    {
      id: 4,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure, DevOps automation, and deployment solutions for your applications.",
      icon: "ri-cloud-line",
      image: "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk=",
      features: ["AWS/Azure/GCP", "DevOps", "Monitoring", "Backup & Recovery"],
      link: "/services/cloud-solutions"
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
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-slate-600 font-inter">
                        <i className="ri-check-line text-amber-500 mr-2 text-lg"></i>
                        {feature}
                      </li>
                    ))}
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
