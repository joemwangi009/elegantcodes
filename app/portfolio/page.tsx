import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const portfolioItems = [
    {
      id: 1,
      title: 'TechFlow CRM',
      subtitle: 'Customer Relationship Management System',
      description: 'A comprehensive CRM solution designed to streamline customer management, sales tracking, and business operations for modern enterprises.',
      category: 'Web Applications',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CRM%20dashboard%20with%20customer%20management%20interface%2C%20modern%20business%20software%20design%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20enterprise%20solution%2C%20professional%20business%20technology&width=400&height=300&seq=portfolio-1&orientation=landscape',
      slug: 'techflow-crm',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      metrics: ['50,000+ users', '99.9% uptime', '40% efficiency gain'],
      color: 'blue'
    },
    {
      id: 2,
      title: 'RetailPro POS',
      subtitle: 'Advanced Point of Sale System',
      description: 'Modern point-of-sale solution with inventory management, customer tracking, and comprehensive reporting for retail businesses.',
      category: 'POS Systems',
      image: 'https://readdy.ai/api/search-image?query=Professional%20point%20of%20sale%20system%20interface%2C%20modern%20retail%20technology%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20business%20solution%2C%20professional%20retail%20software&width=400&height=300&seq=portfolio-2&orientation=landscape',
      slug: 'retailpro-pos',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: ['100+ stores', '60% faster checkout', '99.5% accuracy'],
      color: 'emerald'
    },
    {
      id: 3,
      title: 'EcoShop Marketplace',
      subtitle: 'Multi-Vendor E-commerce Platform',
      description: 'A sophisticated marketplace platform connecting vendors and customers with advanced features and seamless user experience.',
      category: 'E-commerce',
      image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20marketplace%20interface%2C%20modern%20online%20shopping%20platform%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20retail%20solution%2C%20professional%20marketplace%20design&width=400&height=300&seq=portfolio-3&orientation=landscape',
      slug: 'ecoshop-marketplace',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
      metrics: ['500+ vendors', '25,000+ products', '200% growth'],
      color: 'purple'
    },
    {
      id: 4,
      title: 'HealthSync Mobile',
      subtitle: 'Healthcare Management App',
      description: 'Mobile application for healthcare providers and patients with appointment scheduling, medical records, and telemedicine capabilities.',
      category: 'Mobile Apps',
      image: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20mobile%20app%20interface%2C%20modern%20medical%20technology%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20healthcare%20solution%2C%20professional%20medical%20software&width=400&height=300&seq=portfolio-4&orientation=landscape',
      slug: 'healthsync-mobile',
      technologies: ['React Native', 'Firebase', 'Twilio', 'AWS'],
      metrics: ['10,000+ patients', '4.8/5 rating', 'HIPAA compliant'],
      color: 'rose'
    },
    {
      id: 5,
      title: 'FinanceTracker Pro',
      subtitle: 'Financial Management System',
      description: 'Comprehensive financial management platform for businesses with budgeting, expense tracking, and financial reporting capabilities.',
      category: 'Business Software',
      image: 'https://readdy.ai/api/search-image?query=Professional%20financial%20management%20dashboard%2C%20modern%20business%20finance%20software%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20financial%20solution%2C%20professional%20accounting%20software&width=400&height=300&seq=portfolio-5&orientation=landscape',
      slug: 'financetracker-pro',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'AWS'],
      metrics: ['$2M+ managed', '80% time savings', 'Real-time reporting'],
      color: 'amber'
    },
    {
      id: 6,
      title: 'EventMaster App',
      subtitle: 'Event Management Solution',
      description: 'Complete event management platform for organizers with ticketing, attendee management, and event analytics.',
      category: 'Event Management',
      image: 'https://readdy.ai/api/search-image?query=Professional%20event%20management%20platform%20interface%2C%20modern%20event%20technology%2C%20clean%20blue%20and%20white%20theme%2C%20sophisticated%20event%20solution%2C%20professional%20event%20software&width=400&height=300&seq=portfolio-6&orientation=landscape',
      slug: 'eventmaster-app',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      metrics: ['500+ events', '50,000+ attendees', '95% satisfaction'],
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      rose: 'from-rose-500 to-rose-600',
      amber: 'from-amber-500 to-amber-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 bg-emerald-500/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8">
                <span className="text-white/90 text-sm font-semibold">Our Work</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-poppins leading-tight">
                Our <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">Portfolio</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
                Discover our successful projects and innovative solutions that have transformed businesses across various industries.
              </p>
              
              <div className="flex items-center justify-center mt-12 space-x-8 text-slate-400">
                <div className="flex items-center">
                  <i className="ri-check-line text-emerald-400 mr-2"></i>
                  <span className="text-sm">150+ Projects</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-emerald-400 mr-2"></i>
                  <span className="text-sm">50+ Clients</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-emerald-400 mr-2"></i>
                  <span className="text-sm">99% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <article 
                  key={item.id} 
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-200"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${getColorClasses(item.color)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="p-6 w-full">
                        <Link
                          href={`/portfolio/${item.slug}`}
                          className="inline-flex items-center text-white font-semibold hover:text-blue-300 transition-colors duration-200"
                        >
                          View Project
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-poppins group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${getColorClasses(item.color)} bg-clip-text text-transparent`}>
                      {item.subtitle}
                    </p>
                    
                    <p className="text-slate-600 mb-6 font-inter leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-slate-200 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-900 mb-3">Key Metrics</h4>
                      <div className="space-y-2">
                        {item.metrics.map((metric, index) => (
                          <div key={index} className="flex items-center text-sm text-slate-600">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(item.color)} mr-3`}></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${getColorClasses(item.color)} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}
                    >
                      View Details
                      <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-10 font-inter">
              Let's create something amazing together. Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/#contact"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 