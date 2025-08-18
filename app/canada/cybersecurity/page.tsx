import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  getKeywordsByRegion 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Canada Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
  description: 'Leading Canada cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all provinces.',
  keywords: [
    'Canada cybersecurity company',
    'Canada IT security solutions',
    'Canada penetration testing services',
    'Canada ethical hacking company',
    'Canada data protection solutions',
    'Canada managed security services',
    'Canada SOC as a service',
    'Canada cyber threat management',
    'Canada network security services',
    'Toronto cybersecurity company',
    'Vancouver cybersecurity company',
    'Montreal cybersecurity company',
    'Calgary cybersecurity company',
    'Ottawa cybersecurity company',
    'Edmonton cybersecurity company',
    'Winnipeg cybersecurity company',
    'Quebec City cybersecurity company',
    'Hamilton cybersecurity company',
    'Kitchener cybersecurity company',
    'London Ontario cybersecurity company'
  ],
  openGraph: {
    title: 'Canada Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading Canada cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all provinces.',
    url: 'https://www.elegantcodes.com/canada/cybersecurity',
    siteName: 'ElegantCodes - Canada IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-canada-cybersecurity.jpg',
        width: 1200,
        height: 630,
        alt: 'Canada Cybersecurity Company',
      }
    ],
    locale: 'en_CA',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Canada Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading Canada cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all provinces.',
    images: ['https://www.elegantcodes.com/og-image-canada-cybersecurity.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/canada/cybersecurity',
    languages: {
      'en': 'https://www.elegantcodes.com/cybersecurity',
      'en-ca': 'https://www.elegantcodes.com/canada/cybersecurity',
    },
  },
}

const faqs = [
  {
    question: "What cybersecurity services does ElegantCodes offer in Canada?",
    answer: "In Canada, ElegantCodes provides comprehensive cybersecurity services including penetration testing, ethical hacking, data protection, managed security services, SOC as a service, and compliance solutions tailored for Canadian businesses and PIPEDA requirements."
  },
  {
    question: "Why choose ElegantCodes for cybersecurity in Canada?",
    answer: "We offer deep understanding of Canadian business culture, compliance with Canadian regulations including PIPEDA, provincial privacy laws, local market expertise, competitive pricing, and proven track record in protecting Canadian businesses."
  },
  {
    question: "How does ElegantCodes ensure compliance with Canadian regulations?",
    answer: "Our Canadian cybersecurity services follow strict compliance standards including PIPEDA, provincial privacy laws, industry-specific regulations, and Canadian business standards to ensure your business meets all legal requirements."
  },
  {
    question: "What industries does ElegantCodes serve in Canada?",
    answer: "We serve various Canadian industries including finance, healthcare, technology, manufacturing, natural resources, government, education, and retail. Our solutions are tailored to meet Canadian industry standards and regulatory requirements."
  },
  {
    question: "How does ElegantCodes support Canadian businesses with cybersecurity?",
    answer: "Our Canadian cybersecurity services include local project management, Canadian business understanding, compliance with Canadian standards, regular client communication in Canadian time zones, and quality assurance that meets Canadian business expectations."
  }
]

