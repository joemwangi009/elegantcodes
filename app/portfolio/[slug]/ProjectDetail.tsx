
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ProjectHero from './ProjectHero';
import ProjectContent from './ProjectContent';
import ProjectGallery from './ProjectGallery';
import ProjectSidebar from './ProjectSidebar';
import RelatedProjects from './RelatedProjects';
import Breadcrumbs from './Breadcrumbs';

const projectsData = {
  'techflow-crm': {
    id: 1,
    title: 'TechFlow CRM',
    tagline: 'Revolutionizing Customer Relationship Management for Tech Companies',
    category: 'Web Application',
    client: 'TechFlow Solutions',
    duration: '6 months',
    team: '8 developers',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20CRM%20dashboard%20interface%20with%20elegant%20data%20visualization%2C%20modern%20customer%20relationship%20management%20system%2C%20dark%20navy%20corporate%20design%20with%20gold%20accents%2C%20sophisticated%20business%20analytics%20platform%2C%20sleek%20workflow%20management%20interface%2C%20clean%20professional%20software%20design%20with%20detailed%20charts%20and%20metrics&width=1200&height=600&seq=project-hero-1&orientation=landscape',
    overview: 'TechFlow CRM was developed to address the complex customer management needs of rapidly growing technology companies. Our client required a comprehensive solution that could handle lead tracking, customer communications, sales pipeline management, and detailed analytics in one unified platform.',
    challenges: [
      'Integration with existing tech stack and third-party APIs',
      'Real-time data synchronization across multiple departments',
      'Scalable architecture to handle exponential user growth',
      'Complex permission system for different user roles',
      'Advanced reporting and analytics requirements'
    ],
    solutions: [
      'Built microservices architecture using React and Node.js for scalability',
      'Implemented real-time WebSocket connections for live updates',
      'Designed comprehensive role-based access control system',
      'Created advanced analytics dashboard with customizable reports',
      'Integrated seamless API connections with popular business tools'
    ],
    technologies: [
      { name: 'React', icon: 'ri-reactjs-line' },
      { name: 'Node.js', icon: 'ri-nodejs-line' },
      { name: 'PostgreSQL', icon: 'ri-database-2-line' },
      { name: 'AWS', icon: 'ri-cloud-line' },
      { name: 'Redis', icon: 'ri-stack-line' },
      { name: 'Docker', icon: 'ri-container-line' }
    ],
    results: [
      '300% increase in lead conversion rates',
      '50% reduction in customer response time',
      '200% improvement in sales team productivity',
      '95% user satisfaction rating'
    ],
    gallery: [
      {
        image: 'https://readdy.ai/api/search-image?query=CRM%20dashboard%20with%20detailed%20customer%20analytics%2C%20professional%20interface%20with%20charts%20and%20graphs%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20modern%20business%20software%20design%2C%20clean%20data%20visualization&width=800&height=600&seq=gallery-1-1&orientation=landscape',
        title: 'Main Dashboard'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Customer%20profile%20management%20interface%2C%20detailed%20contact%20information%20display%2C%20professional%20CRM%20design%20with%20dark%20navy%20background%2C%20sophisticated%20user%20management%20system&width=800&height=600&seq=gallery-1-2&orientation=landscape',
        title: 'Customer Profiles'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Sales%20pipeline%20visualization%20with%20drag%20and%20drop%20functionality%2C%20modern%20CRM%20interface%2C%20dark%20navy%20corporate%20design%2C%20professional%20sales%20management%20system&width=800&height=600&seq=gallery-1-3&orientation=landscape',
        title: 'Sales Pipeline'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Advanced%20analytics%20and%20reporting%20dashboard%2C%20professional%20data%20visualization%2C%20dark%20navy%20theme%20with%20gold%20accents%2C%20sophisticated%20business%20intelligence%20interface&width=800&height=600&seq=gallery-1-4&orientation=landscape',
        title: 'Analytics Dashboard'
      }
    ]
  },
  'retailpro-pos': {
    id: 2,
    title: 'RetailPro POS',
    tagline: 'Next-Generation Point of Sale System for Modern Retail',
    category: 'POS System',
    client: 'RetailPro Chain',
    duration: '8 months',
    team: '10 developers',
    heroImage: 'https://readdy.ai/api/search-image?query=Modern%20retail%20point%20of%20sale%20interface%20with%20clean%20design%2C%20professional%20POS%20system%20dashboard%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20elegant%20touch%20screen%20interface%2C%20sophisticated%20retail%20technology%20solution%2C%20sleek%20payment%20processing%20system%20with%20product%20displays&width=1200&height=600&seq=project-hero-2&orientation=landscape',
    overview: 'RetailPro POS was designed to modernize retail operations for a growing chain of specialty stores. The system needed to handle complex inventory management, multiple payment methods, customer loyalty programs, and real-time reporting across multiple locations.',
    challenges: [
      'Legacy system integration and data migration',
      'Real-time inventory synchronization across 50+ locations',
      'Offline functionality for uninterrupted operations',
      'Complex pricing rules and discount management',
      'Multi-currency and multi-language support'
    ],
    solutions: [
      'Developed progressive web application with offline capabilities',
      'Implemented real-time inventory tracking with automated reordering',
      'Created flexible pricing engine with rule-based discounts',
      'Built comprehensive reporting system with business intelligence',
      'Designed intuitive touch-friendly interface for staff efficiency'
    ],
    technologies: [
      { name: 'Vue.js', icon: 'ri-vuejs-line' },
      { name: 'Python', icon: 'ri-code-line' },
      { name: 'MongoDB', icon: 'ri-database-line' },
      { name: 'Docker', icon: 'ri-container-line' },
      { name: 'Stripe', icon: 'ri-bank-card-line' },
      { name: 'PWA', icon: 'ri-smartphone-line' }
    ],
    results: [
      '40% faster checkout process',
      '99.9% system uptime',
      '60% reduction in inventory discrepancies',
      '35% increase in customer satisfaction'
    ],
    gallery: [
      {
        image: 'https://readdy.ai/api/search-image?query=POS%20checkout%20interface%20with%20product%20scanning%2C%20modern%20retail%20system%20design%2C%20dark%20navy%20theme%20with%20clean%20layout%2C%20professional%20point%20of%20sale%20display&width=800&height=600&seq=gallery-2-1&orientation=landscape',
        title: 'Checkout Interface'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Inventory%20management%20dashboard%20with%20stock%20levels%20and%20alerts%2C%20professional%20retail%20software%20interface%2C%20dark%20navy%20design%20with%20data%20visualization&width=800&height=600&seq=gallery-2-2&orientation=landscape',
        title: 'Inventory Management'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Sales%20reporting%20dashboard%20with%20charts%20and%20analytics%2C%20modern%20POS%20system%20interface%2C%20professional%20retail%20analytics%20display&width=800&height=600&seq=gallery-2-3&orientation=landscape',
        title: 'Sales Reports'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Customer%20loyalty%20program%20interface%2C%20modern%20retail%20CRM%20design%2C%20professional%20customer%20management%20system%20with%20dark%20navy%20theme&width=800&height=600&seq=gallery-2-4&orientation=landscape',
        title: 'Loyalty Program'
      }
    ]
  },
  'ecoshop-marketplace': {
    id: 3,
    title: 'EcoShop Marketplace',
    tagline: 'Sustainable E-commerce Platform for Conscious Consumers',
    category: 'E-commerce Platform',
    client: 'EcoShop Inc.',
    duration: '10 months',
    team: '12 developers',
    heroImage: 'https://readdy.ai/api/search-image?query=Elegant%20e-commerce%20marketplace%20interface%20with%20sustainable%20product%20displays%2C%20modern%20online%20shopping%20platform%2C%20dark%20navy%20design%20with%20gold%20accents%2C%20sophisticated%20retail%20website%20layout%2C%20clean%20product%20catalog%20design%2C%20professional%20marketplace%20visualization%20with%20eco-friendly%20branding&width=1200&height=600&seq=project-hero-3&orientation=landscape',
    overview: 'EcoShop Marketplace connects environmentally conscious consumers with sustainable brands worldwide. The platform features advanced product filtering, sustainability ratings, carbon footprint tracking, and a comprehensive vendor management system.',
    challenges: [
      'Complex multi-vendor marketplace architecture',
      'Sustainability verification and rating system',
      'Global shipping and logistics coordination',
      'Payment processing for multiple currencies',
      'Advanced search and filtering capabilities'
    ],
    solutions: [
      'Built scalable marketplace architecture with vendor dashboards',
      'Implemented blockchain-based sustainability verification',
      'Created intelligent shipping optimization system',
      'Developed advanced AI-powered product recommendation engine',
      'Integrated comprehensive analytics for vendors and administrators'
    ],
    technologies: [
      { name: 'Next.js', icon: 'ri-nextjs-line' },
      { name: 'Stripe', icon: 'ri-bank-card-line' },
      { name: 'Prisma', icon: 'ri-database-2-line' },
      { name: 'Vercel', icon: 'ri-cloud-line' },
      { name: 'Redis', icon: 'ri-stack-line' },
      { name: 'AI/ML', icon: 'ri-brain-line' }
    ],
    results: [
      '500+ sustainable brands onboarded',
      '250% growth in monthly active users',
      '45% increase in average order value',
      '92% customer retention rate'
    ],
    gallery: [
      {
        image: 'https://readdy.ai/api/search-image?query=E-commerce%20product%20catalog%20with%20sustainable%20products%2C%20modern%20marketplace%20design%2C%20clean%20product%20grid%20layout%20with%20sustainability%20badges&width=800&height=600&seq=gallery-3-1&orientation=landscape',
        title: 'Product Catalog'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Vendor%20dashboard%20with%20sales%20analytics%20and%20product%20management%2C%20professional%20e-commerce%20interface%2C%20dark%20navy%20design%20with%20business%20metrics&width=800&height=600&seq=gallery-3-2&orientation=landscape',
        title: 'Vendor Dashboard'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Shopping%20cart%20and%20checkout%20process%2C%20modern%20e-commerce%20interface%2C%20clean%20payment%20flow%20design%20with%20sustainability%20information&width=800&height=600&seq=gallery-3-3&orientation=landscape',
        title: 'Checkout Process'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Sustainability%20tracking%20dashboard%20with%20carbon%20footprint%20analytics%2C%20eco-friendly%20interface%20design%2C%20environmental%20impact%20visualization&width=800&height=600&seq=gallery-3-4&orientation=landscape',
        title: 'Sustainability Tracking'
      }
    ]
  },
  'healthsync-mobile': {
    id: 4,
    title: 'HealthSync Mobile',
    tagline: 'Connecting Patients and Providers Through Technology',
    category: 'Mobile Application',
    client: 'HealthSync Medical',
    duration: '9 months',
    team: '14 developers',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20mobile%20application%20interface%20with%20clean%20medical%20design%2C%20modern%20health%20management%20app%20screens%2C%20dark%20navy%20theme%20with%20gold%20highlights%2C%20sophisticated%20medical%20technology%20solution%2C%20sleek%20patient%20care%20interface%2C%20clean%20mobile%20app%20design%20with%20medical%20charts&width=1200&height=600&seq=project-hero-4&orientation=landscape',
    overview: 'HealthSync Mobile revolutionizes healthcare delivery by providing a comprehensive platform that connects patients with healthcare providers, enables telemedicine consultations, manages medical records, and facilitates appointment scheduling.',
    challenges: [
      'HIPAA compliance and data security requirements',
      'Real-time video consultation functionality',
      'Integration with existing hospital management systems',
      'Offline access to critical patient information',
      'Multi-platform development for iOS and Android'
    ],
    solutions: [
      'Implemented end-to-end encryption for all patient data',
      'Developed high-quality video consultation system',
      'Created seamless API integration with major EMR systems',
      'Built offline-first architecture with data synchronization',
      'Designed intuitive interface following medical UX best practices'
    ],
    technologies: [
      { name: 'React Native', icon: 'ri-smartphone-line' },
      { name: 'Firebase', icon: 'ri-firebase-line' },
      { name: 'TypeScript', icon: 'ri-code-line' },
      { name: 'GraphQL', icon: 'ri-links-line' },
      { name: 'WebRTC', icon: 'ri-video-line' },
      { name: 'AWS', icon: 'ri-cloud-line' }
    ],
    results: [
      '50,000+ active users within 6 months',
      '98% patient satisfaction rating',
      '70% reduction in missed appointments',
      '45% improvement in treatment adherence'
    ],
    gallery: [
      {
        image: 'https://readdy.ai/api/search-image?query=Healthcare%20mobile%20app%20dashboard%20with%20patient%20information%2C%20medical%20interface%20design%2C%20clean%20health%20management%20system%2C%20professional%20medical%20app%20screens&width=800&height=600&seq=gallery-4-1&orientation=landscape',
        title: 'Patient Dashboard'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Telemedicine%20video%20consultation%20interface%2C%20modern%20healthcare%20app%20design%2C%20professional%20medical%20video%20call%20system%2C%20clean%20mobile%20interface&width=800&height=600&seq=gallery-4-2&orientation=landscape',
        title: 'Video Consultations'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Medical%20records%20management%20interface%2C%20healthcare%20app%20design%2C%20professional%20patient%20data%20display%2C%20clean%20medical%20information%20system&width=800&height=600&seq=gallery-4-3&orientation=landscape',
        title: 'Medical Records'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Appointment%20scheduling%20interface%2C%20modern%20healthcare%20app%20design%2C%20professional%20medical%20booking%20system%2C%20clean%20scheduling%20interface&width=800&height=600&seq=gallery-4-4&orientation=landscape',
        title: 'Appointment Scheduling'
      }
    ]
  },
  'financetracker-pro': {
    id: 5,
    title: 'FinanceTracker Pro',
    tagline: 'AI-Powered Personal Finance Management Platform',
    category: 'Web Application',
    client: 'FinanceTracker Solutions',
    duration: '7 months',
    team: '9 developers',
    heroImage: 'https://readdy.ai/api/search-image?query=Professional%20financial%20dashboard%20with%20elegant%20data%20visualization%2C%20modern%20finance%20management%20interface%2C%20dark%20navy%20corporate%20design%20with%20gold%20accents%2C%20sophisticated%20banking%20application%2C%20sleek%20budget%20tracking%20system%2C%20clean%20financial%20analytics%20platform%20with%20charts%20and%20graphs&width=1200&height=600&seq=project-hero-5&orientation=landscape',
    overview: 'FinanceTracker Pro empowers individuals to take control of their financial future through intelligent budgeting, expense tracking, investment monitoring, and AI-powered financial insights and recommendations.',
    challenges: [
      'Bank-level security and encryption requirements',
      'Integration with multiple financial institutions',
      'Real-time transaction processing and categorization',
      'Advanced AI algorithms for financial predictions',
      'Responsive design for all device types'
    ],
    solutions: [
      'Implemented military-grade encryption and security protocols',
      'Developed universal API connector for 12,000+ financial institutions',
      'Created machine learning models for transaction categorization',
      'Built predictive analytics for spending patterns and budgeting',
      'Designed mobile-first responsive interface with progressive enhancement'
    ],
    technologies: [
      { name: 'Angular', icon: 'ri-angularjs-line' },
      { name: 'Spring Boot', icon: 'ri-java-line' },
      { name: 'MySQL', icon: 'ri-database-line' },
      { name: 'Azure', icon: 'ri-cloud-line' },
      { name: 'Machine Learning', icon: 'ri-brain-line' },
      { name: 'Plaid API', icon: 'ri-links-line' }
    ],
    results: [
      '100,000+ users in first year',
      '85% improvement in user savings rates',
      '60% better budget adherence',
      '4.8/5 average app store rating'
    ],
    gallery: [
      {
        image: 'https://readdy.ai/api/search-image?query=Personal%20finance%20dashboard%20with%20spending%20analytics%2C%20modern%20financial%20interface%2C%20professional%20budget%20tracking%20system%20with%20charts%20and%20financial%20data&width=800&height=600&seq=gallery-5-1&orientation=landscape',
        title: 'Financial Dashboard'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Budget%20management%20interface%20with%20category%20breakdown%2C%20professional%20finance%20app%20design%2C%20clean%20budgeting%20system%20with%20spending%20limits&width=800&height=600&seq=gallery-5-2&orientation=landscape',
        title: 'Budget Management'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Investment%20portfolio%20tracking%20interface%2C%20modern%20finance%20app%20design%2C%20professional%20investment%20management%20system%20with%20performance%20charts&width=800&height=600&seq=gallery-5-3&orientation=landscape',
        title: 'Investment Tracking'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=AI%20financial%20insights%20and%20recommendations%20interface%2C%20modern%20fintech%20design%2C%20professional%20financial%20advisory%20system%20with%20smart%20suggestions&width=800&height=600&seq=gallery-5-4&orientation=landscape',
        title: 'AI Insights'
      }
    ]
  },
  'eventmaster-app': {
    id: 6,
    title: 'EventMaster App',
    tagline: 'Comprehensive Event Management Solution',
    category: 'Mobile Application',
    client: 'EventMaster Corp',
    duration: '11 months',
    team: '16 developers',
    heroImage: 'https://readdy.ai/api/search-image?query=Modern%20event%20management%20mobile%20app%20interface%20with%20elegant%20event%20displays%2C%20professional%20event%20planning%20application%2C%20dark%20navy%20design%20with%20gold%20highlights%2C%20sophisticated%20event%20coordination%20system%2C%20sleek%20mobile%20interface%20design%2C%20clean%20event%20booking%20platform%20with%20calendar%20integration&width=1200&height=600&seq=project-hero-6&orientation=landscape',
    overview: 'EventMaster App transforms event management by providing organizers and attendees with powerful tools for event creation, ticket sales, networking, real-time updates, and comprehensive analytics.',
    challenges: [
      'Real-time synchronization for thousands of concurrent users',
      'Complex ticketing and payment processing system',
      'Advanced networking features for attendees',
      'Multi-language and timezone support',
      'Scalable architecture for events of all sizes'
    ],
    solutions: [
      'Built microservices architecture with auto-scaling capabilities',
      'Developed comprehensive ticketing system with fraud prevention',
      'Created AI-powered networking recommendations',
      'Implemented advanced localization and timezone management',
      'Designed intuitive event management dashboard with real-time analytics'
    ],
    technologies: [
      { name: 'Flutter', icon: 'ri-flutter-line' },
      { name: 'Node.js', icon: 'ri-nodejs-line' },
      { name: 'Redis', icon: 'ri-stack-line' },
      { name: 'Google Cloud', icon: 'ri-cloud-line' },
      { name: 'Socket.io', icon: 'ri-broadcast-line' },
      { name: 'Stripe', icon: 'ri-bank-card-line' }
    ],
    results: [
      '1M+ events managed successfully',
      '5M+ tickets sold through platform',
      '95% customer satisfaction rating',
      '40% increase in event attendance rates'
    ],
    gallery: [
      {
        image: 'https://readdy.ai/api/search-image?query=Event%20management%20dashboard%20with%20calendar%20and%20planning%20tools%2C%20professional%20event%20app%20interface%2C%20modern%20event%20coordination%20system&width=800&height=600&seq=gallery-6-1&orientation=landscape',
        title: 'Event Dashboard'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Event%20ticketing%20and%20registration%20interface%2C%20modern%20event%20app%20design%2C%20professional%20ticket%20booking%20system%20with%20payment%20processing&width=800&height=600&seq=gallery-6-2&orientation=landscape',
        title: 'Ticketing System'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Attendee%20networking%20interface%2C%20modern%20event%20app%20design%2C%20professional%20networking%20system%20for%20conferences%20and%20events&width=800&height=600&seq=gallery-6-3&orientation=landscape',
        title: 'Networking Features'
      },
      {
        image: 'https://readdy.ai/api/search-image?query=Event%20analytics%20and%20reporting%20dashboard%2C%20professional%20event%20management%20interface%2C%20comprehensive%20event%20statistics%20and%20insights&width=800&height=600&seq=gallery-6-4&orientation=landscape',
        title: 'Analytics Dashboard'
      }
    ]
  }
};

