
'use client';

import { useState } from 'react';
import { FormField, SubmitButton, ProgressIndicator } from './FormValidation';
import SuccessModal from './SuccessModal';

export default function QuoteSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const totalSteps = 3;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
    setCurrentStep(1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
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

  const projectTypeOptions = [
    { value: 'web-app', label: 'Web Application' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'pos', label: 'POS System' },
    { value: 'crm', label: 'CRM System' },
    { value: 'erp', label: 'ERP Solution' },
    { value: 'other', label: 'Other' },
  ];

  const budgetOptions = [
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-30k', label: '$15,000 - $30,000' },
    { value: '30k-50k', label: '$30,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
  ];

  const timelineOptions = [
    { value: '1-3months', label: '1-3 Months' },
    { value: '3-6months', label: '3-6 Months' },
    { value: '6-12months', label: '6-12 Months' },
    { value: '12months+', label: '12+ Months' },
  ];

  return (
    <section id="quote" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 font-poppins">
            Get Your <span className="text-amber-500">Free Quote</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
            Ready to bring your project to life? Fill out our detailed quote form and receive 
            a comprehensive proposal tailored to your specific needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-slate-50 rounded-xl hover:shadow-lg transition-all duration-300 group transform hover:scale-105">
              <div className="w-16 h-16 flex items-center justify-center bg-amber-500 rounded-xl mx-auto mb-4 group-hover:bg-amber-400 transition-colors duration-200">
                <i className={`${feature.icon} text-2xl text-slate-900`}></i>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2 font-poppins">{feature.title}</h3>
              <p className="text-slate-600 text-sm font-inter">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-8 lg:p-12">
            <ProgressIndicator currentStep={currentStep} totalSteps={totalSteps} />
            
            <form id="quote-form" onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-name" className="block text-white font-semibold mb-2 font-inter">
                        Full Name *
                      </label>
                      <FormField
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        required
                        validation={{ minLength: 2 }}
                        className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-email" className="block text-white font-semibold mb-2 font-inter">
                        Email Address *
                      </label>
                      <FormField
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                        validation={{ 
                          pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: 'Please enter a valid email address'
                        }}
                        className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="quote-phone" className="block text-white font-semibold mb-2 font-inter">
                        Phone Number
                        <span className="ml-2 text-amber-400 cursor-help" title="We'll use this to schedule a consultation call">
                          <i className="ri-information-line"></i>
                        </span>
                      </label>
                      <FormField
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-company" className="block text-white font-semibold mb-2 font-inter">
                        Company Name
                      </label>
                      <FormField
                        name="company"
                        type="text"
                        placeholder="Your company"
                        className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Project Details */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                    Project Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="quote-projectType" className="block text-white font-semibold mb-2 font-inter">
                        Project Type *
                      </label>
                      <FormField
                        name="projectType"
                        type="select"
                        placeholder="Select project type"
                        required
                        options={projectTypeOptions}
                        className="bg-slate-800 border-slate-700 text-white focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-budget" className="block text-white font-semibold mb-2 font-inter">
                        Budget Range
                        <span className="ml-2 text-amber-400 cursor-help" title="This helps us propose the best solution for your budget">
                          <i className="ri-information-line"></i>
                        </span>
                      </label>
                      <FormField
                        name="budget"
                        type="select"
                        placeholder="Select budget range"
                        options={budgetOptions}
                        className="bg-slate-800 border-slate-700 text-white focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="quote-timeline" className="block text-white font-semibold mb-2 font-inter">
                        Timeline
                      </label>
                      <FormField
                        name="timeline"
                        type="select"
                        placeholder="Select timeline"
                        options={timelineOptions}
                        className="bg-slate-800 border-slate-700 text-white focus:border-amber-400"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Project Description */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6 font-poppins">
                    Project Description
                  </h3>
                  
                  <div>
                    <label htmlFor="quote-description" className="block text-white font-semibold mb-2 font-inter">
                      Project Description *
                    </label>
                    <FormField
                      name="description"
                      type="textarea"
                      placeholder="Please provide detailed information about your project requirements, features needed, target audience, and any specific technologies or integrations you have in mind..."
                      required
                      rows={6}
                      validation={{ 
                        maxLength: 500,
                        minLength: 20 
                      }}
                      className="bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:border-amber-400"
                    />
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between items-center">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
                  >
                    <i className="ri-arrow-left-line mr-2"></i>
                    Previous
                  </button>
                )}
                
                <div className="ml-auto">
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-200 cursor-pointer transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
                    >
                      Next
                      <i className="ri-arrow-right-line ml-2"></i>
                    </button>
                  ) : (
                    <SubmitButton isSubmitting={isSubmitting}>
                      Get Free Quote
                    </SubmitButton>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>

        <SuccessModal
          isOpen={showSuccess}
          onClose={() => setShowSuccess(false)}
          title="Quote Request Submitted!"
          message="Thank you for your detailed information! We'll analyze your requirements and send you a comprehensive quote within 24 hours."
          actionButton={{
            text: "Schedule Consultation",
            action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
          }}
        />
      </div>
    </section>
  );
}
