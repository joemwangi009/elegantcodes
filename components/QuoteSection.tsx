
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';
import SuccessModal from './SuccessModal';

export default function QuoteSection() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const handleError = (error: string) => {
    console.error('Quote form error:', error);
  };

  const features = [
    {
      icon: 'ri-shield-check-line',
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'from-blue-50 to-blue-100'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Rapid Development',
      description: 'Agile methodology with 2-week sprint cycles',
      color: 'from-amber-500 to-amber-600',
      bgColor: 'from-amber-50 to-amber-100'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance',
      color: 'from-green-500 to-green-600',
      bgColor: 'from-green-50 to-green-100'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Transparent Pricing',
      description: 'Fixed pricing with no hidden costs or surprises',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'from-purple-50 to-purple-100'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: '30-minute consultation to understand your vision',
      icon: 'ri-customer-service-2-line',
      color: 'from-blue-500 to-blue-600'
    },
    {
      step: '02',
      title: 'Requirements Analysis',
      description: 'Deep dive into technical specifications and goals',
      icon: 'ri-search-line',
      color: 'from-amber-500 to-amber-600'
    },
    {
      step: '03',
      title: 'Proposal Creation',
      description: 'Detailed scope, timeline, and investment breakdown',
      icon: 'ri-file-list-3-line',
      color: 'from-green-500 to-green-600'
    },
    {
      step: '04',
      title: 'Project Kickoff',
      description: 'Team assembly and development environment setup',
      icon: 'ri-rocket-line',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <>
      <section id="quote" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-amber-100 to-amber-200 rounded-full text-amber-800 font-semibold text-base mb-10">
              <i className="ri-file-list-3-line mr-3 text-lg"></i>
              Get Your Quote
            </motion.div>
            <motion.h2 variants={itemVariants} className="text-6xl lg:text-7xl font-bold text-slate-900 mb-10 font-poppins">
              Transform Your Vision Into
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent block">Reality Today</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
              Ready to start your project? Get a comprehensive, detailed quote tailored to your specific requirements, 
              timeline, and budget with our world-class development expertise.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Features & Process */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-4xl font-bold text-slate-900 mb-8 font-poppins">Why Choose Our Quote Process?</h3>
                <p className="text-xl text-slate-600 leading-relaxed mb-10">
                  We provide comprehensive, transparent quotes that include detailed scope, timelines, and deliverables. 
                  No hidden fees, no surprises - just clear, professional project planning.
                </p>
              </motion.div>

              {/* Features Grid */}
              <motion.div variants={itemVariants} className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="group p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                  >
                    <div className="flex items-start space-x-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                        <i className={`${feature.icon} text-white text-2xl`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 mb-3 text-xl">{feature.title}</h4>
                        <p className="text-slate-600 text-lg leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Process Steps */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-10 border-2 border-slate-200 shadow-xl">
                <h4 className="font-bold text-slate-900 mb-8 text-2xl">Our Quote Process</h4>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                        <span className="text-white font-bold text-lg">{step.step}</span>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-semibold text-slate-900 mb-2 text-lg">{step.title}</h5>
                        <p className="text-slate-600 text-base">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* What's Included */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-10 border-2 border-amber-200 shadow-xl">
                <h4 className="font-semibold text-slate-900 mb-6 text-2xl">What's Included in Your Quote?</h4>
                <div className="grid gap-4">
                  {[
                    'Detailed project scope and requirements analysis',
                    'Technology stack recommendations and architecture',
                    'Timeline with milestone breakdown and deliverables',
                    'Cost breakdown with transparent pricing structure',
                    'Team composition and expertise allocation',
                    'Post-launch support and maintenance plans',
                    'Free consultation and revision cycles',
                    'Risk assessment and mitigation strategies'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-6 h-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <i className="ri-check-line text-white text-sm"></i>
                      </div>
                      <span className="text-slate-700 font-medium text-lg">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Success Metrics */}
              <motion.div variants={itemVariants} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-10 border-2 border-green-200 shadow-xl">
                <h4 className="font-semibold text-slate-900 mb-6 text-2xl">Our Success Metrics</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                    <div className="text-slate-600 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                    <div className="text-slate-600 text-sm">On-Time Delivery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">24h</div>
                    <div className="text-slate-600 text-sm">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                    <div className="text-slate-600 text-sm">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 p-12 relative overflow-hidden"
            >
              {/* Form Background Pattern */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full opacity-20 -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full opacity-20 translate-y-16 -translate-x-16"></div>
              
              <div className="text-center mb-12 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                  <i className="ri-calculator-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">Request Your Quote</h2>
                <p className="text-slate-600 text-xl leading-relaxed">
                  Tell us about your project and we'll provide a detailed, comprehensive quote within 24 hours.
                </p>
              </div>

              <EmailForm
                formType="quote"
                title="Project Details"
                subtitle="Provide your project requirements for an accurate quote"
                submitText="Get Free Quote"
                showCompany={true}
                showProjectType={true}
                showPhone={true}
                showBudget={true}
                showTimeline={true}
                onSuccess={handleSuccess}
                onError={handleError}
              />

              {/* Form Footer */}
              <div className="text-center pt-8 mt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500 mb-4">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Terms of Service</a>
                </p>
                <div className="flex items-center justify-center space-x-2 text-slate-400">
                  <i className="ri-shield-check-line"></i>
                  <span className="text-sm">Your information is secure and confidential</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-24"
          >
            <div className="bg-white rounded-3xl shadow-2xl border-2 border-slate-200 p-16 max-w-5xl mx-auto">
              <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl">
                <i className="ri-rocket-line text-white text-4xl"></i>
              </div>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 font-poppins">Ready to Get Started?</h3>
              <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Let's begin your journey to digital transformation. Get your free quote today and see how we can bring your vision to life with world-class development expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
                >
                  <i className="ri-customer-service-2-line mr-3"></i>
                  Schedule Consultation
                </a>
                <a
                  href="/#contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
                >
                  <i className="ri-phone-line mr-3"></i>
                  Call Us Now
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Quote Request Sent Successfully!"
        message="Thank you for your quote request! Our expert team will review your project details and get back to you with a comprehensive, detailed quote within 24 hours. We're excited to help bring your vision to life!"
      />
    </>
  );
}
