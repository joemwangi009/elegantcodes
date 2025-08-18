import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'DevOps & Containerization Company | CI/CD Pipeline & Kubernetes Services',
  description: 'Leading DevOps and Containerization company offering CI/CD pipeline development, Kubernetes services, Docker containerization, infrastructure automation, and cloud-native solutions worldwide.',
  keywords: [
    'DevOps and containerization company',
    'CI/CD pipeline development',
    'Kubernetes services',
    'Docker containerization',
    'infrastructure automation',
    'cloud-native solutions',
    'DevOps consulting services',
    'container orchestration',
    'microservices architecture',
    'infrastructure as code',
    'continuous integration services',
    'continuous deployment services',
    'container management',
    'DevOps automation',
    'cloud infrastructure services',
    'DevOps transformation',
    'container security services',
    'DevOps monitoring services',
    'DevOps training services',
    'DevOps best practices'
  ],
  openGraph: {
    title: 'DevOps & Containerization Company | CI/CD Pipeline & Kubernetes Services',
    description: 'Leading DevOps and Containerization company offering CI/CD pipeline development, Kubernetes services, Docker containerization, infrastructure automation, and cloud-native solutions worldwide.',
    url: 'https://www.elegantcodes.com/devops-containerization',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-devops-containerization.jpg',
        width: 1200,
        height: 630,
        alt: 'DevOps & Containerization Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevOps & Containerization Company | CI/CD Pipeline & Kubernetes Services',
    description: 'Leading DevOps and Containerization company offering CI/CD pipeline development, Kubernetes services, Docker containerization, infrastructure automation, and cloud-native solutions worldwide.',
    images: ['https://www.elegantcodes.com/og-image-devops-containerization.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/devops-containerization',
  },
}

const faqs = [
  {
    question: "What DevOps and Containerization services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive DevOps and Containerization services including CI/CD pipeline development, Kubernetes services, Docker containerization, infrastructure automation, and cloud-native solutions for all business types."
  },
  {
    question: "How long does DevOps transformation take?",
    answer: "DevOps transformation typically takes 12-24 weeks depending on complexity, team size, and existing infrastructure. We follow iterative approaches to ensure smooth transition and adoption."
  },
  {
    question: "What cloud platforms do you support for DevOps?",
    answer: "We support all major cloud platforms including AWS, Azure, Google Cloud, and provide multi-cloud DevOps solutions with infrastructure as code and automated deployment capabilities."
  },
  {
    question: "Do you provide DevOps training services?",
    answer: "Yes, we provide comprehensive DevOps training including team workshops, best practices education, tool training, and ongoing support to ensure successful DevOps adoption."
  },
  {
    question: "Can you integrate DevOps with existing systems?",
    answer: "Absolutely! We specialize in integrating DevOps practices with existing development workflows, legacy systems, and business processes to create seamless automation and deployment pipelines."
  }
]

