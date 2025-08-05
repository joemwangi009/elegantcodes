
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType: 'contact'
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      if (result.success) {
        setSubmitStatus('success');
        reset();
        setIsSubmitted(true);
        
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Email submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
              className="bg-gradient-to-r from-[#D4A017] to-[#F4D03F] text-[#1A2A44] px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
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
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-mail-line text-amber-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a href="mailto:info@elegantcodes.com" className="text-amber-600 hover:text-amber-700 transition-colors">
                    info@elegantcodes.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-phone-line text-amber-600 text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                  <a href="tel:+1234567890" className="text-amber-600 hover:text-amber-700 transition-colors">
                    +1 (234) 567-8900
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-map-pin-line text-amber-600 text-xl"></i>
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
                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="ri-time-line text-amber-600 text-xl"></i>
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

            <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6">
              <h4 className="font-semibold text-slate-900 mb-3">Why Choose ElegantCodes?</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 mr-2"></i>
                  Expert team with 10+ years experience
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 mr-2"></i>
                  Custom solutions tailored to your needs
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 mr-2"></i>
                  Fast turnaround times
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 mr-2"></i>
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center">
                  <i className="ri-check-line text-amber-600 mr-2"></i>
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
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-200"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Send Us a Message</h2>
              <p className="text-slate-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                  Full Name *
                </label>
                <input
                  {...register('name', { 
                    required: 'Name is required',
                    minLength: { value: 2, message: 'Name must be at least 2 characters' }
                  })}
                  type="text"
                  id="name"
                  className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 ${
                    errors.name ? 'border-red-400 bg-red-50' : ''
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center"
                  >
                    <i className="ri-error-warning-line mr-1"></i>
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Please enter a valid email address'
                    }
                  })}
                  type="email"
                  id="email"
                  className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 ${
                    errors.email ? 'border-red-400 bg-red-50' : ''
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center"
                  >
                    <i className="ri-error-warning-line mr-1"></i>
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-slate-900 mb-2">
                  Company
                </label>
                <input
                  {...register('company')}
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300"
                  placeholder="Enter your company name (optional)"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300"
                  placeholder="Enter your phone number (optional)"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  id="message"
                  rows={5}
                  className={`w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 resize-none ${
                    errors.message ? 'border-red-400 bg-red-50' : ''
                  }`}
                  placeholder="Tell us about your project or inquiry..."
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-1 text-sm text-red-500 flex items-center"
                  >
                    <i className="ri-error-warning-line mr-1"></i>
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    submitStatus === 'success' ? 'bg-green-500' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-2"></i>
                      Sending Message...
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center justify-center">
                      <i className="ri-check-line mr-2"></i>
                      Message Sent!
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl"
                >
                  <p className="text-red-600 text-sm flex items-center">
                    <i className="ri-error-warning-line mr-2"></i>
                    {errorMessage}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
