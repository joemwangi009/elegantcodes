import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  generateTitle, 
  generateDescription,
  getRandomKeywordsFromCluster 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'IT Consulting & Solutions Provider | Global IT Services Company',
  description: 'Leading IT consulting services provider offering comprehensive IT solutions, global IT services, and end-to-end IT solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
  keywords: [
    'IT consulting services',
    'IT solutions company',
    'global IT services',
    'IT outsourcing company',
    'end-to-end IT services',
    'technology consulting Europe',
    'best IT company worldwide',
    'trusted IT solutions provider',
    'scalable IT services',
    'next-gen IT solutions',
    'enterprise IT solutions',
    'tech companies in Nairobi',
    'IT solutions in Kenya',
    'IT solutions company Kenya',
    'IT solutions company Africa',
    'IT solutions company Europe',
    'IT solutions company USA',
    'IT solutions company Canada',
    'IT solutions company Australia',
    'IT solutions company UK',
    'IT solutions company Germany',
    'IT solutions company France'
  ],
  openGraph: {
    title: 'IT Consulting & Solutions Provider | Global IT Services Company',
    description: 'Leading IT consulting services provider offering comprehensive IT solutions, global IT services, and end-to-end IT solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
    url: 'https://www.elegantcodes.com/it-consulting-solutions',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-it-consulting.jpg',
        width: 1200,
        height: 630,
        alt: 'IT Consulting & Solutions Provider',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting & Solutions Provider | Global IT Services Company',
    description: 'Leading IT consulting services provider offering comprehensive IT solutions, global IT services, and end-to-end IT solutions.',
    images: ['https://www.elegantcodes.com/og-image-it-consulting.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/it-consulting-solutions',
  },
}

const faqs = [
  {
    question: "What IT consulting services does ElegantCodes offer?",
    answer: "ElegantCodes provides comprehensive IT consulting services including digital transformation, technology strategy, IT infrastructure optimization, cloud migration, cybersecurity consulting, and custom software development solutions."
  },
  {
    question: "Which regions does ElegantCodes serve for IT consulting?",
    answer: "We serve clients globally across Kenya, Africa, Europe, USA, Australia, Canada, Germany, France, UK, and other regions, providing localized IT consulting services tailored to each market."
  },
  {
    question: "How does ElegantCodes ensure scalable IT services?",
    answer: "Our scalable IT services are built on modern cloud architectures, microservices, and DevOps practices, ensuring your solutions can grow with your business needs and handle increasing workloads efficiently."
  },
  {
    question: "What makes ElegantCodes a trusted IT solutions provider?",
    answer: "We are a trusted IT solutions provider with 5+ years of experience, ISO certifications, proven track record, client testimonials, and commitment to delivering high-quality, secure, and innovative IT solutions."
  },
  {
    question: "How does ElegantCodes approach end-to-end IT services?",
    answer: "Our end-to-end IT services cover the complete lifecycle from initial consultation and strategy development to implementation, deployment, maintenance, and ongoing support, ensuring seamless project delivery."
  }
]

export default function ITConsultingSolutionsPage() {
  const seoConfig = {
    title: 'IT Consulting & Solutions Provider | Global IT Services Company',
    description: 'Leading IT consulting services provider offering comprehensive IT solutions, global IT services, and end-to-end IT solutions across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
    keywords: KEYWORD_CLUSTERS.IT_CONSULTING,
    canonical: 'https://www.elegantcodes.com/it-consulting-solutions',
    ogImage: 'https://www.elegantcodes.com/og-image-it-consulting.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'IT Consulting Solutions', url: 'https://www.elegantcodes.com/it-consulting-solutions' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="IT Consulting Services"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                IT Consulting & Solutions Provider
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading global IT consulting services provider offering comprehensive IT solutions, 
                global IT services, and end-to-end IT solutions across Kenya, Europe, USA, Australia, 
                Canada, Germany, France, and UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive IT Consulting Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  IT Consulting Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic IT consulting to help your business leverage technology for growth, 
                  efficiency, and competitive advantage.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Technology Strategy Development</li>
                  <li>• Digital Transformation Consulting</li>
                  <li>• IT Infrastructure Assessment</li>
                  <li>• Technology Roadmap Planning</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Global IT Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Worldwide IT services delivery with local expertise and global best practices 
                  across multiple regions and industries.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Multi-Region IT Support</li>
                  <li>• Global Technology Standards</li>
                  <li>• Cross-Border IT Solutions</li>
                  <li>• International Compliance</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  End-to-End IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Complete IT solution lifecycle management from initial assessment to 
                  implementation, maintenance, and continuous improvement.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Full Project Lifecycle</li>
                  <li>• Continuous Support</li>
                  <li>• Performance Optimization</li>
                  <li>• Future-Proofing</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Technology Consulting Europe
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized technology consulting services for European markets, 
                  understanding local regulations and business practices.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• EU Compliance Expertise</li>
                  <li>• European Market Knowledge</li>
                  <li>• GDPR & Data Protection</li>
                  <li>• European Tech Standards</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Trusted IT Solutions Provider
                </h3>
                <p className="text-slate-600 mb-4">
                  Reliable and trustworthy IT partner with proven track record, 
                  certifications, and commitment to client success.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Proven Track Record</li>
                  <li>• Industry Certifications</li>
                  <li>• Client Testimonials</li>
                  <li>• Quality Guarantees</li>
                </ul>
              </div>
              
              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Scalable IT Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Flexible and scalable IT services that grow with your business, 
                  from startup solutions to enterprise-grade systems.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Flexible Scaling</li>
                  <li>• Cloud-Native Solutions</li>
                  <li>• Modular Architecture</li>
                  <li>• Growth-Ready Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Global IT Solutions Across Regions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Kenya & Africa</h3>
                <p className="text-slate-600 text-sm">
                  Leading IT solutions company in Kenya and Africa, providing innovative 
                  technology solutions for the continent's growing digital economy.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Europe</h3>
                <p className="text-slate-600 text-sm">
                  Technology consulting Europe expertise with deep understanding of 
                  European markets, regulations, and business practices.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">North America</h3>
                <p className="text-slate-600 text-sm">
                  Trusted IT solutions provider in USA and Canada, delivering 
                  cutting-edge technology solutions for North American businesses.
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Asia Pacific</h3>
                <p className="text-slate-600 text-sm">
                  Custom IT development in Australia and Asia Pacific, offering 
                  innovative solutions for the region's dynamic tech landscape.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes as Your IT Solutions Company?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Best IT Company Worldwide
                </h3>
                <p className="text-slate-600">
                  Recognized as one of the best IT companies globally with awards, 
                  certifications, and proven track record of success.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Next-Gen IT Solutions
                </h3>
                <p className="text-slate-600">
                  Cutting-edge technology solutions including AI, machine learning, 
                  blockchain, and IoT for future-ready businesses.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Enterprise IT Solutions
                </h3>
                <p className="text-slate-600">
                  Enterprise-grade IT solutions designed for large organizations 
                  with complex requirements and high-performance needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Expert IT Consulting?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              IT consulting services can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 