export default function CanadaCybersecurityPage() {
  const seoConfig = {
    title: 'Canada Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading Canada cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services across all provinces.',
    keywords: getKeywordsByRegion('Canada'),
    canonical: 'https://www.elegantcodes.com/canada/cybersecurity',
    ogImage: 'https://www.elegantcodes.com/og-image-canada-cybersecurity.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Canada', url: 'https://www.elegantcodes.com/canada' },
    { name: 'Cybersecurity', url: 'https://www.elegantcodes.com/canada/cybersecurity' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="Canada"
        service="Cybersecurity"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  🇨🇦 Canada Cybersecurity
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Canada Cybersecurity Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading Canada cybersecurity company offering IT security solutions, penetration testing services, 
                ethical hacking company services, data protection solutions, and managed security services across all provinces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Secure Your Business
                </button>
                <button className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Security Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Canada Market Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes in Canada?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🇨🇦 Canadian Business Understanding
                </h3>
                <p className="text-slate-600 mb-4">
                  Deep understanding of Canadian business culture, processes, and industry 
                  standards to deliver cybersecurity solutions that align with Canadian business practices.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Canadian business culture</li>
                  <li>• Industry standards</li>
                  <li>• Local business processes</li>
                  <li>• Cultural sensitivity</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 Canadian Regulatory Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  Full compliance with Canadian regulations including PIPEDA, provincial privacy laws, 
                  industry-specific regulations, and Canadian business standards.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• PIPEDA compliance</li>
                  <li>• Provincial privacy laws</li>
                  <li>• Industry regulations</li>
                  <li>• Canadian standards</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 Canadian Industry Expertise
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized expertise in Canadian industries including natural resources, 
                  manufacturing, technology, healthcare, and government sectors.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Natural resources</li>
                  <li>• Manufacturing security</li>
                  <li>• Technology protection</li>
                  <li>• Government projects</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💰 Competitive Canadian Pricing
                </h3>
                <p className="text-slate-600 mb-4">
                  Competitive pricing for Canadian businesses with transparent cost structures, 
                  flexible payment terms, and value-driven cybersecurity solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Transparent pricing</li>
                  <li>• Flexible payment terms</li>
                  <li>• Value-driven solutions</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
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
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤝 Canadian Partnerships
                </h3>
                <p className="text-slate-600 mb-4">
                  Strong partnerships with Canadian businesses, government agencies, 
                  educational institutions, and technology communities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Canadian partnerships</li>
                  <li>• Government collaboration</li>
                  <li>• Educational partnerships</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Canadian Provinces Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Cybersecurity Services Across Canada
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏙️ Ontario Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Premier cybersecurity services in Ontario, serving Toronto, Ottawa, 
                  and surrounding areas with comprehensive security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Toronto financial services</li>
                  <li>• Ottawa government</li>
                  <li>• Manufacturing security</li>
                  <li>• Technology protection</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌲 British Columbia Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced cybersecurity services in BC, serving Vancouver, Victoria, 
                  and the Pacific Northwest with innovative security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Vancouver technology</li>
                  <li>• Natural resources</li>
                  <li>• Port security</li>
                  <li>• Innovation protection</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🍁 Quebec Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity services in Quebec, serving Montreal, 
                  Quebec City, and surrounding areas with bilingual security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Montreal aerospace</li>
                  <li>• Quebec City government</li>
                  <li>• Manufacturing security</li>
                  <li>• Bilingual support</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏔️ Alberta Cybersecurity
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic cybersecurity services in Alberta, serving Calgary, Edmonton, 
                  and the energy sector with robust security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Calgary energy</li>
                  <li>• Edmonton government</li>
                  <li>• Oil & gas security</li>
                  <li>• Industrial protection</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌊 Atlantic Provinces
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional cybersecurity services in Atlantic Canada, serving 
                  Halifax, St. John's, and coastal communities with local security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Halifax maritime</li>
                  <li>• St. John's energy</li>
                  <li>• Fisheries security</li>
                  <li>• Coastal protection</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Nationwide Coverage
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity services covering all Canadian provinces and territories 
                  with local expertise, compliance knowledge, and business understanding.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• All provinces</li>
                  <li>• Local compliance</li>
                  <li>• Business understanding</li>
                  <li>• National coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Canadian Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Cybersecurity for Canadian Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Secure financial applications with OSFI compliance, provincial regulations, 
                  and advanced fraud detection for Canadian banks and financial institutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare & PIPEDA
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare security solutions with PIPEDA compliance, patient data protection, 
                  and medical device security for Canadian healthcare providers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Natural Resources & Energy
                </h3>
                <p className="text-slate-600 mb-4">
                  Industrial cybersecurity for oil & gas, mining, forestry, and energy sectors 
                  with Canadian safety standards and operational technology security.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education & Government
                </h3>
                <p className="text-slate-600 mb-4">
                  Educational and government cybersecurity with provincial privacy laws, 
                  federal regulations, and public sector security standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail & E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Retail cybersecurity with Canadian payment standards, customer data protection, 
                  and e-commerce security for Canadian retailers and online businesses.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Technology & Innovation
                </h3>
                <p className="text-slate-600 mb-4">
                  Technology security solutions for Canadian startups, SaaS companies, and tech enterprises 
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Secure Your Canadian Business?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Contact ElegantCodes Canada today for a comprehensive security assessment and discover how our 
              cybersecurity services can protect your business across all Canadian provinces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Security Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Canadian Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 