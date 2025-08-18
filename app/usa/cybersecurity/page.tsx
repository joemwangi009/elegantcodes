import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  getKeywordsByRegion 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'USA Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
  description: 'Leading USA cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all 50 states.',
  keywords: [
    'USA cybersecurity company',
    'USA IT security solutions',
    'USA penetration testing services',
    'USA ethical hacking company',
    'USA data protection solutions',
    'USA managed security services',
    'USA SOC as a service',
    'USA cyber threat management',
    'USA network security services',
    'New York cybersecurity company',
    'California cybersecurity company',
    'Texas cybersecurity company',
    'Florida cybersecurity company',
    'Illinois cybersecurity company',
    'Pennsylvania cybersecurity company',
    'Ohio cybersecurity company',
    'Georgia cybersecurity company',
    'North Carolina cybersecurity company',
    'Michigan cybersecurity company',
    'New Jersey cybersecurity company'
  ],
  openGraph: {
    title: 'USA Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading USA cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all 50 states.',
    url: 'https://www.elegantcodes.com/usa/cybersecurity',
    siteName: 'ElegantCodes - USA IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-usa-cybersecurity.jpg',
        width: 1200,
        height: 630,
        alt: 'USA Cybersecurity Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USA Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading USA cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all 50 states.',
    images: ['https://www.elegantcodes.com/og-image-usa-cybersecurity.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/usa/cybersecurity',
    languages: {
      'en': 'https://www.elegantcodes.com/cybersecurity',
      'en-us': 'https://www.elegantcodes.com/usa/cybersecurity',
    },
  },
}

const faqs = [
  {
    question: "What cybersecurity services does ElegantCodes offer in the USA?",
    answer: "In the USA, ElegantCodes provides comprehensive cybersecurity services including penetration testing, ethical hacking, data protection, managed security services, SOC as a service, and compliance solutions tailored for US businesses and regulatory requirements."
  },
  {
    question: "Why choose ElegantCodes for cybersecurity in the USA?",
    answer: "We offer deep understanding of US business culture, compliance with US regulations including SOX, HIPAA, and state-specific laws, local market expertise, competitive pricing, and proven track record in protecting US businesses."
  },
  {
    question: "How does ElegantCodes ensure compliance with US regulations?",
    answer: "Our US cybersecurity services follow strict compliance standards including SOX, HIPAA, GLBA, state data protection laws, and industry-specific regulations to ensure your business meets all legal requirements."
  },
  {
    question: "What industries does ElegantCodes serve in the USA?",
    answer: "We serve various US industries including finance, healthcare, technology, manufacturing, retail, government, education, and energy. Our solutions are tailored to meet US industry standards and regulatory requirements."
  },
  {
    question: "How does ElegantCodes support US businesses with cybersecurity?",
    answer: "Our US cybersecurity services include local project management, US business understanding, compliance with US standards, regular client communication in US time zones, and quality assurance that meets American business expectations."
  }
]

