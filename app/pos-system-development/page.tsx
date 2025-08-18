import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'POS System Development Company | Custom Point of Sale Software Solutions',
  description: 'Leading POS system development company offering custom point of sale software, retail POS systems, restaurant POS, and enterprise POS solutions for businesses worldwide.',
  keywords: [
    'POS system development company',
    'custom point of sale software',
    'retail POS system development',
    'restaurant POS software',
    'enterprise POS solutions',
    'cloud-based POS systems',
    'mobile POS development',
    'POS software consulting',
    'POS system integration',
    'POS hardware integration',
    'inventory management POS',
    'payment processing POS',
    'multi-location POS systems',
    'POS system customization',
    'POS software maintenance',
    'POS system support',
    'POS training services',
    'POS system migration',
    'POS security solutions',
    'POS analytics and reporting'
  ],
  openGraph: {
    title: 'POS System Development Company | Custom Point of Sale Software Solutions',
    description: 'Leading POS system development company offering custom point of sale software, retail POS systems, restaurant POS, and enterprise POS solutions for businesses worldwide.',
    url: 'https://www.elegantcodes.com/pos-system-development',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-pos-system-development.jpg',
        width: 1200,
        height: 630,
        alt: 'POS System Development Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'POS System Development Company | Custom Point of Sale Software Solutions',
    description: 'Leading POS system development company offering custom point of sale software, retail POS systems, restaurant POS, and enterprise POS solutions for businesses worldwide.',
    images: ['https://www.elegantcodes.com/og-image-pos-system-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/pos-system-development',
  },
}

const faqs = [
  {
    question: "What POS system development services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive POS system development including custom point of sale software, retail POS systems, restaurant POS, cloud-based POS, mobile POS, and enterprise POS solutions for all business types."
  },
  {
    question: "How long does POS system development take?",
    answer: "POS system development typically takes 8-16 weeks depending on complexity, features, and business requirements. We follow agile development to ensure timely delivery and quality."
  },
  {
    question: "What industries do you serve with POS systems?",
    answer: "We serve various industries including retail, restaurants, hospitality, healthcare, automotive, and service businesses with industry-specific POS solutions and features."
  },
  {
    question: "Do you provide POS hardware integration?",
    answer: "Yes, we provide comprehensive POS hardware integration including receipt printers, barcode scanners, cash drawers, card readers, and other POS peripherals."
  },
  {
    question: "Can you integrate POS systems with existing business software?",
    answer: "Absolutely! We specialize in integrating POS systems with existing ERP, accounting, inventory management, and other business applications to create seamless workflows."
  }
]

