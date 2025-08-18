import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  getKeywordsByRegion 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Germany Software Development Company | Custom Software Solutions Provider',
  description: 'Leading Germany software development company offering custom software development, enterprise software solutions, and offshore software development. Expert software development services in Germany, Europe, and globally.',
  keywords: [
    'Germany software development company',
    'Germany custom software development',
    'Germany offshore software development',
    'Germany enterprise software company',
    'Germany leading software development firm',
    'Germany progressive web apps',
    'custom software development Germany',
    'offshore software development Germany',
    'enterprise software company Germany',
    'leading software development firm Germany',
    'progressive web apps Germany',
    'Germany web development company',
    'Germany mobile app development company',
    'Germany IT solutions company',
    'Germany technology solutions provider',
    'Germany IT consulting services',
    'Germany cybersecurity company',
    'Germany cloud services',
    'Germany AI development company',
    'Germany blockchain development company',
    'Germany DevOps consulting services'
  ],
  openGraph: {
    title: 'Germany Software Development Company | Custom Software Solutions Provider',
    description: 'Leading Germany software development company offering custom software development, enterprise software solutions, and offshore software development.',
    url: 'https://www.elegantcodes.com/germany/software-development',
    siteName: 'ElegantCodes - Germany IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-germany-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Germany Software Development Company',
      }
    ],
    locale: 'en_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Germany Software Development Company | Custom Software Solutions Provider',
    description: 'Leading Germany software development company offering custom software development, enterprise software solutions, and offshore software development.',
    images: ['https://www.elegantcodes.com/og-image-germany-software-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/germany/software-development',
    languages: {
      'en': 'https://www.elegantcodes.com/software-development',
      'en-de': 'https://www.elegantcodes.com/germany/software-development',
    },
  },
}

const faqs = [
  {
    question: "What software development services does ElegantCodes offer in Germany?",
    answer: "In Germany, ElegantCodes provides comprehensive software development services including custom software development, enterprise software solutions, offshore software development, progressive web apps, and industry-specific software tailored for the German market and European compliance requirements."
  },
  {
    question: "Why choose ElegantCodes for software development in Germany?",
    answer: "We offer deep understanding of German business culture, compliance with EU regulations including GDPR, local market expertise, competitive pricing, proven track record, and commitment to delivering high-quality software solutions that meet German business standards."
  },
  {
    question: "How does ElegantCodes ensure compliance with German and EU regulations?",
    answer: "Our software development follows strict German and EU compliance standards including GDPR data protection, German IT security standards (BSI), European software quality standards, and local business regulations to ensure your software meets all legal requirements."
  },
  {
    question: "What industries does ElegantCodes serve in Germany?",
    answer: "We serve various German industries including automotive, manufacturing, finance, healthcare, logistics, retail, and technology. Our solutions are tailored to meet German industry standards and business practices."
  },
  {
    question: "How does ElegantCodes support German businesses with offshore development?",
    answer: "Our offshore software development for German businesses includes local project management, German-speaking teams, compliance with German standards, regular client communication in German time zones, and quality assurance that meets German business expectations."
  }
]