export default function USACybersecurityPage() {
  const seoConfig = {
    title: 'USA Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading USA cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all 50 states.',
    keywords: getKeywordsByRegion('USA'),
    canonical: 'https://www.elegantcodes.com/usa/cybersecurity',
    ogImage: 'https://www.elegantcodes.com/og-image-usa-cybersecurity.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'USA', url: 'https://www.elegantcodes.com/usa' },
    { name: 'Cybersecurity', url: 'https://www.elegantcodes.com/usa/cybersecurity' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="USA"
        service="Cybersecurity"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  🇺🇸 USA Cybersecurity
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                USA Cybersecurity Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading USA cybersecurity company offering IT security solutions, penetration testing services, 
                ethical hacking company services, data protection solutions, and managed security services across all 50 states.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Secure Your Business
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* US Market Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes in the USA?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🇺🇸 US Business Understanding
                </h3>
                <p className="text-slate-600 mb-4">
                  Deep understanding of US business culture, processes, and industry 
                  standards to deliver cybersecurity solutions that align with American business practices.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• US business culture</li>
                  <li>• Industry standards</li>
                  <li>• Local business processes</li>
                  <li>• Cultural sensitivity</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 US Regulatory Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  Full compliance with US regulations including SOX, HIPAA, GLBA, 
                  state data protection laws, and industry-specific regulations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• SOX compliance</li>
                  <li>• HIPAA standards</li>
                  <li>• GLBA requirements</li>
                  <li>• State laws</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 US Industry Expertise
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized expertise in US industries including finance, healthcare, 
                  technology, manufacturing, and government sectors.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Financial services</li>
                  <li>• Healthcare compliance</li>
                  <li>• Technology security</li>
                  <li>• Government projects</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💰 Competitive US Pricing
                </h3>
                <p className="text-slate-600 mb-4">
                  Competitive pricing for US businesses with transparent cost structures, 
                  flexible payment terms, and value-driven cybersecurity solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Transparent pricing</li>
                  <li>• Flexible payment terms</li>
                  <li>• Value-driven solutions</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Technology Innovation
                </h3>
                <p className="text-slate-600 mb-4">
                  Cutting-edge cybersecurity technology including AI, machine learning, 
                  advanced threat detection, and next-generation security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AI & Machine Learning</li>
                  <li>• Advanced Threat Detection</li>
                  <li>• Next-Gen Security</li>
                  <li>• Innovation Leadership</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤝 US Partnerships
                </h3>
                <p className="text-slate-600 mb-4">
                  Strong partnerships with US businesses, government agencies, 
                  educational institutions, and technology communities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• US partnerships</li>
                  <li>• Government collaboration</li>
                  <li>• Educational partnerships</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* US States Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Cybersecurity Services Across the USA
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🗽 New York Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Premier cybersecurity services in New York, serving financial services, 
                  media, and enterprise clients with innovative security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Financial services security</li>
                  <li>• Media protection</li>
                  <li>• Enterprise solutions</li>
                  <li>• Startup security</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌴 California Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced cybersecurity services in California, serving technology companies, 
                  startups, and enterprises with cutting-edge security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Technology security</li>
                  <li>• Startup protection</li>
                  <li>• Enterprise solutions</li>
                  <li>• Innovation security</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤠 Texas Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity services in Texas, serving energy, 
                  healthcare, and manufacturing industries with robust security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Energy security</li>
                  <li>• Healthcare protection</li>
                  <li>• Manufacturing security</li>
                  <li>• Industrial protection</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏖️ Florida Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic cybersecurity services in Florida, serving tourism, 
                  healthcare, and financial services with comprehensive security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Tourism security</li>
                  <li>• Healthcare protection</li>
                  <li>• Financial services</li>
                  <li>• Hospitality security</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏙️ Illinois Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional cybersecurity services in Illinois, serving manufacturing, 
                  logistics, and financial services with advanced security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Manufacturing security</li>
                  <li>• Logistics protection</li>
                  <li>• Financial services</li>
                  <li>• Industrial security</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Nationwide Coverage
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity services covering all 50 US states with 
                  local expertise, compliance knowledge, and business understanding.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• All 50 states</li>
                  <li>• Local compliance</li>
                  <li>• Business understanding</li>
                  <li>• National coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* US Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Cybersecurity for US Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Secure financial applications with SOX compliance, GLBA requirements, 
                  and advanced fraud detection for US banks and financial institutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare & HIPAA
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare security solutions with HIPAA compliance, patient data protection, 
                  and medical device security for US healthcare providers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing & Energy
                </h3>
                <p className="text-slate-600 mb-4">
                  Industrial cybersecurity for manufacturing, energy, and critical infrastructure 
                  with NIST framework compliance and operational technology security.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education & Government
                </h3>
                <p className="text-slate-600 mb-4">
                  Educational and government cybersecurity with FERPA compliance, 
                  state data protection laws, and public sector security standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail & E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Retail cybersecurity with PCI DSS compliance, customer data protection, 
                  and e-commerce security for US retailers and online businesses.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Technology & Startups
                </h3>
                <p className="text-slate-600 mb-4">
                  Technology security solutions for startups, SaaS companies, and tech enterprises 
                  with modern security frameworks and innovation protection.
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
              Ready to Secure Your US Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact ElegantCodes USA today for a comprehensive security assessment and discover how our 
              cybersecurity services can protect your business across all 50 states.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Security Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View US Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 