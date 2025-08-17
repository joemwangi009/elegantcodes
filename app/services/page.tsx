
'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from './ServiceHero';
import ServiceTabs from './ServiceTabs';
import ServiceDetails from './ServiceDetails';
import ServiceCaseStudy from './ServiceCaseStudy';
import ServiceCTA from './ServiceCTA';
import RelatedServices from './RelatedServices';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Custom Software Development Services | ElegantCodes',
  description: 'Professional software development services including mobile apps, web applications, e-commerce solutions, POS systems, and business automation. Transform your business with our expert IT solutions.',
  keywords: [
    'software development services',
    'mobile app development services',
    'web application development services',
    'e-commerce development services',
    'POS system development',
    'business automation services',
    'custom software solutions',
    'IT consulting services',
    'enterprise software development',
    'cloud development services'
  ],
  openGraph: {
    title: 'Custom Software Development Services | ElegantCodes',
    description: 'Professional software development services including mobile apps, web applications, e-commerce solutions, POS systems, and business automation. Transform your business with our expert IT solutions.',
    type: 'website',
    images: [
      {
        url: 'https://elegantcodes.com/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes - Custom Software Development Services'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software Development Services | ElegantCodes',
    description: 'Professional software development services including mobile apps, web applications, e-commerce solutions, POS systems, and business automation.',
    images: ['https://elegantcodes.com/og-services.jpg']
  },
  alternates: {
    canonical: 'https://elegantcodes.com/services'
  }
};

interface Service {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
  techStack: { name: string; tooltip: string; }[];
  caseStudy: {
    client: string;
    quote: string;
    outcome: string;
    metrics: string[];
  };
  ctaText: string;
}

type Services = Record<string, Service>;

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string>('mobile-apps');

  const services: Services = {
    'mobile-apps': {
      category: 'Custom Applications',
      title: 'Mobile Apps (iOS, Android)',
      subtitle: 'Native and Cross-Platform Mobile Solutions',
      description: 'Transform your business with powerful mobile applications that engage users and drive growth. Our expert team creates native iOS and Android apps, as well as cross-platform solutions using cutting-edge technologies.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20mobile%20application%20development%20with%20elegant%20iOS%20and%20Android%20app%20interfaces%2C%20modern%20smartphone%20displaying%20beautiful%20app%20screens%2C%20clean%20mobile%20UI%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20mobile%20technology%20solution%2C%20sleek%20app%20development%20visualization&width=800&height=500&seq=mobile-hero&orientation=landscape',
      features: [
        'Native iOS Development (Swift, Objective-C)',
        'Native Android Development (Kotlin, Java)',
        'Cross-Platform Solutions (React Native, Flutter)',
        'Progressive Web Apps (PWAs)',
        'Mobile Backend Services',
        'Push Notifications & Real-time Updates',
        'Offline Functionality',
        'App Store Optimization (ASO)'
      ],
      benefits: [
        'Reach millions of mobile users',
        'Increase customer engagement by 300%',
        'Generate additional revenue streams',
        'Improve brand visibility and recognition',
        'Enhance customer loyalty and retention',
        'Access device-specific features'
      ],
      techStack: [
        { name: 'Swift', tooltip: 'Native iOS development language' },
        { name: 'Kotlin', tooltip: 'Modern Android development language' },
        { name: 'React Native', tooltip: 'Cross-platform mobile framework' },
        { name: 'Flutter', tooltip: 'Google\'s UI toolkit for mobile' },
        { name: 'Firebase', tooltip: 'Backend services for mobile apps' },
        { name: 'AWS Mobile', tooltip: 'Cloud services for mobile applications' }
      ],
      caseStudy: {
        client: 'HealthCare Plus',
        quote: 'ElegantCodes transformed our patient engagement with a mobile app that increased appointment bookings by 250% and improved patient satisfaction scores significantly.',
        outcome: 'Delivered a comprehensive healthcare mobile app serving 50,000+ patients with real-time appointment booking, medical records access, and telemedicine capabilities.',
        metrics: ['250% increase in bookings', '50,000+ active users', '4.8/5 app store rating']
      },
      ctaText: 'Build Your Mobile App Now'
    },
    'web-apps': {
      category: 'Custom Applications',
      title: 'Web Applications',
      subtitle: 'Scalable and Responsive Web Solutions',
      description: 'Create powerful web applications that deliver exceptional user experiences across all devices. From simple websites to complex enterprise solutions, we build scalable web applications using modern technologies.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20web%20application%20development%20with%20elegant%20responsive%20design%2C%20modern%20web%20interface%20on%20multiple%20devices%2C%20clean%20dashboard%20layout%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20web%20technology%20solution%2C%20sleek%20web%20development%20visualization&width=800&height=500&seq=web-hero&orientation=landscape',
      features: [
        'Responsive Web Design',
        'Progressive Web Apps (PWAs)',
        'Single Page Applications (SPAs)',
        'Server-Side Rendering (SSR)',
        'RESTful API Development',
        'Database Integration',
        'Real-time Features (WebSockets)',
        'Cloud Deployment & Hosting'
      ],
      benefits: [
        'Cross-platform compatibility',
        'Improved SEO performance',
        'Faster development cycles',
        'Cost-effective maintenance',
        'Enhanced user experience',
        'Scalable architecture'
      ],
      techStack: [
        { name: 'React', tooltip: 'Modern JavaScript library for building UIs' },
        { name: 'Next.js', tooltip: 'Full-stack React framework' },
        { name: 'Node.js', tooltip: 'JavaScript runtime for server-side development' },
        { name: 'TypeScript', tooltip: 'Typed superset of JavaScript' },
        { name: 'PostgreSQL', tooltip: 'Advanced open-source database' },
        { name: 'AWS', tooltip: 'Cloud computing services' }
      ],
      caseStudy: {
        client: 'TechFlow Solutions',
        quote: 'Our new web application has streamlined our entire workflow, reducing processing time by 60% and improving team productivity across all departments.',
        outcome: 'Built a comprehensive project management web application handling 10,000+ projects annually with advanced analytics and team collaboration features.',
        metrics: ['60% reduction in processing time', '10,000+ projects managed', '95% user satisfaction']
      },
      ctaText: 'Start Your Web Project'
    },
    'desktop-apps': {
      category: 'Custom Applications',
      title: 'Desktop Applications',
      subtitle: 'Powerful Native Desktop Solutions',
      description: 'Develop robust desktop applications for Windows, macOS, and Linux that leverage the full power of desktop environments. Perfect for enterprise solutions requiring advanced functionality and performance.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20desktop%20application%20development%20with%20elegant%20software%20interface%2C%20modern%20desktop%20app%20on%20computer%20screen%2C%20clean%20application%20UI%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20desktop%20technology%20solution%2C%20sleek%20software%20development%20visualization&width=800&height=500&seq=desktop-hero&orientation=landscape',
      features: [
        'Native Windows Applications (.NET, WPF)',
        'macOS Applications (Swift, Objective-C)',
        'Cross-Platform Desktop Apps (Electron)',
        'System Integration & APIs',
        'Database Connectivity',
        'File System Access',
        'Hardware Integration',
        'Auto-Update Mechanisms'
      ],
      benefits: [
        'Full system resource access',
        'Offline functionality',
        'Superior performance',
        'Advanced security features',
        'Integration with OS features',
        'Professional appearance'
      ],
      techStack: [
        { name: 'Electron', tooltip: 'Build cross-platform desktop apps with web technologies' },
        { name: '.NET', tooltip: 'Microsoft development framework' },
        { name: 'C#', tooltip: 'Modern object-oriented programming language' },
        { name: 'Swift', tooltip: 'Apple\'s programming language for macOS' },
        { name: 'SQLite', tooltip: 'Self-contained SQL database engine' },
        { name: 'Qt', tooltip: 'Cross-platform application development framework' }
      ],
      caseStudy: {
        client: 'Manufacturing Corp',
        quote: 'The desktop application we received has revolutionized our inventory management, providing real-time tracking and reducing errors by 80%.',
        outcome: 'Created a comprehensive inventory management desktop application processing 100,000+ items with barcode scanning and automated reporting.',
        metrics: ['80% error reduction', '100,000+ items tracked', '40% faster processing']
      },
      ctaText: 'Develop Desktop Solution'
    },
    'api-development': {
      category: 'Custom Applications',
      title: 'API Development',
      subtitle: 'Robust Backend Services & Integrations',
      description: 'Build scalable APIs and backend services that power your applications and enable seamless integrations. Our APIs are designed for performance, security, and reliability.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20API%20development%20visualization%20with%20elegant%20code%20interfaces%2C%20modern%20backend%20services%20architecture%2C%20clean%20API%20documentation%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20integration%20technology%20solution%2C%20sleek%20development%20workflow%20visualization&width=800&height=500&seq=api-hero&orientation=landscape',
      features: [
        'RESTful API Development',
        'GraphQL APIs',
        'Microservices Architecture',
        'API Gateway Implementation',
        'Authentication & Authorization',
        'Rate Limiting & Throttling',
        'Comprehensive Documentation',
        'Third-party Integrations'
      ],
      benefits: [
        'Scalable system architecture',
        'Improved data consistency',
        'Enhanced security',
        'Better performance',
        'Easy third-party integrations',
        'Future-proof solutions'
      ],
      techStack: [
        { name: 'Node.js', tooltip: 'JavaScript runtime for building APIs' },
        { name: 'Express.js', tooltip: 'Fast, unopinionated web framework' },
        { name: 'GraphQL', tooltip: 'Query language for APIs' },
        { name: 'MongoDB', tooltip: 'NoSQL document database' },
        { name: 'Redis', tooltip: 'In-memory data structure store' },
        { name: 'Docker', tooltip: 'Containerization platform' }
      ],
      caseStudy: {
        client: 'E-commerce Giant',
        quote: 'Their API infrastructure handles millions of requests daily with 99.9% uptime, enabling us to scale our business globally without technical constraints.',
        outcome: 'Developed a high-performance API ecosystem serving 1M+ daily requests with advanced caching and load balancing.',
        metrics: ['99.9% uptime', '1M+ daily requests', '50ms average response time']
      },
      ctaText: 'Build Your API'
    },
    'shopify': {
      category: 'E-commerce Solutions',
      title: 'Shopify Development',
      subtitle: 'Professional Shopify Store Solutions',
      description: 'Create stunning Shopify stores that convert visitors into customers. From custom themes to advanced app development, we help you maximize your e-commerce potential.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Shopify%20e-commerce%20store%20with%20elegant%20product%20displays%2C%20modern%20online%20shopping%20interface%2C%20clean%20Shopify%20theme%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20retail%20website%20layout%2C%20sleek%20e-commerce%20platform%20visualization&width=800&height=500&seq=shopify-hero&orientation=landscape',
      features: [
        'Custom Shopify Theme Development',
        'Shopify Plus Enterprise Solutions',
        'Third-party App Integrations',
        'Payment Gateway Setup',
        'Inventory Management Systems',
        'Multi-channel Selling',
        'SEO Optimization',
        'Performance Optimization'
      ],
      benefits: [
        'Quick time to market',
        'Built-in hosting & security',
        'Mobile-responsive design',
        'Extensive app ecosystem',
        'Scalable infrastructure',
        'Integrated payment processing'
      ],
      techStack: [
        { name: 'Liquid', tooltip: 'Shopify\'s templating language' },
        { name: 'Shopify CLI', tooltip: 'Command-line tool for Shopify development' },
        { name: 'GraphQL Admin API', tooltip: 'Shopify\'s modern API' },
        { name: 'Shopify Scripts', tooltip: 'Ruby scripts for cart customization' },
        { name: 'Webpack', tooltip: 'Module bundler for assets' },
        { name: 'SCSS', tooltip: 'CSS preprocessor for styling' }
      ],
      caseStudy: {
        client: 'Fashion Retailer',
        quote: 'Our Shopify store redesign increased conversion rates by 180% and reduced cart abandonment significantly, leading to record monthly sales.',
        outcome: 'Transformed a fashion retailer\'s Shopify store with custom theme, advanced filtering, and seamless checkout experience.',
        metrics: ['180% conversion increase', '45% less cart abandonment', '$2M monthly sales']
      },
      ctaText: 'Launch Your Shopify Store'
    },
    'woocommerce': {
      category: 'E-commerce Solutions',
      title: 'WooCommerce Development',
      subtitle: 'Flexible WordPress E-commerce Solutions',
      description: 'Build powerful WooCommerce stores with complete customization control. Perfect for businesses requiring advanced functionality and content management capabilities.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20WooCommerce%20e-commerce%20website%20with%20elegant%20WordPress%20integration%2C%20modern%20online%20store%20interface%2C%20clean%20WooCommerce%20theme%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20WordPress%20e-commerce%20solution%2C%20sleek%20online%20retail%20visualization&width=800&height=500&seq=woocommerce-hero&orientation=landscape',
      features: [
        'Custom WooCommerce Themes',
        'Plugin Development',
        'Payment Gateway Integration',
        'Inventory Management',
        'Multi-vendor Marketplaces',
        'Subscription Systems',
        'Multilingual Support',
        'Advanced Reporting'
      ],
      benefits: [
        'Complete customization control',
        'SEO-friendly architecture',
        'Content management capabilities',
        'Extensive plugin ecosystem',
        'Cost-effective solution',
        'WordPress integration'
      ],
      techStack: [
        { name: 'WordPress', tooltip: 'Content management system' },
        { name: 'WooCommerce', tooltip: 'WordPress e-commerce plugin' },
        { name: 'PHP', tooltip: 'Server-side scripting language' },
        { name: 'MySQL', tooltip: 'Relational database management system' },
        { name: 'JavaScript', tooltip: 'Client-side scripting language' },
        { name: 'WP REST API', tooltip: 'WordPress REST API for headless solutions' }
      ],
      caseStudy: {
        client: 'Artisan Marketplace',
        quote: 'The WooCommerce platform enabled us to create a thriving marketplace for local artisans, increasing vendor sign-ups by 300% and customer satisfaction.',
        outcome: 'Developed a multi-vendor WooCommerce marketplace connecting 500+ artisans with customers worldwide.',
        metrics: ['300% vendor increase', '500+ active sellers', '25,000+ products']
      },
      ctaText: 'Create WooCommerce Store'
    },
    'magento': {
      category: 'E-commerce Solutions',
      title: 'Magento Development',
      subtitle: 'Enterprise E-commerce Solutions',
      description: 'Build robust Magento stores for large-scale e-commerce operations. Perfect for enterprises requiring advanced features, multi-store management, and complex integrations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20Magento%20enterprise%20e-commerce%20platform%20with%20elegant%20admin%20dashboard%2C%20modern%20large-scale%20online%20store%20interface%2C%20clean%20Magento%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20enterprise%20retail%20solution%2C%20sleek%20e-commerce%20architecture%20visualization&width=800&height=500&seq=magento-hero&orientation=landscape',
      features: [
        'Magento 2 Development',
        'Multi-store Management',
        'B2B E-commerce Features',
        'Advanced Catalog Management',
        'Enterprise Integrations',
        'Performance Optimization',
        'Security Enhancements',
        'Custom Module Development'
      ],
      benefits: [
        'Enterprise-grade scalability',
        'Advanced B2B capabilities',
        'Multi-store management',
        'Robust security features',
        'Extensive customization',
        'International commerce support'
      ],
      techStack: [
        { name: 'Magento 2', tooltip: 'Leading e-commerce platform' },
        { name: 'PHP 8', tooltip: 'Modern PHP for better performance' },
        { name: 'MySQL', tooltip: 'Database management system' },
        { name: 'Elasticsearch', tooltip: 'Search and analytics engine' },
        { name: 'Redis', tooltip: 'Caching and session storage' },
        { name: 'Varnish', tooltip: 'HTTP accelerator for faster loading' }
      ],
      caseStudy: {
        client: 'Global Retailer',
        quote: 'Our Magento implementation handles complex B2B operations across 15 countries, processing millions in transactions monthly with exceptional reliability.',
        outcome: 'Implemented a multi-store Magento solution for a global retailer managing 100,000+ SKUs across multiple regions.',
        metrics: ['15 countries served', '100,000+ SKUs managed', '$10M+ monthly transactions']
      },
      ctaText: 'Build Magento Solution'
    },
    'custom-ecommerce': {
      category: 'E-commerce Solutions',
      title: 'Custom E-commerce Platforms',
      subtitle: 'Tailored Online Shopping Experiences',
      description: 'Create completely custom e-commerce solutions built specifically for your unique business requirements. No limitations, full control, and unlimited scalability.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20custom%20e-commerce%20platform%20with%20elegant%20bespoke%20design%2C%20modern%20tailored%20online%20shopping%20interface%2C%20clean%20custom%20retail%20solution%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20personalized%20e-commerce%20architecture%2C%20sleek%20custom%20development%20visualization&width=800&height=500&seq=custom-ecommerce-hero&orientation=landscape',
      features: [
        'Completely Custom Architecture',
        'Unique User Experience Design',
        'Advanced Analytics & Reporting',
        'Custom Payment Processing',
        'Specialized Inventory Management',
        'AI-Powered Recommendations',
        'Advanced Security Features',
        'Third-party API Integrations'
      ],
      benefits: [
        'Unlimited customization',
        'Competitive advantage',
        'Optimized performance',
        'Scalable architecture',
        'Enhanced security',
        'Full ownership and control'
      ],
      techStack: [
        { name: 'React/Next.js', tooltip: 'Modern frontend framework' },
        { name: 'Node.js', tooltip: 'Backend JavaScript runtime' },
        { name: 'MongoDB', tooltip: 'Flexible NoSQL database' },
        { name: 'Stripe/PayPal', tooltip: 'Payment processing APIs' },
        { name: 'AWS/Azure', tooltip: 'Cloud hosting and services' },
        { name: 'Docker', tooltip: 'Containerization for deployment' }
      ],
      caseStudy: {
        client: 'Luxury Brand',
        quote: 'The custom e-commerce platform perfectly captures our brand essence and provides unique shopping experiences that our competitors simply cannot match.',
        outcome: 'Built a luxury e-commerce platform with exclusive features, personalized experiences, and premium customer service integration.',
        metrics: ['400% brand engagement', 'Premium customer experience', '150% average order value']
      },
      ctaText: 'Create Custom Platform'
    },
    'retail-pos': {
      category: 'POS Systems',
      title: 'Retail POS Systems',
      subtitle: 'Modern Point of Sale for Retail',
      description: 'Streamline retail operations with intuitive POS systems that handle transactions, inventory, and customer management seamlessly. Perfect for single stores to large retail chains.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20retail%20point%20of%20sale%20system%20with%20elegant%20touch%20screen%20interface%2C%20modern%20POS%20terminal%20in%20retail%20store%2C%20clean%20cash%20register%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20retail%20technology%20solution%2C%20sleek%20store%20checkout%20visualization&width=800&height=500&seq=retail-pos-hero&orientation=landscape',
      features: [
        'Touch Screen Interface',
        'Barcode & QR Code Scanning',
        'Inventory Management',
        'Customer Management (CRM)',
        'Sales Reporting & Analytics',
        'Multi-payment Processing',
        'Employee Management',
        'Loyalty Program Integration'
      ],
      benefits: [
        'Faster checkout process',
        'Real-time inventory tracking',
        'Detailed sales analytics',
        'Improved customer service',
        'Reduced human errors',
        'Scalable for growth'
      ],
      techStack: [
        { name: 'React Native', tooltip: 'Cross-platform mobile development' },
        { name: 'Node.js', tooltip: 'Backend server technology' },
        { name: 'PostgreSQL', tooltip: 'Reliable database system' },
        { name: 'Square API', tooltip: 'Payment processing integration' },
        { name: 'Thermal Printer API', tooltip: 'Receipt printing functionality' },
        { name: 'Zebra SDK', tooltip: 'Barcode scanner integration' }
      ],
      caseStudy: {
        client: 'Fashion Chain',
        quote: 'The new POS system reduced checkout time by 40% and provided invaluable insights into our inventory and customer behavior patterns.',
        outcome: 'Deployed retail POS solution across 50+ store locations with centralized inventory and analytics dashboard.',
        metrics: ['40% faster checkout', '50+ store locations', '99.5% system uptime']
      },
      ctaText: 'Get Retail POS System'
    },
    'restaurant-pos': {
      category: 'POS Systems',
      title: 'Restaurant POS Systems',
      subtitle: 'Complete Restaurant Management Solution',
      description: 'Enhance restaurant operations with specialized POS systems designed for food service. Handle orders, kitchen management, and customer service efficiently.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20restaurant%20point%20of%20sale%20system%20with%20elegant%20order%20management%20interface%2C%20modern%20POS%20terminal%20in%20restaurant%20setting%2C%20clean%20food%20service%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20restaurant%20technology%20solution%2C%20sleek%20dining%20establishment%20visualization&width=800&height=500&seq=restaurant-pos-hero&orientation=landscape',
      features: [
        'Order Management System',
        'Kitchen Display System (KDS)',
        'Table Management',
        'Menu Customization',
        'Staff Scheduling',
        'Ingredient Tracking',
        'Customer Feedback System',
        'Delivery Integration'
      ],
      benefits: [
        'Improved order accuracy',
        'Faster service delivery',
        'Better kitchen coordination',
        'Enhanced customer experience',
        'Detailed food cost analysis',
        'Streamlined operations'
      ],
      techStack: [
        { name: 'Vue.js', tooltip: 'Progressive JavaScript framework' },
        { name: 'Python Django', tooltip: 'High-level web framework' },
        { name: 'MySQL', tooltip: 'Relational database system' },
        { name: 'WebSocket', tooltip: 'Real-time communication' },
        { name: 'Thermal Printer', tooltip: 'Kitchen ticket printing' },
        { name: 'Tablet Hardware', tooltip: 'Touch-screen POS terminals' }
      ],
      caseStudy: {
        client: 'Restaurant Group',
        quote: 'Kitchen efficiency improved by 35% and order accuracy reached 99.8% after implementing the new restaurant POS system across all locations.',
        outcome: 'Implemented restaurant POS solution for 25 locations with integrated kitchen management and delivery coordination.',
        metrics: ['35% kitchen efficiency gain', '99.8% order accuracy', '25 restaurant locations']
      },
      ctaText: 'Setup Restaurant POS'
    },
    'cloud-pos': {
      category: 'POS Systems',
      title: 'Cloud-Based POS',
      subtitle: 'Access Your Business Anywhere',
      description: 'Manage your business from anywhere with cloud-based POS systems. Real-time data synchronization, automatic updates, and multi-location management capabilities.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20cloud-based%20point%20of%20sale%20system%20with%20elegant%20cloud%20interface%2C%20modern%20POS%20dashboard%20accessed%20from%20multiple%20devices%2C%20clean%20cloud%20technology%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20cloud%20computing%20solution%2C%20sleek%20multi-device%20visualization&width=800&height=500&seq=cloud-pos-hero&orientation=landscape',
      features: [
        'Cloud-based Architecture',
        'Multi-location Management',
        'Real-time Data Sync',
        'Automatic Software Updates',
        'Remote Access & Monitoring',
        'Data Backup & Recovery',
        'Scalable Infrastructure',
        'Advanced Security'
      ],
      benefits: [
        'Access from anywhere',
        'Automatic data backup',
        'Reduced IT maintenance',
        'Scalable for growth',
        'Real-time business insights',
        'Cost-effective solution'
      ],
      techStack: [
        { name: 'AWS', tooltip: 'Amazon Web Services cloud platform' },
        { name: 'React', tooltip: 'Frontend user interface library' },
        { name: 'Node.js', tooltip: 'Server-side JavaScript runtime' },
        { name: 'MongoDB Atlas', tooltip: 'Cloud database service' },
        { name: 'Redis Cloud', tooltip: 'In-memory database service' },
        { name: 'Stripe Connect', tooltip: 'Multi-party payment processing' }
      ],
      caseStudy: {
        client: 'Multi-location Retail',
        quote: 'The cloud POS system enabled centralized management of 30+ locations, reducing administrative overhead by 50% and improving decision-making speed.',
        outcome: 'Deployed cloud-based POS solution managing 30+ retail locations with centralized inventory and real-time reporting.',
        metrics: ['50% less admin overhead', '30+ locations managed', '24/7 system availability']
      },
      ctaText: 'Go Cloud with POS'
    },
    'mobile-pos': {
      category: 'POS Systems',
      title: 'Mobile POS Solutions',
      subtitle: 'Point of Sale in Your Pocket',
      description: 'Transform tablets and smartphones into powerful POS systems. Perfect for pop-up stores, trade shows, delivery services, and field sales operations.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20mobile%20point%20of%20sale%20system%20with%20elegant%20tablet%20interface%2C%20modern%20mobile%20POS%20on%20smartphone%20and%20tablet%2C%20clean%20mobile%20payment%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20portable%20payment%20solution%2C%20sleek%20mobile%20commerce%20visualization&width=800&height=500&seq=mobile-pos-hero&orientation=landscape',
      features: [
        'iOS & Android Compatibility',
        'Bluetooth Card Readers',
        'Offline Transaction Mode',
        'Digital Receipt System',
        'Inventory Management',
        'Customer Database',
        'Sales Analytics',
        'Multiple Payment Options'
      ],
      benefits: [
        'Ultimate portability',
        'Lower hardware costs',
        'Quick deployment',
        'Flexible selling locations',
        'Improved customer service',
        'Easy scalability'
      ],
      techStack: [
        { name: 'React Native', tooltip: 'Cross-platform mobile development' },
        { name: 'Square Reader SDK', tooltip: 'Mobile payment processing' },
        { name: 'SQLite', tooltip: 'Local database storage' },
        { name: 'Firebase', tooltip: 'Backend services and sync' },
        { name: 'Bluetooth API', tooltip: 'Card reader connectivity' },
        { name: 'Printer API', tooltip: 'Receipt printing integration' }
      ],
      caseStudy: {
        client: 'Event Organizer',
        quote: 'Mobile POS enabled us to process payments anywhere at events, increasing sales by 200% and eliminating long checkout lines completely.',
        outcome: 'Developed mobile POS solution for event organizers handling 100+ events annually with seamless payment processing.',
        metrics: ['200% sales increase', '100+ events supported', 'Zero checkout delays']
      },
      ctaText: 'Get Mobile POS'
    },
    'crm-integration': {
      category: 'Business Automation',
      title: 'CRM Integration',
      subtitle: 'Centralized Customer Relationship Management',
      description: 'Integrate and automate your customer relationship management processes. Connect all customer touchpoints for a unified view of your business relationships.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CRM%20integration%20dashboard%20with%20elegant%20customer%20data%20visualization%2C%20modern%20customer%20relationship%20management%20interface%2C%20clean%20CRM%20system%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20business%20automation%20solution%2C%20sleek%20customer%20management%20visualization&width=800&height=500&seq=crm-hero&orientation=landscape',
      features: [
        'Customer Data Centralization',
        'Sales Pipeline Management',
        'Marketing Automation',
        'Email Campaign Integration',
        'Customer Support Ticketing',
        'Analytics & Reporting',
        'Third-party Integrations',
        'Mobile CRM Access'
      ],
      benefits: [
        'Improved customer relationships',
        'Increased sales conversion',
        'Better team collaboration',
        'Data-driven decisions',
        'Automated workflows',
        'Enhanced customer service'
      ],
      techStack: [
        { name: 'Salesforce API', tooltip: 'Leading CRM platform integration' },
        { name: 'HubSpot API', tooltip: 'Inbound marketing and CRM' },
        { name: 'Node.js', tooltip: 'Backend integration services' },
        { name: 'MongoDB', tooltip: 'Customer data storage' },
        { name: 'Zapier', tooltip: 'Workflow automation platform' },
        { name: 'Twilio', tooltip: 'Communication APIs' }
      ],
      caseStudy: {
        client: 'Tech Company',
        quote: 'CRM integration increased our sales team productivity by 60% and improved customer satisfaction through better communication and follow-up processes.',
        outcome: 'Integrated comprehensive CRM solution handling 10,000+ customer interactions monthly with automated workflows.',
        metrics: ['60% productivity increase', '10,000+ monthly interactions', '40% faster response time']
      },
      ctaText: 'Integrate CRM System'
    },
    'workflow-automation': {
      category: 'Business Automation',
      title: 'Workflow Automation',
      subtitle: 'Streamline Business Processes',
      description: 'Automate repetitive tasks and complex business workflows to improve efficiency and reduce errors. Create smart automation that adapts to your business needs.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20workflow%20automation%20system%20with%20elegant%20process%20visualization%2C%20modern%20business%20automation%20interface%2C%20clean%20workflow%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20process%20automation%20solution%2C%20sleek%20business%20efficiency%20visualization&width=800&height=500&seq=workflow-hero&orientation=landscape',
      features: [
        'Process Automation Design',
        'Task Assignment & Tracking',
        'Approval Workflows',
        'Document Management',
        'Notification Systems',
        'Integration Capabilities',
        'Performance Analytics',
        'Custom Rule Engine'
      ],
      benefits: [
        'Reduced manual errors',
        'Faster process completion',
        'Improved compliance',
        'Better resource allocation',
        'Enhanced transparency',
        'Cost savings'
      ],
      techStack: [
        { name: 'Microsoft Power Automate', tooltip: 'Workflow automation platform' },
        { name: 'Zapier', tooltip: 'App integration and automation' },
        { name: 'Node.js', tooltip: 'Custom automation backend' },
        { name: 'Python', tooltip: 'Automation scripting language' },
        { name: 'REST APIs', tooltip: 'Service integration interfaces' },
        { name: 'RabbitMQ', tooltip: 'Message broker for workflows' }
      ],
      caseStudy: {
        client: 'Manufacturing Company',
        quote: 'Workflow automation reduced our approval processes from days to hours and eliminated 90% of manual data entry errors across all departments.',
        outcome: 'Implemented workflow automation system processing 5,000+ approvals monthly with 99% accuracy rate.',
        metrics: ['90% error reduction', '5,000+ monthly approvals', '80% time savings']
      },
      ctaText: 'Automate Your Workflows'
    },
    'erp-solutions': {
      category: 'Business Automation',
      title: 'ERP Solutions',
      subtitle: 'Enterprise Resource Planning Systems',
      description: 'Integrate all your business processes into a unified system. From finance to inventory, human resources to supply chain - manage everything from one platform.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20enterprise%20resource%20planning%20system%20with%20elegant%20business%20dashboard%2C%20modern%20ERP%20interface%20with%20multiple%20modules%2C%20clean%20enterprise%20software%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20business%20management%20solution%2C%20sleek%20ERP%20visualization&width=800&height=500&seq=erp-hero&orientation=landscape',
      features: [
        'Financial Management',
        'Inventory Control',
        'Human Resources',
        'Supply Chain Management',
        'Project Management',
        'Business Intelligence',
        'Compliance Management',
        'Multi-company Support'
      ],
      benefits: [
        'Unified business view',
        'Improved data accuracy',
        'Better decision making',
        'Reduced operational costs',
        'Enhanced compliance',
        'Scalable growth support'
      ],
      techStack: [
        { name: 'SAP', tooltip: 'Leading enterprise software' },
        { name: 'Oracle ERP', tooltip: 'Comprehensive business suite' },
        { name: 'Microsoft Dynamics', tooltip: 'Business applications platform' },
        { name: 'Odoo', tooltip: 'Open source ERP platform' },
        { name: 'PostgreSQL', tooltip: 'Enterprise database system' },
        { name: 'Docker', tooltip: 'Containerized deployment' }
      ],
      caseStudy: {
        client: 'Global Enterprise',
        quote: 'ERP implementation unified our operations across 20 countries, reducing reporting time by 75% and improving financial visibility significantly.',
        outcome: 'Deployed comprehensive ERP solution managing operations across 20 countries with integrated financial and operational modules.',
        metrics: ['20 countries unified', '75% faster reporting', '$2M cost savings']
      },
      ctaText: 'Implement ERP System'
    },
    'ai-automation': {
      category: 'Business Automation',
      title: 'AI-Powered Automation',
      subtitle: 'Intelligent Business Process Automation',
      description: 'Leverage artificial intelligence to create smart automation solutions that learn and adapt. Transform your business with AI-driven insights and automated decision-making.',
      image: 'https://readdy.ai/api/search-image?query=Professional%20AI-powered%20automation%20system%20with%20elegant%20machine%20learning%20interface%2C%20modern%20artificial%20intelligence%20dashboard%2C%20clean%20AI%20automation%20design%20with%20dark%20navy%20and%20gold%20accents%2C%20sophisticated%20AI%20technology%20solution%2C%20sleek%20intelligent%20automation%20visualization&width=800&height=500&seq=ai-automation-hero&orientation=landscape',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Predictive Analytics',
        'Intelligent Document Processing',
        'Chatbot Development',
        'Automated Decision Making',
        'Pattern Recognition',
        'Continuous Learning Systems'
      ],
      benefits: [
        'Intelligent automation',
        'Predictive insights',
        'Reduced human intervention',
        'Improved accuracy',
        'Scalable AI solutions',
        'Competitive advantage'
      ],
      techStack: [
        { name: 'Python', tooltip: 'Primary language for AI development' },
        { name: 'TensorFlow', tooltip: 'Machine learning framework' },
        { name: 'OpenAI GPT', tooltip: 'Advanced language models' },
        { name: 'Azure AI', tooltip: 'Cloud-based AI services' },
        { name: 'Apache Spark', tooltip: 'Big data processing framework' },
        { name: 'Elasticsearch', tooltip: 'Search and analytics engine' }
      ],
      caseStudy: {
        client: 'Financial Services',
        quote: 'AI automation reduced manual document processing by 95% and improved fraud detection accuracy to 99.7%, saving millions in operational costs.',
        outcome: 'Implemented AI-powered automation processing 100,000+ documents monthly with intelligent classification and fraud detection.',
        metrics: ['95% process automation', '99.7% fraud detection', '$5M cost savings']
      },
      ctaText: 'Implement AI Automation'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <ServiceHero service={services[activeService]} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <ServiceTabs 
                services={services} 
                activeService={activeService} 
                setActiveService={setActiveService} 
              />
            </div>
            
            <div className="lg:col-span-3">
              <ServiceDetails service={services[activeService]} />
              <ServiceCaseStudy caseStudy={services[activeService].caseStudy} />
              <ServiceCTA 
                ctaText={services[activeService].ctaText} 
                serviceTitle={services[activeService].title}
              />
            </div>
          </div>
          
          <RelatedServices currentService={activeService} services={services} setActiveService={setActiveService} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
