import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Emerging Technologies Company | Blockchain IoT AR/VR & Next-Gen Solutions',
  description: 'Leading emerging technologies company offering blockchain development, IoT solutions, AR/VR development, edge computing, and next-generation technology solutions for businesses worldwide.',
  keywords: [
    'emerging technologies company',
    'blockchain development company',
    'IoT solutions company',
    'AR/VR development company',
    'edge computing solutions',
    'next-generation technology',
    'blockchain consulting services',
    'IoT consulting services',
    'AR/VR consulting services',
    'smart city solutions',
    'digital twin development',
    'quantum computing services',
    '5G technology solutions',
    'edge AI services',
    'blockchain integration',
    'IoT platform development',
    'AR/VR application development',
    'emerging tech consulting',
    'innovation consulting',
    'future technology solutions'
  ],
  openGraph: {
    title: 'Emerging Technologies Company | Blockchain IoT AR/VR & Next-Gen Solutions',
    description: 'Leading emerging technologies company offering blockchain development, IoT solutions, AR/VR development, edge computing, and next-generation technology solutions for businesses worldwide.',
    url: 'https://www.elegantcodes.com/emerging-technologies',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-emerging-technologies.jpg',
        width: 1200,
        height: 630,
        alt: 'Emerging Technologies Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emerging Technologies Company | Blockchain IoT AR/VR & Next-Gen Solutions',
    description: 'Leading emerging technologies company offering blockchain development, IoT solutions, AR/VR development, edge computing, and next-generation technology solutions for businesses worldwide.',
    images: ['https://www.elegantcodes.com/og-image-emerging-technologies.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/emerging-technologies',
  },
}

const faqs = [
  {
    question: "What emerging technologies services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive emerging technologies services including blockchain development, IoT solutions, AR/VR development, edge computing, smart city solutions, and next-generation technology consulting for all business types."
  },
  {
    question: "How do you stay current with emerging technologies?",
    answer: "We maintain active partnerships with technology leaders, participate in research initiatives, attend global tech conferences, and continuously invest in emerging technology research and development."
  },
  {
    question: "What industries do you serve with emerging technologies?",
    answer: "We serve various industries including finance, healthcare, manufacturing, retail, logistics, and government with industry-specific emerging technology solutions and innovation strategies."
  },
  {
    question: "Do you provide emerging technology consulting?",
    answer: "Yes, we provide comprehensive emerging technology consulting including technology assessment, innovation strategy, implementation planning, and ongoing support for technology adoption."
  },
  {
    question: "Can you integrate emerging technologies with existing systems?",
    answer: "Absolutely! We specialize in integrating emerging technologies with existing business systems, legacy infrastructure, and current workflows to create seamless innovation solutions."
  }
]

