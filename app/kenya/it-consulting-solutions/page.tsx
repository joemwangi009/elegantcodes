import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  generateTitle, 
  generateDescription,
  getKeywordsByRegion 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Kenya IT Consulting & Solutions Company | Leading IT Services Provider in Nairobi',
  description: 'Leading Kenya IT solutions company providing comprehensive IT consulting services, software development, and technology solutions in Nairobi and across Africa. Trusted IT partner for Kenyan businesses.',
  keywords: [
    'Kenya IT solutions company',
    'Kenya IT solutions company agency',
    'Kenya IT solutions company company',
    'Kenya IT solutions company firm',
    'Kenya IT solutions company solutions',
    'Kenya IT solutions company services',
    'Kenya IT solutions company consulting',
    'Kenya IT solutions company provider',
    'IT solutions in Kenya',
    'IT solutions company Kenya',
    'tech companies in Nairobi',
    'Kenya IT consulting services',
    'Kenya cybersecurity company',
    'Kenya software development',
    'Kenya web development company',
    'Kenya mobile app development',
    'Kenya cloud services',
    'Kenya AI development company',
    'Kenya blockchain development',
    'Kenya DevOps consulting',
    'Kenya fintech software development',
    'Kenya healthcare IT solutions',
    'Kenya government IT services',
    'Kenya education technology development',
    'Kenya manufacturing IT systems',
    'Kenya real estate software solutions',
    'Kenya travel app development',
    'Kenya ecommerce website development',
    'Kenya web3 development services',
    'Kenya IoT solutions provider',
    'Kenya metaverse development company'
  ],
  openGraph: {
    title: 'Kenya IT Consulting & Solutions Company | Leading IT Services Provider in Nairobi',
    description: 'Leading Kenya IT solutions company providing comprehensive IT consulting services, software development, and technology solutions in Nairobi and across Africa. Trusted IT partner for Kenyan businesses.',
    url: 'https://www.elegantcodes.com/kenya/it-consulting-solutions',
    siteName: 'ElegantCodes - Kenya IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-kenya-it-consulting.jpg',
        width: 1200,
        height: 630,
        alt: 'Kenya IT Consulting & Solutions Company',
      }
    ],
    locale: 'en_KE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kenya IT Consulting & Solutions Company | Leading IT Services Provider in Nairobi',
    description: 'Leading Kenya IT solutions company providing comprehensive IT consulting services, software development, and technology solutions in Nairobi and across Africa.',
    images: ['https://www.elegantcodes.com/og-image-kenya-it-consulting.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/kenya/it-consulting-solutions',
    languages: {
      'en': 'https://www.elegantcodes.com/it-consulting-solutions',
      'en-ke': 'https://www.elegantcodes.com/kenya/it-consulting-solutions',
    },
  },
}

const faqs = [
  {
    question: "What IT consulting services does ElegantCodes offer in Kenya?",
    answer: "In Kenya, ElegantCodes provides comprehensive IT consulting services including digital transformation, technology strategy, IT infrastructure optimization, cloud migration, cybersecurity consulting, and custom software development solutions tailored for the Kenyan market."
  },
  {
    question: "Why choose ElegantCodes as your IT solutions company in Kenya?",
    answer: "As a leading Kenya IT solutions company, we offer local expertise, understanding of Kenyan business environment, competitive pricing, proven track record, and commitment to supporting Kenya's digital transformation journey."
  },
  {
    question: "Which areas in Kenya does ElegantCodes serve?",
    answer: "We serve clients across Kenya including Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and other major cities. Our team is based in Nairobi but provides services nationwide and across East Africa."
  },
  {
    question: "How does ElegantCodes support Kenya's technology growth?",
    answer: "We support Kenya's technology growth through local talent development, knowledge transfer, affordable IT solutions for SMEs, government IT services, and partnerships with local educational institutions."
  },
  {
    question: "What makes ElegantCodes a trusted IT partner in Kenya?",
    answer: "Our trust is built on local presence, understanding of Kenyan business culture, proven track record, client testimonials, compliance with local regulations, and commitment to long-term partnerships."
  }
]

