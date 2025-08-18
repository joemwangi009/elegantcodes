import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Custom Software Development Company | Enterprise Software Solutions Provider',
  description: 'Leading custom software development company offering enterprise software solutions, offshore software development, and progressive web apps. Expert software development services across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
  keywords: [
    'custom software development',
    'offshore software development',
    'enterprise software company',
    'leading software development firm',
    'progressive web apps',
    'custom software development Europe',
    'custom software development Kenya',
    'custom software development USA',
    'custom software development Canada',
    'custom software development Australia',
    'custom software development UK',
    'custom software development Germany',
    'custom software development France',
    'offshore software development Africa',
    'offshore software development Europe',
    'offshore software development USA',
    'offshore software development Canada',
    'offshore software development Australia',
    'offshore software development UK',
    'offshore software development Germany',
    'offshore software development France'
  ],
  openGraph: {
    title: 'Custom Software Development Company | Enterprise Software Solutions Provider',
    description: 'Leading custom software development company offering enterprise software solutions, offshore software development, and progressive web apps.',
    url: 'https://www.elegantcodes.com/software-development',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-software-development.jpg',
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
    description: 'Leading custom software development company offering enterprise software solutions, offshore software development, and progressive web apps.',
    images: ['https://www.elegantcodes.com/og-image-software-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/software-development',
  },
}

const faqs = [
  {
    question: "What types of custom software development services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive custom software development services including web applications, mobile apps, enterprise software, business automation systems, CRM solutions, ERP systems, and industry-specific software tailored to your business needs."
  },
  {
    question: "How does ElegantCodes ensure quality in offshore software development?",
    answer: "Our offshore software development follows strict quality standards including code reviews, automated testing, continuous integration, regular client communication, and adherence to international development best practices and standards."
  },
  {
    question: "What makes ElegantCodes a leading software development firm?",
    answer: "We are recognized as a leading software development firm due to our technical expertise, proven track record, client satisfaction, innovative solutions, modern technology stack, and commitment to delivering high-quality software on time and within budget."
  },
  {
    question: "How does ElegantCodes approach enterprise software development?",
    answer: "Our enterprise software development approach includes thorough requirements analysis, scalable architecture design, security-first development, comprehensive testing, deployment automation, and ongoing maintenance and support."
  },
  {
    question: "What progressive web app development services does ElegantCodes provide?",
    answer: "We develop progressive web apps (PWAs) that offer native app-like experiences including offline functionality, push notifications, fast loading, responsive design, and cross-platform compatibility for modern web applications."
  }
]

export default function SoftwareDevelopmentPage() {
  const seoConfig = {
    title: 'Custom Software Development Company | Enterprise Software Solutions Provider',
    description: 'Leading custom software development company offering enterprise software solutions, offshore software development, and progressive web apps. Expert software development services across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.',
    keywords: KEYWORD_CLUSTERS.SOFTWARE_DEVELOPMENT,
    canonical: 'https://www.elegantcodes.com/software-development',
    ogImage: 'https://www.elegantcodes.com/og-image-software-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Software Development', url: 'https://www.elegantcodes.com/software-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Software Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Custom Software Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading custom software development company offering enterprise software solutions, 
                offshore software development, and progressive web apps. Expert software development 
                services across Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Project
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Software Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Custom Software Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Tailored software solutions designed specifically for your business needs, 
                  processes, and industry requirements.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Business Process Automation</li>
                  <li>• Industry-Specific Solutions</li>
                  <li>• Legacy System Modernization</li>
                  <li>• Custom Integrations</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Offshore Software Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Cost-effective software development services delivered from our global 
                  development centers with quality assurance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Global Development Teams</li>
                  <li>• Cost-Effective Solutions</li>
                  <li>• Quality Assurance</li>
                  <li>• 24/7 Development</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Enterprise Software Company
                </h3>
                <p className="text-slate-600 mb-4">
                  Enterprise-grade software solutions designed for large organizations 
                  with complex requirements and scalability needs.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Scalable Architecture</li>
                  <li>• Enterprise Security</li>
                  <li>• High Performance</li>
                  <li>• Compliance Ready</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Leading Software Development Firm
                </h3>
                <p className="text-slate-600 mb-4">
                  Recognized industry leader with proven track record, technical expertise, 
                  and commitment to delivering exceptional software solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Industry Recognition</li>
                  <li>• Technical Excellence</li>
                  <li>• Client Satisfaction</li>
                  <li>• Innovation Leadership</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Progressive Web Apps
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern progressive web applications that provide native app-like experiences 
                  with offline functionality and cross-platform compatibility.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Offline Functionality</li>
                  <li>• Push Notifications</li>
                  <li>• Fast Loading</li>
                  <li>• Cross-Platform</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  Regional Expertise
                </h3>
                <p className="text-slate-600 mb-4">
                  Software development services tailored for specific regions including 
                  Kenya, Europe, USA, Australia, Canada, Germany, France, and UK.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Local Market Knowledge</li>
                  <li>• Regional Compliance</li>
                  <li>• Cultural Understanding</li>
                  <li>• Local Support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Modern Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Frontend</h3>
                <p className="text-slate-600 text-sm">
                  React, Next.js, Angular, Vue.js, TypeScript, Tailwind CSS, and modern UI frameworks
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Backend</h3>
                <p className="text-slate-600 text-sm">
                  Node.js, Python, Java, C#, .NET, PHP, Ruby, and Go for robust server-side development
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Databases</h3>
                <p className="text-slate-600 text-sm">
                  PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and cloud-native database solutions
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cloud & DevOps</h3>
                <p className="text-slate-600 text-sm">
                  AWS, Azure, Google Cloud, Docker, Kubernetes, CI/CD pipelines, and infrastructure automation
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Software Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Discovery & Planning
                </h3>
                <p className="text-slate-600">
                  Comprehensive requirements analysis, technical planning, and project roadmap development
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Design & Architecture
                </h3>
                <p className="text-slate-600">
                  System architecture design, UI/UX design, and technical specification development
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Agile development with continuous testing, code reviews, and quality assurance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Deployment & Support
                </h3>
                <p className="text-slate-600">
                  Smooth deployment, ongoing maintenance, and continuous support and updates
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom Software Solution?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              custom software development services can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 