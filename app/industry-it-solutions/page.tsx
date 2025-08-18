import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Industry IT Solutions Company | Healthcare Finance Manufacturing Retail Technology',
  description: 'Leading industry IT solutions company offering healthcare IT solutions, financial technology, manufacturing IT, retail technology, and industry-specific software solutions worldwide.',
  keywords: [
    'industry IT solutions company',
    'healthcare IT solutions',
    'financial technology solutions',
    'manufacturing IT solutions',
    'retail technology solutions',
    'logistics IT solutions',
    'education technology solutions',
    'government IT solutions',
    'energy IT solutions',
    'telecommunications IT',
    'real estate technology',
    'hospitality IT solutions',
    'automotive IT solutions',
    'pharmaceutical IT',
    'insurance technology',
    'legal technology solutions',
    'media technology solutions',
    'nonprofit IT solutions',
    'startup technology solutions',
    'enterprise IT solutions'
  ],
  openGraph: {
    title: 'Industry IT Solutions Company | Healthcare Finance Manufacturing Retail Technology',
    description: 'Leading industry IT solutions company offering healthcare IT solutions, financial technology, manufacturing IT, retail technology, and industry-specific software solutions worldwide.',
    url: 'https://www.elegantcodes.com/industry-it-solutions',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-industry-it-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Industry IT Solutions Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industry IT Solutions Company | Healthcare Finance Manufacturing Retail Technology',
    description: 'Leading industry IT solutions company offering healthcare IT solutions, financial technology, manufacturing IT, retail technology, and industry-specific software solutions worldwide.',
    images: ['https://www.elegantcodes.com/og-image-industry-it-solutions.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/industry-it-solutions',
  },
}

const faqs = [
  {
    question: "What industry IT solutions does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive industry IT solutions including healthcare IT, financial technology, manufacturing IT, retail technology, logistics IT, education technology, and government IT solutions for all business types."
  },
  {
    question: "How do you customize solutions for different industries?",
    answer: "We conduct deep industry research, understand specific compliance requirements, analyze industry workflows, and develop tailored solutions that address unique industry challenges and opportunities."
  },
  {
    question: "What industries do you specialize in?",
    answer: "We specialize in healthcare, finance, manufacturing, retail, logistics, education, government, energy, telecommunications, and many other industries with proven expertise and success stories."
  },
  {
    question: "Do you provide industry compliance solutions?",
    answer: "Yes, we provide comprehensive industry compliance solutions including HIPAA for healthcare, PCI DSS for finance, ISO standards for manufacturing, and other industry-specific regulatory requirements."
  },
  {
    question: "Can you integrate with industry-specific systems?",
    answer: "Absolutely! We specialize in integrating our solutions with industry-specific systems, legacy platforms, and specialized software to create seamless workflows and data synchronization."
  }
]

