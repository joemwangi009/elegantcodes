'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setEmail('');
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-check-line text-2xl text-amber-600"></i>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-amber-100">
          You've successfully subscribed to our newsletter. Check your inbox for a welcome email.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-3">Stay Updated</h3>
        <p className="text-slate-300">
          Get the latest insights on software development, e-commerce, and digital transformation 
          delivered directly to your inbox.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="flex-1 px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={isLoading || !email}
            className="bg-amber-500 hover:bg-amber-600 disabled:bg-slate-600 text-slate-900 hover:text-slate-900 disabled:text-slate-400 px-8 py-3 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer flex items-center justify-center min-w-[140px]"
          >
            {isLoading ? (
              <>
                <i className="ri-loader-4-line animate-spin mr-2"></i>
                Subscribing...
              </>
            ) : (
              <>
                Subscribe
                <i className="ri-arrow-right-line ml-2"></i>
              </>
            )}
          </button>
        </div>
        
        <div className="flex items-center justify-center space-x-4 text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <i className="ri-shield-check-line text-amber-500"></i>
            <span>No spam, ever</span>
          </div>
          <div className="flex items-center space-x-2">
            <i className="ri-mail-line text-amber-500"></i>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-slate-700">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-amber-500">10K+</div>
            <div className="text-sm text-slate-400">Subscribers</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-500">Weekly</div>
            <div className="text-sm text-slate-400">Updates</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-amber-500">0%</div>
            <div className="text-sm text-slate-400">Spam</div>
          </div>
        </div>
      </div>
    </div>
  );
}