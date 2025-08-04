'use client';

import dynamic from 'next/dynamic';

const ScrollAnimation = dynamic(() => import('@/components/ScrollAnimation'), {
  ssr: false
});

const PersonalizedServiceRecommendations = dynamic(() => import('@/components/PersonalizedContent').then(mod => ({ default: mod.PersonalizedServiceRecommendations })), {
  ssr: false,
  loading: () => <div className="h-32 bg-slate-100 animate-pulse rounded-lg" />
});

const ReturningUserWelcome = dynamic(() => import('@/components/PersonalizedContent').then(mod => ({ default: mod.ReturningUserWelcome })), {
  ssr: false,
  loading: () => <div className="h-16 bg-amber-100 animate-pulse" />
});

export { ScrollAnimation, PersonalizedServiceRecommendations, ReturningUserWelcome }; 