
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
  contactMethod: 'email' | 'whatsapp' | 'phone';
  projectType?: string;
  budget?: string;
  timeline?: string;
}

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedMethod, setSelectedMethod] = useState<'email' | 'whatsapp' | 'phone'>('email');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    defaultValues: {
      contactMethod: 'email'
    }
  });

  const contactMethod = watch('contactMethod');

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      if (data.contactMethod === 'whatsapp') {
        // Handle WhatsApp submission
        const whatsappMessage = `Hello! I'm interested in your services.\n\nName: ${data.name}\nCompany: ${data.company || 'N/A'}\nPhone: ${data.phone || 'N/A'}\nProject Type: ${data.projectType || 'N/A'}\nBudget: ${data.budget || 'N/A'}\nTimeline: ${data.timeline || 'N/A'}\nMessage: ${data.message}`;
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        setSubmitStatus('success');
        reset();
        setIsSubmitted(true);
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
        return;
      }

      if (data.contactMethod === 'phone') {
        // Handle phone call
        window.location.href = `tel:+1234567890`;
        setSubmitStatus('success');
        reset();
        setIsSubmitted(true);
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
        return;
      }

      // Handle email submission
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
      console.error('Contact submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
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
      <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-100 to-green-200 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white rounded-3xl shadow-2xl p-16 border border-slate-200"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-12 shadow-2xl">
              <i className="ri-check-line text-6xl text-white"></i>
            </div>
            <h2 className="text-5xl font-bold text-slate-900 mb-8 font-poppins">Message Sent Successfully!</h2>
            <p className="text-2xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Thank you for reaching out! We've received your message and will get back to you within 24 hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-12 py-5 rounded-2xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
            >
              Send Another Message
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
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
            <i className="ri-customer-service-2-line mr-3 text-lg"></i>
            Get In Touch
          </motion.div>
          <motion.h2 variants={itemVariants} className="text-6xl lg:text-7xl font-bold text-slate-900 mb-10 font-poppins">
            Let's Build Something
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent block">Extraordinary Together</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-2xl lg:text-3xl text-slate-600 max-w-5xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge software solutions? Our expert team is here to turn your vision into reality with world-class development expertise.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start">
          {/* Contact Information & Features */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-bold text-slate-900 mb-8 font-poppins">Connect With Excellence</h3>
              <p className="text-xl text-slate-600 leading-relaxed">
                Whether you have a specific project in mind or want to explore possibilities, 
                we're here to help you achieve your goals with innovative technology solutions.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="group p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <i className="ri-whatsapp-line text-white text-3xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-3 text-2xl">WhatsApp</h4>
                    <p className="text-slate-600 mb-4 text-lg">Quick responses and instant support</p>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold text-lg transition-colors"
                    >
                      Chat Now
                      <i className="ri-external-link-line ml-3 text-xl"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <i className="ri-mail-line text-white text-3xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-3 text-2xl">Email</h4>
                    <p className="text-slate-600 mb-4 text-lg">Detailed project discussions</p>
                    <a href="mailto:info@elegantcodes.com" className="text-amber-600 hover:text-amber-700 font-semibold text-lg transition-colors">
                      info@elegantcodes.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <i className="ri-phone-line text-white text-3xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-3 text-2xl">Phone</h4>
                    <p className="text-slate-600 mb-4 text-lg">Direct consultation calls</p>
                    <a href="tel:+1234567890" className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors">
                      +1 (234) 567-8900
                    </a>
                  </div>
                </div>
              </div>

              <div className="group p-8 bg-white rounded-3xl border-2 border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl">
                    <i className="ri-map-pin-line text-white text-3xl"></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-900 mb-3 text-2xl">Location</h4>
                    <p className="text-slate-600 mb-4 text-lg">Global reach, local expertise</p>
                    <p className="text-slate-700 font-medium text-lg">
                      San Francisco, CA<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Business Hours */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-3xl p-10 border-2 border-slate-200 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-2xl flex items-center justify-center">
                  <i className="ri-time-line text-white text-2xl"></i>
                </div>
                <h4 className="font-bold text-slate-900 text-2xl">Business Hours</h4>
              </div>
              <div className="space-y-4 text-slate-700 text-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-10 border-2 border-amber-200 shadow-xl">
              <h4 className="font-bold text-slate-900 mb-8 text-2xl">Why Choose ElegantCodes?</h4>
              <div className="space-y-5">
                {[
                  'Expert team with 10+ years experience',
                  'Custom solutions tailored to your needs',
                  'Fast turnaround times and agile development',
                  'Ongoing support and maintenance',
                  'Competitive pricing with no hidden fees',
                  'Proven track record of success'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="ri-check-line text-white text-lg"></i>
                    </div>
                    <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
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
              <div className="w-20 h-20 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-xl">
                <i className="ri-send-plane-line text-white text-3xl"></i>
              </div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">Send Us a Message</h2>
              <p className="text-slate-600 text-xl">
                Choose your preferred contact method and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* Contact Method Selection */}
            <div className="mb-10">
              <label className="block text-base font-bold text-slate-900 mb-6">Preferred Contact Method</label>
              <div className="grid grid-cols-3 gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedMethod('email')}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                    selectedMethod === 'email'
                      ? 'border-amber-500 bg-amber-50 text-amber-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <i className={`ri-mail-line text-2xl ${selectedMethod === 'email' ? 'text-amber-600' : 'text-slate-500'}`}></i>
                    <span className="font-semibold text-sm">Email</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMethod('whatsapp')}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                    selectedMethod === 'whatsapp'
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <i className={`ri-whatsapp-line text-2xl ${selectedMethod === 'whatsapp' ? 'text-green-600' : 'text-slate-500'}`}></i>
                    <span className="font-semibold text-sm">WhatsApp</span>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedMethod('phone')}
                  className={`p-5 rounded-2xl border-2 transition-all duration-300 ${
                    selectedMethod === 'phone'
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-2">
                    <i className={`ri-phone-line text-2xl ${selectedMethod === 'phone' ? 'text-blue-600' : 'text-slate-500'}`}></i>
                    <span className="font-semibold text-sm">Phone</span>
                  </div>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              <input type="hidden" {...register('contactMethod')} value={selectedMethod} />
              
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-base font-bold text-slate-900 mb-4">
                  Full Name *
                </label>
                <div className="relative">
                  <i className="ri-user-line absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                  <input
                    {...register('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                    type="text"
                    id="name"
                    className={`w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 text-lg ${
                      errors.name ? 'border-red-400 bg-red-50' : ''
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-red-500 flex items-center"
                  >
                    <i className="ri-error-warning-line mr-2"></i>
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-base font-bold text-slate-900 mb-4">
                  Email Address *
                </label>
                <div className="relative">
                  <i className="ri-mail-line absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
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
                    className={`w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 text-lg ${
                      errors.email ? 'border-red-400 bg-red-50' : ''
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-red-500 flex items-center"
                  >
                    <i className="ri-error-warning-line mr-2"></i>
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-base font-bold text-slate-900 mb-4">
                  Company
                </label>
                <div className="relative">
                  <i className="ri-building-line absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                  <input
                    {...register('company')}
                    type="text"
                    id="company"
                    className="w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 text-lg"
                    placeholder="Enter your company name (optional)"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-base font-bold text-slate-900 mb-4">
                  Phone Number
                </label>
                <div className="relative">
                  <i className="ri-phone-line absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                  <input
                    {...register('phone')}
                    type="tel"
                    id="phone"
                    className="w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 text-lg"
                    placeholder="Enter your phone number (optional)"
                  />
                </div>
              </div>

              {/* Project Type Field */}
              <div>
                <label htmlFor="projectType" className="block text-base font-bold text-slate-900 mb-4">
                  Project Type
                </label>
                <div className="relative">
                  <i className="ri-briefcase-line absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                  <select
                    {...register('projectType')}
                    id="projectType"
                    className="w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 text-lg"
                  >
                    <option value="">Select project type</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="pos-system">POS System</option>
                    <option value="crm">CRM System</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Budget Field */}
              <div>
                <label htmlFor="budget" className="block text-base font-bold text-slate-900 mb-4">
                  Budget Range
                </label>
                <div className="relative">
                  <i className="ri-money-dollar-circle-line absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                  <select
                    {...register('budget')}
                    id="budget"
                    className="w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 text-lg"
                  >
                    <option value="">Select budget range</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-100k">$50,000 - $100,000</option>
                    <option value="100k+">$100,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
              </div>

              {/* Timeline Field */}
              <div>
                <label htmlFor="timeline" className="block text-base font-bold text-slate-900 mb-4">
                  Timeline
                </label>
                <div className="relative">
                  <i className="ri-calendar-line absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                  <select
                    {...register('timeline')}
                    id="timeline"
                    className="w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 text-lg"
                  >
                    <option value="">Select timeline</option>
                    <option value="1-3months">1-3 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6-12months">6-12 months</option>
                    <option value="12+months">12+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-base font-bold text-slate-900 mb-4">
                  Message *
                </label>
                <div className="relative">
                  <i className="ri-message-2-line absolute left-5 top-6 text-slate-400 text-xl"></i>
                  <textarea
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                    id="message"
                    rows={6}
                    className={`w-full pl-14 pr-5 py-5 bg-slate-50 border-2 border-slate-200 rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300 resize-none text-lg ${
                      errors.message ? 'border-red-400 bg-red-50' : ''
                    }`}
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-sm text-red-500 flex items-center"
                  >
                    <i className="ri-error-warning-line mr-2"></i>
                    {errors.message.message}
                  </motion.p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                    selectedMethod === 'whatsapp'
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-xl'
                      : selectedMethod === 'phone'
                      ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-xl'
                      : 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <i className="ri-loader-4-line animate-spin mr-3 text-2xl"></i>
                      Sending Message...
                    </div>
                  ) : submitStatus === 'success' ? (
                    <div className="flex items-center justify-center">
                      <i className="ri-check-line mr-3 text-2xl"></i>
                      Message Sent!
                    </div>
                  ) : selectedMethod === 'whatsapp' ? (
                    <div className="flex items-center justify-center">
                      <i className="ri-whatsapp-line mr-3 text-2xl"></i>
                      Send via WhatsApp
                    </div>
                  ) : selectedMethod === 'phone' ? (
                    <div className="flex items-center justify-center">
                      <i className="ri-phone-line mr-3 text-2xl"></i>
                      Call Now
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <i className="ri-send-plane-line mr-3 text-2xl"></i>
                      Send Message
                    </div>
                  )}
                </button>
              </div>

              {/* Error Message */}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 p-6 bg-red-50 border-2 border-red-200 rounded-2xl"
                >
                  <p className="text-red-600 text-base flex items-center">
                    <i className="ri-error-warning-line mr-3 text-xl"></i>
                    {errorMessage}
                  </p>
                </motion.div>
              )}

              {/* Form Footer */}
              <div className="text-center pt-6">
                <p className="text-sm text-slate-500">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Privacy Policy</a>
                  {' '}and{' '}
                  <a href="#" className="text-amber-600 hover:text-amber-700 font-medium">Terms of Service</a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
