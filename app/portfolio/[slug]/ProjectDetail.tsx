
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
    heroImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center',
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
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
        title: 'Main Dashboard'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        title: 'Customer Profiles'
      },
      {
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=center',
        title: 'Sales Pipeline'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
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
    heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop&crop=center',
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
      { name: 'Redis', icon: 'ri-stack-line' }
    ],
    results: [
      '60% faster checkout process',
      '99.5% transaction accuracy',
      'Real-time inventory across 100+ stores',
      '98% staff satisfaction rating'
    ],
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
        title: 'POS Interface'
      },
      {
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
        title: 'Inventory Management'
      },
      {
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
        title: 'Customer Loyalty'
      },
      {
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center',
        title: 'Analytics Dashboard'
      }
    ]
  },
  'ecoshop-marketplace': {
    id: 3,
    title: 'EcoShop Marketplace',
    tagline: 'Multi-Vendor E-commerce Platform for Sustainable Products',
    category: 'E-commerce Platform',
    client: 'EcoShop Inc.',
    duration: '10 months',
    team: '12 developers',
    heroImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center',
    overview: 'EcoShop Marketplace was built to connect eco-conscious consumers with sustainable product vendors. The platform needed to handle multiple vendors, complex product categorization, secure payment processing, and comprehensive analytics for both vendors and platform administrators.',
    challenges: [
      'Multi-vendor architecture with individual storefronts',
      'Complex product categorization and search functionality',
      'Secure payment processing for multiple currencies',
      'Real-time inventory management across vendors',
      'Advanced analytics and reporting for all stakeholders'
    ],
    solutions: [
      'Built scalable microservices architecture with Next.js',
      'Implemented advanced search with Elasticsearch integration',
      'Created secure multi-currency payment system with Stripe',
      'Developed real-time inventory synchronization system',
      'Built comprehensive analytics dashboard for insights'
    ],
    technologies: [
      { name: 'Next.js', icon: 'ri-reactjs-line' },
      { name: 'TypeScript', icon: 'ri-code-line' },
      { name: 'PostgreSQL', icon: 'ri-database-2-line' },
      { name: 'Stripe', icon: 'ri-bank-card-line' },
      { name: 'Elasticsearch', icon: 'ri-search-line' },
      { name: 'AWS', icon: 'ri-cloud-line' }
    ],
    results: [
      '500+ active vendors on platform',
      '25,000+ products listed',
      '200% growth in first year',
      '4.8/5 average vendor rating'
    ],
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
        title: 'Marketplace Homepage'
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
        title: 'Vendor Dashboard'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        title: 'Product Catalog'
      },
      {
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center',
        title: 'Analytics Dashboard'
      }
    ]
  },
  'healthsync-mobile': {
    id: 4,
    title: 'HealthSync Mobile',
    tagline: 'Healthcare Management App for Providers and Patients',
    category: 'Mobile Application',
    client: 'HealthSync Medical',
    duration: '7 months',
    team: '9 developers',
    heroImage: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=600&fit=crop&crop=center',
    overview: 'HealthSync Mobile was developed to streamline healthcare operations for medical practices and improve patient engagement. The app needed to handle appointment scheduling, medical records, telemedicine capabilities, and secure HIPAA-compliant communication.',
    challenges: [
      'HIPAA compliance and data security requirements',
      'Real-time appointment scheduling across multiple providers',
      'Secure medical records management and sharing',
      'Telemedicine video consultation integration',
      'Cross-platform compatibility for iOS and Android'
    ],
    solutions: [
      'Built HIPAA-compliant architecture with end-to-end encryption',
      'Implemented real-time scheduling with conflict resolution',
      'Created secure medical records system with role-based access',
      'Integrated Twilio video for telemedicine consultations',
      'Developed cross-platform app using React Native'
    ],
    technologies: [
      { name: 'React Native', icon: 'ri-reactjs-line' },
      { name: 'Firebase', icon: 'ri-firebase-line' },
      { name: 'Twilio', icon: 'ri-phone-line' },
      { name: 'AWS', icon: 'ri-cloud-line' },
      { name: 'Node.js', icon: 'ri-nodejs-line' },
      { name: 'MongoDB', icon: 'ri-database-line' }
    ],
    results: [
      '10,000+ patients using the app',
      '4.8/5 average app store rating',
      'HIPAA compliant and secure',
      '95% patient satisfaction rate'
    ],
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
        title: 'Patient Portal'
      },
      {
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
        title: 'Appointment Scheduling'
      },
      {
        image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=center',
        title: 'Telemedicine Interface'
      },
      {
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center',
        title: 'Medical Records'
      }
    ]
  },
  'financetracker-pro': {
    id: 5,
    title: 'FinanceTracker Pro',
    tagline: 'Comprehensive Financial Management System for Businesses',
    category: 'Financial Software',
    client: 'FinanceTracker Corp',
    duration: '9 months',
    team: '11 developers',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop&crop=center',
    overview: 'FinanceTracker Pro was designed to provide comprehensive financial management capabilities for businesses of all sizes. The system needed to handle budgeting, expense tracking, financial reporting, investment portfolio management, and tax planning.',
    challenges: [
      'Complex financial calculations and reporting',
      'Integration with multiple banking and investment APIs',
      'Real-time data synchronization and updates',
      'Comprehensive audit trail and compliance',
      'Multi-currency support and exchange rates'
    ],
    solutions: [
      'Built robust financial calculation engine with Python',
      'Integrated with Plaid API for banking connections',
      'Implemented real-time data synchronization',
      'Created comprehensive audit and compliance system',
      'Developed multi-currency support with live exchange rates'
    ],
    technologies: [
      { name: 'Vue.js', icon: 'ri-vuejs-line' },
      { name: 'Python', icon: 'ri-code-line' },
      { name: 'PostgreSQL', icon: 'ri-database-2-line' },
      { name: 'Plaid', icon: 'ri-bank-card-line' },
      { name: 'Redis', icon: 'ri-stack-line' },
      { name: 'Docker', icon: 'ri-container-line' }
    ],
    results: [
      '$50M+ in financial assets tracked',
      '95% accuracy in financial calculations',
      '30% reduction in financial management costs',
      'Real-time financial insights and reporting'
    ],
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        title: 'Financial Dashboard'
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
        title: 'Budget Planning'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        title: 'Investment Portfolio'
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
        title: 'Tax Planning'
      }
    ]
  },
  'eventmaster-app': {
    id: 6,
    title: 'EventMaster App',
    tagline: 'Complete Event Management Solution for Organizers',
    category: 'Event Management',
    client: 'EventMaster Events',
    duration: '6 months',
    team: '8 developers',
    heroImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&h=600&fit=crop&crop=center',
    overview: 'EventMaster App was developed to provide comprehensive event management capabilities for event organizers. The platform needed to handle event creation, ticketing, attendee management, check-in processes, and detailed analytics.',
    challenges: [
      'Scalable ticketing system for large events',
      'Real-time attendee management and check-in',
      'Multi-event coordination and management',
      'Complex pricing and discount structures',
      'Comprehensive analytics and reporting'
    ],
    solutions: [
      'Built scalable ticketing system with real-time inventory',
      'Implemented QR code-based check-in system',
      'Created multi-event management dashboard',
      'Developed flexible pricing and discount engine',
      'Built comprehensive analytics and reporting system'
    ],
    technologies: [
      { name: 'React', icon: 'ri-reactjs-line' },
      { name: 'Node.js', icon: 'ri-nodejs-line' },
      { name: 'MongoDB', icon: 'ri-database-line' },
      { name: 'Stripe', icon: 'ri-bank-card-line' },
      { name: 'Redis', icon: 'ri-stack-line' },
      { name: 'AWS', icon: 'ri-cloud-line' }
    ],
    results: [
      '1,000+ events managed successfully',
      '50,000+ attendees processed',
      '98% attendee satisfaction rating',
      'Real-time event analytics and insights'
    ],
    gallery: [
      {
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center',
        title: 'Event Creation'
      },
      {
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center',
        title: 'Ticketing System'
      },
      {
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center',
        title: 'Attendee Management'
      },
      {
        image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center',
        title: 'Event Analytics'
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
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
      </main>
      
      <Footer />
    </div>
  );
}
