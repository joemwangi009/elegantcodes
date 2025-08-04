
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface UserBehavior {
  viewedServices: string[];
  clickedProjects: string[];
  readArticles: string[];
  lastVisit: number;
  preferences: {
    industry?: string;
    projectType?: string;
    budget?: string;
  };
}

export function PersonalizedServiceRecommendations() {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [userBehavior, setUserBehavior] = useState<UserBehavior | null>(null);

  const services = [
    { id: 'mobile-apps', title: 'Mobile Apps', category: 'Custom Applications', match: ['mobile', 'app', 'ios', 'android'] },
    { id: 'web-apps', title: 'Web Applications', category: 'Custom Applications', match: ['web', 'website', 'dashboard'] },
    { id: 'ecommerce', title: 'E-commerce Solutions', category: 'E-commerce', match: ['shop', 'store', 'retail', 'sales'] },
    { id: 'pos', title: 'POS Systems', category: 'POS Systems', match: ['pos', 'payment', 'checkout', 'retail'] },
    { id: 'crm', title: 'CRM Integration', category: 'Business Automation', match: ['crm', 'customer', 'sales', 'management'] },
  ];

  useEffect(() => {
    // Load user behavior from localStorage
    const savedBehavior = localStorage.getItem('userBehavior');
    if (savedBehavior) {
      const behavior = JSON.parse(savedBehavior);
      setUserBehavior(behavior);
      generateRecommendations(behavior);
    } else {
      // Show popular services for new users
      setRecommendations(services.slice(0, 3));
    }
  }, []);

  const generateRecommendations = (behavior: UserBehavior) => {
    const scored = services.map(service => {
      let score = 0;
      
      // Score based on viewed services
      if (behavior.viewedServices.includes(service.id)) {
        score += 10;
      }
      
      // Score based on category preferences
      behavior.viewedServices.forEach(viewed => {
        const viewedService = services.find(s => s.id === viewed);
        if (viewedService && viewedService.category === service.category) {
          score += 5;
        }
      });
      
      // Score based on industry preferences
      if (behavior.preferences.industry) {
        service.match.forEach(keyword => {
          if (behavior.preferences.industry?.toLowerCase().includes(keyword)) {
            score += 3;
          }
        });
      }
      
      return { ...service, score };
    });
    
    // Sort by score and filter out already viewed
    const filtered = scored
      .filter(service => !behavior.viewedServices.includes(service.id))
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
    
    setRecommendations(filtered.length > 0 ? filtered : services.slice(0, 3));
  };

  const trackServiceView = (serviceId: string) => {
    const behavior = userBehavior || {
      viewedServices: [],
      clickedProjects: [],
      readArticles: [],
      lastVisit: Date.now(),
      preferences: {}
    };
    
    behavior.viewedServices = [...new Set([...behavior.viewedServices, serviceId])];
    behavior.lastVisit = Date.now();
    
    localStorage.setItem('userBehavior', JSON.stringify(behavior));
    setUserBehavior(behavior);
  };

  if (recommendations.length === 0) return null;

  return (
    <div className="bg-gradient-to-r from-slate-50 to-amber-50 rounded-2xl p-8 mb-12">
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg mr-3">
          <i className="ri-user-star-line text-slate-900"></i>
        </div>
        <h3 className="text-2xl font-bold text-slate-900 font-poppins">
          Recommended for You
        </h3>
      </div>
      
      <p className="text-slate-600 mb-6 font-inter">
        Based on your interests, here are services that might be perfect for your needs:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((service) => (
          <div key={service.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-amber-500 text-xs font-semibold uppercase tracking-wide mb-2">
              {service.category}
            </div>
            <h4 className="text-lg font-bold text-slate-900 mb-3 font-poppins">
              {service.title}
            </h4>
            <Link
              href="/services"
              onClick={() => trackServiceView(service.id)}
              className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200 cursor-pointer"
            >
              Learn More
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ReturningUserWelcome() {
  const [isReturning, setIsReturning] = useState(false);
  const [lastVisit, setLastVisit] = useState<string>('');

  useEffect(() => {
    const behavior = localStorage.getItem('userBehavior');
    if (behavior) {
      const parsed = JSON.parse(behavior);
      const daysSince = Math.floor((Date.now() - parsed.lastVisit) / (1000 * 60 * 60 * 24));
      
      if (daysSince > 0 && daysSince < 30) {
        setIsReturning(true);
        setLastVisit(daysSince === 1 ? 'yesterday' : `${daysSince} days ago`);
      }
    }
  }, []);

  if (!isReturning) return null;

  return (
    <div className="bg-amber-500 text-slate-900 p-4 text-center">
      <div className="max-w-7xl mx-auto">
        <p className="font-semibold">
          Welcome back! Your last visit was {lastVisit}. 
          <Link href="#services" className="underline ml-2 hover:no-underline cursor-pointer">
            Continue exploring our services
          </Link>
        </p>
      </div>
    </div>
  );
}
