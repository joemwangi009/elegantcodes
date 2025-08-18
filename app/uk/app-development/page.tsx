import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  getKeywordsByRegion 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'UK Mobile App Development Company | Android iOS Flutter Development Agency',
  description: 'Leading UK mobile app development company offering Android app development, iOS app development, cross-platform app development, and Flutter app development. Expert app development services in London, Manchester, Birmingham, and across the UK.',
  keywords: [
    'UK mobile app development company',
    'UK Android app development',
    'UK iOS app development',
    'UK cross-platform app development',
    'UK Flutter app development',
    'UK React development services',
    'UK Node.js developers',
    'London mobile app development',
    'Manchester app development company',
    'Birmingham app development agency',
    'UK app development agency',
    'UK mobile app developers',
    'UK app development services',
    'UK custom app development',
    'UK enterprise app development',
    'UK fintech app development',
    'UK healthcare app development',
    'UK retail app development',
    'UK education app development',
    'UK government app development'
  ],
  openGraph: {
    title: 'UK Mobile App Development Company | Android iOS Flutter Development Agency',
    description: 'Leading UK mobile app development company offering Android app development, iOS app development, cross-platform app development, and Flutter app development.',
    url: 'https://www.elegantcodes.com/uk/app-development',
    siteName: 'ElegantCodes - UK IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-uk-app-development.jpg',
        width: 1200,
        height: 630,
        alt: 'UK Mobile App Development Company',
      }
    ],
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UK Mobile App Development Company | Android iOS Flutter Development Agency',
    description: 'Leading UK mobile app development company offering Android app development, iOS app development, cross-platform app development, and Flutter app development.',
    images: ['https://www.elegantcodes.com/og-image-uk-app-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/uk/app-development',
    languages: {
      'en': 'https://www.elegantcodes.com/app-development',
      'en-gb': 'https://www.elegantcodes.com/uk/app-development',
    },
  },
}

const faqs = [
  {
    question: "What mobile app development services does ElegantCodes offer in the UK?",
    answer: "In the UK, ElegantCodes provides comprehensive mobile app development services including native Android and iOS development, cross-platform development with Flutter and React Native, custom app solutions, and enterprise app development tailored for UK businesses and compliance requirements."
  },
  {
    question: "Why choose ElegantCodes for app development in the UK?",
    answer: "We offer deep understanding of UK business culture, compliance with UK and EU regulations including GDPR, local market expertise, competitive pricing, proven track record, and commitment to delivering high-quality mobile applications that meet UK business standards."
  },
  {
    question: "How does ElegantCodes ensure compliance with UK and EU regulations?",
    answer: "Our UK app development follows strict compliance standards including GDPR data protection, UK data protection laws, accessibility requirements, and local business regulations to ensure your app meets all legal requirements for the UK market."
  },
  {
    question: "What industries does ElegantCodes serve in the UK?",
    answer: "We serve various UK industries including fintech, healthcare, retail, education, government, manufacturing, and technology. Our solutions are tailored to meet UK industry standards, business practices, and regulatory requirements."
  },
  {
    question: "How does ElegantCodes support UK businesses with app development?",
    answer: "Our UK app development services include local project management, UK business understanding, compliance with UK standards, regular client communication in UK time zones, and quality assurance that meets British business expectations."
  }
]

