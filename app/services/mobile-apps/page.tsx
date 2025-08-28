import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Mobile App Development Company | ElegantCodes',
  description: 'Expert mobile app development services including native iOS, Android, and cross-platform solutions. Create engaging mobile experiences with ElegantCodes.',
  keywords: [
    'mobile app development',
    'iOS app development',
    'Android app development',
    'cross-platform development',
    'mobile app company',
    'ElegantCodes mobile apps',
    'app development services',
    'mobile application development',
    'React Native development',
    'Flutter app development'
  ],
  openGraph: {
    title: 'Mobile App Development Company | ElegantCodes',
    description: 'Expert mobile app development services including native iOS, Android, and cross-platform solutions.',
    url: 'https://www.elegantcodes.com/services/mobile-apps',
    siteName: 'ElegantCodes - Premier IT Consulting',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-mobile-apps.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Mobile App Development Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company | ElegantCodes',
    description: 'Expert mobile app development services including native iOS, Android, and cross-platform solutions.',
    images: ['https://www.elegantcodes.com/og-image-mobile-apps.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/services/mobile-apps'
  }
};

export default function MobileAppsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Mobile Apps', url: 'https://www.elegantcodes.com/services/mobile-apps' }
  ];

  const faqs = [
    {
      question: "What mobile platforms does ElegantCodes develop for?",
      answer: "ElegantCodes develops for iOS, Android, and cross-platform solutions using React Native and Flutter. We also create progressive web apps (PWAs) for web-based mobile experiences."
    },
    {
      question: "How long does mobile app development take?",
      answer: "Mobile app development typically takes 8-16 weeks for basic apps, 12-24 weeks for moderate complexity, and 20-32 weeks for complex enterprise applications. We provide detailed timelines upfront."
    },
    {
      question: "Does ElegantCodes provide app store optimization services?",
      answer: "Yes, ElegantCodes offers comprehensive app store optimization (ASO) including keyword research, metadata optimization, and performance tracking to maximize your app's visibility and downloads."
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
              Mobile App <span className="text-amber-500">Development</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
              Create engaging mobile experiences with ElegantCodes. We develop native iOS, Android, and cross-platform 
              applications that connect with your customers on every device.
            </p>
            <div className="mt-8">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
              >
                Start Your App
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Our <span className="text-amber-500">Mobile Development</span> Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                We deliver cutting-edge mobile applications that provide exceptional user experiences and drive business growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-apple-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">iOS Development</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Native iOS applications built with Swift and SwiftUI, optimized for iPhone and iPad performance.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-android-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Android Development</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Native Android applications using Kotlin and Jetpack Compose for modern Android devices.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-smartphone-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Cross-Platform</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  React Native and Flutter applications that work seamlessly across iOS and Android platforms.
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
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Let ElegantCodes create the perfect mobile application to engage your customers and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Start Your App
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
          title: 'Mobile App Development Company | ElegantCodes',
          description: 'Expert mobile app development services including native iOS, Android, and cross-platform solutions. Create engaging mobile experiences with ElegantCodes.',
          keywords: ['mobile app development', 'iOS development', 'Android development', 'ElegantCodes'],
          canonical: 'https://www.elegantcodes.com/services/mobile-apps',
          ogImage: 'https://www.elegantcodes.com/og-image-mobile-apps.jpg',
          ogType: 'website'
        }}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
    </div>
  );
} 