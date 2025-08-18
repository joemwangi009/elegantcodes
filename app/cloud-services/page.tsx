import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Cloud Services Company | AWS Azure Google Cloud Development & Migration',
  description: 'Leading cloud services company offering cloud application development, cloud migration services, AWS consulting, Azure services, Google Cloud solutions, and cloud infrastructure management worldwide.',
  keywords: [
    'cloud services company',
    'cloud application development',
    'cloud migration services',
    'cloud infrastructure management',
    'AWS cloud consulting',
    'Azure cloud services',
    'Google Cloud partner',
    'cloud security provider',
    'cloud-native development',
    'serverless development',
    'container orchestration',
    'microservices architecture',
    'cloud cost optimization',
    'cloud performance optimization',
    'multi-cloud solutions',
    'hybrid cloud services',
    'cloud disaster recovery',
    'cloud backup solutions',
    'cloud monitoring services',
    'cloud compliance solutions'
  ],
  openGraph: {
    title: 'Cloud Services Company | AWS Azure Google Cloud Development & Migration',
    description: 'Leading cloud services company offering cloud application development, cloud migration services, AWS consulting, Azure services, Google Cloud solutions, and cloud infrastructure management worldwide.',
    url: 'https://www.elegantcodes.com/cloud-services',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-cloud-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Cloud Services Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Services Company | AWS Azure Google Cloud Development & Migration',
    description: 'Leading cloud services company offering cloud application development, cloud migration services, AWS consulting, Azure services, Google Cloud solutions, and cloud infrastructure management worldwide.',
    images: ['https://www.elegantcodes.com/og-image-cloud-services.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/cloud-services',
  },
}

const faqs = [
  {
    question: "What cloud services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive cloud services including cloud application development, cloud migration, AWS consulting, Azure services, Google Cloud solutions, cloud infrastructure management, and cloud security services."
  },
  {
    question: "How long does cloud migration take?",
    answer: "Cloud migration typically takes 8-20 weeks depending on complexity, data volume, and business requirements. We follow best practices to ensure smooth migration with minimal downtime."
  },
  {
    question: "What cloud platforms do you support?",
    answer: "We support all major cloud platforms including AWS, Microsoft Azure, Google Cloud Platform, and provide multi-cloud and hybrid cloud solutions for maximum flexibility and cost optimization."
  },
  {
    question: "Do you provide cloud security services?",
    answer: "Yes, we provide comprehensive cloud security services including identity management, data encryption, compliance solutions, and security monitoring to protect your cloud infrastructure."
  },
  {
    question: "Can you optimize cloud costs?",
    answer: "Absolutely! We specialize in cloud cost optimization through resource right-sizing, reserved instances, auto-scaling, and cost monitoring to help you maximize ROI on cloud investments."
  }
]