export default function IndustryITSolutionsPage() {
  const seoConfig = {
    title: 'Industry IT Solutions Company | Healthcare Finance Manufacturing Retail Technology',
    description: 'Leading industry IT solutions company offering healthcare IT solutions, financial technology, manufacturing IT, retail technology, and industry-specific software solutions worldwide.',
    keywords: [
      'industry IT solutions company',
      'healthcare IT solutions',
      'financial technology solutions',
      'manufacturing IT solutions',
      'retail technology solutions',
      'logistics IT solutions'
    ],
    canonical: 'https://www.elegantcodes.com/industry-it-solutions',
    ogImage: 'https://www.elegantcodes.com/og-image-industry-it-solutions.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Industry IT Solutions', url: 'https://www.elegantcodes.com/industry-it-solutions' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Industry IT Solutions"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Industry IT Solutions Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading industry IT solutions company offering healthcare IT solutions, 
                financial technology, manufacturing IT, retail technology, and industry-specific 
                software solutions worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Industry Consultation
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Industry Solutions
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Solutions Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Industry IT Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive healthcare technology with EHR systems, 
                  telemedicine platforms, and patient management solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Electronic Health Records</li>
                  <li>• Telemedicine Platforms</li>
                  <li>• Patient Management</li>
                  <li>• HIPAA Compliance</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Technology Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced fintech solutions with banking systems, 
                  payment processing, and financial analytics platforms.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Banking Systems</li>
                  <li>• Payment Processing</li>
                  <li>• Financial Analytics</li>
                  <li>• Regulatory Compliance</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Smart manufacturing with Industry 4.0, 
                  production planning, and quality management systems.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Industry 4.0 Solutions</li>
                  <li>• Production Planning</li>
                  <li>• Quality Management</li>
                  <li>• Supply Chain Integration</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail Technology Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern retail technology with POS systems, 
                  inventory management, and customer analytics platforms.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• POS Systems</li>
                  <li>• Inventory Management</li>
                  <li>• Customer Analytics</li>
                  <li>• E-commerce Integration</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📦 Logistics IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Intelligent logistics with route optimization, 
                  fleet management, and supply chain visibility.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Route Optimization</li>
                  <li>• Fleet Management</li>
                  <li>• Supply Chain Visibility</li>
                  <li>• Warehouse Management</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education Technology Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern education technology with LMS platforms, 
                  student management, and learning analytics systems.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Learning Management Systems</li>
                  <li>• Student Management</li>
                  <li>• Learning Analytics</li>
                  <li>• Virtual Classrooms</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Specializations */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Industry-Specific Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏛️ Government IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Government technology with citizen services, 
                  regulatory compliance, and public sector solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Citizen Services</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Public Sector Solutions</li>
                  <li>• Government Portals</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ⚡ Energy IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Energy technology with smart grid solutions, 
                  renewable energy management, and energy analytics.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Smart Grid Solutions</li>
                  <li>• Renewable Energy Management</li>
                  <li>• Energy Analytics</li>
                  <li>• Grid Optimization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📡 Telecommunications IT
                </h3>
                <p className="text-slate-600 mb-4">
                  Telecom technology with network management, 
                  customer service platforms, and billing systems.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Network Management</li>
                  <li>• Customer Service Platforms</li>
                  <li>• Billing Systems</li>
                  <li>• Service Provisioning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏠 Real Estate Technology
                </h3>
                <p className="text-slate-600 mb-4">
                  Real estate technology with property management, 
                  CRM systems, and market analytics platforms.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Property Management</li>
                  <li>• CRM Systems</li>
                  <li>• Market Analytics</li>
                  <li>• Virtual Tours</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏨 Hospitality IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Hospitality technology with booking systems, 
                  guest management, and operational efficiency solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Booking Systems</li>
                  <li>• Guest Management</li>
                  <li>• Operational Efficiency</li>
                  <li>• Revenue Management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚗 Automotive IT Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Automotive technology with connected vehicles, 
                  dealership management, and service optimization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Connected Vehicles</li>
                  <li>• Dealership Management</li>
                  <li>• Service Optimization</li>
                  <li>• Fleet Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Industry Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Healthcare</h3>
                <p className="text-slate-600 text-sm">
                  HL7, FHIR, DICOM, and healthcare standards
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Finance</h3>
                <p className="text-slate-600 text-sm">
                  PCI DSS, SWIFT, blockchain, and fintech platforms
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Manufacturing</h3>
                <p className="text-slate-600 text-sm">
                  OPC UA, MES, SCADA, and Industry 4.0 protocols
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Retail</h3>
                <p className="text-slate-600 text-sm">
                  POS systems, inventory APIs, and retail platforms
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Industry Solution Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Industry Analysis
                </h3>
                <p className="text-slate-600">
                  Deep industry research, compliance requirements, 
                  and workflow analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Solution Design
                </h3>
                <p className="text-slate-600">
                  Industry-specific architecture, compliance planning, 
                  and solution design
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Industry solution development, compliance testing, 
                  and quality assurance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Deployment & Support
                </h3>
                <p className="text-slate-600">
                  Industry solution deployment, training, 
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
                <div key={index} className="bg-emerald-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready for Industry-Specific Solutions?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Contact ElegantCodes today for a free industry consultation and discover how our 
              industry IT solutions can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Industry Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Industry Solutions
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 