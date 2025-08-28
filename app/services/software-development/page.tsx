import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Custom Software Development Company | ElegantCodes',
  description: 'Expert custom software development services including web applications, enterprise solutions, API development, and database design. Transform your business with ElegantCodes.',
  keywords: [
    'custom software development',
    'software development company',
    'enterprise software solutions',
    'API development services',
    'database design services',
    'ElegantCodes software development',
    'web application development',
    'business automation software',
    'custom software solutions',
    'enterprise application development'
  ],
  openGraph: {
    title: 'Custom Software Development Company | ElegantCodes',
    description: 'Expert custom software development services including web applications, enterprise solutions, API development, and database design.',
    url: 'https://www.elegantcodes.com/services/software-development',
    siteName: 'ElegantCodes - Premier IT Consulting',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Custom Software Development Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Company | ElegantCodes',
    description: 'Expert custom software development services including web applications, enterprise solutions, API development, and database design.',
    images: ['https://www.elegantcodes.com/og-image-software-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/services/software-development'
  }
};

export default function SoftwareDevelopmentPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Software Development', url: 'https://www.elegantcodes.com/services/software-development' }
  ];

  const faqs = [
    {
      question: "What types of software does ElegantCodes develop?",
      answer: "ElegantCodes develops custom web applications, enterprise software, business automation tools, API integrations, and database management systems tailored to your specific business needs."
    },
    {
      question: "How long does custom software development take?",
      answer: "Development timelines vary based on complexity, typically ranging from 4-12 weeks for small applications to 6-18 months for complex enterprise solutions. We provide detailed project timelines upfront."
    },
    {
      question: "Does ElegantCodes provide ongoing software maintenance?",
      answer: "Yes, ElegantCodes offers comprehensive software maintenance, updates, and support services to ensure your applications remain secure, efficient, and up-to-date."
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
              Custom Software <span className="text-amber-500">Development</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
              Transform your business with custom software solutions from ElegantCodes. We build scalable, efficient, 
              and innovative applications that drive growth and operational excellence.
            </p>
            <div className="mt-8">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Our <span className="text-amber-500">Software Development</span> Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                We deliver cutting-edge software solutions that address your unique business challenges and drive digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-global-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Web Applications</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Modern, responsive web applications built with cutting-edge technologies and best practices.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-building-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Enterprise Solutions</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Scalable enterprise software that integrates seamlessly with your existing business systems.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-link text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">API Development</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Robust API development and integration services to connect your systems and streamline operations.
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">IT Consulting</h3>
                <p className="text-slate-600 font-inter mb-6">
                  Strategic IT consulting to align technology with your business goals.
                </p>
                <a 
                  href="/services/it-consulting" 
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
              Ready to Build Your Custom Software?
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Let ElegantCodes develop the perfect software solution to transform your business operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Start Your Project
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
          title: 'Custom Software Development Company | ElegantCodes',
          description: 'Expert custom software development services including web applications, enterprise solutions, API development, and database design. Transform your business with ElegantCodes.',
          keywords: ['custom software development', 'software development company', 'enterprise software', 'ElegantCodes'],
          canonical: 'https://www.elegantcodes.com/services/software-development',
          ogImage: 'https://www.elegantcodes.com/og-image-software-development.jpg',
          ogType: 'website'
        }}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
    </div>
  );
} 