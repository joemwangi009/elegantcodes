
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon, 
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import UnifiedForm, { FormField } from './UnifiedForm';

export default function ContactSection() {
  const contactFields: FormField[] = [
    {
      name: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      placeholder: 'Enter your full name',
      validation: { minLength: 2 }
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      placeholder: 'Enter your email address'
    },
    {
      name: 'company',
      label: 'Company',
      type: 'text',
      required: false,
      placeholder: 'Enter your company name (optional)'
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'tel',
      required: false,
      placeholder: 'Enter your phone number (optional)'
    },
    {
      name: 'projectType',
      label: 'Project Type',
      type: 'select',
      required: false,
      options: [
        { value: 'web-app', label: 'Web Application' },
        { value: 'mobile-app', label: 'Mobile App' },
        { value: 'ecommerce', label: 'E-commerce Platform' },
        { value: 'pos-system', label: 'POS System' },
        { value: 'crm', label: 'CRM System' },
        { value: 'other', label: 'Other' }
      ]
    },
    {
      name: 'budget',
      label: 'Budget Range',
      type: 'select',
      required: false,
      options: [
        { value: '5k-15k', label: '$5,000 - $15,000' },
        { value: '15k-50k', label: '$15,000 - $50,000' },
        { value: '50k-100k', label: '$50,000 - $100,000' },
        { value: '100k+', label: '$100,000+' },
        { value: 'discuss', label: "Let's discuss" }
      ]
    },
    {
      name: 'timeline',
      label: 'Timeline',
      type: 'select',
      required: false,
      options: [
        { value: '1-3months', label: '1-3 months' },
        { value: '3-6months', label: '3-6 months' },
        { value: '6-12months', label: '6-12 months' },
        { value: '12+months', label: '12+ months' },
        { value: 'flexible', label: 'Flexible' }
      ]
    },
    {
      name: 'message',
      label: 'Message',
      type: 'textarea',
      required: true,
      placeholder: 'Tell us about your project or inquiry...',
      validation: { minLength: 10 }
    }
  ];

  const handleSuccess = (data: any) => {
    console.log('Contact form submitted successfully:', data);
  };

  const handleError = (error: string) => {
    console.error('Contact form error:', error);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-amber-100 to-orange-200 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6"
          >
            <ChatBubbleLeftRightIcon className="w-4 h-4 mr-2" />
            Get In Touch
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
          >
            Let's Build Something
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800"> Amazing</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Ready to transform your ideas into reality? We're here to help you create exceptional digital experiences that drive results.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Methods</h3>
              
              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Email Us</h4>
                  <p className="text-gray-600 mb-2">Get in touch via email for detailed inquiries</p>
                  <a href="mailto:info@elegantcodes.com" className="text-blue-600 hover:text-blue-700 font-medium">
                    info@elegantcodes.com
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <ChatBubbleLeftRightIcon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">WhatsApp</h4>
                  <p className="text-gray-600 mb-2">Quick chat for immediate assistance</p>
                  <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 font-medium">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">Call Us</h4>
                  <p className="text-gray-600 mb-2">Speak directly with our team</p>
                  <a href="tel:+1234567890" className="text-purple-600 hover:text-purple-700 font-medium">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <ClockIcon className="w-6 h-6 text-amber-600" />
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Why Choose ElegantCodes?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Expert development team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Proven track record</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">24/7 support available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">Competitive pricing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <UnifiedForm
              formType="contact"
              title="Send Us a Message"
              subtitle="Fill out the form below and we'll get back to you within 24 hours"
              submitText="Send Message"
              fields={contactFields}
              onSuccess={handleSuccess}
              onError={handleError}
              showWhatsApp={true}
              showPhone={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
