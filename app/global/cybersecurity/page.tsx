import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  getKeywordsByRegion 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Global Cybersecurity Company | Worldwide IT Security Solutions & Services',
  description: 'Leading global cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services worldwide.',
  keywords: [
    'global cybersecurity company',
    'worldwide IT security solutions',
    'international penetration testing services',
    'global ethical hacking company',
    'worldwide data protection solutions',
    'international managed security services',
    'global SOC as a service',
    'worldwide cyber threat management',
    'international network security services',
    'cybersecurity company worldwide',
    'IT security solutions globally',
    'penetration testing services worldwide',
    'ethical hacking company globally',
    'data protection solutions international',
    'managed security services worldwide',
    'cybersecurity services global',
    'IT security company worldwide',
    'cybersecurity solutions international',
    'global security services',
    'worldwide cybersecurity solutions'
  ],
  openGraph: {
    title: 'Global Cybersecurity Company | Worldwide IT Security Solutions & Services',
    description: 'Leading global cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services worldwide.',
    url: 'https://www.elegantcodes.com/global/cybersecurity',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-global-cybersecurity.jpg',
        width: 1200,
        height: 630,
        alt: 'Global Cybersecurity Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global Cybersecurity Company | Worldwide IT Security Solutions & Services',
    description: 'Leading global cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services worldwide.',
    images: ['https://www.elegantcodes.com/og-image-global-cybersecurity.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/global/cybersecurity',
    languages: {
      'en': 'https://www.elegantcodes.com/cybersecurity',
      'en-global': 'https://www.elegantcodes.com/global/cybersecurity',
    },
  },
}

const faqs = [
  {
    question: "What global cybersecurity services does ElegantCodes offer?",
    answer: "ElegantCodes provides comprehensive global cybersecurity services including penetration testing, ethical hacking, data protection, managed security services, SOC as a service, and compliance solutions tailored for international businesses and regulatory requirements across all major markets."
  },
  {
    question: "Why choose ElegantCodes for global cybersecurity?",
    answer: "We offer worldwide coverage, deep understanding of international business cultures, compliance with global regulations including GDPR, SOX, HIPAA, and local laws, proven track record, and commitment to protecting businesses across all continents."
  },
  {
    question: "How does ElegantCodes ensure global compliance?",
    answer: "Our global cybersecurity services follow international compliance standards including GDPR, SOX, HIPAA, ISO 27001, local data protection laws, and industry-specific regulations to ensure your business meets all legal requirements worldwide."
  },
  {
    question: "What industries does ElegantCodes serve globally?",
    answer: "We serve various global industries including finance, healthcare, technology, manufacturing, energy, government, education, retail, and logistics. Our solutions are tailored to meet international industry standards and regulatory requirements."
  },
  {
    question: "How does ElegantCodes support global businesses with cybersecurity?",
    answer: "Our global cybersecurity services include international project management, multi-cultural business understanding, compliance with global standards, 24/7 support across time zones, and quality assurance that meets international business expectations."
  }
]

