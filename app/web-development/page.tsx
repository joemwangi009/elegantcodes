import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Web Development Company | Custom Website Development & Web3 Solutions',
  description: 'Leading web development company offering custom website development, e-commerce websites, web3 development, progressive web apps, and modern web solutions for businesses worldwide.',
  keywords: [
    'web development company',
    'custom website development',
    'e-commerce website development',
    'web3 development services',
    'progressive web app development',
    'responsive web design',
    'modern web development',
    'full-stack web development',
    'frontend development services',
    'backend development services',
    'web application development',
    'website redesign services',
    'web maintenance services',
    'web hosting solutions',
    'web security services',
    'web performance optimization',
    'SEO-friendly web development',
    'mobile-first web design',
    'web accessibility services',
    'web analytics integration'
  ],
  openGraph: {
    title: 'Web Development Company | Custom Website Development & Web3 Solutions',
    description: 'Leading web development company offering custom website development, e-commerce websites, web3 development, progressive web apps, and modern web solutions for businesses worldwide.',
    url: 'https://www.elegantcodes.com/web-development',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-web-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Web Development Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development Company | Custom Website Development & Web3 Solutions',
    description: 'Leading web development company offering custom website development, e-commerce websites, web3 development, progressive web apps, and modern web solutions for businesses worldwide.',
    images: ['https://www.elegantcodes.com/og-image-web-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/web-development',
  },
}

const faqs = [
  {
    question: "What web development services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive web development services including custom website development, e-commerce websites, web3 development, progressive web apps, responsive design, and full-stack web solutions for all business types."
  },
  {
    question: "How long does web development take?",
    answer: "Web development typically takes 4-12 weeks depending on complexity, features, and business requirements. We follow agile development to ensure timely delivery and quality."
  },
  {
    question: "What technologies do you use for web development?",
    answer: "We use modern web technologies including React, Next.js, Vue.js, Node.js, Python, PHP, and cloud platforms to create fast, secure, and scalable web solutions."
  },
  {
    question: "Do you provide web maintenance services?",
    answer: "Yes, we provide comprehensive web maintenance including updates, security patches, performance optimization, content updates, and technical support for your websites."
  },
  {
    question: "Can you integrate websites with existing business systems?",
    answer: "Absolutely! We specialize in integrating websites with existing ERP, CRM, payment systems, and other business applications to create seamless workflows and data synchronization."
  }
]

export default function WebDevelopmentPage() {
  const seoConfig = {
    title: 'Web Development Company | Custom Website Development & Web3 Solutions',
    description: 'Leading web development company offering custom website development, e-commerce websites, web3 development, progressive web apps, and modern web solutions for businesses worldwide.',
    keywords: [
      'web development company',
      'custom website development',
      'e-commerce website development',
      'web3 development services',
      'progressive web app development',
      'responsive web design'
    ],
    canonical: 'https://www.elegantcodes.com/web-development',
    ogImage: 'https://www.elegantcodes.com/og-image-web-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Web Development', url: 'https://www.elegantcodes.com/web-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Web Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Web Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading web development company offering custom website development, 
                e-commerce websites, web3 development, progressive web apps, and modern 
                web solutions for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Web Project
                </button>
                <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Web Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Web Development Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Web Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌐 Custom Website Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Tailored website solutions designed specifically for your business, 
                  industry requirements, and unique brand identity.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Business Websites</li>
                  <li>• Corporate Websites</li>
                  <li>• Portfolio Websites</li>
                  <li>• Landing Pages</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 E-commerce Website Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Complete e-commerce solutions with secure payment processing, 
                  inventory management, and customer management features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Online Stores</li>
                  <li>• Payment Integration</li>
                  <li>• Inventory Management</li>
                  <li>• Customer Management</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔗 Web3 Development Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Next-generation web3 solutions with blockchain integration, 
                  decentralized applications, and modern web technologies.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Blockchain Integration</li>
                  <li>• DApps Development</li>
                  <li>• Smart Contracts</li>
                  <li>• Web3 Technologies</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Progressive Web App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern progressive web apps with offline capabilities, 
                  mobile-first design, and app-like user experience.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Offline Capabilities</li>
                  <li>• Mobile-First Design</li>
                  <li>• App-Like Experience</li>
                  <li>• Push Notifications</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎨 Responsive Web Design
                </h3>
                <p className="text-slate-600 mb-4">
                  Mobile-first responsive design that works perfectly across 
                  all devices, screen sizes, and browsers.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Mobile-First Design</li>
                  <li>• Cross-Device Compatibility</li>
                  <li>• Modern UI/UX</li>
                  <li>• Accessibility Features</li>
                </ul>
              </div>
              
              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Full-Stack Web Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Complete full-stack web solutions with frontend, backend, 
                  database, and infrastructure development.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Frontend Development</li>
                  <li>• Backend Development</li>
                  <li>• Database Design</li>
                  <li>• Infrastructure Setup</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Web Development Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Web Development Solutions for Every Business Need
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 Business Websites
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional business websites with modern design, 
                  SEO optimization, and lead generation features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Professional Design</li>
                  <li>• SEO Optimization</li>
                  <li>• Lead Generation</li>
                  <li>• Contact Forms</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎨 Creative Agency Websites
                </h3>
                <p className="text-slate-600 mb-4">
                  Creative and innovative websites for agencies with 
                  stunning visuals, animations, and interactive elements.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Creative Design</li>
                  <li>• Interactive Elements</li>
                  <li>• Animations</li>
                  <li>• Portfolio Showcase</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare Websites
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare websites with patient portals, appointment booking, 
                  and HIPAA compliance features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Patient Portals</li>
                  <li>• Appointment Booking</li>
                  <li>• HIPAA Compliance</li>
                  <li>• Health Information</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial Services Websites
                </h3>
                <p className="text-slate-600 mb-4">
                  Financial services websites with secure client portals, 
                  online banking features, and regulatory compliance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Client Portals</li>
                  <li>• Online Banking</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Financial Tools</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Educational Websites
                </h3>
                <p className="text-slate-600 mb-4">
                  Educational websites with learning management systems, 
                  student portals, and course management features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Learning Management</li>
                  <li>• Student Portals</li>
                  <li>• Course Management</li>
                  <li>• Educational Tools</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing Websites
                </h3>
                <p className="text-slate-600 mb-4">
                  Manufacturing websites with product catalogs, 
                  technical specifications, and industry-specific features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Product Catalogs</li>
                  <li>• Technical Specs</li>
                  <li>• Industry Features</li>
                  <li>• B2B Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Web Development Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Frontend</h3>
                <p className="text-slate-600 text-sm">
                  React, Next.js, Vue.js, Angular, TypeScript, and modern frameworks
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Backend</h3>
                <p className="text-slate-600 text-sm">
                  Node.js, Python, PHP, Java, .NET, and cloud-native architectures
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
              Our Web Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Discovery & Planning
                </h3>
                <p className="text-slate-600">
                  Business analysis, requirements gathering, 
                  and web development strategy planning
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Design & Prototyping
                </h3>
                <p className="text-slate-600">
                  UI/UX design, wireframing, prototyping, 
                  and responsive design implementation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">3</span>
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
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-teal-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Launch & Support
                </h3>
                <p className="text-slate-600">
                  Website deployment, SEO optimization, 
                  and ongoing maintenance support
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
                <div key={index} className="bg-teal-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Website?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              web development services can create a powerful online presence for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Web Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Web Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 