export default function POSSystemDevelopmentPage() {
  const seoConfig = {
    title: 'POS System Development Company | Custom Point of Sale Software Solutions',
    description: 'Leading POS system development company offering custom point of sale software, retail POS systems, restaurant POS, and enterprise POS solutions for businesses worldwide.',
    keywords: [
      'POS system development company',
      'custom point of sale software',
      'retail POS system development',
      'restaurant POS software',
      'enterprise POS solutions',
      'cloud-based POS systems'
    ],
    canonical: 'https://www.elegantcodes.com/pos-system-development',
    ogImage: 'https://www.elegantcodes.com/og-image-pos-system-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'POS System Development', url: 'https://www.elegantcodes.com/pos-system-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="POS System Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-orange-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                POS System Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading POS system development company offering custom point of sale software, 
                retail POS systems, restaurant POS, and enterprise POS solutions for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your POS Project
                </button>
                <button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View POS Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* POS Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive POS System Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏪 Retail POS Systems
                </h3>
                <p className="text-slate-600 mb-4">
                  Complete retail POS solutions with inventory management, 
                  customer management, and sales analytics for retail businesses.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Inventory Management</li>
                  <li>• Customer Management</li>
                  <li>• Sales Analytics</li>
                  <li>• Multi-location Support</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🍽️ Restaurant POS Systems
                </h3>
                <p className="text-slate-600 mb-4">
                  Specialized restaurant POS solutions with table management, 
                  order processing, and kitchen integration features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Table Management</li>
                  <li>• Order Processing</li>
                  <li>• Kitchen Integration</li>
                  <li>• Menu Management</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☁️ Cloud-Based POS Systems
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern cloud-based POS solutions with remote access, 
                  real-time synchronization, and automatic updates.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Remote Access</li>
                  <li>• Real-time Sync</li>
                  <li>• Automatic Updates</li>
                  <li>• Data Backup</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Mobile POS Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Mobile POS solutions for tablets and smartphones with 
                  responsive design and offline capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Mobile Optimization</li>
                  <li>• Offline Capabilities</li>
                  <li>• Touch Interface</li>
                  <li>• Cross-Platform</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 Enterprise POS Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Enterprise-grade POS systems with advanced features, 
                  multi-location support, and comprehensive reporting.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Advanced Features</li>
                  <li>• Multi-location Support</li>
                  <li>• Comprehensive Reporting</li>
                  <li>• Enterprise Integration</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔗 POS System Integration
                </h3>
                <p className="text-slate-600 mb-4">
                  Seamless integration with payment gateways, accounting systems, 
                  and other business applications for streamlined operations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Payment Gateway Integration</li>
                  <li>• Accounting System Integration</li>
                  <li>• Business App Integration</li>
                  <li>• API Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* POS Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced POS System Features
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💳 Payment Processing
                </h3>
                <p className="text-slate-600 mb-4">
                  Secure payment processing with multiple payment methods, 
                  including credit cards, mobile payments, and digital wallets.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Credit Card Processing</li>
                  <li>• Mobile Payments</li>
                  <li>• Digital Wallets</li>
                  <li>• Contactless Payments</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📊 Inventory Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive inventory management with real-time tracking, 
                  automated reordering, and stock level alerts.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Real-time Tracking</li>
                  <li>• Automated Reordering</li>
                  <li>• Stock Level Alerts</li>
                  <li>• Barcode Scanning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  👥 Customer Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced customer management with loyalty programs, 
                  customer profiles, and marketing automation features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Loyalty Programs</li>
                  <li>• Customer Profiles</li>
                  <li>• Marketing Automation</li>
                  <li>• Customer Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📈 Analytics & Reporting
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive analytics and reporting with real-time dashboards, 
                  sales insights, and business intelligence tools.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Real-time Dashboards</li>
                  <li>• Sales Insights</li>
                  <li>• Business Intelligence</li>
                  <li>• Performance Metrics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 Security & Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced security features with PCI compliance, 
                  data encryption, and user access control.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• PCI Compliance</li>
                  <li>• Data Encryption</li>
                  <li>• User Access Control</li>
                  <li>• Audit Trails</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌐 Multi-location Support
                </h3>
                <p className="text-slate-600 mb-4">
                  Multi-location POS systems with centralized management, 
                  real-time synchronization, and location-specific features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Centralized Management</li>
                  <li>• Real-time Sync</li>
                  <li>• Location-specific Features</li>
                  <li>• Cross-location Reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced POS Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Frontend</h3>
                <p className="text-slate-600 text-sm">
                  React, Angular, Vue.js, TypeScript, and modern UI frameworks
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Backend</h3>
                <p className="text-slate-600 text-sm">
                  Node.js, Python, Java, C#, .NET, and cloud-native architectures
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Databases</h3>
                <p className="text-slate-600 text-sm">
                  PostgreSQL, MySQL, MongoDB, Redis, and cloud databases
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cloud & Security</h3>
                <p className="text-slate-600 text-sm">
                  AWS, Azure, Google Cloud, PCI compliance, and advanced security
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our POS System Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Business Analysis
                </h3>
                <p className="text-slate-600">
                  Deep business analysis, requirements gathering, 
                  and POS system planning
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  System Design
                </h3>
                <p className="text-slate-600">
                  POS system architecture, user interface design, 
                  and feature specification
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Agile development, comprehensive testing, 
                  and quality assurance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Deployment & Training
                </h3>
                <p className="text-slate-600">
                  System deployment, user training, 
                  and ongoing support
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
                <div key={index} className="bg-orange-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your POS System?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              POS system development services can streamline your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your POS Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View POS Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 