export default function UKAppDevelopmentPage() {
  const seoConfig = {
    title: 'UK Mobile App Development Company | Android iOS Flutter Development Agency',
    description: 'Leading UK mobile app development company offering Android app development, iOS app development, cross-platform app development, and Flutter app development. Expert app development services in London, Manchester, Birmingham, and across the UK.',
    keywords: getKeywordsByRegion('UK'),
    canonical: 'https://www.elegantcodes.com/uk/app-development',
    ogImage: 'https://www.elegantcodes.com/og-image-uk-app-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'UK', url: 'https://www.elegantcodes.com/uk' },
    { name: 'App Development', url: 'https://www.elegantcodes.com/uk/app-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="UK"
        service="App Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  🇬🇧 UK App Development
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                UK Mobile App Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading UK mobile app development company offering Android app development, 
                iOS app development, cross-platform app development, and Flutter app development. 
                Expert app development services in London, Manchester, Birmingham, and across the UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your App Project
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View App Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* UK Market Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes in the UK?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🇬🇧 UK Business Understanding
                </h3>
                <p className="text-slate-600 mb-4">
                  Deep understanding of UK business culture, processes, and industry 
                  standards to deliver app solutions that align with British business practices.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• UK business culture</li>
                  <li>• Industry standards</li>
                  <li>• Local business processes</li>
                  <li>• Cultural sensitivity</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 UK & EU Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  Full compliance with UK and EU regulations including GDPR, UK data protection laws, 
                  accessibility requirements, and local business regulations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• GDPR compliance</li>
                  <li>• UK data protection</li>
                  <li>• EU regulations</li>
                  <li>• Accessibility standards</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 UK Industry Expertise
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized expertise in UK industries including fintech, healthcare, 
                  retail, education, government, and manufacturing sectors.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Fintech expertise</li>
                  <li>• Healthcare compliance</li>
                  <li>• Retail solutions</li>
                  <li>• Government projects</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💰 Competitive UK Pricing
                </h3>
                <p className="text-slate-600 mb-4">
                  Competitive pricing for UK businesses with transparent cost structures, 
                  flexible payment terms, and value-driven solutions.
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
                  Cutting-edge technology solutions including AI, blockchain, IoT, and 
                  cloud services to drive UK's digital transformation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AI & Machine Learning</li>
                  <li>• Blockchain Development</li>
                  <li>• IoT Solutions</li>
                  <li>• Cloud Migration</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤝 UK Partnerships
                </h3>
                <p className="text-slate-600 mb-4">
                  Strong partnerships with UK businesses, government agencies, 
                  educational institutions, and technology communities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• UK partnerships</li>
                  <li>• Government collaboration</li>
                  <li>• Educational partnerships</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UK Cities Coverage */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              App Development Services Across the UK
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏙️ London App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Premier app development services in London, the UK's technology hub, 
                  serving fintech, media, and enterprise clients with innovative solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Fintech apps</li>
                  <li>• Media applications</li>
                  <li>• Enterprise solutions</li>
                  <li>• Startup support</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manchester App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Dynamic app development services in Manchester, serving the North of England 
                  with innovative technology solutions and local business expertise.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Manufacturing apps</li>
                  <li>• Logistics solutions</li>
                  <li>• Healthcare applications</li>
                  <li>• Educational technology</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏛️ Birmingham App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive app development services in Birmingham, serving the Midlands 
                  with business-focused solutions and regional market expertise.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Business applications</li>
                  <li>• Retail solutions</li>
                  <li>• Manufacturing apps</li>
                  <li>• Service industry</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏴 Scotland App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Innovative app development services in Scotland, serving Edinburgh, Glasgow, 
                  and surrounding areas with technology solutions and local expertise.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Financial services</li>
                  <li>• Tourism applications</li>
                  <li>• Educational technology</li>
                  <li>• Healthcare solutions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏴 Wales App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic app development services in Wales, serving Cardiff, Swansea, 
                  and surrounding areas with innovative solutions and local market knowledge.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Public sector apps</li>
                  <li>• Manufacturing solutions</li>
                  <li>• Tourism applications</li>
                  <li>• Educational technology</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 UK-Wide Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Nationwide app development services covering all UK regions with 
                  local expertise, compliance knowledge, and business understanding.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Regional expertise</li>
                  <li>• Local compliance</li>
                  <li>• Business understanding</li>
                  <li>• National coverage</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* UK Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              App Development for UK Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Fintech & Banking
                </h3>
                <p className="text-slate-600 mb-4">
                  Secure fintech applications for UK banks, payment providers, and financial 
                  services with FCA compliance and security standards.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare & NHS
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare applications for NHS trusts, private healthcare providers, 
                  and medical practices with UK healthcare compliance.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail & E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Retail applications for UK retailers, e-commerce platforms, and 
                  omnichannel solutions with local market understanding.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education & EdTech
                </h3>
                <p className="text-slate-600 mb-4">
                  Educational applications for UK schools, universities, and training 
                  providers with modern learning technology solutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing & Industry
                </h3>
                <p className="text-slate-600 mb-4">
                  Industrial applications for UK manufacturing, logistics, and 
                  supply chain management with Industry 4.0 solutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏛️ Government & Public Sector
                </h3>
                <p className="text-slate-600 mb-4">
                  Government applications for UK public sector organizations, 
                  local authorities, and government services with compliance standards.
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
              Ready to Build Your Mobile App in the UK?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact ElegantCodes UK today for a free consultation and discover how our 
              mobile app development services can transform your UK business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your App Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View UK Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 