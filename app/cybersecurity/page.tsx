import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Cybersecurity Company | IT Security Services & Cyber Protection Solutions',
  description: 'Leading cybersecurity company offering IT security services, cyber protection solutions, network security, data protection, and comprehensive security consulting for businesses worldwide.',
  keywords: [
    'cybersecurity company',
    'IT security services',
    'cyber protection solutions',
    'network security services',
    'data protection services',
    'information security consulting',
    'cyber threat protection',
    'security audit services',
    'penetration testing',
    'vulnerability assessment',
    'incident response services',
    'security compliance solutions',
    'cloud security services',
    'endpoint security solutions',
    'identity and access management',
    'security monitoring services',
    'cyber risk assessment',
    'security training services',
    'GDPR compliance services',
    'SOC 2 compliance services'
  ],
  openGraph: {
    title: 'Cybersecurity Company | IT Security Services & Cyber Protection Solutions',
    description: 'Leading cybersecurity company offering IT security services, cyber protection solutions, network security, data protection, and comprehensive security consulting for businesses worldwide.',
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
    title: 'Cybersecurity Company | IT Security Services & Cyber Protection Solutions',
    description: 'Leading cybersecurity company offering IT security services, cyber protection solutions, network security, data protection, and comprehensive security consulting for businesses worldwide.',
    images: ['https://www.elegantcodes.com/og-image-cybersecurity.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/cybersecurity',
  },
}

const faqs = [
  {
    question: "What cybersecurity services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive cybersecurity services including IT security consulting, network security, data protection, penetration testing, security audits, incident response, and compliance solutions for all business types."
  },
  {
    question: "How do you protect against cyber threats?",
    answer: "We implement multi-layered security strategies including network security, endpoint protection, identity management, threat monitoring, and regular security assessments to protect against evolving cyber threats."
  },
  {
    question: "What industries do you serve with cybersecurity?",
    answer: "We serve various industries including finance, healthcare, manufacturing, retail, technology, and government with industry-specific cybersecurity solutions and compliance requirements."
  },
  {
    question: "Do you provide 24/7 security monitoring?",
    answer: "Yes, we provide 24/7 security monitoring services with real-time threat detection, incident response, and continuous security oversight to protect your business around the clock."
  },
  {
    question: "Can you help with compliance requirements?",
    answer: "Absolutely! We specialize in helping businesses meet various compliance requirements including GDPR, SOC 2, HIPAA, PCI DSS, and industry-specific security standards."
  }
]

export default function CybersecurityPage() {
  const seoConfig = {
    title: 'Cybersecurity Company | IT Security Services & Cyber Protection Solutions',
    description: 'Leading cybersecurity company offering IT security services, cyber protection solutions, network security, data protection, and comprehensive security consulting for businesses worldwide.',
    keywords: [
      'cybersecurity company',
      'IT security services',
      'cyber protection solutions',
      'network security services',
      'data protection services',
      'information security consulting'
    ],
    canonical: 'https://www.elegantcodes.com/cybersecurity',
    ogImage: 'https://www.elegantcodes.com/og-image-cybersecurity.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
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
                Leading cybersecurity company offering IT security services, 
                cyber protection solutions, network security, data protection, 
                and comprehensive security consulting for businesses worldwide.
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

        {/* Cybersecurity Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Cybersecurity Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛡️ IT Security Consulting
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic cybersecurity consulting with risk assessment, 
                  security strategy development, and compliance guidance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Risk Assessment</li>
                  <li>• Security Strategy</li>
                  <li>• Compliance Guidance</li>
                  <li>• Security Architecture</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌐 Network Security Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive network security solutions with firewall management, 
                  intrusion detection, and network monitoring.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Firewall Management</li>
                  <li>• Intrusion Detection</li>
                  <li>• Network Monitoring</li>
                  <li>• Traffic Analysis</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 Data Protection Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced data protection with encryption, access controls, 
                  and data loss prevention strategies.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Data Encryption</li>
                  <li>• Access Controls</li>
                  <li>• Data Loss Prevention</li>
                  <li>• Backup Security</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🧪 Penetration Testing
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive penetration testing with vulnerability assessment, 
                  security testing, and remediation recommendations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Vulnerability Assessment</li>
                  <li>• Security Testing</li>
                  <li>• Remediation Guidance</li>
                  <li>• Security Reports</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📊 Security Audit Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive security audits with compliance assessment, 
                  policy review, and security gap analysis.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Compliance Assessment</li>
                  <li>• Policy Review</li>
                  <li>• Gap Analysis</li>
                  <li>• Security Recommendations</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚨 Incident Response Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Rapid incident response with threat containment, 
                  investigation, and recovery services.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Threat Containment</li>
                  <li>• Incident Investigation</li>
                  <li>• Recovery Services</li>
                  <li>• Post-Incident Analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Security Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Security Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☁️ Cloud Security Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cloud security with identity management, 
                  data protection, and compliance monitoring.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Identity Management</li>
                  <li>• Data Protection</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Cloud Access Security</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💻 Endpoint Security Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced endpoint protection with antivirus, 
                  device control, and threat prevention.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Antivirus Protection</li>
                  <li>• Device Control</li>
                  <li>• Threat Prevention</li>
                  <li>• Endpoint Monitoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔐 Identity & Access Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive IAM solutions with single sign-on, 
                  multi-factor authentication, and access controls.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Single Sign-On</li>
                  <li>• Multi-Factor Authentication</li>
                  <li>• Access Controls</li>
                  <li>• User Provisioning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📡 Security Monitoring Services
                </h3>
                <p className="text-slate-600 mb-4">
                  24/7 security monitoring with threat detection, 
                  alert management, and incident response.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Threat Detection</li>
                  <li>• Alert Management</li>
                  <li>• Incident Response</li>
                  <li>• Security Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📋 Compliance Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive compliance services with GDPR, SOC 2, 
                  HIPAA, and industry-specific standards.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• GDPR Compliance</li>
                  <li>• SOC 2 Compliance</li>
                  <li>• HIPAA Compliance</li>
                  <li>• Industry Standards</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Security Training Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Employee security training with awareness programs, 
                  phishing simulations, and best practices education.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Awareness Programs</li>
                  <li>• Phishing Simulations</li>
                  <li>• Best Practices</li>
                  <li>• Compliance Training</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Cybersecurity Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Security Tools</h3>
                <p className="text-slate-600 text-sm">
                  SIEM, IDS/IPS, Firewalls, and security platforms
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Monitoring</h3>
                <p className="text-slate-600 text-sm">
                  Real-time monitoring, threat intelligence, and analytics
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Compliance</h3>
                <p className="text-slate-600 text-sm">
                  GDPR, SOC 2, HIPAA, PCI DSS, and industry standards
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Response</h3>
                <p className="text-slate-600 text-sm">
                  Incident response, forensics, and recovery tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Security Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
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
                  Security Assessment
                </h3>
                <p className="text-slate-600">
                  Comprehensive security assessment, risk analysis, 
                  and vulnerability identification
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Strategy Development
                </h3>
                <p className="text-slate-600">
                  Security strategy planning, architecture design, 
                  and implementation roadmap
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
                  Security solution deployment, configuration, 
                  and testing
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Monitoring & Support
                </h3>
                <p className="text-slate-600">
                  Continuous monitoring, incident response, 
                  and ongoing security support
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
              Contact ElegantCodes today for a free security consultation and discover how our 
              cybersecurity services can protect your business from evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-red-600 hover:bg-red-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Secure Your Business
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Security Assessment
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 