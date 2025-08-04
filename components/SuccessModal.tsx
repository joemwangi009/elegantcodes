
'use client';

import { useEffect } from 'react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  actionButton?: {
    text: string;
    action: () => void;
  };
}

export default function SuccessModal({ isOpen, onClose, title, message, actionButton }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      
      // Auto close after 5 seconds
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = 'unset';
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100">
        {/* Success Animation */}
        <div className="text-center p-8">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <i className="ri-check-line text-white text-lg"></i>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">
            {title}
          </h3>
          
          <p className="text-slate-600 mb-6 font-inter leading-relaxed">
            {message}
          </p>
          
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-50"
            >
              Close
            </button>
            
            {actionButton && (
              <button
                onClick={() => {
                  actionButton.action();
                  onClose();
                }}
                className="flex-1 bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
              >
                {actionButton.text}
              </button>
            )}
          </div>
        </div>
        
        {/* Progress bar for auto-close */}
        <div className="bg-slate-100 h-1">
          <div 
            className="bg-amber-500 h-1 transition-all duration-75 ease-linear"
            style={{ 
              animation: 'progress 5s linear',
              transformOrigin: 'left'
            }}
          ></div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes progress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </div>
  );
}
