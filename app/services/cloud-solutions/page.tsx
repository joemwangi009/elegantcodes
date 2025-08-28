import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cloud Solutions & DevOps Services | ElegantCodes',
  description: 'Expert cloud solutions including AWS, Azure, GCP, DevOps automation, and infrastructure management. Scale your business with ElegantCodes cloud services.',
  keywords: [
    'cloud solutions',
    'DevOps services',
    'AWS consulting',
    'Azure services',
    'Google Cloud Platform',
    'ElegantCodes cloud solutions',
    'cloud infrastructure',
    'DevOps automation',
    'cloud migration',
    'infrastructure management',
    'cloud consulting services',
    'cloud migration services',
    'cloud infrastructure management',
    'cloud security services',
    'cloud optimization services',
    'cloud cost optimization',
    'cloud performance optimization',
    'cloud backup and recovery',
    'cloud disaster recovery',
    'cloud monitoring services',
    'cloud compliance services',
    'multi-cloud management',
    'hybrid cloud solutions',
    'private cloud solutions',
    'public cloud solutions',
    'cloud-native development',
    'container orchestration services',
    'Kubernetes consulting services',
    'Docker container services',
    'microservices architecture',
    'serverless computing services',
    'cloud database services',
    'cloud storage solutions',
    'cloud networking services',
    'cloud load balancing',
    'cloud auto-scaling',
    'cloud cost management',
    'cloud governance services',
    'cloud architecture design',
    'cloud strategy consulting',
    'cloud security consulting',
    'cloud compliance consulting',
    'cloud risk assessment',
    'cloud audit services',
    'cloud training services',
    'cloud support services',
    '24/7 cloud monitoring',
    'cloud incident response',
    'cloud change management',
    'cloud capacity planning',
    'cloud performance testing',
    'cloud penetration testing',
    'cloud vulnerability assessment',
    'cloud identity management',
    'cloud access management',
    'cloud data protection',
    'cloud encryption services',
    'cloud firewall services',
    'cloud VPN services',
    'cloud CDN services',
    'cloud analytics services',
    'cloud machine learning services',
    'cloud AI services',
    'cloud IoT solutions',
    'edge computing services',
    'cloud automation services',
    'infrastructure as code',
    'Terraform consulting',
    'Ansible automation services',
    'Jenkins CI/CD services',
    'GitLab CI/CD services',
    'GitHub Actions consulting',
    'cloud cost optimization tools',
    'cloud performance monitoring tools',
    'cloud security tools',
    'cloud backup tools',
    'cloud migration tools'
  ],
  openGraph: {
    title: 'Cloud Solutions & DevOps Services | ElegantCodes',
    description: 'Expert cloud solutions including AWS, Azure, GCP, DevOps automation, and infrastructure management.',
    url: 'https://www.elegantcodes.com/services/cloud-solutions',
    siteName: 'ElegantCodes - Premier IT Consulting',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-cloud-solutions.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Cloud Solutions & DevOps Services',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cloud Solutions & DevOps Services | ElegantCodes',
    description: 'Expert cloud solutions including AWS, Azure, GCP, DevOps automation, and infrastructure management.',
    images: ['https://www.elegantcodes.com/og-image-cloud-solutions.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/services/cloud-solutions'
  }
};

export default function CloudSolutionsPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Cloud Solutions', url: 'https://www.elegantcodes.com/services/cloud-solutions' }
  ];

  const faqs = [
    {
      question: "What cloud platforms does ElegantCodes support?",
      answer: "ElegantCodes provides comprehensive support for AWS, Microsoft Azure, Google Cloud Platform (GCP), and hybrid cloud solutions. We help you choose the best platform for your business needs."
    },
    {
      question: "How can cloud solutions benefit my business?",
      answer: "Cloud solutions offer scalability, cost efficiency, improved security, disaster recovery, and global accessibility. They enable businesses to focus on core operations while reducing IT infrastructure costs."
    },
    {
      question: "Does ElegantCodes provide ongoing cloud management?",
      answer: "Yes, ElegantCodes offers 24/7 cloud monitoring, maintenance, optimization, and support services to ensure your cloud infrastructure runs efficiently and securely."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
              Cloud Solutions & <span className="text-amber-500">DevOps</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
              Scale your business with cloud solutions from ElegantCodes. We provide AWS, Azure, GCP consulting, 
              DevOps automation, and infrastructure management services.
            </p>
            <div className="mt-8">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
              >
                Get Cloud Ready
              </a>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Our <span className="text-amber-500">Cloud Solutions</span> Services
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                We deliver scalable cloud infrastructure and DevOps solutions that drive business growth and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-cloud-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Cloud Consulting</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Expert guidance on AWS, Azure, and GCP platform selection, architecture design, and migration strategies.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-settings-3-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">DevOps Automation</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  CI/CD pipelines, infrastructure as code, and automated deployment processes for faster delivery.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Infrastructure Management</h3>
                <p className="text-slate-600 font-inter leading-relaxed">
                  Comprehensive cloud infrastructure management including monitoring, security, and optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Related <span className="text-amber-500">Services</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                Explore our comprehensive range of IT solutions and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">IT Consulting</h3>
                <p className="text-slate-600 font-inter mb-6">
                  Strategic IT consulting to align technology with your business goals.
                </p>
                <a 
                  href="/services/it-consulting" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Software Development</h3>
                <p className="text-slate-600 font-inter mb-6">
                  Custom software solutions tailored to your business needs.
                </p>
                <a 
                  href="/services/software-development" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">Mobile Apps</h3>
                <p className="text-slate-600 font-inter mb-6">
                  Native and cross-platform mobile applications for modern businesses.
                </p>
                <a 
                  href="/services/mobile-apps" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Scale with Cloud?
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Let ElegantCodes help you leverage the power of cloud computing and DevOps automation to transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Get Cloud Ready
              </a>
              <a 
                href="/services" 
                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View All Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <SEOHead 
        config={{
          title: 'Cloud Solutions & DevOps Services | ElegantCodes',
          description: 'Expert cloud solutions including AWS, Azure, GCP, DevOps automation, and infrastructure management. Scale your business with ElegantCodes cloud services.',
          keywords: ['cloud solutions', 'DevOps services', 'AWS consulting', 'Azure services', 'ElegantCodes'],
          canonical: 'https://www.elegantcodes.com/services/cloud-solutions',
          ogImage: 'https://www.elegantcodes.com/og-image-cloud-solutions.jpg',
          ogType: 'website'
        }}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
    </div>
  );
} 