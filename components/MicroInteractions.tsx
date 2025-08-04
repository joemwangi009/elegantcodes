
'use client';

import { useState } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  href?: string;
}

export function AnimatedButton({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  disabled = false,
  loading = false,
  href
}: ButtonProps) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (disabled || loading) return;
    
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 200);
    
    if (onClick) {
      onClick();
    }
  };

  const baseClasses = 'font-semibold transition-all duration-200 cursor-pointer transform focus:outline-none focus:ring-2 focus:ring-opacity-50 whitespace-nowrap relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-amber-500 hover:bg-amber-600 text-slate-900 focus:ring-amber-400 hover:shadow-lg',
    secondary: 'bg-slate-700 hover:bg-slate-600 text-white focus:ring-slate-400',
    outline: 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 focus:ring-amber-400'
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm rounded-md',
    md: 'px-6 py-3 text-base rounded-lg',
    lg: 'px-8 py-4 text-lg rounded-xl'
  };

  const animationClasses = `
    ${!disabled && !loading ? 'hover:scale-105 active:scale-95' : ''}
    ${isClicked ? 'animate-pulse' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
  `;

  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${animationClasses} ${className}`;

  const content = (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-inherit">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-current border-t-transparent"></div>
        </div>
      )}
      <span className={loading ? 'invisible' : ''}>{children}</span>
      
      {/* Ripple effect */}
      <span className="absolute inset-0 overflow-hidden rounded-inherit">
        <span className="absolute inset-0 opacity-0 hover:opacity-10 bg-white transition-opacity duration-200"></span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses} onClick={handleClick}>
        {content}
      </a>
    );
  }

  return (
    <button 
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled || loading}
    >
      {content}
    </button>
  );
}

export function HoverCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}

export function GlowEffect({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      {children}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-amber-400 to-orange-500 rounded-inherit opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
    </div>
  );
}

export function FloatingIcon({ icon, className = '' }: { icon: string; className?: string }) {
  return (
    <div className={`animate-bounce hover:animate-none transition-all duration-300 hover:scale-110 ${className}`}>
      <i className={icon}></i>
    </div>
  );
}

export function ProgressRing({ 
  progress, 
  size = 60, 
  strokeWidth = 4, 
  color = '#f59e0b',
  backgroundColor = '#e5e7eb'
}: {
  progress: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="relative inline-flex items-center justify-center">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          fill="none"
          className="transition-all duration-300 ease-out"
        />
      </svg>
      <span className="absolute text-sm font-semibold">{Math.round(progress)}%</span>
    </div>
  );
}

export function PulseLoader({ size = 'md', color = 'amber' }: { size?: 'sm' | 'md' | 'lg'; color?: 'amber' | 'blue' | 'green' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const colorClasses = {
    amber: 'bg-amber-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500'
  };

  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-pulse`}
          style={{
            animationDelay: `${i * 0.15}s`,
            animationDuration: '0.6s'
          }}
        ></div>
      ))}
    </div>
  );
}

export function TypewriterText({ 
  text, 
  speed = 100, 
  className = '' 
}: { 
  text: string; 
  speed?: number; 
  className?: string; 
}) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useState(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  });

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}
