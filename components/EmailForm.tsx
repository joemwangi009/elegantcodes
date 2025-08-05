'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailFormData {
  name: string;
  email: string;
  company?: string;
  projectType?: string;
  message: string;
  phone?: string;
  budget?: string;
  timeline?: string;
}

interface EmailFormProps {
  formType: 'contact' | 'quote' | 'portfolio';
  title: string;
  subtitle: string;
  submitText: string;
  showCompany?: boolean;
  showProjectType?: boolean;
  showPhone?: boolean;
  showBudget?: boolean;
  showTimeline?: boolean;
  className?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const projectTypes = [
  { value: 'custom-apps', label: 'Custom Applications' },
  { value: 'ecommerce', label: 'E-commerce Solutions' },
  { value: 'pos-systems', label: 'POS Systems' },
  { value: 'automation', label: 'Business Automation' },
  { value: 'web-development', label: 'Web Development' },
  { value: 'mobile-apps', label: 'Mobile Applications' },
  { value: 'consultation', label: 'Consultation' },
  { value: 'other', label: 'Other' }
];

const budgetRanges = [
  { value: 'under-5k', label: 'Under $5,000' },
  { value: '5k-10k', label: '$5,000 - $10,000' },
  { value: '10k-25k', label: '$10,000 - $25,000' },
  { value: '25k-50k', label: '$25,000 - $50,000' },
  { value: '50k-100k', label: '$50,000 - $100,000' },
  { value: 'over-100k', label: 'Over $100,000' }
];

const timelineOptions = [
  { value: 'asap', label: 'ASAP' },
  { value: '1-2-weeks', label: '1-2 weeks' },
  { value: '1-month', label: '1 month' },
  { value: '2-3-months', label: '2-3 months' },
  { value: '3-6-months', label: '3-6 months' },
  { value: '6-months-plus', label: '6+ months' }
];

export default function EmailForm({
  formType,
  title,
  subtitle,
  submitText,
  showCompany = false,
  showProjectType = false,
  showPhone = false,
  showBudget = false,
  showTimeline = false,
  className = '',
  onSuccess,
  onError
}: EmailFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<EmailFormData>();

  const onSubmit = async (data: EmailFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Send email using our Resend API
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          formType
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      if (result.success) {
        setSubmitStatus('success');
        reset();
        onSuccess?.();
        
        // Auto-hide success message after 5 seconds
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
      onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`max-w-2xl mx-auto ${className}`}
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 font-poppins">
          {title}
        </h2>
        <p className="text-lg text-slate-600 font-inter">
          {subtitle}
        </p>
      </div>

      <motion.form
        ref={formRef}
        variants={formVariants}
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
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
        {showCompany && (
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
        )}

        {/* Phone Field */}
        {showPhone && (
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
        )}

        {/* Project Type Field */}
        {showProjectType && (
          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold text-slate-900 mb-2">
              Project Type
            </label>
            <select
              {...register('projectType')}
              id="projectType"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300"
            >
              <option value="">Select project type</option>
              <option value="web-application">Web Application</option>
              <option value="mobile-app">Mobile App</option>
              <option value="ecommerce">E-commerce Platform</option>
              <option value="crm-system">CRM System</option>
              <option value="pos-system">POS System</option>
              <option value="custom-software">Custom Software</option>
              <option value="other">Other</option>
            </select>
          </div>
        )}

        {/* Budget Field */}
        {showBudget && (
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-slate-900 mb-2">
              Budget Range
            </label>
            <select
              {...register('budget')}
              id="budget"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300"
            >
              <option value="">Select budget range</option>
              <option value="under-10k">Under $10,000</option>
              <option value="10k-25k">$10,000 - $25,000</option>
              <option value="25k-50k">$25,000 - $50,000</option>
              <option value="50k-100k">$50,000 - $100,000</option>
              <option value="over-100k">Over $100,000</option>
            </select>
          </div>
        )}

        {/* Timeline Field */}
        {showTimeline && (
          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-slate-900 mb-2">
              Timeline
            </label>
            <select
              {...register('timeline')}
              id="timeline"
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:border-amber-500 focus:bg-white transition-all duration-300"
            >
              <option value="">Select timeline</option>
              <option value="1-2-months">1-2 months</option>
              <option value="3-4-months">3-4 months</option>
              <option value="5-6-months">5-6 months</option>
              <option value="6-months-plus">6+ months</option>
            </select>
          </div>
        )}

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
                Sending...
              </div>
            ) : submitStatus === 'success' ? (
              <div className="flex items-center justify-center">
                <i className="ri-check-line mr-2"></i>
                Sent Successfully!
              </div>
            ) : (
              submitText
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
      </motion.form>
    </motion.div>
  );
} 