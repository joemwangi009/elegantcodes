import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
  description: 'Leading cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services globally.',
  keywords: [
    'cybersecurity company',
    'IT security solutions',
    'penetration testing services',
    'ethical hacking company',
    'data protection solutions',
    'managed security services',
    'SOC as a service',
    'cyber threat management',
    'network security services',
    'cybersecurity company Kenya',
    'cybersecurity company Europe',
    'cybersecurity company USA',
    'cybersecurity company Canada',
    'cybersecurity company Australia',
    'cybersecurity company UK',
    'cybersecurity company Germany',
    'cybersecurity company France',
    'IT security solutions Kenya',
    'penetration testing services Europe',
    'ethical hacking company USA'
  ],
  openGraph: {
    title: 'Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services globally.',
    url: 'https://www.elegantcodes.com/cybersecurity',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-cybersecurity.jpg',
        width: 1200,
        height: 630,
        alt: 'Cybersecurity Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services globally.',
    images: ['https://www.elegantcodes.com/og-image-cybersecurity.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/cybersecurity',
  },
}

const faqs = [
  {
    question: "What cybersecurity services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive cybersecurity services including penetration testing, ethical hacking, data protection, managed security services, SOC as a service, cyber threat management, and network security solutions for businesses worldwide."
  },
  {
    question: "How does ElegantCodes ensure quality in penetration testing services?",
    answer: "Our penetration testing services follow industry best practices including thorough vulnerability assessment, ethical hacking methodologies, comprehensive reporting, and ongoing security recommendations to protect your business from cyber threats."
  },
  {
    question: "What makes ElegantCodes a leading cybersecurity company?",
    answer: "We are recognized as a leading cybersecurity company due to our technical expertise, certified security professionals, proven track record, innovative security solutions, and commitment to protecting businesses from evolving cyber threats."
  },
  {
    question: "How does ElegantCodes approach data protection solutions?",
    answer: "Our data protection approach includes comprehensive security assessments, encryption implementation, access control, compliance management, and ongoing monitoring to ensure your sensitive data remains secure and compliant."
  },
  {
    question: "What managed security services does ElegantCodes provide?",
    answer: "We provide comprehensive managed security services including 24/7 monitoring, threat detection and response, security incident management, compliance reporting, and ongoing security optimization for your business."
  }
]