export default function KenyaITConsultingSolutionsPage() {
  const seoConfig = {
    title: 'Kenya IT Consulting & Solutions Company | Leading IT Services Provider in Nairobi',
    description: 'Leading Kenya IT solutions company providing comprehensive IT consulting services, software development, and technology solutions in Nairobi and across Africa. Trusted IT partner for Kenyan businesses.',
    keywords: getKeywordsByRegion('Kenya'),
    canonical: 'https://www.elegantcodes.com/kenya/it-consulting-solutions',
    ogImage: 'https://www.elegantcodes.com/og-image-kenya-it-consulting.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Kenya', url: 'https://www.elegantcodes.com/kenya' },
    { name: 'IT Consulting Solutions', url: 'https://www.elegantcodes.com/kenya/it-consulting-solutions' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="Kenya"
        service="IT Consulting Services"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  🇰🇪 Kenya IT Solutions
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Kenya IT Consulting & Solutions Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading Kenya IT solutions company providing comprehensive IT consulting services, 
                software development, and technology solutions in Nairobi and across Africa. 
                Trusted IT partner for Kenyan businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Our Services
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Local Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Why Choose ElegantCodes in Kenya?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🇰🇪 Local Presence in Nairobi
                </h3>
                <p className="text-slate-600 mb-4">
                  Our team is based in Nairobi, Kenya, providing local expertise, 
                  understanding of Kenyan business environment, and immediate support.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Nairobi-based team</li>
                  <li>• Local business understanding</li>
                  <li>• Immediate response times</li>
                  <li>• Face-to-face meetings</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Kenya & Africa Focus
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized focus on Kenya and African markets, understanding 
                  local challenges, opportunities, and technology adoption patterns.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• African market expertise</li>
                  <li>• Local technology trends</li>
                  <li>• Regional partnerships</li>
                  <li>• Cultural understanding</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💰 Competitive Pricing
                </h3>
                <p className="text-slate-600 mb-4">
                  Affordable IT solutions tailored for Kenyan businesses, 
                  from startups to enterprises, with flexible payment options.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Local market rates</li>
                  <li>• Flexible payment terms</li>
                  <li>• Scalable solutions</li>
                  <li>• ROI-focused approach</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Technology Innovation
                </h3>
                <p className="text-slate-600 mb-4">
                  Cutting-edge technology solutions including AI, blockchain, 
                  IoT, and cloud services to drive Kenya's digital transformation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AI & Machine Learning</li>
                  <li>• Blockchain Development</li>
                  <li>• IoT Solutions</li>
                  <li>• Cloud Migration</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤝 Local Partnerships
                </h3>
                <p className="text-slate-600 mb-4">
                  Strong partnerships with local businesses, government agencies, 
                  educational institutions, and technology communities in Kenya.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Government partnerships</li>
                  <li>• Educational collaborations</li>
                  <li>• Business networks</li>
                  <li>• Community engagement</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Mobile-First Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Mobile-first approach considering Kenya's high mobile penetration, 
                  developing solutions optimized for mobile devices and connectivity.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Mobile app development</li>
                  <li>• Progressive web apps</li>
                  <li>• Mobile optimization</li>
                  <li>• Offline capabilities</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Services in Kenya */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive IT Services in Kenya
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🖥️ Software Development Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Custom software development services tailored for Kenyan businesses, 
                  including enterprise applications, business automation, and industry solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Custom Enterprise Software</li>
                  <li>• Business Process Automation</li>
                  <li>• Industry-Specific Solutions</li>
                  <li>• Legacy System Modernization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌐 Web Development Company Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional web development services including e-commerce platforms, 
                  corporate websites, and progressive web applications for Kenyan businesses.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• E-commerce Websites</li>
                  <li>• Corporate Websites</li>
                  <li>• Progressive Web Apps</li>
                  <li>• Web3 Development</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Mobile App Development Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Native and cross-platform mobile app development for iOS and Android, 
                  optimized for the Kenyan market and local user preferences.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• iOS App Development</li>
                  <li>• Android App Development</li>
                  <li>• Cross-Platform Apps</li>
                  <li>• Flutter Development</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☁️ Cloud Services Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Cloud migration, infrastructure management, and consulting services 
                  to help Kenyan businesses leverage cloud technology for growth.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AWS Cloud Consulting</li>
                  <li>• Azure Cloud Services</li>
                  <li>• Google Cloud Partner</li>
                  <li>• Cloud Migration</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 Cybersecurity Company Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cybersecurity solutions including penetration testing, 
                  security audits, and threat management for Kenyan organizations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Security Audits</li>
                  <li>• Penetration Testing</li>
                  <li>• Threat Management</li>
                  <li>• Security Training</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤖 AI Development Company Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Artificial intelligence and machine learning solutions including 
                  chatbots, computer vision, and predictive analytics for Kenyan businesses.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AI Chatbots</li>
                  <li>• Computer Vision</li>
                  <li>• Machine Learning</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Industry-Specific IT Solutions in Kenya
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Fintech Software Development Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Innovative fintech solutions including mobile banking, payment systems, 
                  and financial management platforms for Kenya's growing fintech sector.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare IT Solutions Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare technology solutions including patient management systems, 
                  telemedicine platforms, and medical record management for Kenyan healthcare providers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏛️ Government IT Services Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Digital government solutions including e-governance platforms, 
                  citizen services, and administrative systems for Kenyan government agencies.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education Technology Development Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Educational technology solutions including learning management systems, 
                  virtual classrooms, and student management platforms for Kenyan educational institutions.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing IT Systems Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Manufacturing technology solutions including production management systems, 
                  quality control, and supply chain optimization for Kenyan manufacturers.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏠 Real Estate Software Solutions Kenya
                </h3>
                <p className="text-slate-600 mb-4">
                  Real estate technology solutions including property management systems, 
                  virtual tours, and customer relationship management for Kenyan real estate companies.
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business with Kenya's Leading IT Solutions Company?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact ElegantCodes Kenya today for a free consultation and discover how our 
              local IT consulting services can drive your business forward in the Kenyan market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 