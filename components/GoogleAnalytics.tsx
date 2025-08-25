'use client';

import Script from 'next/script';

interface GoogleAnalyticsProps {
  GA_MEASUREMENT_ID: string;
  GA_TRACKING_ID: string;
}

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics({ GA_MEASUREMENT_ID, GA_TRACKING_ID }: GoogleAnalyticsProps) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'custom_dimension1': 'page_type',
                'custom_dimension2': 'user_type',
                'custom_dimension3': 'content_category'
              }
            });
            
            // Enhanced E-commerce tracking
            gtag('config', '${GA_TRACKING_ID}', {
              'custom_map': {
                'custom_dimension1': 'service_category',
                'custom_dimension2': 'region',
                'custom_dimension3': 'user_intent'
              }
            });
            
            // Track page views with enhanced parameters
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_referrer: document.referrer,
              custom_dimension1: 'service_page',
              custom_dimension2: 'global',
              custom_dimension3: 'it_services'
            });
          `,
        }}
      />
      
      {/* Google Tag Manager */}
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GA_MEASUREMENT_ID}');
          `,
        }}
      />
      
      {/* Google Tag Manager (noscript) */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GA_MEASUREMENT_ID}`}
          height="0"
          width="0"
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>
    </>
  );
}

// Custom hook for tracking events
export function useGoogleAnalytics() {
  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
        custom_dimension1: 'elegant_codes',
        custom_dimension2: 'it_services'
      });
    }
  };

  const trackPageView = (url: string, title: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_TRACKING_ID', {
        page_path: url,
        page_title: title
      });
    }
  };

  const trackConversion = (conversionId: string, conversionLabel: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: `${conversionId}/${conversionLabel}`,
        value: 1.0,
        currency: 'USD'
      });
    }
  };

  return {
    trackEvent,
    trackPageView,
    trackConversion
  };
} 