'use client';

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
  templateId: string;
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
  templateId,
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
      // Initialize EmailJS
      emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!);

      // Prepare template parameters
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        company: data.company || 'Not specified',
        project_type: data.projectType || 'Not specified',
        phone: data.phone || 'Not provided',
        budget: data.budget || 'Not specified',
        timeline: data.timeline || 'Not specified',
        message: data.message,
        to_name: 'ElegantCodes Team'
      };

      // Send email
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        templateId,
        templateParams
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        reset();
        onSuccess?.();
        
        // Auto-hide success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle');
        }, 5000);
      } else {
        throw new Error('Failed to send email');
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
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-poppins">
          {title}
        </h2>
        <p className="text-lg text-slate-300 font-inter">
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
          <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">
            Full Name *
          </label>
          <input
            {...register('name', { 
              required: 'Name is required',
              minLength: { value: 2, message: 'Name must be at least 2 characters' }
            })}
            type="text"
            id="name"
            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#D4A017] transition-all duration-300 ${
              errors.name ? 'border-red-400' : ''
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-400 flex items-center"
            >
              <i className="ri-error-warning-line mr-1"></i>
              {errors.name.message}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
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
            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#D4A017] transition-all duration-300 ${
              errors.email ? 'border-red-400' : ''
            }`}
            placeholder="Enter your email address"
          />
          {errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-400 flex items-center"
            >
              <i className="ri-error-warning-line mr-1"></i>
              {errors.email.message}
            </motion.p>
          )}
        </div>

        {/* Phone Field */}
        {showPhone && (
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
              Phone Number
            </label>
            <input
              {...register('phone')}
              type="tel"
              id="phone"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#D4A017] transition-all duration-300"
              placeholder="Enter your phone number (optional)"
            />
          </div>
        )}

        {/* Company Field */}
        {showCompany && (
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
              Company Name
            </label>
            <input
              {...register('company')}
              type="text"
              id="company"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#D4A017] transition-all duration-300"
              placeholder="Enter your company name (optional)"
            />
          </div>
        )}

        {/* Project Type Field */}
        {showProjectType && (
          <div>
            <label htmlFor="projectType" className="block text-sm font-semibold text-white mb-2">
              Project Type *
            </label>
            <select
              {...register('projectType', { required: 'Please select a project type' })}
              id="projectType"
              className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#D4A017] transition-all duration-300 appearance-none cursor-pointer ${
                errors.projectType ? 'border-red-400' : ''
              }`}
            >
              <option value="">Select project type</option>
              {projectTypes.map((type) => (
                <option key={type.value} value={type.value} className="bg-slate-800 text-white">
                  {type.label}
                </option>
              ))}
            </select>
            {errors.projectType && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-1 text-sm text-red-400 flex items-center"
              >
                <i className="ri-error-warning-line mr-1"></i>
                {errors.projectType.message}
              </motion.p>
            )}
          </div>
        )}

        {/* Budget Field */}
        {showBudget && (
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-white mb-2">
              Budget Range
            </label>
            <select
              {...register('budget')}
              id="budget"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#D4A017] transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((budget) => (
                <option key={budget.value} value={budget.value} className="bg-slate-800 text-white">
                  {budget.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Timeline Field */}
        {showTimeline && (
          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-white mb-2">
              Project Timeline
            </label>
            <select
              {...register('timeline')}
              id="timeline"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white focus:outline-none focus:border-[#D4A017] transition-all duration-300 appearance-none cursor-pointer"
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((timeline) => (
                <option key={timeline.value} value={timeline.value} className="bg-slate-800 text-white">
                  {timeline.label}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
            Message *
          </label>
          <textarea
            {...register('message', { 
              required: 'Message is required',
              minLength: { value: 10, message: 'Message must be at least 10 characters' }
            })}
            id="message"
            rows={6}
            className={`w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-[#D4A017] transition-all duration-300 resize-none ${
              errors.message ? 'border-red-400' : ''
            }`}
            placeholder="Tell us about your project or inquiry..."
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-1 text-sm text-red-400 flex items-center"
            >
              <i className="ri-error-warning-line mr-1"></i>
              {errors.message.message}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full bg-gradient-to-r from-[#D4A017] to-[#F4D03F] text-[#1A2A44] py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 transform hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-[#1A2A44] border-t-transparent mr-2"></div>
              Sending...
            </div>
          ) : (
            submitText
          )}
        </motion.button>

        {/* Status Messages */}
        <AnimatePresence>
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center"
            >
              <i className="ri-check-line mr-2"></i>
              Message sent successfully! We'll get back to you soon.
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center"
            >
              <i className="ri-error-warning-line mr-2"></i>
              {errorMessage || 'Failed to send message. Please try again.'}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </motion.div>
  );
} 