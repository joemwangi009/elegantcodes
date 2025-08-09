
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const projectsData = {
  "techflow-crm": {
    id: 1,
    title: "TechFlow CRM",
    category: "Web Development",
    client: "TechFlow Solutions",
    duration: "6 months",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Redis", "Docker"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    description: "A comprehensive Customer Relationship Management system designed specifically for technology companies. This enterprise-grade solution streamlines customer interactions, sales processes, and business operations with advanced analytics and automation capabilities.",
    overview: "TechFlow CRM revolutionizes how technology companies manage their customer relationships. Built with modern web technologies, it provides a seamless experience for sales teams, customer support, and management to track leads, manage accounts, and analyze performance metrics.",
    challenges: [
      "Complex data relationships between customers, leads, and opportunities",
      "Real-time synchronization across multiple user sessions",
      "Integration with existing enterprise systems",
      "Scalability for growing user bases and data volumes"
    ],
    solutions: [
      "Implemented advanced database design with optimized queries and indexing",
      "Built real-time updates using WebSocket connections and Redis caching",
      "Created flexible API architecture for seamless third-party integrations",
      "Designed microservices architecture for horizontal scaling"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        caption: "Dashboard Overview"
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Customer Management Interface"
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        caption: "Analytics Dashboard"
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Sales Pipeline View"
      }
    ],
    features: [
      "Real-time data synchronization across all devices",
      "Advanced analytics and reporting with customizable dashboards",
      "Role-based access control and security management",
      "API integrations with popular business tools",
      "Mobile-responsive design for on-the-go access",
      "Automated workflow management and task assignment"
    ],
    results: [
      "300% increase in lead conversion rates",
      "50% reduction in customer response time",
      "200% improvement in sales team productivity",
      "99.9% system uptime and reliability"
    ]
  },
  "retailpro-pos": {
    id: 2,
    title: "RetailPro POS",
    category: "POS System",
    client: "RetailPro Chain",
    duration: "8 months",
    technologies: ["Vue.js", "Python", "MongoDB", "Docker", "Stripe", "WebRTC"],
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    description: "A next-generation Point of Sale system built for modern retail businesses. Features touch-friendly interfaces, real-time inventory tracking, and comprehensive reporting capabilities to streamline retail operations.",
    overview: "RetailPro POS transforms traditional retail operations with cutting-edge technology. The system handles everything from sales transactions to inventory management, customer loyalty programs, and business analytics, all through an intuitive interface that staff can learn quickly.",
    challenges: [
      "Creating a touch-friendly interface for various screen sizes",
      "Offline functionality for network interruptions",
      "Real-time inventory synchronization across locations",
      "Secure payment processing and PCI compliance"
    ],
    solutions: [
      "Built responsive design with touch-optimized UI components",
      "Implemented offline-first architecture with local data storage",
      "Created real-time sync system using WebSockets and conflict resolution",
      "Integrated secure payment gateways with end-to-end encryption"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
        caption: "POS Interface"
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Inventory Management"
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        caption: "Analytics Dashboard"
      }
    ],
    features: [
      "Touch-friendly interface optimized for various screen sizes",
      "Real-time inventory tracking and low-stock alerts",
      "Multi-location support with centralized management",
      "Integrated payment processing with multiple gateways",
      "Customer loyalty program and rewards system",
      "Offline functionality for network interruptions"
    ],
    results: [
      "40% faster checkout process",
      "99.9% system uptime and reliability",
      "60% reduction in inventory discrepancies",
      "25% increase in customer retention"
    ]
  },
  "ecoshop-marketplace": {
    id: 3,
    title: "EcoShop Marketplace",
    category: "E-commerce Platform",
    client: "EcoShop Inc.",
    duration: "10 months",
    technologies: ["Next.js", "Stripe", "Prisma", "Vercel", "PostgreSQL", "Redis"],
    heroImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
    description: "A sophisticated multi-vendor marketplace platform connecting eco-conscious consumers with sustainable product vendors. Features advanced search, secure payments, and comprehensive vendor management tools.",
    overview: "EcoShop Marketplace creates a sustainable shopping ecosystem where vendors can showcase their eco-friendly products and customers can discover unique, environmentally responsible alternatives to conventional products.",
    challenges: [
      "Complex multi-vendor architecture and commission management",
      "Advanced search and filtering for diverse product catalogs",
      "Secure payment processing with vendor payouts",
      "Scalability for growing vendor and customer bases"
    ],
    solutions: [
      "Built microservices architecture for vendor management and payments",
      "Implemented Elasticsearch for fast, relevant product discovery",
      "Created secure payment system with automated vendor settlements",
      "Designed horizontal scaling with load balancing and caching"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
        caption: "Marketplace Homepage"
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Product Search Interface"
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        caption: "Vendor Dashboard"
      }
    ],
    features: [
      "Multi-vendor marketplace with commission management",
      "Advanced search and filtering with AI-powered recommendations",
      "Secure payment processing with multiple payment methods",
      "Vendor management dashboard and analytics",
      "Customer reviews and rating system",
      "Mobile-responsive design for all devices"
    ],
    results: [
      "500+ sustainable brands onboarded",
      "250% user growth in first year",
      "95% vendor satisfaction rating",
      "40% increase in average order value"
    ]
  },
  "healthsync-mobile": {
    id: 4,
    title: "HealthSync Mobile",
    category: "Mobile Application",
    client: "HealthSync Medical",
    duration: "12 months",
    technologies: ["React Native", "Node.js", "MongoDB", "AWS", "Twilio", "Firebase"],
    heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
    description: "A comprehensive mobile healthcare management application connecting patients and healthcare providers. Features appointment scheduling, medical records, telemedicine capabilities, and secure communication.",
    overview: "HealthSync Mobile bridges the gap between patients and healthcare providers through innovative mobile technology. The app streamlines healthcare processes, improves patient engagement, and enhances the overall quality of care delivery.",
    challenges: [
      "HIPAA compliance and medical data security",
      "Real-time video conferencing for telemedicine",
      "Integration with existing hospital systems",
      "Cross-platform compatibility and performance"
    ],
    solutions: [
      "Implemented end-to-end encryption and secure data storage",
      "Built WebRTC-based video calling with fallback options",
      "Created flexible API architecture for system integration",
      "Optimized React Native for native performance on both platforms"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
        caption: "Appointment Scheduling"
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Telemedicine Interface"
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        caption: "Medical Records View"
      }
    ],
    features: [
      "Secure appointment scheduling and management",
      "Telemedicine video consultations with screen sharing",
      "Digital medical records and document management",
      "Secure messaging between patients and providers",
      "Medication reminders and health tracking",
      "Integration with wearable health devices"
    ],
    results: [
      "60% reduction in appointment no-shows",
      "80% improvement in patient engagement",
      "50% decrease in administrative overhead",
      "95% patient satisfaction rating"
    ]
  },
  "financetracker-pro": {
    id: 5,
    title: "FinanceTracker Pro",
    category: "Financial Management",
    client: "FinanceTracker Solutions",
    duration: "9 months",
    technologies: ["Angular", "Java Spring", "PostgreSQL", "Docker", "RabbitMQ", "Redis"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    description: "A comprehensive financial management platform for businesses with advanced budgeting, expense tracking, and financial reporting capabilities. Designed to provide real-time insights into financial performance.",
    overview: "FinanceTracker Pro empowers businesses with comprehensive financial visibility and control. The platform automates financial processes, provides real-time insights, and helps organizations make data-driven financial decisions.",
    challenges: [
      "Complex financial calculations and real-time reporting",
      "Multi-currency support and exchange rate management",
      "Integration with banking and accounting systems",
      "Compliance with financial regulations and standards"
    ],
    solutions: [
      "Built high-performance calculation engine with caching",
      "Implemented real-time currency conversion with live rates",
      "Created secure API integrations with major financial institutions",
      "Designed compliance framework with audit trails and reporting"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Financial Dashboard"
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        caption: "Budget Planning Interface"
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        caption: "Expense Tracking"
      }
    ],
    features: [
      "Real-time financial dashboard and reporting",
      "Advanced budgeting and forecasting tools",
      "Automated expense tracking and categorization",
      "Multi-currency support with live exchange rates",
      "Integration with banking and accounting systems",
      "Compliance reporting and audit trails"
    ],
    results: [
      "70% improvement in financial visibility",
      "45% reduction in expense processing time",
      "30% better budget accuracy",
      "99.9% data accuracy and reliability"
    ]
  },
  "eventmaster-app": {
    id: 6,
    title: "EventMaster App",
    category: "Event Management",
    client: "EventMaster Events",
    duration: "7 months",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Stripe", "SendGrid"],
    heroImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center",
    description: "A complete event management platform for organizers with ticketing, attendee management, and event analytics. Streamlines the entire event lifecycle from planning to execution.",
    overview: "EventMaster App revolutionizes event management by providing organizers with comprehensive tools to plan, promote, and execute successful events. The platform handles everything from ticketing to attendee engagement.",
    challenges: [
      "High-concurrency ticket sales and real-time availability",
      "Complex event scheduling and conflict resolution",
      "Multi-format event support and customization",
      "Integration with payment gateways and marketing tools"
    ],
    solutions: [
      "Built scalable architecture with load balancing and caching",
      "Implemented intelligent scheduling algorithms with conflict detection",
      "Created flexible event templates and customization options",
      "Integrated multiple payment gateways and marketing automation tools"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center",
        caption: "Event Dashboard"
      },
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Ticketing Interface"
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        caption: "Attendee Management"
      }
    ],
    features: [
      "Comprehensive event planning and management tools",
      "Advanced ticketing system with multiple pricing tiers",
      "Attendee management and engagement tracking",
      "Real-time analytics and performance metrics",
      "Marketing automation and social media integration",
      "Mobile app for attendees and organizers"
    ],
    results: [
      "1M+ events managed successfully",
      "5M+ tickets sold through platform",
      "95% customer satisfaction rating",
      "40% increase in event attendance"
    ]
  }
};

