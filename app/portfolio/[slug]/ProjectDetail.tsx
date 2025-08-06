
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProjectHero from './ProjectHero';
import ProjectContent from './ProjectContent';
import ProjectGallery from './ProjectGallery';
import ProjectSidebar from './ProjectSidebar';
import RelatedProjects from './RelatedProjects';
import Breadcrumbs from './Breadcrumbs';

export const projectsData = {
  "ecommerce-platform": {
    title: "E-commerce Platform",
    category: "Web Development",
    client: "Fashion Retailer",
    duration: "3 months",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=600&fit=crop&crop=center",
    description: "A modern e-commerce platform with advanced features including real-time inventory management, secure payment processing, and comprehensive analytics dashboard.",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
        caption: "Homepage Design"
      },
      {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
        caption: "Product Catalog"
      },
      {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
        caption: "Shopping Cart"
      },
      {
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
        caption: "Admin Dashboard"
      }
    ],
    features: [
      "Responsive design for all devices",
      "Secure payment gateway integration",
      "Real-time inventory management",
      "Advanced search and filtering",
      "Customer review system",
      "Order tracking and notifications"
    ],
    results: [
      "300% increase in online sales",
      "50% reduction in cart abandonment",
      "Improved customer satisfaction scores"
    ]
  },
  "mobile-banking-app": {
    title: "Mobile Banking App",
    category: "Mobile Development",
    client: "Digital Bank",
    duration: "4 months",
    technologies: ["React Native", "Firebase", "Node.js", "AWS"],
    heroImage: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=600&fit=crop&crop=center",
    description: "A secure and user-friendly mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
        caption: "Login Screen"
      },
      {
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
        caption: "Dashboard"
      },
      {
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
        caption: "Transaction History"
      },
      {
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
        caption: "Settings"
      }
    ],
    features: [
      "Biometric authentication",
      "Real-time transaction monitoring",
      "Bill payment and transfers",
      "Investment portfolio tracking",
      "Budget planning tools",
      "Secure messaging system"
    ],
    results: [
      "200% increase in mobile transactions",
      "95% user satisfaction rating",
      "Enhanced security compliance"
    ]
  },
  "corporate-dashboard": {
    title: "Corporate Dashboard",
    category: "Web Development",
    client: "Fortune 500 Company",
    duration: "2 months",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop&crop=center",
    description: "A comprehensive business intelligence dashboard providing real-time analytics, KPI tracking, and data visualization for executive decision-making.",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        caption: "Analytics Overview"
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        caption: "KPI Dashboard"
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        caption: "Reports Section"
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
        caption: "User Management"
      }
    ],
    features: [
      "Real-time data visualization",
      "Customizable KPI widgets",
      "Interactive charts and graphs",
      "Export and reporting tools",
      "Role-based access control",
      "Mobile-responsive design"
    ],
    results: [
      "40% faster decision-making process",
      "Improved data accuracy and visibility",
      "Enhanced executive reporting capabilities"
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

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        <Breadcrumbs projectTitle={project.title} />
        <ProjectHero project={project} />
        
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
                  alt={`${project.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <i className="ri-arrow-left-line text-xl"></i>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 transition-all duration-300 hover:scale-110"
                >
                  <i className="ri-arrow-right-line text-xl"></i>
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

        {/* Project Features */}
        <section className="py-16">
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
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mr-4">
                      <i className="ri-check-line text-amber-600 text-xl"></i>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{feature}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Results */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Project Results</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                See the measurable impact and success metrics achieved
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {project.results.map((result: string, index: number) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="ri-trending-up-line text-green-600 text-2xl"></i>
                  </div>
                  <p className="text-slate-700 font-medium">{result}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RelatedProjects currentProjectId={project.id} />
      </main>
      
      <Footer />
    </div>
  );
}
