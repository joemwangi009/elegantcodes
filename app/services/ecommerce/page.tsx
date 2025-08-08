'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EcommerceServicePage() {
  const features = [
    {
      icon: 'ri-shopping-cart-line',
      title: 'Custom E-commerce Platforms',
      description: 'Build completely tailored online stores with unique features and branding that sets you apart from competitors.'
    },
    {
      icon: 'ri-store-line',
      title: 'Shopify Development',
      description: 'Professional Shopify stores with custom themes, advanced functionality, and seamless payment integration.'
    },
    {
      icon: 'ri-wordpress-line',
      title: 'WooCommerce Solutions',
      description: 'Flexible WordPress-based e-commerce with complete customization control and content management.'
    },
    {
      icon: 'ri-building-line',
      title: 'Enterprise E-commerce',
      description: 'Magento and enterprise-grade solutions for large-scale operations with advanced B2B features.'
    }
  ];

  const benefits = [
    'Increase sales by 200-400%',
    'Reduce cart abandonment by 60%',
    'Improve customer retention',
    'Streamline inventory management',
    'Enhance user experience',
    'Boost conversion rates'
  ];

  const techStack = [
    { name: 'React/Next.js', description: 'Modern frontend framework' },
    { name: 'Node.js', description: 'Backend JavaScript runtime' },
    { name: 'Shopify API', description: 'E-commerce platform integration' },
    { name: 'WooCommerce', description: 'WordPress e-commerce plugin' },
    { name: 'Magento', description: 'Enterprise e-commerce platform' },
    { name: 'Stripe/PayPal', description: 'Payment processing' }
  ];

  const caseStudy = {
    client: 'Fashion Retailer',
    quote: 'Our custom e-commerce platform increased online sales by 350% and reduced cart abandonment by 70%, leading to record-breaking monthly revenue.',
    outcome: 'Built a comprehensive e-commerce solution with advanced filtering, personalized recommendations, and seamless checkout experience.',
    metrics: ['350% sales increase', '70% less cart abandonment', '$2M monthly revenue']
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-amber-500 text-slate-900 rounded-full text-sm font-semibold mb-6">
                  E-commerce Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-poppins">
                  Transform Your Business with
                  <span className="text-transparent bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text"> E-commerce Excellence</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 font-inter leading-relaxed">
                  Create powerful online stores that convert visitors into customers. From custom platforms to enterprise solutions, 
                  we build e-commerce experiences that drive growth and maximize revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#contact"
                    className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    Start Your E-commerce Project
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center"
                  alt="E-commerce Development"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-400/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                Comprehensive <span className="text-amber-500">E-commerce Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                From startup stores to enterprise platforms, we deliver e-commerce solutions that scale with your business.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-amber-100 rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-amber-600 text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">{feature.title}</h3>
                  <p className="text-slate-600 font-inter leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-poppins">
                  Why Choose Our <span className="text-amber-500">E-commerce Solutions</span>
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-lg"></i>
                      </div>
                      <p className="text-lg text-slate-700 font-inter">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=500&fit=crop&crop=center"
                  alt="E-commerce Benefits"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
                Cutting-Edge <span className="text-amber-400">Technology Stack</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-inter">
                We use the latest technologies to build fast, secure, and scalable e-commerce solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                  Success <span className="text-amber-500">Story</span>
                </h2>
                <p className="text-xl text-slate-600 font-inter">
                  See how we transformed a fashion retailer's online presence
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">
                      {caseStudy.client}
                    </h3>
                    <blockquote className="text-lg text-slate-700 font-inter leading-relaxed italic">
                      "{caseStudy.quote}"
                    </blockquote>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 font-poppins">Outcome</h4>
                    <p className="text-slate-600 font-inter leading-relaxed">
                      {caseStudy.outcome}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index} className="bg-amber-50 p-4 rounded-lg text-center">
                        <p className="text-amber-600 font-bold">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=500&fit=crop&crop=center"
                    alt="E-commerce Case Study"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-500 to-amber-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
              Ready to Launch Your <span className="text-white">E-commerce Success</span>?
            </h2>
            <p className="text-xl text-slate-800 mb-8 font-inter">
              Let's build an online store that drives growth and exceeds your expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 