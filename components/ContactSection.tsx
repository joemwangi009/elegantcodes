
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import EmailForm from './EmailForm';

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSuccess = () => {
    setIsSubmitted(true);
  };

  const handleError = (error: string) => {
    console.error('Contact form error:', error);
  };

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

  if (isSubmitted) {
    return (
      <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto container-padding">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="ri-check-line text-3xl text-green-600"></i>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Thank You!</h2>
            <p className="text-lg text-slate-600 mb-8">
              Your message has been sent successfully. We'll get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto container-padding">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Let's Build Something
            <span className="gradient-text block">Amazing Together</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to transform your business with custom software solutions? Get in touch with our team of experts.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get In Touch</h3>
              <p className="text-slate-600 mb-8">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we're here to help you achieve your goals.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a href="mailto:info@elegantcodes.com" className="text-primary-600 hover:text-primary-700 transition-colors">
                    info@elegantcodes.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-primary-600 hover:text-primary-700 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">
                    San Francisco, CA<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-primary-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Business Hours</h4>
                  <p className="text-slate-600">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">Why Choose ElegantCodes?</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-primary-600 mr-2"></i>
                  Expert team with 10+ years experience
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-primary-600 mr-2"></i>
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-primary-600 mr-2"></i>
                  Fast turnaround times
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-primary-600 mr-2"></i>
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-primary-600 mr-2"></i>
                  Competitive pricing
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <EmailForm
              templateId={process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID || process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ''}
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you as soon as possible."
              submitText="Send Message"
              showCompany={true}
              showPhone={true}
              onSuccess={handleSuccess}
              onError={handleError}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
