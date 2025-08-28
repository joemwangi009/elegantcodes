import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About ElegantCodes | Premier IT Consulting & Software Development Company',
  description: 'Learn about ElegantCodes - a leading IT consulting and custom software development company. Discover our mission, values, and commitment to delivering innovative technology solutions.',
  keywords: [
    'about ElegantCodes',
    'ElegantCodes company',
    'IT consulting company',
    'software development company',
    'ElegantCodes mission',
    'ElegantCodes values',
    'technology company',
    'IT solutions provider',
    'custom software company',
    'digital transformation company',
    'ElegantCodes team',
    'ElegantCodes history',
    'ElegantCodes experience',
    'ElegantCodes expertise',
    'ElegantCodes services',
    'ElegantCodes portfolio',
    'ElegantCodes clients',
    'ElegantCodes testimonials',
    'ElegantCodes reviews',
    'ElegantCodes case studies',
    'ElegantCodes success stories',
    'ElegantCodes achievements',
    'ElegantCodes awards',
    'ElegantCodes certifications',
    'ElegantCodes partnerships',
    'ElegantCodes technology stack',
    'ElegantCodes development process',
    'ElegantCodes quality standards',
    'ElegantCodes customer service',
    'ElegantCodes support',
    'ElegantCodes contact information',
    'ElegantCodes location',
    'ElegantCodes office',
    'ElegantCodes headquarters',
    'ElegantCodes global presence',
    'ElegantCodes international',
    'ElegantCodes worldwide',
    'ElegantCodes remote work',
    'ElegantCodes virtual team',
    'ElegantCodes agile methodology',
    'ElegantCodes scrum process',
    'ElegantCodes project management',
    'ElegantCodes delivery timeline',
    'ElegantCodes cost structure',
    'ElegantCodes pricing',
    'ElegantCodes quotes',
    'ElegantCodes proposals',
    'ElegantCodes consultation',
    'ElegantCodes free consultation',
    'ElegantCodes initial meeting',
    'ElegantCodes discovery phase',
    'ElegantCodes requirements gathering',
    'ElegantCodes project planning',
    'ElegantCodes development phases',
    'ElegantCodes testing process',
    'ElegantCodes deployment',
    'ElegantCodes maintenance',
    'ElegantCodes support services',
    'ElegantCodes training services',
    'ElegantCodes documentation',
    'ElegantCodes knowledge transfer',
    'ElegantCodes handover process'
  ],
  openGraph: {
    title: 'About ElegantCodes | Premier IT Consulting & Software Development Company',
    description: 'Learn about ElegantCodes - a leading IT consulting and custom software development company. Discover our mission, values, and commitment to delivering innovative technology solutions.',
    url: 'https://www.elegantcodes.com/about',
    siteName: 'ElegantCodes - Premier IT Consulting',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-about.jpg',
        width: 1200,
        height: 630,
        alt: 'About ElegantCodes - Premier IT Consulting Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ElegantCodes | Premier IT Consulting & Software Development Company',
    description: 'Learn about ElegantCodes - a leading IT consulting and custom software development company. Discover our mission, values, and commitment to delivering innovative technology solutions.',
    images: ['https://www.elegantcodes.com/og-image-about.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/about'
  }
};

export default function AboutPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'About Us', url: 'https://www.elegantcodes.com/about' }
  ];

  const faqs = [
    {
      question: "What is ElegantCodes' mission?",
      answer: "ElegantCodes' mission is to transform businesses through innovative technology solutions, delivering custom software, IT consulting, and digital transformation services that drive growth and operational excellence."
    },
    {
      question: "How long has ElegantCodes been in business?",
      answer: "ElegantCodes has been delivering technology solutions since 2020, helping businesses across multiple industries and regions achieve their digital transformation goals."
    },
    {
      question: "What makes ElegantCodes different from other IT companies?",
      answer: "ElegantCodes stands out through our commitment to elegant code quality, personalized solutions, global reach, and proven track record of delivering innovative technology solutions that exceed client expectations."
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
              About <span className="text-amber-500">ElegantCodes</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
              We are a team of passionate developers, designers, and IT consultants dedicated to transforming 
              businesses through innovative technology solutions.
            </p>
          </div>
        </section>

        {/* Mission & Values Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                  Our <span className="text-amber-500">Mission</span>
                </h2>
                <p className="text-lg text-slate-600 mb-6 font-inter leading-relaxed">
                  At ElegantCodes, our mission is to empower businesses with cutting-edge technology solutions 
                  that drive innovation, efficiency, and growth. We believe in creating elegant, scalable, and 
                  user-friendly applications that solve real business challenges.
                </p>
                <p className="text-lg text-slate-600 font-inter leading-relaxed">
                  We are committed to delivering exceptional value through personalized service, technical expertise, 
                  and a deep understanding of our clients' unique needs and objectives.
                </p>
              </div>
              
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">Our Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-slate-600 font-inter">Innovation and Excellence</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-slate-600 font-inter">Client Success Focus</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-slate-600 font-inter">Quality and Reliability</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-check-line text-white text-sm"></i>
                    </div>
                    <p className="text-slate-600 font-inter">Continuous Learning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                What We <span className="text-amber-500">Do</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                ElegantCodes provides comprehensive IT solutions designed to elevate your business operations 
                and drive digital transformation across all industry sectors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-customer-service-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">IT Consulting</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Strategic guidance to align technology with your business goals and drive digital transformation.
                </p>
                <a 
                  href="/services/it-consulting" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200 inline-block mt-4"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-code-s-slash-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Software Development</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Custom software solutions tailored to your specific business needs and requirements.
                </p>
                <a 
                  href="/services/software-development" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200 inline-block mt-4"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-smartphone-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Mobile Apps</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Native and cross-platform mobile applications that engage your customers on every device.
                </p>
                <a 
                  href="/services/mobile-apps" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200 inline-block mt-4"
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
              Ready to Work with ElegantCodes?
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Let's discuss how we can help transform your business with innovative technology solutions.
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
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <SEOHead 
        config={{
          title: 'About ElegantCodes | Premier IT Consulting & Software Development Company',
          description: 'Learn about ElegantCodes - a leading IT consulting and custom software development company. Discover our mission, values, and commitment to delivering innovative technology solutions.',
          keywords: ['about ElegantCodes', 'ElegantCodes company', 'IT consulting company', 'software development company'],
          canonical: 'https://www.elegantcodes.com/about',
          ogImage: 'https://www.elegantcodes.com/og-image-about.jpg',
          ogType: 'website'
        }}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
    </div>
  );
} 