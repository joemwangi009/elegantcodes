'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CloudSolutionsServicePage() {
  const features = [
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your applications and data to the cloud with zero downtime and maximum efficiency.'
    },
    {
      icon: 'ri-server-line',
      title: 'Cloud Infrastructure',
      description: 'Design and deploy scalable cloud infrastructure that grows with your business needs.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Cloud Security',
      description: 'Implement enterprise-grade security measures to protect your data and applications in the cloud.'
    },
    {
      icon: 'ri-settings-3-line',
      title: 'DevOps & Automation',
      description: 'Streamline development and deployment with CI/CD pipelines and automated infrastructure management.'
    }
  ];

  const benefits = [
    'Reduce infrastructure costs by 40-60%',
    'Improve application performance by 300%',
    'Achieve 99.9% uptime reliability',
    'Scale resources on-demand',
    'Enhanced security and compliance',
    'Global deployment capabilities'
  ];

  const techStack = [
    { name: 'AWS', description: 'Amazon Web Services' },
    { name: 'Azure', description: 'Microsoft Cloud Platform' },
    { name: 'Google Cloud', description: 'Google Cloud Platform' },
    { name: 'Docker', description: 'Containerization platform' },
    { name: 'Kubernetes', description: 'Container orchestration' },
    { name: 'Terraform', description: 'Infrastructure as code' }
  ];

  const caseStudy = {
    client: 'Global Tech Company',
    quote: 'Our cloud migration reduced infrastructure costs by 55% while improving application performance by 400%, enabling us to scale globally without technical constraints.',
    outcome: 'Successfully migrated 200+ applications to AWS with automated deployment pipelines and global CDN distribution.',
    metrics: ['55% cost reduction', '400% performance improvement', '200+ applications migrated']
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-20 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full text-sm font-semibold mb-6">
                  Cloud Solutions
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-poppins">
                  Scale Your Business with
                  <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text"> Cloud Excellence</span>
                </h1>
                <p className="text-xl text-slate-300 mb-8 font-inter leading-relaxed">
                  Transform your infrastructure with enterprise-grade cloud solutions. From migration to optimization, 
                  we help you leverage the full power of cloud computing to drive innovation and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/#contact"
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  >
                    Start Your Cloud Journey
                  </Link>
                  <Link
                    href="/portfolio"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
                  alt="Cloud Solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-400/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                Comprehensive <span className="text-blue-600">Cloud Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                From startups to enterprises, we deliver cloud solutions that optimize performance, reduce costs, and enable innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <i className={`${feature.icon} text-blue-600 text-2xl`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">{feature.title}</h3>
                  <p className="text-slate-600 font-inter leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 font-poppins">
                  Why Choose Our <span className="text-blue-600">Cloud Solutions</span>
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-lg"></i>
                      </div>
                      <p className="text-lg text-slate-700 font-inter">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop&crop=center"
                  alt="Cloud Benefits"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
                Leading <span className="text-blue-400">Cloud Technologies</span>
              </h2>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-inter">
                We work with the world's leading cloud platforms and tools to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-slate-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
                  Success <span className="text-blue-600">Story</span>
                </h2>
                <p className="text-xl text-slate-600 font-inter">
                  See how we transformed a global tech company's infrastructure
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">
                      {caseStudy.client}
                    </h3>
                    <blockquote className="text-lg text-slate-700 font-inter leading-relaxed italic">
                      "{caseStudy.quote}"
                    </blockquote>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-slate-900 mb-4 font-poppins">Outcome</h4>
                    <p className="text-slate-600 font-inter leading-relaxed">
                      {caseStudy.outcome}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {caseStudy.metrics.map((metric, index) => (
                      <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                        <p className="text-blue-600 font-bold">{metric}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop&crop=center"
                    alt="Cloud Case Study"
                    className="w-full h-auto rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
              Ready to Scale with <span className="text-slate-900">Cloud Power</span>?
            </h2>
            <p className="text-xl text-slate-100 mb-8 font-inter">
              Let's transform your infrastructure and unlock the full potential of cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Cloud Project
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 