export default function ProjectDetail({ slug }: { slug: string }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const project = projectsData[slug as keyof typeof projectsData];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === 'Escape') {
          setLightboxOpen(false);
        } else if (e.key === 'ArrowLeft') {
          navigateLightbox('prev');
        } else if (e.key === 'ArrowRight') {
          navigateLightbox('next');
        }
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [lightboxOpen, currentImageIndex, project]);

  const openLightbox = (image: string, index: number) => {
    setLightboxImage(image);
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (!project) return;
    
    const maxIndex = project.gallery.length - 1;
    let newIndex = currentImageIndex;
    
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : maxIndex;
    } else {
      newIndex = currentImageIndex < maxIndex ? currentImageIndex + 1 : 0;
    }
    
    setCurrentImageIndex(newIndex);
    setLightboxImage(project.gallery[newIndex].image);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <Link href="/#portfolio" className="text-amber-400 hover:text-amber-300">
            Return to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="pt-16">
        <Breadcrumbs projectTitle={project.title} />
        <ProjectHero project={project} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3">
              <ProjectContent project={project} />
              <ProjectGallery 
                project={project} 
                onImageClick={openLightbox}
              />
            </div>
            
            <div className="lg:col-span-1">
              <ProjectSidebar project={project} />
            </div>
          </div>
        </div>

        <div className="bg-slate-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready for a Similar Solution?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can transform your business with cutting-edge technology solutions tailored to your needs.
            </p>
            <Link
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block whitespace-nowrap cursor-pointer"
            >
              Contact Us for Similar Solutions
            </Link>
          </div>
        </div>

        <RelatedProjects currentProjectId={project.id} />

        {lightboxOpen && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-amber-400 text-2xl z-10 w-8 h-8 flex items-center justify-center"
                aria-label="Close lightbox"
              >
                <i className="ri-close-line"></i>
              </button>
              
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 text-3xl w-12 h-12 flex items-center justify-center"
                aria-label="Previous image"
              >
                <i className="ri-arrow-left-line"></i>
              </button>
              
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-amber-400 text-3xl w-12 h-12 flex items-center justify-center"
                aria-label="Next image"
              >
                <i className="ri-arrow-right-line"></i>
              </button>
              
              <img
                src={lightboxImage}
                alt={project.gallery[currentImageIndex]?.title || 'Project screenshot'}
                className="max-w-full max-h-full object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center">
                <p className="text-lg font-semibold mb-2">
                  {project.gallery[currentImageIndex]?.title}
                </p>
                <p className="text-sm text-slate-300">
                  {currentImageIndex + 1} / {project.gallery.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
