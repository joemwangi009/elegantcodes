
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
    heroImage: "https://images.unsplash.com/photo-1548524238-a971a4a3b523?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RSUyMGNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "A modern e-commerce platform with advanced features including real-time inventory management, secure payment processing, and comprehensive analytics dashboard.",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1541506618330-7c369fc759b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzh8fEUlMjBjb21tZXJjZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
        caption: "Homepage Design"
      },
      {
        image: "https://images.unsplash.com/photo-1554196278-f6a49cff326c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fEUlMjBjb21tZXJjZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
        caption: "Product Catalog"
      },
      {
        image: "https://images.unsplash.com/photo-1581225218177-9a18341ec628?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEUlMjBjb21tZXJjZSUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
        caption: "Shopping Cart"
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1661551269670-b13b4944907a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RSUyMGNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
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
    heroImage: "https://images.unsplash.com/photo-1609851451108-e937620f1210?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9iaWxlJTIwQXBwcyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    description: "A secure and user-friendly mobile banking application with biometric authentication, real-time transactions, and comprehensive financial management tools.",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vYmlsZSUyMEFwcHMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
        caption: "Login Screen"
      },
      {
        image: "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1vYmlsZSUyMEFwcHMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
        caption: "Dashboard"
      },
      {
        image: "https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9iaWxlJTIwQXBwcyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Transaction History"
      },
      {
        image: "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fE1vYmlsZSUyMEFwcHMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
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
    heroImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    description: "A comprehensive business intelligence dashboard providing real-time analytics, KPI tracking, and data visualization for executive decision-making.",
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdlYiUyMERldmVsb3BtZW50fGVufDB8fDB8fHww",
        caption: "Analytics Overview"
      },
      {
        image: "https://images.unsplash.com/photo-1659114538192-0f8caaaaa698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        caption: "KPI Dashboard"
      },
      {
        image: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
        caption: "Reports Section"
      },
      {
        image: "https://images.unsplash.com/photo-1542744173-b3cd6377db95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
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
