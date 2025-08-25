import { Metadata } from 'next'
import { 
  KEYWORD_CLUSTERS, 
  generateTitle, 
  generateDescription,
  getKeywordsByRegion 
} from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Elegant Codes | Europe IT Solutions & Software Development Company',
  description: 'Elegant Codes provides comprehensive IT solutions and software development services across Europe. Expert IT consulting, custom software, and technology solutions for European businesses.',
  keywords: [
    'Elegant Codes Europe',
    'Elegant Codes IT solutions Europe',
    'Elegant Codes software development Europe',
    'IT solutions company Europe',
    'software development company Europe',
    'IT consulting services Europe',
    'custom software development Europe',
    'mobile app development Europe',
    'web development company Europe',
    'cloud services Europe',
    'cybersecurity company Europe',
    'AI development company Europe',
    'DevOps consulting Europe',
    'enterprise software solutions Europe',
    'digital transformation Europe',
    'technology consulting Europe',
    'IT outsourcing Europe',
    'software development firm Europe',
    'IT solutions provider Europe',
    'technology solutions Europe',
    'business automation Europe'
  ],
  openGraph: {
    title: 'Elegant Codes | Europe IT Solutions & Software Development Company',
    description: 'Elegant Codes provides comprehensive IT solutions and software development services across Europe. Expert IT consulting, custom software, and technology solutions for European businesses.',
    url: 'https://www.elegantcodes.com/europe',
    siteName: 'Elegant Codes - Europe IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-europe-it-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'Elegant Codes - Europe IT Solutions & Software Development',
      }
    ],
    locale: 'en_EU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elegant Codes | Europe IT Solutions & Software Development Company',
    description: 'Elegant Codes provides comprehensive IT solutions and software development services across Europe.',
    images: ['https://www.elegantcodes.com/og-image-europe-it-solutions.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/europe',
    languages: {
      'en': 'https://www.elegantcodes.com',
      'en-eu': 'https://www.elegantcodes.com/europe',
    },
  },
}

const faqs = [
  {
    question: "What IT services does Elegant Codes offer in Europe?",
    answer: "Elegant Codes provides comprehensive IT services across Europe including custom software development, mobile app development, web development, cloud services, cybersecurity, AI development, and DevOps consulting tailored for European business needs."
  },
  {
    question: "Why choose Elegant Codes for IT solutions in Europe?",
    answer: "Elegant Codes offers European businesses local expertise, understanding of EU regulations, competitive pricing, proven track record, and commitment to supporting Europe's digital transformation with innovative technology solutions."
  },
  {
    question: "Which European countries does Elegant Codes serve?",
    answer: "We serve clients across the European Union including Germany, France, UK, Netherlands, Belgium, Italy, Spain, and other major European markets. Our team understands European business culture and regulatory requirements."
  },
  {
    question: "How does Elegant Codes support European digital transformation?",
    answer: "We support European digital transformation through local expertise, GDPR compliance, innovative solutions, knowledge transfer, affordable IT solutions for SMEs, and partnerships with European educational institutions."
  },
  {
    question: "What makes Elegant Codes a trusted IT partner in Europe?",
    answer: "Our trust is built on European presence, understanding of EU business culture, proven track record, client testimonials, compliance with European regulations, and commitment to long-term partnerships."
  }
]

export default function EuropePage() {
  const seoConfig = {
    title: 'Elegant Codes | Europe IT Solutions & Software Development Company',
    description: 'Elegant Codes provides comprehensive IT solutions and software development services across Europe. Expert IT consulting, custom software, and technology solutions for European businesses.',
    keywords: getKeywordsByRegion('Europe'),
    canonical: 'https://www.elegantcodes.com/europe',
    ogImage: 'https://www.elegantcodes.com/og-image-europe-it-solutions.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Europe', url: 'https://www.elegantcodes.com/europe' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        region="Europe"
        service="IT Solutions"
      />
      
      <div className="min-h-screen bg-white">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 font-poppins">
              <span className="text-amber-500">Elegant Codes</span> in Europe
            </h1>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-4xl mx-auto font-inter leading-relaxed">
              Empowering European businesses with innovative IT solutions, custom software development, 
              and cutting-edge technology consulting services.
            </p>
          </div>

          {/* Services Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Software Development</h3>
              <p className="text-slate-600">Enterprise-grade custom software solutions tailored for European business requirements.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Mobile App Development</h3>
              <p className="text-slate-600">Native and cross-platform mobile applications for European markets.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cloud Services</h3>
              <p className="text-slate-600">AWS, Azure, and Google Cloud solutions with EU data compliance.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Cybersecurity</h3>
              <p className="text-slate-600">GDPR-compliant security solutions for European businesses.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">AI & Machine Learning</h3>
              <p className="text-slate-600">Advanced AI solutions driving European digital innovation.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">DevOps Consulting</h3>
              <p className="text-slate-600">Streamlined development and deployment for European enterprises.</p>
            </div>
          </div>

          {/* Why Choose Elegant Codes */}
          <div className="bg-gradient-to-r from-amber-50 to-slate-50 p-12 rounded-3xl mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">
              Why Choose <span className="text-amber-500">Elegant Codes</span> in Europe?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">European Expertise</h3>
                <p className="text-slate-600 mb-6">Deep understanding of European business culture, regulations, and market dynamics.</p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">GDPR Compliance</h3>
                <p className="text-slate-600 mb-6">All our solutions are built with European data protection regulations in mind.</p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Local Support</h3>
                <p className="text-slate-600">24/7 support tailored to European time zones and business hours.</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Innovation Hub</h3>
                <p className="text-slate-600 mb-6">Access to cutting-edge technology and innovative solutions driving European digital transformation.</p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cost-Effective</h3>
                <p className="text-slate-600 mb-6">Competitive pricing without compromising on quality or European standards.</p>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Long-term Partnership</h3>
                <p className="text-slate-600">Commitment to building lasting relationships with European businesses.</p>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-amber-500 to-amber-600 p-12 rounded-3xl">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
              Let Elegant Codes help you navigate the digital landscape with innovative IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#contact"
                className="bg-white text-amber-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-colors"
              >
                Get Free Consultation
              </a>
              <a
                href="/portfolio"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-amber-600 transition-colors"
              >
                View Our Work
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  )
} 