export default function CloudServicesPage() {
  const seoConfig = {
    title: 'Cloud Services Company | AWS Azure Google Cloud Development & Migration',
    description: 'Leading cloud services company offering cloud application development, cloud migration services, AWS consulting, Azure services, Google Cloud solutions, and cloud infrastructure management worldwide.',
    keywords: [
      'cloud services company',
      'cloud application development',
      'cloud migration services',
      'cloud infrastructure management',
      'AWS cloud consulting',
      'Azure cloud services'
    ],
    canonical: 'https://www.elegantcodes.com/cloud-services',
    ogImage: 'https://www.elegantcodes.com/og-image-cloud-services.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Cloud Services', url: 'https://www.elegantcodes.com/cloud-services' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Cloud Services"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Cloud Services Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading cloud services company offering cloud application development, 
                cloud migration services, AWS consulting, Azure services, Google Cloud solutions, 
                and cloud infrastructure management worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your Cloud Project
                </button>
                <button className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View Cloud Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Cloud Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☁️ Cloud Application Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern cloud-native applications built with microservices architecture, 
                  serverless computing, and container technologies.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cloud-Native Apps</li>
                  <li>• Microservices Architecture</li>
                  <li>• Serverless Development</li>
                  <li>• Container Applications</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Cloud Migration Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Seamless migration of applications and data to the cloud with 
                  minimal downtime and maximum efficiency.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Application Migration</li>
                  <li>• Data Migration</li>
                  <li>• Infrastructure Migration</li>
                  <li>• Legacy System Migration</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏗️ Cloud Infrastructure Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive cloud infrastructure management with monitoring, 
                  optimization, and automated scaling capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Infrastructure Monitoring</li>
                  <li>• Auto-Scaling</li>
                  <li>• Performance Optimization</li>
                  <li>• Resource Management</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 Cloud Security Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced cloud security solutions with identity management, 
                  data encryption, and compliance monitoring.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Identity Management</li>
                  <li>• Data Encryption</li>
                  <li>• Compliance Monitoring</li>
                  <li>• Threat Detection</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📊 Cloud Analytics & AI
                </h3>
                <p className="text-slate-600 mb-4">
                  Cloud-based analytics and AI solutions with machine learning, 
                  data processing, and business intelligence capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Machine Learning</li>
                  <li>• Data Processing</li>
                  <li>• Business Intelligence</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 DevOps & CI/CD
                </h3>
                <p className="text-slate-600 mb-4">
                  Cloud DevOps services with continuous integration, deployment, 
                  and infrastructure as code automation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Continuous Integration</li>
                  <li>• Continuous Deployment</li>
                  <li>• Infrastructure as Code</li>
                  <li>• Automation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cloud Platforms */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Cloud Platform Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🟠 AWS Cloud Consulting
                </h3>
                <p className="text-slate-600 mb-4">
                  Expert AWS consulting services with architecture design, 
                  implementation, and optimization for maximum performance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• AWS Architecture Design</li>
                  <li>• Implementation Services</li>
                  <li>• Performance Optimization</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔵 Azure Cloud Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive Azure services with hybrid cloud solutions, 
                  enterprise integration, and Microsoft ecosystem expertise.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Hybrid Cloud Solutions</li>
                  <li>• Enterprise Integration</li>
                  <li>• Microsoft Ecosystem</li>
                  <li>• Azure DevOps</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔴 Google Cloud Partner
                </h3>
                <p className="text-slate-600 mb-4">
                  Google Cloud partner services with data analytics, 
                  machine learning, and innovative cloud solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Data Analytics</li>
                  <li>• Machine Learning</li>
                  <li>• Innovative Solutions</li>
                  <li>• GCP Expertise</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌈 Multi-Cloud Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Multi-cloud strategies combining the best of multiple platforms 
                  for flexibility, cost optimization, and risk mitigation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Platform Flexibility</li>
                  <li>• Cost Optimization</li>
                  <li>• Risk Mitigation</li>
                  <li>• Best-of-Breed</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔗 Hybrid Cloud Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Hybrid cloud solutions combining on-premises infrastructure 
                  with cloud services for optimal performance and control.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• On-Premises Integration</li>
                  <li>• Cloud Services</li>
                  <li>• Performance Optimization</li>
                  <li>• Control & Flexibility</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Cloud-Native Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Cloud-native application development with modern architectures, 
                  containerization, and microservices design.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Modern Architectures</li>
                  <li>• Containerization</li>
                  <li>• Microservices Design</li>
                  <li>• Scalable Solutions</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Cloud Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cloud Platforms</h3>
                <p className="text-slate-600 text-sm">
                  AWS, Azure, Google Cloud, and multi-cloud solutions
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Containers</h3>
                <p className="text-slate-600 text-sm">
                  Docker, Kubernetes, and container orchestration
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Serverless</h3>
                <p className="text-slate-600 text-sm">
                  AWS Lambda, Azure Functions, and serverless computing
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Monitoring</h3>
                <p className="text-slate-600 text-sm">
                  CloudWatch, Azure Monitor, and performance monitoring
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Cloud Services Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Cloud Assessment
                </h3>
                <p className="text-slate-600">
                  Comprehensive cloud readiness assessment, 
                  strategy planning, and platform selection
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Architecture Design
                </h3>
                <p className="text-slate-600">
                  Cloud architecture design, security planning, 
                  and scalability strategy
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Implementation
                </h3>
                <p className="text-slate-600">
                  Cloud deployment, migration, testing, 
                  and performance optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-indigo-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Management & Support
                </h3>
                <p className="text-slate-600">
                  Ongoing cloud management, monitoring, 
                  and continuous optimization
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
                <div key={index} className="bg-indigo-50 p-6 rounded-lg">
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
              Ready to Transform Your Business with Cloud?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              cloud services can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 hover:bg-indigo-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your Cloud Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View Cloud Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 