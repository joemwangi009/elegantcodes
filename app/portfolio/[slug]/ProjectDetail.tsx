
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
  "techflow-crm": {
    id: 1,
    title: "TechFlow CRM",
    category: "Web Development",
    client: "TechFlow Solutions",
    duration: "6 months",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    heroImage: "https://media.istockphoto.com/id/1799735862/photo/businessman-using-tablet-analytics-data-kpi-dashboard-tech-with-charts-metrics-and-kpi-to.jpg?s=612x612&w=0&k=20&c=fm7w_DFktn35NXGeu5LrhgDLkcSRRJLMvelQJVbuC1k=",
    description: "Revolutionizing Customer Relationship Management for Tech Companies",
    gallery: [
      {
        image: "https://media.istockphoto.com/id/2198624193/photo/ai-artificial-intelligence-technology-for-data-analysis-research-planning-and-work-generate.jpg?s=612x612&w=0&k=20&c=G_SraVFWSTZ1JZ39lyDJ9_vRbBMUliZyYeQYs01Zs2M=",
        caption: "AI Analytics Dashboard"
      },
      {
        image: "https://media.istockphoto.com/id/2218186768/photo/crm-system-concept-with-interconnected-digital-icons-representing-data-marketing-ai-and.jpg?s=612x612&w=0&k=20&c=loxh90NaMxF5cgzOVxOrwx-Mt1KfoCUScfdal9LrHW0=",
        caption: "CRM System Interface"
      },
      {
        image: "https://media.istockphoto.com/id/1317797235/photo/young-office-worker-using-crm-system-on-her-desktop-computer.jpg?s=612x612&w=0&k=20&c=o4K3xWulOW-e28iYEKL3WGDXFQJ2PfivM-XVtjxqowQ=",
        caption: "User Interface"
      },
      {
        image: "https://media.istockphoto.com/id/1455455924/vector/dashboard-ui-design-template-vector.jpg?s=612x612&w=0&k=20&c=ZlivDYAXpnKw1RZxLZ4i-4akSCZMA5NU0VnH7gaAfZM=",
        caption: "Dashboard Design"
      }
    ],
    features: [
      "Real-time data synchronization",
      "Advanced analytics and reporting",
      "Role-based access control",
      "API integrations",
      "Mobile-responsive design",
      "Automated workflows"
    ],
    results: [
      "300% increase in lead conversion rates",
      "50% reduction in customer response time",
      "200% improvement in sales team productivity"
    ]
  },
  "retailpro-pos": {
    id: 2,
    title: "RetailPro POS",
    category: "POS System",
    client: "RetailPro Chain",
    duration: "8 months",
    technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
    heroImage: "https://media.istockphoto.com/id/1474786660/photo/manager-looking-at-products-delivery-details-on-computer.jpg?s=612x612&w=0&k=20&c=gh7f0YwStNrVj22Mg34C6NTEa1CFjqc2TrZZKSKNHcg=",
    description: "Next-Generation Point of Sale System for Modern Retail",
    gallery: [
      {
        image: "https://media.istockphoto.com/id/1060524232/vector/infographic-dashboard-template-with-flat-design-graphs-and-charts-information-graphics.jpg?s=612x612&w=0&k=20&c=Qzf8TVgUVjVkqGvHMSJaDMf_SGQPX0VPzDc3_sw5HU0=",
        caption: "Analytics Dashboard"
      },
      {
        image: "https://media.istockphoto.com/id/1399531670/video/weekly-business-planner-diagram-with-graphs-and-financial-analytics-white-interface-with.avif?s=640x640&k=20&c=Gjv-lTsDx1gewOFJ13kYEwyr3-2_BjloYDXfhm4Bm6c=",
        caption: "Business Planning"
      },
      {
        image: "https://media.istockphoto.com/id/1355687798/photo/analytics-data-kpi-dashboard.jpg?s=612x612&w=0&k=20&c=O1iFSWCTsyEDz3nTkFikJdc6pHYKyxb_ZZPQ4vgRTKM=",
        caption: "KPI Dashboard"
      }
    ],
    features: [
      "Touch-friendly interface",
      "Real-time inventory tracking",
      "Multi-location support",
      "Payment processing",
      "Customer loyalty program",
      "Offline functionality"
    ],
    results: [
      "40% faster checkout process",
      "99.9% system uptime",
      "60% reduction in inventory discrepancies"
    ]
  },
  "ecoshop-marketplace": {
    id: 3,
    title: "EcoShop Marketplace",
    category: "E-commerce Platform",
    client: "EcoShop Inc.",
    duration: "10 months",
    technologies: ["Next.js", "Stripe", "Prisma", "Vercel"],
    heroImage: "https://media.istockphoto.com/id/1385048587/photo/person-holding-tablet-and-buying-wine.jpg?s=612x612&w=0&k=20&c=bBFd8gBkPF6FcUOevsawGTkc_B_06YSMHBPXdpsIjpg=",
    description: "Sustainable E-commerce Platform for Conscious Consumers",
    gallery: [
      {
        image: "https://media.istockphoto.com/id/518113858/photo/online-shopping-e-business-digital-technology-concept.jpg?s=612x612&w=0&k=20&c=IA4YP6nACUjrQ1xFlesvkXQnJce6Oyn0N8BdEMG-2iI=",
        caption: "Online Shopping Interface"
      },
      {
        image: "https://media.istockphoto.com/id/1001327622/photo/hand-holding-smart-phone-with-black-friday-sale-on-screen-device-over-blur-store-background.jpg?s=612x612&w=0&k=20&c=DJPKxkVnEv45m0BcZaP_gNSt69cPtPpOu45CAD4mFsU=",
        caption: "Mobile Shopping"
      },
      {
        image: "https://media.istockphoto.com/id/1371885257/photo/smart-inventory-warehouse-management-system-concept.jpg?s=612x612&w=0&k=20&c=VpMcgpqREZ_c3jBa_qpvjDUPSR1o9JQLnxoCesikluQ=",
        caption: "Inventory Management"
      },
      {
        image: "https://media.istockphoto.com/id/1281959259/photo/warehouse-management-software-application-in-computer-for-real-time-monitoring.jpg?s=612x612&w=0&k=20&c=pqWOmuiDiQp4N1tMZz4As6ynYooAi9Oqy_gZuU7Xasc=",
        caption: "Warehouse Management"
      }
    ],
    features: [
      "Multi-vendor marketplace",
      "Sustainability verification",
      "Global shipping optimization",
      "AI-powered recommendations",
      "Carbon footprint tracking",
      "Vendor analytics"
    ],
    results: [
      "500+ sustainable brands onboarded",
      "250% growth in monthly active users",
      "45% increase in average order value"
    ]
  },
  "healthsync-mobile": {
    id: 4,
    title: "HealthSync Mobile",
    category: "Mobile Application",
    client: "HealthSync Medical",
    duration: "9 months",
    technologies: ["React Native", "Firebase", "TypeScript", "GraphQL"],
    heroImage: "https://cdn.dribbble.com/userupload/7011384/file/original-028df0655370c6d2f0b12adb638cd4a8.png?resize=2048x1536&vertical=center",
    description: "Connecting Patients and Providers Through Technology",
    gallery: [
      {
        image: "https://cdn.dribbble.com/userupload/44133119/file/original-d3e01ee9d6d6d0f95ff2729fe4fb3ca2.jpg?resize=2048x1536&vertical=center",
        caption: "Patient Dashboard"
      },
      {
        image: "https://cdn.dribbble.com/userupload/16697593/file/original-17ef16d31ea131120e9b71bf64777826.jpg?resize=2048x1536&vertical=center",
        caption: "Telemedicine Interface"
      },
      {
        image: "https://cdn.dribbble.com/userupload/13732777/file/original-1d5308001465a565476a33677e246818.jpg?resize=1504x1128&vertical=center",
        caption: "Medical Records"
      },
      {
        image: "https://cdn.dribbble.com/userupload/43834626/file/original-b4512f5e10c8326f78cf8387c7bffaef.jpg?resize=2048x1547&vertical=center",
        caption: "Appointment Scheduling"
      },
      {
        image: "https://cdn.dribbble.com/userupload/42738109/file/original-665bd2baa68be85ea6debfea2e9365c6.png?resize=2048x1536&vertical=center",
        caption: "Health Analytics"
      },
      {
        image: "https://cdn.dribbble.com/userupload/17691755/file/original-178bb549a586d5229ec8bc8a4cd6a3bc.jpg?resize=2048x1536&vertical=center",
        caption: "Provider Interface"
      }
    ],
    features: [
      "HIPAA-compliant security",
      "Real-time video consultations",
      "Medical records management",
      "Appointment scheduling",
      "Offline data access",
      "Multi-platform support"
    ],
    results: [
      "50,000+ active users within 6 months",
      "98% patient satisfaction rating",
      "70% reduction in missed appointments"
    ]
  },
  "financetracker-pro": {
    id: 5,
    title: "FinanceTracker Pro",
    category: "Web Application",
    client: "FinanceTracker Solutions",
    duration: "7 months",
    technologies: ["Angular", "Spring Boot", "MySQL", "Azure"],
    heroImage: "https://cdn.dribbble.com/userupload/43452774/file/original-158850f42f486a196bbab9a84a75bde1.png?resize=1200x900&vertical=center",
    description: "AI-Powered Personal Finance Management Platform",
    gallery: [
      {
        image: "https://cdn.dribbble.com/userupload/13346009/file/original-753f8ab1568bf3ee8a5a3bf00c256ddd.png?resize=2048x1536&vertical=center",
        caption: "Financial Dashboard"
      },
      {
        image: "https://cdn.dribbble.com/userupload/42705579/file/original-b90314b2f14d7f45622579974eb8019e.png?resize=2048x1536&vertical=center",
        caption: "Budget Management"
      },
      {
        image: "https://cdn.dribbble.com/userupload/18432047/file/original-08781d3dbea876231b70f9db3a3e3ea3.png?resize=2048x1536&vertical=center",
        caption: "Investment Tracking"
      },
      {
        image: "https://cdn.dribbble.com/userupload/9331151/file/original-001c441a25ad64d7f1e4e82cd68b923d.png?resize=2048x1536&vertical=center",
        caption: "AI Insights"
      }
    ],
    features: [
      "Bank-level security",
      "Multi-institution integration",
      "AI-powered categorization",
      "Predictive analytics",
      "Mobile-first design",
      "Real-time synchronization"
    ],
    results: [
      "100,000+ users in first year",
      "85% improvement in user savings rates",
      "60% better budget adherence"
    ]
  },
  "eventmaster-app": {
    id: 6,
    title: "EventMaster App",
    category: "Mobile Application",
    client: "EventMaster Corp",
    duration: "11 months",
    technologies: ["Flutter", "Node.js", "Redis", "Google Cloud"],
    heroImage: "https://cdn.dribbble.com/userupload/43131711/file/original-126d815217ad8e19e53b3b75ebf6dff3.png?resize=2048x1558&vertical=center",
    description: "Comprehensive Event Management Solution",
    gallery: [
      {
        image: "https://cdn.dribbble.com/userupload/43131874/file/original-56597ce808ee84c3c689bfafd4c603bb.png?resize=2048x1558&vertical=center",
        caption: "Event Dashboard"
      },
      {
        image: "https://cdn.dribbble.com/userupload/43131992/file/original-bba8dde6708791b1cba4242993b72135.png?resize=2048x1558&vertical=center",
        caption: "Ticketing System"
      },
      {
        image: "https://cdn.dribbble.com/userupload/43419701/file/original-af23bd57805a15e6ad7427b2ee4dd822.png?resize=2048x1510&vertical=center",
        caption: "Networking Features"
      },
      {
        image: "https://cdn.dribbble.com/userupload/42699826/file/original-d86be81df3fc817543642b76b3c16877.png?resize=2048x1558&vertical=center",
        caption: "Analytics Dashboard"
      }
    ],
    features: [
      "Real-time synchronization",
      "Advanced ticketing system",
      "AI networking recommendations",
      "Multi-language support",
      "Scalable architecture",
      "Comprehensive analytics"
    ],
    results: [
      "1M+ events managed successfully",
      "5M+ tickets sold through platform",
      "95% customer satisfaction rating"
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
