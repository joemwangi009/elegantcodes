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
      metrics: ['50,000+ users', '99.9% uptime', '40% efficiency gain']
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
      metrics: ['100+ stores', '60% faster checkout', '99.5% accuracy']
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
      metrics: ['500+ vendors', '25,000+ products', '200% growth']
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
      metrics: ['10,000+ patients', '4.8/5 rating', 'HIPAA compliant']
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
      metrics: ['$2M+ managed', '80% time savings', 'Real-time reporting']
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
      metrics: ['500+ events', '50,000+ attendees', '95% satisfaction']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-blue-100 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6 font-poppins">
                Our <span className="text-blue-600">Portfolio</span>
              </h1>
              <p className="text-xl text-blue-700 max-w-3xl mx-auto font-inter">
                Discover our successful projects and innovative solutions that have transformed businesses across various industries.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <article key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 font-poppins group-hover:text-blue-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-sm text-blue-600 font-semibold mb-3">
                      {item.subtitle}
                    </p>
                    
                    <p className="text-gray-600 mb-4 font-inter leading-relaxed">
                      {item.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                          <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                      <div className="space-y-1">
                        {item.metrics.map((metric, index) => (
                          <p key={index} className="text-sm text-gray-600">• {metric}</p>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      href={`/portfolio/${item.slug}`}
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200 cursor-pointer"
                    >
                      View Details
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 