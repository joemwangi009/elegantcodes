'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  CalendarIcon
} from '@heroicons/react/24/outline';
import UnifiedForm, { FormField } from './UnifiedForm';
import SuccessModal from './SuccessModal';

export default function ContactQuoteSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState<'contact' | 'quote'>('contact');

  const handleSuccess = () => { setShowSuccess(true); };
  const handleError = (error: string) => { console.error('Form error:', error); };

  const contactFields: FormField[] = [
    { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'company', label: 'Company', type: 'text', required: false, placeholder: 'Enter your company name' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: 'Enter your phone number' },
    { name: 'message', label: 'Message', type: 'textarea', required: true, placeholder: 'Tell us about your project or inquiry...', validation: { minLength: 20 } }
  ];

  const quoteFields: FormField[] = [
    { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'Enter your email address' },
    { name: 'company', label: 'Company', type: 'text', required: false, placeholder: 'Enter your company name' },
    { name: 'phone', label: 'Phone Number', type: 'tel', required: false, placeholder: 'Enter your phone number' },
    { name: 'projectType', label: 'Project Type', type: 'select', required: true, options: [
      { value: 'web-app', label: 'Web Application' },
      { value: 'mobile-app', label: 'Mobile App' },
      { value: 'ecommerce', label: 'E-commerce Platform' },
      { value: 'pos-system', label: 'POS System' },
      { value: 'crm', label: 'CRM System' },
      { value: 'other', label: 'Other' }
    ]},
    { name: 'description', label: 'Project Description', type: 'textarea', required: true, placeholder: 'Describe your project requirements in detail...', validation: { minLength: 30 } },
    { name: 'budget', label: 'Budget Range', type: 'select', required: true, options: [
      { value: '5k-15k', label: '$5,000 - $15,000' },
      { value: '15k-50k', label: '$15,000 - $50,000' },
      { value: '50k-100k', label: '$50,000 - $100,000' },
      { value: '100k+', label: '$100,000+' },
      { value: 'discuss', label: "Let's discuss" }
    ]},
    { name: 'timeline', label: 'Timeline', type: 'select', required: true, options: [
      { value: '1-3months', label: '1-3 months' },
      { value: '3-6months', label: '3-6 months' },
      { value: '6-12months', label: '6-12 months' },
      { value: '12+months', label: '12+ months' },
      { value: 'flexible', label: 'Flexible' }
    ]},
    { name: 'features', label: 'Key Features', type: 'textarea', required: false, placeholder: 'List any specific features or requirements...' }
  ];

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      title: 'Email Us',
      details: 'info@elegantcodes.com',
      description: 'Get in touch via email'
    },
    {
      icon: PhoneIcon,
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Speak with our team'
    },
    {
      icon: MapPinIcon,
      title: 'Visit Us',
      details: 'Nairobi, Kenya',
      description: 'Schedule a meeting'
    },
    {
      icon: ClockIcon,
      title: 'Business Hours',
      details: 'Mon - Fri: 9AM - 6PM',
      description: 'EAT Timezone'
    }
  ];

  return (
    <>
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Let's Build Something
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Amazing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your ideas into reality? Whether you need a quick consultation or a detailed project quote, 
              we're here to help you succeed. Get in touch and let's discuss how we can bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We're here to help and answer any questions you might have. 
                  We look forward to hearing from you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-lg font-medium text-blue-600 mb-1">{item.details}</p>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Contact Methods */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Quick Contact Options</h4>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/1234567890?text=Hello! I'm interested in your services."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-green-600 hover:text-green-700 transition-colors"
                  >
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </a>
                  <a 
                    href="mailto:info@elegantcodes.com"
                    className="flex items-center space-x-3 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <EnvelopeIcon className="w-5 h-5" />
                    <span>Send Direct Email</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Form Section */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              {/* Tab Navigation */}
              <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8">
                <button
                  onClick={() => setActiveTab('contact')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === 'contact'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <ChatBubbleLeftRightIcon className="w-5 h-5" />
                    <span>Contact Us</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('quote')}
                  className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                    activeTab === 'quote'
                      ? 'bg-white text-blue-600 shadow-md'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <div className="flex items-center justify-center space-x-2">
                    <DocumentTextIcon className="w-5 h-5" />
                    <span>Get Quote</span>
                  </div>
                </button>
              </div>

              {/* Form Content */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                {activeTab === 'contact' ? (
                  <UnifiedForm
                    formType="contact"
                    title="Send us a Message"
                    subtitle="We'd love to hear from you. Send us a message and we'll respond as soon as possible."
                    submitText="Send Message"
                    fields={contactFields}
                    onSuccess={handleSuccess}
                    onError={handleError}
                    showWhatsApp={true}
                    showPhone={true}
                  />
                ) : (
                  <UnifiedForm
                    formType="quote"
                    title="Request a Project Quote"
                    subtitle="Tell us about your project and we'll provide you with a detailed, customized quote."
                    submitText="Get Free Quote"
                    fields={quoteFields}
                    onSuccess={handleSuccess}
                    onError={handleError}
                    showWhatsApp={true}
                    showPhone={true}
                  />
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
        title={activeTab === 'contact' ? "Message Sent Successfully!" : "Quote Request Sent Successfully!"}
        message={
          activeTab === 'contact' 
            ? "Thank you for your message! We've received it and will get back to you within 24 hours. We're excited to help you with your project!"
            : "Thank you for your quote request! Our expert team will review your project details and get back to you with a comprehensive, detailed quote within 24 hours. We're excited to help bring your vision to life!"
        }
      />
    </>
  );
} 