export default function EmergingTechnologiesPage() {
  const seoConfig = {
    title: 'Emerging Technologies Company | Blockchain IoT AR/VR & Next-Gen Solutions',
    description: 'Leading emerging technologies company offering blockchain development, IoT solutions, AR/VR development, edge computing, and next-generation technology solutions for businesses worldwide.',
    keywords: [
      'emerging technologies company',
      'blockchain development company',
      'IoT solutions company',
      'AR/VR development company',
      'edge computing solutions',
      'next-generation technology'
    ],
    canonical: 'https://www.elegantcodes.com/emerging-technologies',
    ogImage: 'https://www.elegantcodes.com/og-image-emerging-technologies.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Emerging Technologies', url: 'https://www.elegantcodes.com/emerging-technologies' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Emerging Technologies"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Emerging Technologies Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading emerging technologies company offering blockchain development, 
                IoT solutions, AR/VR development, edge computing, and next-generation 
                technology solutions for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Explore Emerging Tech
                </button>
                <button className="border-2 border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Innovation Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Emerging Technologies Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Emerging Technologies Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ⛓️ Blockchain Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced blockchain solutions with smart contracts, 
                  decentralized applications, and blockchain integration.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Smart Contracts</li>
                  <li>• DApps Development</li>
                  <li>• Blockchain Integration</li>
                  <li>• Cryptocurrency Solutions</li>
                </ul>
              </div>
              
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌐 IoT Solutions Company
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive IoT solutions with sensor networks, 
                  data analytics, and connected device management.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Sensor Networks</li>
                  <li>• Data Analytics</li>
                  <li>• Device Management</li>
                  <li>• IoT Platforms</li>
                </ul>
              </div>
              
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🥽 AR/VR Development Company
                </h3>
                <p className="text-slate-600 mb-4">
                  Immersive AR/VR experiences with 3D modeling, 
                  interactive applications, and virtual environments.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• 3D Modeling</li>
                  <li>• Interactive Applications</li>
                  <li>• Virtual Environments</li>
                  <li>• Mixed Reality</li>
                </ul>
              </div>
              
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 Edge Computing Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Edge computing solutions with distributed processing, 
                  real-time analytics, and edge AI capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Distributed Processing</li>
                  <li>• Real-time Analytics</li>
                  <li>• Edge AI</li>
                  <li>• Edge Security</li>
                </ul>
              </div>
              
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏙️ Smart City Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Smart city infrastructure with urban planning, 
                  sustainability solutions, and citizen services.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Urban Planning</li>
                  <li>• Sustainability Solutions</li>
                  <li>• Citizen Services</li>
                  <li>• Infrastructure Management</li>
                </ul>
              </div>
              
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔮 Next-Generation Technology
                </h3>
                <p className="text-slate-600 mb-4">
                  Future technology solutions with quantum computing, 
                  5G networks, and advanced AI applications.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Quantum Computing</li>
                  <li>• 5G Networks</li>
                  <li>• Advanced AI</li>
                  <li>• Future Tech</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Technology Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Industrial IoT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Industrial IoT with predictive maintenance, 
                  asset monitoring, and operational optimization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Predictive Maintenance</li>
                  <li>• Asset Monitoring</li>
                  <li>• Operational Optimization</li>
                  <li>• Industrial Automation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare Technology
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare technology with telemedicine, 
                  patient monitoring, and medical device integration.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Telemedicine Solutions</li>
                  <li>• Patient Monitoring</li>
                  <li>• Medical Device Integration</li>
                  <li>• Health Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Fintech Innovation
                </h3>
                <p className="text-slate-600 mb-4">
                  Financial technology with blockchain banking, 
                  digital payments, and financial analytics.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Blockchain Banking</li>
                  <li>• Digital Payments</li>
                  <li>• Financial Analytics</li>
                  <li>• RegTech Solutions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚗 Connected Mobility
                </h3>
                <p className="text-slate-600 mb-4">
                  Connected mobility solutions with autonomous vehicles, 
                  smart transportation, and mobility platforms.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Autonomous Vehicles</li>
                  <li>• Smart Transportation</li>
                  <li>• Mobility Platforms</li>
                  <li>• Traffic Management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏠 Smart Home Technology
                </h3>
                <p className="text-slate-600 mb-4">
                  Smart home solutions with home automation, 
                  energy management, and security systems.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Home Automation</li>
                  <li>• Energy Management</li>
                  <li>• Security Systems</li>
                  <li>• Smart Appliances</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎮 Gaming & Entertainment
                </h3>
                <p className="text-slate-600 mb-4">
                  Gaming technology with VR gaming, 
                  augmented reality, and interactive entertainment.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• VR Gaming</li>
                  <li>• Augmented Reality</li>
                  <li>• Interactive Entertainment</li>
                  <li>• Gaming Platforms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Emerging Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Blockchain</h3>
                <p className="text-slate-600 text-sm">
                  Ethereum, Hyperledger, Solidity, and Web3
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">IoT</h3>
                <p className="text-slate-600 text-sm">
                  MQTT, CoAP, LoRaWAN, and IoT platforms
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">AR/VR</h3>
                <p className="text-slate-600 text-sm">
                  Unity, Unreal Engine, ARKit, and ARCore
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Edge Computing</h3>
                <p className="text-slate-600 text-sm">
                  Edge nodes, distributed systems, and edge AI
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Innovation Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Technology Assessment
                </h3>
                <p className="text-slate-600">
                  Emerging technology evaluation, feasibility analysis, 
                  and innovation opportunity identification
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Innovation Strategy
                </h3>
                <p className="text-slate-600">
                  Technology roadmap development, implementation planning, 
                  and innovation strategy design
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Prototype development, testing, validation, 
                  and performance optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-violet-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Deployment & Support
                </h3>
                <p className="text-slate-600">
                  Production deployment, user training, 
                  and ongoing innovation support
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
                <div key={index} className="bg-violet-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-violet-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Embrace the Future?
            </h2>
            <p className="text-xl text-violet-100 mb-8">
              Contact ElegantCodes today for a free innovation consultation and discover how our 
              emerging technologies services can transform your business for the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-violet-600 hover:bg-violet-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Explore Emerging Tech
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-violet-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Innovation Consultation
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 