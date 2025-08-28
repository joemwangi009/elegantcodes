import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'IT Consulting Services | ElegantCodes',
  description: 'Expert IT consulting services including digital transformation, IT strategy, process optimization, and technology assessment. Transform your business with ElegantCodes.',
  keywords: [
    'IT consulting services',
    'IT consulting company',
    'IT strategy consulting',
    'digital transformation consulting',
    'business technology consulting',
    'enterprise IT consulting',
    'IT infrastructure consulting',
    'cybersecurity consulting',
    'cloud consulting services',
    'IT outsourcing consulting',
    'technology consulting firm',
    'IT advisory services',
    'business process optimization',
    'IT governance consulting',
    'technology assessment services',
    'IT project management consulting',
    'software consulting services',
    'IT risk management consulting',
    'data center consulting',
    'network infrastructure consulting',
    'ElegantCodes IT consulting',
    'IT consulting near me',
    'best IT consulting companies',
    'IT consulting rates',
    'IT consulting cost',
    'IT consulting for small business',
    'IT consulting for enterprise',
    'managed IT services consulting',
    'IT security consulting',
    'IT compliance consulting',
    'IT audit consulting'
  ],
  openGraph: {
    title: 'IT Consulting Services | ElegantCodes',
    description: 'Expert IT consulting services including digital transformation, IT strategy, process optimization, and technology assessment.',
    url: 'https://www.elegantcodes.com/services/it-consulting',
    siteName: 'ElegantCodes - Premier IT Consulting',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-it-consulting.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - IT Consulting Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting Services | ElegantCodes',
    description: 'Expert IT consulting services including digital transformation, IT strategy, process optimization, and technology assessment.',
    images: ['https://www.elegantcodes.com/og-image-it-consulting.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/services/it-consulting'
  }
};

export default function ITConsultingPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'IT Consulting', url: 'https://www.elegantcodes.com/services/it-consulting' }
  ];

  const faqs = [
    {
      question: "What IT consulting services does ElegantCodes provide?",
      answer: "ElegantCodes offers comprehensive IT consulting including digital transformation, IT strategy development, process optimization, technology assessment, and enterprise architecture planning."
    },
    {
      question: "How can IT consulting benefit my business?",
      answer: "IT consulting helps optimize operations, reduce costs, improve efficiency, enhance security, and align technology with business goals for competitive advantage."
    },
    {
      question: "Does ElegantCodes provide ongoing IT consulting support?",
      answer: "Yes, ElegantCodes offers both project-based and ongoing IT consulting support to ensure your technology strategy evolves with your business needs."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
              IT Consulting <span className="text-amber-500">Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
              Transform your business with strategic IT consulting from ElegantCodes. We help organizations optimize operations, 
              implement cutting-edge technology, and achieve digital transformation success.
            </p>
            <div className="mt-8">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
              >
                Get Expert Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Our <span className="text-amber-500">IT Consulting</span> Expertise
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                We provide strategic guidance to help your business leverage technology for growth and competitive advantage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-strategy-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Digital Transformation</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Guide your organization through digital transformation with proven strategies and implementation roadmaps.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-flow-chart text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Process Optimization</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Streamline operations and improve efficiency through technology-driven process optimization.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Technology Assessment</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Comprehensive evaluation of your current technology stack and recommendations for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Related <span className="text-amber-500">Services</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                Explore our comprehensive range of IT solutions and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Software Development</h3>
                <p className="text-slate-600 font-inter mb-6">
                  Custom software solutions tailored to your business needs.
                </p>
                <a 
                  href="/services/software-development" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Mobile Apps</h3>
                <p className="text-slate-600 font-inter mb-6">
                  Native and cross-platform mobile applications for modern businesses.
                </p>
                <a 
                  href="/services/mobile-apps" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Cloud Solutions</h3>
                <p className="text-slate-600 font-inter mb-6">
                  Scalable cloud infrastructure and DevOps automation services.
                </p>
                <a 
                  href="/services/cloud-solutions" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Let ElegantCodes guide you through your digital transformation journey with expert IT consulting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Get Started Today
              </a>
              <a 
                href="/services" 
                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <SEOHead 
        config={{
          title: 'IT Consulting Services | ElegantCodes',
          description: 'Expert IT consulting services including digital transformation, IT strategy, process optimization, and technology assessment. Transform your business with ElegantCodes.',
          keywords: ['IT consulting services', 'digital transformation', 'IT strategy', 'ElegantCodes'],
          canonical: 'https://www.elegantcodes.com/services/it-consulting',
          ogImage: 'https://www.elegantcodes.com/og-image-it-consulting.jpg',
          ogType: 'website'
        }}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
    </div>
  );
} 