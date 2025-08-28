import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact ElegantCodes | Get Started with Your IT Project',
  description: 'Contact ElegantCodes today to discuss your IT consulting, custom software development, or mobile app project. Get expert consultation and start your digital transformation journey.',
  keywords: [
    'contact ElegantCodes',
    'ElegantCodes contact',
    'IT consulting contact',
    'software development contact',
    'mobile app development contact',
    'get quote ElegantCodes',
    'start project ElegantCodes',
    'IT solutions contact',
    'technology consulting contact',
    'custom software contact'
  ],
  openGraph: {
    title: 'Contact ElegantCodes | Get Started with Your IT Project',
    description: 'Contact ElegantCodes today to discuss your IT consulting, custom software development, or mobile app project. Get expert consultation and start your digital transformation journey.',
    url: 'https://www.elegantcodes.com/contact',
    siteName: 'ElegantCodes - Premier IT Consulting',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact ElegantCodes - Get Started with Your IT Project',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ElegantCodes | Get Started with Your IT Project',
    description: 'Contact ElegantCodes today to discuss your IT consulting, custom software development, or mobile app project. Get expert consultation and start your digital transformation journey.',
    images: ['https://www.elegantcodes.com/og-image-contact.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/contact'
  }
};

export default function ContactPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Contact', url: 'https://www.elegantcodes.com/contact' }
  ];

  const faqs = [
    {
      question: "How can I get in touch with ElegantCodes?",
      answer: "You can contact ElegantCodes through our contact form, email at info@elegantcodes.com, or phone. We typically respond within 24 hours to discuss your project requirements."
    },
    {
      question: "What information should I provide when contacting ElegantCodes?",
      answer: "When contacting ElegantCodes, please provide details about your project goals, timeline, budget, and any specific requirements. This helps us provide a more accurate consultation and proposal."
    },
    {
      question: "Does ElegantCodes offer free consultations?",
      answer: "Yes, ElegantCodes offers free initial consultations to discuss your project requirements, understand your business needs, and provide guidance on the best technology solutions for your goals."
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
              Contact <span className="text-amber-500">ElegantCodes</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
              Ready to start your digital transformation journey? Contact ElegantCodes today to discuss 
              your IT consulting, custom software development, or mobile app project.
            </p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Get in <span className="text-amber-500">Touch</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                Let's discuss how ElegantCodes can help transform your business with innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-slate-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-2">
                      Service Interest *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="it-consulting">IT Consulting</option>
                      <option value="software-development">Software Development</option>
                      <option value="mobile-apps">Mobile App Development</option>
                      <option value="cloud-solutions">Cloud Solutions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                      placeholder="Tell us about your project requirements, timeline, and goals..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-mail-line text-slate-900"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Email</h4>
                        <p className="text-slate-600">info@elegantcodes.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-phone-line text-slate-900"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Phone</h4>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <i className="ri-map-pin-line text-slate-900"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900">Location</h4>
                        <p className="text-slate-600">San Francisco, CA</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 font-poppins">Our Services</h3>
                  <div className="space-y-3">
                    <a 
                      href="/services/it-consulting" 
                      className="block text-amber-500 hover:text-amber-600 font-medium transition-colors duration-200"
                    >
                      IT Consulting Services
                    </a>
                    <a 
                      href="/services/software-development" 
                      className="block text-amber-500 hover:text-amber-600 font-medium transition-colors duration-200"
                    >
                      Custom Software Development
                    </a>
                    <a 
                      href="/services/mobile-apps" 
                      className="block text-amber-500 hover:text-amber-600 font-medium transition-colors duration-200"
                    >
                      Mobile App Development
                    </a>
                    <a 
                      href="/services/cloud-solutions" 
                      className="block text-amber-500 hover:text-amber-600 font-medium transition-colors duration-200"
                    >
                      Cloud Solutions & DevOps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Contact ElegantCodes today and let's discuss how we can help transform your business 
              with innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/services" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Our Services
              </a>
              <a 
                href="/portfolio" 
                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                See Our Work
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <SEOHead 
        config={{
          title: 'Contact ElegantCodes | Get Started with Your IT Project',
          description: 'Contact ElegantCodes today to discuss your IT consulting, custom software development, or mobile app project. Get expert consultation and start your digital transformation journey.',
          keywords: ['contact ElegantCodes', 'ElegantCodes contact', 'IT consulting contact', 'software development contact'],
          canonical: 'https://www.elegantcodes.com/contact',
          ogImage: 'https://www.elegantcodes.com/og-image-contact.jpg',
          ogType: 'website'
        }}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
    </div>
  );
} 