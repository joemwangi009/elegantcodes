
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
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability standards'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Fast Delivery',
      description: 'Agile development with rapid deployment cycles'
    },
    {
      icon: 'ri-customer-service-2-line',
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Competitive Pricing',
      description: 'Best value for money with transparent pricing'
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
      <section id="quote" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Get Your Free
              <span className="gradient-text block">Project Quote</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to start your project? Get a detailed quote tailored to your specific requirements and budget.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Features */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Choose Our Quote Process?</h3>
                <p className="text-slate-600 mb-8">
                  We provide detailed, transparent quotes that include all costs, timelines, and deliverables. 
                  No hidden fees, no surprises.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${feature.icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">{feature.title}</h4>
                      <p className="text-slate-600 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
                <h4 className="font-semibold text-slate-900 mb-3">What's Included in Your Quote?</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center">
                    <i className="ri-check-line text-amber-600 mr-2"></i>
                    Detailed project scope and requirements
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-amber-600 mr-2"></i>
                    Technology stack recommendations
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-amber-600 mr-2"></i>
                    Timeline and milestone breakdown
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-amber-600 mr-2"></i>
                    Cost breakdown with no hidden fees
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-amber-600 mr-2"></i>
                    Post-launch support and maintenance
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-amber-600 mr-2"></i>
                    Free consultation and revisions
                  </li>
                </ul>
              </motion.div>
            </motion.div>

            {/* Quote Form */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8"
            >
              <EmailForm
                formType="quote"
                title="Request Your Quote"
                subtitle="Tell us about your project and we'll provide a detailed quote within 24 hours."
                submitText="Get Free Quote"
                showCompany={true}
                showProjectType={true}
                showPhone={true}
                showBudget={true}
                showTimeline={true}
                onSuccess={handleSuccess}
                onError={handleError}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title="Quote Request Sent!"
        message="Thank you for your quote request. Our team will review your project details and get back to you with a comprehensive quote within 24 hours."
      />
    </>
  );
}