export default function GermanySoftwareDevelopmentPage() {
  const seoConfig = {
    title: 'Germany Software Development Company | Custom Software Solutions Provider',
    description: 'Leading Germany software development company offering custom software development, enterprise software solutions, and offshore software development. Expert software development services in Germany, Europe, and globally.',
    keywords: getKeywordsByRegion('Germany'),
    canonical: 'https://www.elegantcodes.com/germany/software-development',
    ogImage: 'https://www.elegantcodes.com/og-image-germany-software-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Germany', url: 'https://www.elegantcodes.com/germany' },
    { name: 'Software Development', url: 'https://www.elegantcodes.com/germany/software-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="Germany"
        service="Software Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                  🇩🇪 Germany Software Development
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Germany Software Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading Germany software development company offering custom software development, 
                enterprise software solutions, and offshore software development. Expert software 
                development services in Germany, Europe, and globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* German Market Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes in Germany?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🇩🇪 German Business Understanding
                </h3>
                <p className="text-slate-600 mb-4">
                  Deep understanding of German business culture, processes, and industry 
                  standards to deliver software solutions that align with local business practices.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• German business culture</li>
                  <li>• Industry standards</li>
                  <li>• Local business processes</li>
                  <li>• Cultural sensitivity</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 EU & German Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  Full compliance with German and EU regulations including GDPR, BSI standards, 
                  and local business regulations to ensure legal compliance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• GDPR compliance</li>
                  <li>• BSI standards</li>
                  <li>• EU regulations</li>
                  <li>• German laws</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 European Market Focus
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized focus on European markets with understanding of regional 
                  challenges, opportunities, and technology adoption patterns.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• European market expertise</li>
                  <li>• Regional partnerships</li>
                  <li>• EU technology trends</li>
                  <li>• Cross-border solutions</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💰 Competitive Pricing
                </h3>
                <p className="text-slate-600 mb-4">
                  Competitive pricing for German businesses with transparent cost structures, 
                  flexible payment terms, and value-driven solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Transparent pricing</li>
                  <li>• Flexible payment terms</li>
                  <li>• Value-driven solutions</li>
                  <li>• Cost optimization</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Technology Innovation
                </h3>
                <p className="text-slate-600 mb-4">
                  Cutting-edge technology solutions including AI, blockchain, IoT, and 
                  cloud services to drive Germany's digital transformation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AI & Machine Learning</li>
                  <li>• Blockchain Development</li>
                  <li>• IoT Solutions</li>
                  <li>• Cloud Migration</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤝 Local Partnerships
                </h3>
                <p className="text-slate-600 mb-4">
                  Strong partnerships with German businesses, government agencies, 
                  educational institutions, and technology communities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• German partnerships</li>
                  <li>• Government collaboration</li>
                  <li>• Educational partnerships</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Germany */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Software Development Services in Germany
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🖥️ Custom Software Development Germany
                </h3>
                <p className="text-slate-600 mb-4">
                  Tailored software solutions designed specifically for German businesses, 
                  considering local requirements, compliance, and business practices.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Business Process Automation</li>
                  <li>• Industry-Specific Solutions</li>
                  <li>• Legacy System Modernization</li>
                  <li>• Custom Integrations</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Offshore Software Development Germany
                </h3>
                <p className="text-slate-600 mb-4">
                  Cost-effective offshore software development with German project management, 
                  compliance with German standards, and local quality assurance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• German Project Management</li>
                  <li>• Local Quality Assurance</li>
                  <li>• Compliance Standards</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 Enterprise Software Company Germany
                </h3>
                <p className="text-slate-600 mb-4">
                  Enterprise-grade software solutions designed for German organizations 
                  with complex requirements, scalability needs, and compliance requirements.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Scalable Architecture</li>
                  <li>• German Security Standards</li>
                  <li>• High Performance</li>
                  <li>• Compliance Ready</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏆 Leading Software Development Firm Germany
                </h3>
                <p className="text-slate-600 mb-4">
                  Recognized industry leader in Germany with proven track record, technical expertise, 
                  and commitment to delivering exceptional software solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• German Industry Recognition</li>
                  <li>• Technical Excellence</li>
                  <li>• Client Satisfaction</li>
                  <li>• Innovation Leadership</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Progressive Web Apps Germany
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern progressive web applications optimized for German users, 
                  with local language support and regional compliance features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• German Language Support</li>
                  <li>• Regional Compliance</li>
                  <li>• Fast Loading</li>
                  <li>• Cross-Platform</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔧 Technical Expertise
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced technical expertise in modern technologies including AI, 
                  blockchain, IoT, and cloud services for German businesses.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AI & Machine Learning</li>
                  <li>• Blockchain Development</li>
                  <li>• IoT Solutions</li>
                  <li>• Cloud Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* German Industries */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Software Solutions for German Industries
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚗 Automotive Industry
                </h3>
                <p className="text-slate-600 mb-4">
                  Software solutions for German automotive industry including connected car 
                  platforms, manufacturing systems, and supply chain management.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing
                </h3>
                <p className="text-slate-600 mb-4">
                  Industry 4.0 solutions for German manufacturing including smart factories, 
                  predictive maintenance, and production optimization systems.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Fintech solutions for German financial institutions including banking platforms, 
                  payment systems, and regulatory compliance tools.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare technology solutions for German healthcare providers including 
                  patient management systems, telemedicine platforms, and medical software.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📦 Logistics
                </h3>
                <p className="text-slate-600 mb-4">
                  Logistics technology solutions for German logistics companies including 
                  supply chain management, warehouse systems, and transportation optimization.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail & E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Retail technology solutions for German retailers including e-commerce platforms, 
                  inventory management, and customer relationship management systems.
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Software Solution in Germany?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Contact ElegantCodes Germany today for a free consultation and discover how our 
              software development services can transform your German business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 