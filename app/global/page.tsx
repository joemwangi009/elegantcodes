import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Global IT Solutions Company | Worldwide Software Development & IT Services',
  description: 'Leading global IT solutions company offering comprehensive software development, cloud services, cybersecurity, AI development, and IT consulting services across all continents and major markets worldwide.',
  keywords: [
    'global IT solutions company',
    'worldwide software development',
    'international IT services',
    'global cloud services',
    'worldwide cybersecurity company',
    'international AI development',
    'global IT consulting services',
    'worldwide technology solutions',
    'international software company',
    'global IT outsourcing company',
    'worldwide digital transformation',
    'international technology consulting',
    'global software development company',
    'worldwide IT solutions provider',
    'international cybersecurity services',
    'global cloud consulting',
    'worldwide AI solutions',
    'international DevOps services',
    'global blockchain development',
    'worldwide IoT solutions'
  ],
  openGraph: {
    title: 'Global IT Solutions Company | Worldwide Software Development & IT Services',
    description: 'Leading global IT solutions company offering comprehensive software development, cloud services, cybersecurity, AI development, and IT consulting services across all continents and major markets worldwide.',
    url: 'https://www.elegantcodes.com/global',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-global-it-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Global IT Solutions Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Global IT Solutions Company | Worldwide Software Development & IT Services',
    description: 'Leading global IT solutions company offering comprehensive software development, cloud services, cybersecurity, AI development, and IT consulting services across all continents and major markets worldwide.',
    images: ['https://www.elegantcodes.com/og-image-global-it-solutions.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/global',
    languages: {
      'en': 'https://www.elegantcodes.com',
      'en-global': 'https://www.elegantcodes.com/global',
    },
  },
}

const faqs = [
  {
    question: "What global IT services does ElegantCodes offer?",
    answer: "ElegantCodes provides comprehensive global IT services including software development, cloud services, cybersecurity, AI development, IT consulting, DevOps, blockchain development, and IoT solutions across all major markets worldwide."
  },
  {
    question: "Why choose ElegantCodes for global IT solutions?",
    answer: "We offer worldwide coverage, deep understanding of international business cultures, compliance with global regulations, proven track record, competitive pricing, and commitment to delivering high-quality IT solutions across all continents."
  },
  {
    question: "How does ElegantCodes ensure global compliance?",
    answer: "Our global IT services follow international compliance standards including GDPR, SOX, HIPAA, ISO certifications, local data protection laws, and industry-specific regulations to ensure your business meets all legal requirements worldwide."
  },
  {
    question: "What industries does ElegantCodes serve globally?",
    answer: "We serve various global industries including finance, healthcare, technology, manufacturing, energy, government, education, retail, logistics, and telecommunications across all major markets."
  },
  {
    question: "How does ElegantCodes support global businesses?",
    answer: "Our global IT services include international project management, multi-cultural business understanding, compliance with global standards, 24/7 support across time zones, and quality assurance that meets international business expectations."
  }
]