export default function CybersecurityPage() {
  const seoConfig = {
    title: 'Cybersecurity Company | IT Security Solutions & Penetration Testing Services',
    description: 'Leading cybersecurity company offering IT security solutions, penetration testing services, ethical hacking company services, data protection solutions, and managed security services globally.',
    keywords: KEYWORD_CLUSTERS.CYBERSECURITY,
    canonical: 'https://www.elegantcodes.com/cybersecurity',
    ogImage: 'https://www.elegantcodes.com/og-image-cybersecurity.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Cybersecurity', url: 'https://www.elegantcodes.com/cybersecurity' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Cybersecurity"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-red-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Cybersecurity Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading cybersecurity company offering IT security solutions, penetration testing services, 
                ethical hacking company services, data protection solutions, and managed security services globally.
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

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Cybersecurity Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛡️ Cybersecurity Company
                </h3>
                <p className="text-slate-600 mb-4">
                  Full-service cybersecurity company specializing in protecting businesses 
                  from evolving cyber threats with comprehensive security solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Security Strategy</li>
                  <li>• Risk Assessment</li>
                  <li>• Compliance Management</li>
                  <li>• Security Training</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 IT Security Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive IT security solutions designed to protect your business 
                  infrastructure, data, and systems from cyber threats.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Infrastructure Security</li>
                  <li>• Endpoint Protection</li>
                  <li>• Network Security</li>
                  <li>• Cloud Security</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔍 Penetration Testing Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional penetration testing services to identify vulnerabilities 
                  in your systems and provide actionable security recommendations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Web Application Testing</li>
                  <li>• Network Penetration Testing</li>
                  <li>• Social Engineering</li>
                  <li>• Physical Security Testing</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ⚔️ Ethical Hacking Company
                </h3>
                <p className="text-slate-600 mb-4">
                  Certified ethical hackers using advanced techniques to identify 
                  security weaknesses and help strengthen your security posture.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Certified Ethical Hackers</li>
                  <li>• Advanced Testing Methods</li>
                  <li>• Red Team Operations</li>
                  <li>• Security Research</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🗄️ Data Protection Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive data protection solutions including encryption, access control, 
                  backup strategies, and compliance management.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Data Encryption</li>
                  <li>• Access Control</li>
                  <li>• Backup & Recovery</li>
                  <li>• Compliance Management</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚨 Managed Security Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Proactive managed security services including monitoring, threat detection, 
                  incident response, and ongoing security optimization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• 24/7 Monitoring</li>
                  <li>• Threat Detection</li>
                  <li>• Incident Response</li>
                  <li>• Security Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Security Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Security Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 SOC as a Service
                </h3>
                <p className="text-slate-600 mb-4">
                  Security Operations Center as a service providing continuous monitoring, 
                  threat detection, and incident response capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• 24/7 Security Monitoring</li>
                  <li>• Real-time Threat Detection</li>
                  <li>• Incident Response</li>
                  <li>• Security Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎯 Cyber Threat Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cyber threat management including threat intelligence, 
                  risk assessment, and proactive threat mitigation strategies.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Threat Intelligence</li>
                  <li>• Risk Assessment</li>
                  <li>• Threat Mitigation</li>
                  <li>• Security Strategy</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌐 Network Security Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced network security services including firewall management, 
                  intrusion detection, and network segmentation strategies.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Firewall Management</li>
                  <li>• Intrusion Detection</li>
                  <li>• Network Segmentation</li>
                  <li>• VPN Solutions</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☁️ Cloud Security
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cloud security solutions for AWS, Azure, and Google Cloud 
                  platforms with compliance and monitoring capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cloud Compliance</li>
                  <li>• Identity Management</li>
                  <li>• Data Protection</li>
                  <li>• Security Monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Mobile Security
                </h3>
                <p className="text-slate-600 mb-4">
                  Mobile security solutions including app security testing, device management, 
                  and mobile threat defense for enterprise mobility.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• App Security Testing</li>
                  <li>• Device Management</li>
                  <li>• Mobile Threat Defense</li>
                  <li>• BYOD Security</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔐 Identity & Access Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive identity and access management solutions including 
                  single sign-on, multi-factor authentication, and privileged access management.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Single Sign-On (SSO)</li>
                  <li>• Multi-Factor Authentication</li>
                  <li>• Privileged Access Management</li>
                  <li>• Identity Governance</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Cybersecurity Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Assessment
                </h3>
                <p className="text-slate-600">
                  Comprehensive security assessment including vulnerability scanning, 
                  risk analysis, and compliance review
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Testing
                </h3>
                <p className="text-slate-600">
                  Penetration testing, ethical hacking, and security testing to 
                  identify vulnerabilities and security weaknesses
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Implementation
                </h3>
                <p className="text-slate-600">
                  Security solution implementation, configuration, and integration 
                  with your existing infrastructure
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Monitoring
                </h3>
                <p className="text-slate-600">
                  Continuous security monitoring, threat detection, incident response, 
                  and ongoing security optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance & Standards */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Security Compliance & Standards
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">ISO 27001</h3>
                <p className="text-slate-600 text-sm">
                  Information Security Management System certification for comprehensive security framework
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">SOC 2 Type II</h3>
                <p className="text-slate-600 text-sm">
                  Service Organization Control certification for security, availability, and confidentiality
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">GDPR</h3>
                <p className="text-slate-600 text-sm">
                  General Data Protection Regulation compliance for EU data protection requirements
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">PCI DSS</h3>
                <p className="text-slate-600 text-sm">
                  Payment Card Industry Data Security Standard for payment security compliance
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">HIPAA</h3>
                <p className="text-slate-600 text-sm">
                  Health Insurance Portability and Accountability Act for healthcare data security
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">NIST</h3>
                <p className="text-slate-600 text-sm">
                  National Institute of Standards and Technology cybersecurity framework
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
                <div key={index} className="bg-red-50 p-6 rounded-lg">
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
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Contact ElegantCodes today for a comprehensive security assessment and discover how our 
              cybersecurity services can protect your business from evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Security Assessment
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Security Solutions
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 