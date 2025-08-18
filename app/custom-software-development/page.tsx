import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Custom Software Development Company | Enterprise Software Solutions Provider',
  description: 'Leading custom software development company offering enterprise software solutions, business process automation, custom applications, and tailored software development for businesses worldwide.',
  keywords: [
    'custom software development company',
    'enterprise software solutions',
    'business process automation',
    'custom application development',
    'tailored software solutions',
    'enterprise software development',
    'custom business software',
    'software consulting services',
    'custom software consulting',
    'enterprise application development',
    'business software solutions',
    'custom software solutions',
    'software development consulting',
    'enterprise software consulting',
    'custom software design',
    'software architecture design',
    'custom software integration',
    'legacy system modernization',
    'software maintenance services',
    'custom software support'
  ],
  openGraph: {
    title: 'Custom Software Development Company | Enterprise Software Solutions Provider',
    description: 'Leading custom software development company offering enterprise software solutions, business process automation, custom applications, and tailored software development for businesses worldwide.',
    url: 'https://www.elegantcodes.com/custom-software-development',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-custom-software-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Custom Software Development Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Company | Enterprise Software Solutions Provider',
    description: 'Leading custom software development company offering enterprise software solutions, business process automation, custom applications, and tailored software development for businesses worldwide.',
    images: ['https://www.elegantcodes.com/og-image-custom-software-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/custom-software-development',
  },
}

const faqs = [
  {
    question: "What custom software development services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive custom software development services including enterprise software solutions, business process automation, custom applications, legacy system modernization, and tailored software solutions for all business types."
  },
  {
    question: "How long does custom software development take?",
    answer: "Custom software development typically takes 12-24 weeks depending on complexity, features, and business requirements. We follow agile development to ensure timely delivery and quality."
  },
  {
    question: "What industries do you serve with custom software?",
    answer: "We serve various industries including finance, healthcare, manufacturing, retail, logistics, education, government, and technology with industry-specific custom software solutions."
  },
  {
    question: "Do you provide ongoing software maintenance?",
    answer: "Yes, we provide comprehensive ongoing software maintenance including updates, security patches, performance optimization, feature enhancements, and technical support for your custom software."
  },
  {
    question: "Can you integrate custom software with existing systems?",
    answer: "Absolutely! We specialize in integrating custom software with existing ERP, CRM, databases, and other business systems to create seamless workflows and data synchronization."
  }
]

export default function CustomSoftwareDevelopmentPage() {
  const seoConfig = {
    title: 'Custom Software Development Company | Enterprise Software Solutions Provider',
    description: 'Leading custom software development company offering enterprise software solutions, business process automation, custom applications, and tailored software development for businesses worldwide.',
    keywords: [
      'custom software development company',
      'enterprise software solutions',
      'business process automation',
      'custom application development',
      'tailored software solutions',
      'enterprise software development'
    ],
    canonical: 'https://www.elegantcodes.com/custom-software-development',
    ogImage: 'https://www.elegantcodes.com/og-image-custom-software-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Custom Software Development', url: 'https://www.elegantcodes.com/custom-software-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Custom Software Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Custom Software Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading custom software development company offering enterprise software solutions, 
                business process automation, custom applications, and tailored software development 
                for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Software Project
                </button>
                <button className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Software Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Software Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Custom Software Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 Enterprise Software Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Large-scale enterprise software solutions with advanced features, 
                  scalability, and integration capabilities for complex business operations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Scalable Architecture</li>
                  <li>• Advanced Features</li>
                  <li>• System Integration</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ⚙️ Business Process Automation
                </h3>
                <p className="text-slate-600 mb-4">
                  Automated business processes and workflows to increase efficiency, 
                  reduce errors, and streamline operations across your organization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Workflow Automation</li>
                  <li>• Process Optimization</li>
                  <li>• Efficiency Improvement</li>
                  <li>• Error Reduction</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎯 Custom Application Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Tailored applications designed specifically for your business needs, 
                  industry requirements, and unique operational challenges.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Tailored Solutions</li>
                  <li>• Industry-Specific Features</li>
                  <li>• Custom Functionality</li>
                  <li>• Business Alignment</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 Legacy System Modernization
                </h3>
                <p className="text-slate-600 mb-4">
                  Modernization of outdated systems with new technologies, 
                  improved performance, and enhanced user experience.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• System Upgrades</li>
                  <li>• Technology Migration</li>
                  <li>• Performance Improvement</li>
                  <li>• User Experience Enhancement</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔗 Software Integration Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Seamless integration of custom software with existing systems, 
                  third-party applications, and business processes.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• System Integration</li>
                  <li>• API Development</li>
                  <li>• Data Synchronization</li>
                  <li>• Workflow Integration</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛡️ Custom Software Security
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced security features and compliance measures to protect 
                  your business data and ensure regulatory compliance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Advanced Security</li>
                  <li>• Compliance Measures</li>
                  <li>• Data Protection</li>
                  <li>• Access Control</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Software Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Custom Software Solutions for Every Business Need
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Software
                </h3>
                <p className="text-slate-600 mb-4">
                  Custom financial software including accounting systems, 
                  payment processing, and financial analytics platforms.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Accounting Systems</li>
                  <li>• Payment Processing</li>
                  <li>• Financial Analytics</li>
                  <li>• Compliance Features</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare Software
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare management systems with patient records, 
                  appointment scheduling, and medical practice management.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Patient Records</li>
                  <li>• Appointment Scheduling</li>
                  <li>• Practice Management</li>
                  <li>• HIPAA Compliance</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing Software
                </h3>
                <p className="text-slate-600 mb-4">
                  Manufacturing management systems with production planning, 
                  inventory control, and quality management features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Production Planning</li>
                  <li>• Inventory Control</li>
                  <li>• Quality Management</li>
                  <li>• Supply Chain Integration</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail Software
                </h3>
                <p className="text-slate-600 mb-4">
                  Retail management systems with point of sale, 
                  inventory management, and customer relationship features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Point of Sale</li>
                  <li>• Inventory Management</li>
                  <li>• Customer Relationships</li>
                  <li>• Sales Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📦 Logistics Software
                </h3>
                <p className="text-slate-600 mb-4">
                  Logistics management systems with route optimization, 
                  fleet management, and delivery tracking capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Route Optimization</li>
                  <li>• Fleet Management</li>
                  <li>• Delivery Tracking</li>
                  <li>• Supply Chain Management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education Software
                </h3>
                <p className="text-slate-600 mb-4">
                  Educational management systems with student records, 
                  course management, and learning analytics platforms.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Student Records</li>
                  <li>• Course Management</li>
                  <li>• Learning Analytics</li>
                  <li>• Assessment Tools</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Custom Software Technology Stack
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
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cloud & DevOps</h3>
                <p className="text-slate-600 text-sm">
                  AWS, Azure, Google Cloud, Docker, Kubernetes, and CI/CD
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Custom Software Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Requirements Analysis
                </h3>
                <p className="text-slate-600">
                  Deep business analysis, requirements gathering, 
                  and technical feasibility assessment
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Architecture Design
                </h3>
                <p className="text-slate-600">
                  System architecture design, technology selection, 
                  and scalability planning
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Agile development, continuous testing, quality assurance, 
                  and performance optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-purple-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Deployment & Support
                </h3>
                <p className="text-slate-600">
                  Production deployment, user training, ongoing support, 
                  and continuous improvement
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
              Ready to Build Your Custom Software Solution?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              custom software development services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Software Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Software Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 