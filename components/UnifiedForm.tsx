'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'textarea' | 'select' | 'tel';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: RegExp;
  };
}

export interface UnifiedFormProps {
  formType: 'contact' | 'quote' | 'portfolio' | 'newsletter' | 'custom';
  title: string;
  subtitle?: string;
  submitText?: string;
  fields: FormField[];
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
  className?: string;
  showWhatsApp?: boolean;
  showPhone?: boolean;
}

export default function UnifiedForm({
  formType,
  title,
  subtitle,
  submitText = 'Submit',
  fields,
  onSuccess,
  onError,
  className = '',
  showWhatsApp = false,
  showPhone = false
}: UnifiedFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setIsErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm();

  const contactMethod = watch('contactMethod');

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setIsErrorMessage('');

    try {
      // Handle WhatsApp contact method
      if (showWhatsApp && data.contactMethod === 'whatsapp') {
        const whatsappMessage = `Hello! I'm interested in your services.\n\n${Object.entries(data)
          .filter(([key, value]) => value && key !== 'contactMethod')
          .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
          .join('\n')}`;
        
        const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');
        setSubmitStatus('success');
        reset();
        onSuccess?.(data);
        setTimeout(() => setSubmitStatus('idle'), 5000);
        return;
      }

      // Handle phone contact method
      if (showPhone && data.contactMethod === 'phone') {
        window.location.href = `tel:+1234567890`;
        setSubmitStatus('success');
        reset();
        onSuccess?.(data);
        setTimeout(() => setSubmitStatus('idle'), 5000);
        return;
      }

      // Handle email submission - Send ALL form data
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...data, // Send ALL form data
          formType: formType,
          subject: `New ${formType} form submission from ${data.name}`
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send email');
      }

      if (result.success) {
        setSubmitStatus('success');
        reset();
        onSuccess?.(data);
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error(result.error || 'Failed to send email');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      const errorMsg = error instanceof Error ? error.message : 'Failed to submit form. Please try again.';
      setIsErrorMessage(errorMsg);
      onError?.(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderField = (field: FormField) => {
    const baseClasses = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
    const errorClasses = errors[field.name] ? "border-red-500 focus:ring-red-500" : "";

    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            {...register(field.name, {
              required: field.required && `${field.label} is required`,
              minLength: field.validation?.minLength && {
                value: field.validation.minLength,
                message: `${field.label} must be at least ${field.validation.minLength} characters`
              },
              maxLength: field.validation?.maxLength && {
                value: field.validation.maxLength,
                message: `${field.label} must be no more than ${field.validation.maxLength} characters`
              }
            })}
            placeholder={field.placeholder}
            className={`${baseClasses} ${errorClasses} min-h-[120px] resize-vertical`}
          />
        );

      case 'select':
        return (
          <select
            {...register(field.name, {
              required: field.required && `${field.label} is required`
            })}
            className={`${baseClasses} ${errorClasses}`}
          >
            <option value="">Select {field.label}</option>
            {field.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case 'tel':
        return (
          <input
            type="tel"
            {...register(field.name, {
              required: field.required && `${field.label} is required`,
              pattern: field.validation?.pattern && {
                value: field.validation.pattern,
                message: `Please enter a valid ${field.label.toLowerCase()}`
              }
            })}
            placeholder={field.placeholder}
            className={`${baseClasses} ${errorClasses}`}
          />
        );

      default:
        return (
          <input
            type={field.type}
            {...register(field.name, {
              required: field.required && `${field.label} is required`,
              pattern: field.type === 'email' ? {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
              } : undefined,
              minLength: field.validation?.minLength && {
                value: field.validation.minLength,
                message: `${field.label} must be at least ${field.validation.minLength} characters`
              },
              maxLength: field.validation?.maxLength && {
                value: field.validation.maxLength,
                message: `${field.label} must be no more than ${field.validation.maxLength} characters`
              }
            })}
            placeholder={field.placeholder}
            className={`${baseClasses} ${errorClasses}`}
          />
        );
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl p-8 ${className}`}>
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{title}</h3>
        {subtitle && (
          <p className="text-lg text-gray-600">{subtitle}</p>
        )}
      </div>

      {/* Contact Method Selection */}
      {(showWhatsApp || showPhone) && (
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            How would you like to be contacted?
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
              <input
                type="radio"
                value="email"
                {...register('contactMethod', { required: true })}
                className="mr-2 text-blue-600"
                defaultChecked
              />
              <span className="text-sm font-medium">Email</span>
            </label>
            
            {showWhatsApp && (
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors">
                <input
                  type="radio"
                  value="whatsapp"
                  {...register('contactMethod', { required: true })}
                  className="mr-2 text-green-600"
                />
                <span className="text-sm font-medium">WhatsApp</span>
              </label>
            )}
            
            {showPhone && (
              <label className="flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-purple-500 transition-colors">
                <input
                  type="radio"
                  value="phone"
                  {...register('contactMethod', { required: true })}
                  className="mr-2 text-purple-600"
                />
                <span className="text-sm font-medium">Phone Call</span>
              </label>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {field.label}
              {field.required && <span className="text-red-500 ml-1">*</span>}
            </label>
            {renderField(field)}
            {errors[field.name] && (
              <p className="mt-1 text-sm text-red-600">
                {errors[field.name]?.message as string}
              </p>
            )}
          </div>
        ))}

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-200 ${
            isSubmitting
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
          }`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Sending...
            </div>
          ) : (
            submitText
          )}
        </motion.button>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center"
          >
            ✓ {formType === 'contact' ? 'Message sent successfully!' : 
                formType === 'quote' ? 'Quote request sent successfully!' : 
                'Form submitted successfully!'}
          </motion.div>
        )}

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-center"
          >
            ✗ {errorMessage}
          </motion.div>
        )}
      </form>
    </div>
  );
} 