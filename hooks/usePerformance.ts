'use client';

import { useEffect, useCallback } from 'react';

export function usePerformance() {
  const measurePerformance = useCallback(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      if (navigation) {
        const metrics = {
          // DNS lookup time
          dnsLookup: navigation.domainLookupEnd - navigation.domainLookupStart,
          // TCP connection time
          tcpConnection: navigation.connectEnd - navigation.connectStart,
          // Server response time
          serverResponse: navigation.responseEnd - navigation.requestStart,
          // DOM content loaded
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          // Page load time
          pageLoad: navigation.loadEventEnd - navigation.fetchStart,
          // First contentful paint
          fcp: 0,
          // Largest contentful paint
          lcp: 0,
        };

        // Measure FCP and LCP
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.entryType === 'first-contentful-paint') {
              metrics.fcp = entry.startTime;
            }
            if (entry.entryType === 'largest-contentful-paint') {
              metrics.lcp = entry.startTime;
            }
          }
        });

        observer.observe({ entryTypes: ['first-contentful-paint', 'largest-contentful-paint'] });

        // Log metrics in development
        if (process.env.NODE_ENV === 'development') {
          console.log('Performance Metrics:', metrics);
        }

        return metrics;
      }
    }
    return null;
  }, []);

  const optimizeImages = useCallback(() => {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }, []);

  const preloadCriticalResources = useCallback(() => {
    // Preload critical fonts
    const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
    if (fontLinks.length === 0) {
      const interFont = document.createElement('link');
      interFont.rel = 'preload';
      interFont.as = 'font';
      interFont.type = 'font/woff2';
      interFont.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
      interFont.crossOrigin = 'anonymous';
      document.head.appendChild(interFont);
    }
  }, []);

  useEffect(() => {
    // Measure performance after page load
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, [measurePerformance]);

  useEffect(() => {
    // Optimize images on mount
    optimizeImages();
    
    // Preload critical resources
    preloadCriticalResources();
  }, [optimizeImages, preloadCriticalResources]);

  return {
    measurePerformance,
    optimizeImages,
    preloadCriticalResources,
  };
} 