export default function DevOpsContainerizationPage() {
  const seoConfig = {
    title: 'DevOps & Containerization Company | CI/CD Pipeline & Kubernetes Services',
    description: 'Leading DevOps and Containerization company offering CI/CD pipeline development, Kubernetes services, Docker containerization, infrastructure automation, and cloud-native solutions worldwide.',
    keywords: [
      'DevOps and containerization company',
      'CI/CD pipeline development',
      'Kubernetes services',
      'Docker containerization',
      'infrastructure automation',
      'cloud-native solutions'
    ],
    canonical: 'https://www.elegantcodes.com/devops-containerization',
    ogImage: 'https://www.elegantcodes.com/og-image-devops-containerization.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'DevOps & Containerization', url: 'https://www.elegantcodes.com/devops-containerization' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="DevOps & Containerization"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-yellow-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                DevOps & Containerization Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading DevOps and Containerization company offering CI/CD pipeline development, 
                Kubernetes services, Docker containerization, infrastructure automation, 
                and cloud-native solutions worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your DevOps Project
                </button>
                <button className="border-2 border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  DevOps Assessment
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive DevOps & Containerization Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 CI/CD Pipeline Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Automated CI/CD pipelines with continuous integration, 
                  testing, and deployment for faster software delivery.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Continuous Integration</li>
                  <li>• Automated Testing</li>
                  <li>• Continuous Deployment</li>
                  <li>• Pipeline Optimization</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☸️ Kubernetes Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional Kubernetes services with cluster management, 
                  container orchestration, and scaling solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cluster Management</li>
                  <li>• Container Orchestration</li>
                  <li>• Auto-Scaling</li>
                  <li>• Load Balancing</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🐳 Docker Containerization
                </h3>
                <p className="text-slate-600 mb-4">
                  Docker containerization services with image optimization, 
                  container management, and deployment automation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Image Optimization</li>
                  <li>• Container Management</li>
                  <li>• Deployment Automation</li>
                  <li>• Registry Management</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏗️ Infrastructure Automation
                </h3>
                <p className="text-slate-600 mb-4">
                  Infrastructure as Code with automated provisioning, 
                  configuration management, and infrastructure scaling.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Infrastructure as Code</li>
                  <li>• Automated Provisioning</li>
                  <li>• Configuration Management</li>
                  <li>• Auto-Scaling</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ☁️ Cloud-Native Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Cloud-native application development with microservices, 
                  serverless architecture, and cloud optimization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Microservices Architecture</li>
                  <li>• Serverless Solutions</li>
                  <li>• Cloud Optimization</li>
                  <li>• Multi-Cloud Support</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔧 DevOps Consulting
                </h3>
                <p className="text-slate-600 mb-4">
                  Strategic DevOps consulting with transformation planning, 
                  best practices implementation, and team training.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Transformation Planning</li>
                  <li>• Best Practices</li>
                  <li>• Team Training</li>
                  <li>• Process Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced DevOps Solutions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Microservices Architecture
                </h3>
                <p className="text-slate-600 mb-4">
                  Microservices design and implementation with service discovery, 
                  API gateway, and distributed systems architecture.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Service Design</li>
                  <li>• Service Discovery</li>
                  <li>• API Gateway</li>
                  <li>• Distributed Systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📊 Monitoring & Observability
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive monitoring with logging, metrics, tracing, 
                  and alerting for proactive issue detection.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Application Monitoring</li>
                  <li>• Infrastructure Monitoring</li>
                  <li>• Log Management</li>
                  <li>• Alerting Systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔒 Security & Compliance
                </h3>
                <p className="text-slate-600 mb-4">
                  DevOps security with container security, 
                  infrastructure security, and compliance automation.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Container Security</li>
                  <li>• Infrastructure Security</li>
                  <li>• Compliance Automation</li>
                  <li>• Security Scanning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🧪 Testing Automation
                </h3>
                <p className="text-slate-600 mb-4">
                  Automated testing with unit tests, integration tests, 
                  and end-to-end testing in CI/CD pipelines.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Unit Testing</li>
                  <li>• Integration Testing</li>
                  <li>• End-to-End Testing</li>
                  <li>• Test Automation</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📦 Package Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Package management solutions with artifact repositories, 
                  dependency management, and version control.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Artifact Repositories</li>
                  <li>• Dependency Management</li>
                  <li>• Version Control</li>
                  <li>• Package Distribution</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 Multi-Environment Management
                </h3>
                <p className="text-slate-600 mb-4">
                  Multi-environment deployment with development, staging, 
                  and production environment management.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Environment Provisioning</li>
                  <li>• Configuration Management</li>
                  <li>• Deployment Strategies</li>
                  <li>• Environment Sync</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced DevOps Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">CI/CD Tools</h3>
                <p className="text-slate-600 text-sm">
                  Jenkins, GitLab CI, GitHub Actions, and Azure DevOps
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Containers</h3>
                <p className="text-slate-600 text-sm">
                  Docker, Kubernetes, Helm, and container runtimes
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Infrastructure</h3>
                <p className="text-slate-600 text-sm">
                  Terraform, Ansible, CloudFormation, and IaC tools
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Monitoring</h3>
                <p className="text-slate-600 text-sm">
                  Prometheus, Grafana, ELK Stack, and observability tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DevOps Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our DevOps Transformation Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Assessment & Planning
                </h3>
                <p className="text-slate-600">
                  Current state assessment, DevOps maturity evaluation, 
                  and transformation roadmap development
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Tool Selection
                </h3>
                <p className="text-slate-600">
                  DevOps tool evaluation, technology stack selection, 
                  and integration planning
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Implementation
                </h3>
                <p className="text-slate-600">
                  Pipeline development, infrastructure automation, 
                  and process implementation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-yellow-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Training & Support
                </h3>
                <p className="text-slate-600">
                  Team training, best practices implementation, 
                  and ongoing DevOps support
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
                <div key={index} className="bg-yellow-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-yellow-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Development Process?
            </h2>
            <p className="text-xl text-yellow-100 mb-8">
              Contact ElegantCodes today for a free DevOps consultation and discover how our 
              DevOps and Containerization services can accelerate your software delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-yellow-600 hover:bg-yellow-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your DevOps Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                DevOps Assessment
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 