export default function GlobalCybersecurityPage() {
  const seoConfig = {
    title: 'Global Cybersecurity Company | Worldwide IT Security Solutions & Services',
    description: 'Leading global cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services worldwide.',
    keywords: getKeywordsByRegion('Global'),
    canonical: 'https://www.elegantcodes.com/global/cybersecurity',
    ogImage: 'https://www.elegantcodes.com/og-image-global-cybersecurity.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Global', url: 'https://www.elegantcodes.com/global' },
    { name: 'Cybersecurity', url: 'https://www.elegantcodes.com/global/cybersecurity' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="Global"
        service="Cybersecurity"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                  🌍 Global Cybersecurity
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Global Cybersecurity Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading global cybersecurity company offering IT security solutions, penetration testing services, 
                ethical hacking company services, data protection solutions, and managed security services worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Secure Your Global Business
                </button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Global Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Market Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes Globally?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Worldwide Coverage
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity services covering all major markets including 
                  North America, Europe, Asia-Pacific, Africa, and Latin America.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Global presence</li>
                  <li>• Local expertise</li>
                  <li>• Regional compliance</li>
                  <li>• Cultural understanding</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 International Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  Full compliance with international regulations including GDPR, SOX, HIPAA, 
                  ISO 27001, and local data protection laws across all jurisdictions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• GDPR compliance</li>
                  <li>• SOX requirements</li>
                  <li>• HIPAA standards</li>
                  <li>• ISO certifications</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 Global Industry Expertise
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized expertise in global industries including finance, healthcare, 
                  technology, manufacturing, energy, and government sectors worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Financial services</li>
                  <li>• Healthcare security</li>
                  <li>• Technology protection</li>
                  <li>• Industrial security</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💰 Competitive Global Pricing
                </h3>
                <p className="text-slate-600 mb-4">
                  Competitive pricing for global businesses with transparent cost structures, 
                  flexible payment terms, and value-driven cybersecurity solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Transparent pricing</li>
                  <li>• Flexible payment terms</li>
                  <li>• Value-driven solutions</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
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
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤝 Global Partnerships
                </h3>
                <p className="text-slate-600 mb-4">
                  Strong partnerships with global businesses, government agencies, 
                  educational institutions, and technology communities worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Global partnerships</li>
                  <li>• Government collaboration</li>
                  <li>• Educational partnerships</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Regions Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Cybersecurity Services Across the Globe
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌎 North America
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity services in USA, Canada, and Mexico with 
                  local compliance, business understanding, and regional expertise.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• USA (all 50 states)</li>
                  <li>• Canada (all provinces)</li>
                  <li>• Mexico</li>
                  <li>• Regional compliance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🇪🇺 Europe
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced cybersecurity services across Europe including UK, Germany, 
                  France, and EU member states with GDPR compliance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• UK & Ireland</li>
                  <li>• Germany & Austria</li>
                  <li>• France & Benelux</li>
                  <li>• EU compliance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌏 Asia-Pacific
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic cybersecurity services in Asia-Pacific including Australia, 
                  Singapore, Japan, and emerging markets with local expertise.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Australia & New Zealand</li>
                  <li>• Singapore & Malaysia</li>
                  <li>• Japan & South Korea</li>
                  <li>• Emerging markets</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Africa
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional cybersecurity services in Africa including Kenya, South Africa, 
                  Nigeria, and other African nations with local market knowledge.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Kenya & East Africa</li>
                  <li>• South Africa</li>
                  <li>• Nigeria & West Africa</li>
                  <li>• Regional expertise</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌎 Latin America
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity services in Latin America including Brazil, 
                  Argentina, Chile, and other South American countries.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Brazil</li>
                  <li>• Argentina</li>
                  <li>• Chile & Peru</li>
                  <li>• Regional compliance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Middle East
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic cybersecurity services in the Middle East including UAE, 
                  Saudi Arabia, Israel, and other regional markets.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• UAE & Qatar</li>
                  <li>• Saudi Arabia</li>
                  <li>• Israel</li>
                  <li>• Regional security</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Cybersecurity for Global Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Global financial cybersecurity with international compliance, 
                  cross-border regulations, and advanced fraud detection worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare & Life Sciences
                </h3>
                <p className="text-slate-600 mb-4">
                  Global healthcare security with international standards, 
                  patient data protection, and medical device security worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing & Energy
                </h3>
                <p className="text-slate-600 mb-4">
                  Global industrial cybersecurity for manufacturing, energy, 
                  and critical infrastructure with international safety standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education & Government
                </h3>
                <p className="text-slate-600 mb-4">
                  Global educational and government cybersecurity with international 
                  standards, local regulations, and public sector security.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail & E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Global retail cybersecurity with international payment standards, 
                  customer data protection, and e-commerce security worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Technology & Innovation
                </h3>
                <p className="text-slate-600 mb-4">
                  Global technology security solutions for startups, SaaS companies, 
                  and tech enterprises with modern security frameworks worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Compliance */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Global Compliance & Standards
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">ISO 27001</h3>
                <p className="text-slate-600 text-sm">
                  International Information Security Management System certification
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">GDPR</h3>
                <p className="text-slate-600 text-sm">
                  General Data Protection Regulation for EU and global data protection
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">SOX</h3>
                <p className="text-slate-600 text-sm">
                  Sarbanes-Oxley Act compliance for US and international financial reporting
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">HIPAA</h3>
                <p className="text-slate-600 text-sm">
                  Health Insurance Portability and Accountability Act for healthcare
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">PCI DSS</h3>
                <p className="text-slate-600 text-sm">
                  Payment Card Industry Data Security Standard for global payments
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">NIST</h3>
                <p className="text-slate-600 text-sm">
                  National Institute of Standards and Technology cybersecurity framework
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-purple-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Global Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact ElegantCodes Global today for a comprehensive security assessment and discover how our 
              worldwide cybersecurity services can protect your business across all continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Global Security Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Global Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 