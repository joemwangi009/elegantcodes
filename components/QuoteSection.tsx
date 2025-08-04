
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
      <section id="quote" className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get Your Free
              <span className="gradient-text block">Project Quote</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-3xl mx-auto">
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
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Our Quote Process?</h3>
                <p className="text-slate-300 mb-8">
                  We provide detailed, transparent quotes that include all costs, timelines, and deliverables. 
                  No hidden fees, no surprises.
                </p>
              </motion.div>

              <motion.div variants={itemVariants} className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-[#D4A017] to-[#F4D03F] rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${feature.icon} text-[#1A2A44] text-xl`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-r from-[#D4A017]/10 to-[#F4D03F]/10 rounded-2xl p-6 border border-[#D4A017]/20">
                <h4 className="font-semibold text-white mb-3">What's Included in Your Quote?</h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#D4A017] mr-2"></i>
                    Detailed project scope and requirements
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#D4A017] mr-2"></i>
                    Technology stack recommendations
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#D4A017] mr-2"></i>
                    Timeline and milestone breakdown
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#D4A017] mr-2"></i>
                    Cost breakdown with no hidden fees
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#D4A017] mr-2"></i>
                    Post-launch support and maintenance
                  </li>
                  <li className="flex items-center">
                    <i className="ri-check-line text-[#D4A017] mr-2"></i>
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
              className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8"
            >
              <EmailForm
                templateId={process.env.NEXT_PUBLIC_EMAILJS_QUOTE_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''}
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
