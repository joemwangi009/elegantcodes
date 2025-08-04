
'use client';

import { useState, useEffect } from 'react';

interface FormValidationProps {
  children: React.ReactNode;
  onSubmit: (data: any) => void;
  className?: string;
}

interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message?: string;
}

interface FieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validation?: ValidationRule;
  className?: string;
  children?: React.ReactNode;
  rows?: number;
  options?: { value: string; label: string }[];
}

export function FormField({ name, type = 'text', placeholder, required, validation, className, children, rows, options }: FieldProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [touched, setTouched] = useState(false);

  const validateField = (fieldValue: string) => {
    if (required && !fieldValue.trim()) {
      return 'This field is required';
    }
    
    if (validation?.minLength && fieldValue.length < validation.minLength) {
      return `Minimum ${validation.minLength} characters required`;
    }
    
    if (validation?.maxLength && fieldValue.length > validation.maxLength) {
      return `Maximum ${validation.maxLength} characters allowed`;
    }
    
    if (validation?.pattern && !validation.pattern.test(fieldValue)) {
      return validation.message || 'Invalid format';
    }
    
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    
    if (touched) {
      setError(validateField(newValue));
    }
  };

  const handleBlur = () => {
    setTouched(true);
    setError(validateField(value));
  };

  const inputClassName = `w-full px-4 py-3 border rounded-lg transition-colors duration-200 focus:outline-none ${
    error 
      ? 'border-red-500 bg-red-50 focus:border-red-500' 
      : 'border-slate-300 bg-white focus:border-amber-400'
  } ${className}`;

  if (type === 'textarea') {
    return (
      <div className="relative">
        <textarea
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          required={required}
          rows={rows || 4}
          className={inputClassName}
          maxLength={validation?.maxLength}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
        {validation?.maxLength && (
          <div className="absolute bottom-2 right-2 text-xs text-slate-500">
            {value.length}/{validation.maxLength}
          </div>
        )}
        {error && (
          <div id={`${name}-error`} className="mt-1 text-sm text-red-600 flex items-center">
            <i className="ri-error-warning-line mr-1"></i>
            {error}
          </div>
        )}
      </div>
    );
  }

  if (type === 'select') {
    return (
      <div className="relative">
        <select
          name={name}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          required={required}
          className={`${inputClassName} pr-8 appearance-none cursor-pointer`}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <option value="">{placeholder}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
          <i className="ri-arrow-down-s-line text-slate-400"></i>
        </div>
        {error && (
          <div id={`${name}-error`} className="mt-1 text-sm text-red-600 flex items-center">
            <i className="ri-error-warning-line mr-1"></i>
            {error}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        required={required}
        className={inputClassName}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
      />
      {error && (
        <div id={`${name}-error`} className="mt-1 text-sm text-red-600 flex items-center">
          <i className="ri-error-warning-line mr-1"></i>
          {error}
        </div>
      )}
    </div>
  );
}

export function ProgressIndicator({ currentStep, totalSteps }: { currentStep: number; totalSteps: number }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-slate-600">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-slate-600">
          {Math.round((currentStep / totalSteps) * 100)}%
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2">
        <div 
          className="bg-amber-500 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export function SubmitButton({ isSubmitting, children, className = '' }: { 
  isSubmitting: boolean; 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-400 text-slate-900 py-4 px-8 rounded-lg font-bold text-lg transition-all duration-200 whitespace-nowrap cursor-pointer transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed ${className}`}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-slate-900 border-t-transparent mr-2"></div>
          Processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
}