export default function GlobalPage() {
  const seoConfig = {
    title: 'Global IT Solutions Company | Worldwide Software Development & IT Services',
    description: 'Leading global IT solutions company offering comprehensive software development, cloud services, cybersecurity, AI development, and IT consulting services across all continents and major markets worldwide.',
    keywords: [
      'global IT solutions company',
      'worldwide software development',
      'international IT services',
      'global cloud services',
      'worldwide cybersecurity company',
      'international AI development',
      'global IT consulting services'
    ],
    canonical: 'https://www.elegantcodes.com/global',
    ogImage: 'https://www.elegantcodes.com/og-image-global-it-solutions.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Global', url: 'https://www.elegantcodes.com/global' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="Global"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                  🌍 Global IT Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Global IT Solutions Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading global IT solutions company offering comprehensive software development, 
                cloud services, cybersecurity, AI development, and IT consulting services 
                across all continents and major markets worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Global Project
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Global Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Global Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Global IT Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💻 Software Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Global software development services including custom applications, 
                  enterprise software, mobile apps, and web solutions worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Custom Software Development</li>
                  <li>• Enterprise Applications</li>
                  <li>• Mobile App Development</li>
                  <li>• Web Development</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☁️ Cloud Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Global cloud services including AWS, Azure, Google Cloud, 
                  cloud migration, and infrastructure management worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cloud Migration</li>
                  <li>• Infrastructure Management</li>
                  <li>• Multi-Cloud Solutions</li>
                  <li>• Cloud Security</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛡️ Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Global cybersecurity services including penetration testing, 
                  ethical hacking, data protection, and managed security worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Penetration Testing</li>
                  <li>• Ethical Hacking</li>
                  <li>• Data Protection</li>
                  <li>• Managed Security</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤖 AI & Machine Learning
                </h3>
                <p className="text-slate-600 mb-4">
                  Global AI development services including machine learning, 
                  natural language processing, and computer vision worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Machine Learning</li>
                  <li>• Natural Language Processing</li>
                  <li>• Computer Vision</li>
                  <li>• AI Chatbots</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔧 DevOps & Infrastructure
                </h3>
                <p className="text-slate-600 mb-4">
                  Global DevOps services including CI/CD, containerization, 
                  Kubernetes, and infrastructure automation worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• CI/CD Pipelines</li>
                  <li>• Containerization</li>
                  <li>• Kubernetes</li>
                  <li>• Infrastructure Automation</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Emerging Technologies
                </h3>
                <p className="text-slate-600 mb-4">
                  Global emerging technology services including blockchain, 
                  IoT, metaverse, and Web3 development worldwide.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Blockchain Development</li>
                  <li>• IoT Solutions</li>
                  <li>• Metaverse Development</li>
                  <li>• Web3 Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Global Regions Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Worldwide Service Coverage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌎 North America
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive IT services in USA, Canada, and Mexico with 
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
                  Advanced IT services across Europe including UK, Germany, 
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
                  Strategic IT services in Asia-Pacific including Australia, 
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
                  Professional IT services in Africa including Kenya, South Africa, 
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
                  Comprehensive IT services in Latin America including Brazil, 
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
                  Strategic IT services in the Middle East including UAE, 
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
              IT Solutions for Global Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Global financial technology solutions with international compliance, 
                  cross-border regulations, and advanced fintech innovations worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare & Life Sciences
                </h3>
                <p className="text-slate-600 mb-4">
                  Global healthcare technology with international standards, 
                  patient data protection, and medical device security worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing & Energy
                </h3>
                <p className="text-slate-600 mb-4">
                  Global industrial technology for manufacturing, energy, 
                  and critical infrastructure with international safety standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education & Government
                </h3>
                <p className="text-slate-600 mb-4">
                  Global educational and government technology with international 
                  standards, local regulations, and public sector innovation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail & E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Global retail technology with international payment standards, 
                  customer data protection, and e-commerce innovation worldwide.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Technology & Innovation
                </h3>
                <p className="text-slate-600 mb-4">
                  Global technology solutions for startups, SaaS companies, 
                  and tech enterprises with modern frameworks worldwide.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Global Advantages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes Globally?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🌍 Worldwide Coverage</h3>
                <p className="text-slate-600 text-sm">
                  Comprehensive IT services covering all major markets and continents
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🔒 Global Compliance</h3>
                <p className="text-slate-600 text-sm">
                  International compliance with GDPR, SOX, HIPAA, and local regulations
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">💰 Competitive Pricing</h3>
                <p className="text-slate-600 text-sm">
                  Competitive pricing for global businesses with transparent cost structures
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🚀 Technology Innovation</h3>
                <p className="text-slate-600 text-sm">
                  Cutting-edge technology solutions with AI, blockchain, and IoT
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🤝 Global Partnerships</h3>
                <p className="text-slate-600 text-sm">
                  Strong partnerships with businesses and institutions worldwide
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">⏰ 24/7 Support</h3>
                <p className="text-slate-600 text-sm">
                  Round-the-clock support across all time zones and regions
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
                <div key={index} className="bg-indigo-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Global Business?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Contact ElegantCodes Global today for a comprehensive consultation and discover how our 
              worldwide IT solutions can transform your business across all continents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Global Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Global Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 