export default function ProjectDetail({ project }: { project: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.gallery.length - 1 : prev - 1
    );
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Project Not Found</h1>
              <p className="text-slate-600 mb-8">The project you're looking for doesn't exist.</p>
              <Link href="/portfolio" className="bg-amber-500 text-white px-6 py-3 rounded-lg hover:bg-amber-600 transition-colors">
                Back to Portfolio
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  {project.category}
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-6 font-poppins">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-400 mb-2">Client</h3>
                    <p className="text-slate-200">{project.client}</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-400 mb-2">Duration</h3>
                    <p className="text-slate-200">{project.duration}</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src={project.heroImage}
                  alt={project.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Gallery Carousel */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Gallery</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Explore different aspects of this project through our comprehensive gallery
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              {/* Main Image */}
              <div className="relative aspect-video bg-slate-200 rounded-lg overflow-hidden">
                <img
                  src={project.gallery[currentImageIndex].image}
                  alt={`${project.title} - ${project.gallery[currentImageIndex].caption}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {project.gallery.length}
                </div>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {project.gallery.map((image: any, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-16 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentImageIndex 
                        ? 'ring-2 ring-amber-500 scale-110' 
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image.image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Overview</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">
                {project.overview}
              </p>
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Technologies Used</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Cutting-edge technologies and frameworks powering this solution
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {project.technologies.map((tech: string, index: number) => (
                <div key={index} className="bg-white px-6 py-3 rounded-full shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300">
                  <span className="text-slate-700 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Challenges */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Challenges We Faced</h2>
                <div className="space-y-4">
                  {project.challenges.map((challenge: string, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-red-500 rounded-full mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                      </div>
                      <p className="text-slate-700">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Solutions</h2>
                <div className="space-y-4">
                  {project.solutions.map((solution: string, index: number) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center bg-green-500 rounded-full mt-1">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-slate-700">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Features */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Key Features</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Discover the powerful features that make this project stand out
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.features.map((feature: string, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-slate-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4 mt-1">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 leading-tight">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Results */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Results</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                See the measurable impact and success metrics achieved
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-lg shadow-lg text-center border border-amber-200">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <p className="text-slate-700 font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life with custom software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-amber-500 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:bg-amber-600 transition-colors duration-300"
              >
                Get Started
              </Link>
              <Link
                href="/portfolio"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors duration-300"
              >
                View More Projects
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
