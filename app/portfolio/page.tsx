'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailForm from '@/components/EmailForm';

interface PortfolioItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  image: string;
  fallbackImage?: string;
  slug: string;
  technologies: string[];
  metrics: string[];
  color: string;
  gallery: string[];
}

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState(false);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "TechFlow CRM",
      subtitle: "Revolutionizing Customer Relationship Management",
      category: "Web Development",
      description: "Revolutionizing Customer Relationship Management for Tech Companies",
      image: "https://media.istockphoto.com/id/1799735862/photo/businessman-using-tablet-analytics-data-kpi-dashboard-tech-with-charts-metrics-and-kpi-to.jpg?s=612x612&w=0&k=20&c=fm7w_DFktn35NXGeu5LrhgDLkcSRRJLMvelQJVbuC1k=",
      fallbackImage: "https://media.istockphoto.com/id/2198624193/photo/ai-artificial-intelligence-technology-for-data-analysis-research-planning-and-work-generate.jpg?s=612x612&w=0&k=20&c=G_SraVFWSTZ1JZ39lyDJ9_vRbBMUliZyYeQYs01Zs2M=",
      gallery: [
        "https://media.istockphoto.com/id/2218186768/photo/crm-system-concept-with-interconnected-digital-icons-representing-data-marketing-ai-and.jpg?s=612x612&w=0&k=20&c=loxh90NaMxF5cgzOVxOrwx-Mt1KfoCUScfdal9LrHW0=",
        "https://media.istockphoto.com/id/1317797235/photo/young-office-worker-using-crm-system-on-her-desktop-computer.jpg?s=612x612&w=0&k=20&c=o4K3xWulOW-e28iYEKL3WGDXFQJ2PfivM-XVtjxqowQ=",
        "https://media.istockphoto.com/id/1455455924/vector/dashboard-ui-design-template-vector.jpg?s=612x612&w=0&k=20&c=ZlivDYAXpnKw1RZxLZ4i-4akSCZMA5NU0VnH7gaAfZM="
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
      metrics: ["300% increase in lead conversion", "50% reduction in response time"],
      color: "blue",
      slug: "techflow-crm"
    },
    {
      id: 2,
      title: "RetailPro POS",
      subtitle: "Next-Generation Point of Sale System",
      category: "POS System",
      description: "Next-Generation Point of Sale System for Modern Retail",
      image: "https://media.istockphoto.com/id/1474786660/photo/manager-looking-at-products-delivery-details-on-computer.jpg?s=612x612&w=0&k=20&c=gh7f0YwStNrVj22Mg34C6NTEa1CFjqc2TrZZKSKNHcg=",
      fallbackImage: "https://media.istockphoto.com/id/1060524232/vector/infographic-dashboard-template-with-flat-design-graphs-and-charts-information-graphics.jpg?s=612x612&w=0&k=20&c=Qzf8TVgUVjVkqGvHMSJaDMf_SGQPX0VPzDc3_sw5HU0=",
      gallery: [
        "https://media.istockphoto.com/id/1399531670/video/weekly-business-planner-diagram-with-graphs-and-financial-analytics-white-interface-with.avif?s=640x640&k=20&c=Gjv-lTsDx1gewOFJ13kYEwyr3-2_BjloYDXfhm4Bm6c=",
        "https://media.istockphoto.com/id/1355687798/photo/analytics-data-kpi-dashboard.jpg?s=612x612&w=0&k=20&c=O1iFSWCTsyEDz3nTkFikJdc6pHYKyxb_ZZPQ4vgRTKM="
      ],
      technologies: ["Vue.js", "Python", "MongoDB", "Docker"],
      metrics: ["40% faster checkout", "99.9% uptime"],
      color: "green",
      slug: "retailpro-pos"
    },
    {
      id: 3,
      title: "EcoShop Marketplace",
      subtitle: "Sustainable E-commerce Platform",
      category: "E-commerce Platform",
      description: "Sustainable E-commerce Platform for Conscious Consumers",
      image: "https://media.istockphoto.com/id/1385048587/photo/person-holding-tablet-and-buying-wine.jpg?s=612x612&w=0&k=20&c=bBFd8gBkPF6FcUOevsawGTkc_B_06YSMHBPXdpsIjpg=",
      fallbackImage: "https://media.istockphoto.com/id/518113858/photo/online-shopping-e-business-digital-technology-concept.jpg?s=612x612&w=0&k=20&c=IA4YP6nACUjrQ1xFlesvkXQnJce6Oyn0N8BdEMG-2iI=",
      gallery: [
        "https://media.istockphoto.com/id/1001327622/photo/hand-holding-smart-phone-with-black-friday-sale-on-screen-device-over-blur-store-background.jpg?s=612x612&w=0&k=20&c=DJPKxkVnEv45m0BcZaP_gNSt69cPtPpOu45CAD4mFsU=",
        "https://media.istockphoto.com/id/1371885257/photo/smart-inventory-warehouse-management-system-concept.jpg?s=612x612&w=0&k=20&c=VpMcgpqREZ_c3jBa_qpvjDUPSR1o9JQLnxoCesikluQ=",
        "https://media.istockphoto.com/id/1281959259/photo/warehouse-management-software-application-in-computer-for-real-time-monitoring.jpg?s=612x612&w=0&k=20&c=pqWOmuiDiQp4N1tMZz4As6ynYooAi9Oqy_gZuU7Xasc="
      ],
      technologies: ["Next.js", "Stripe", "Prisma", "Vercel"],
      metrics: ["500+ brands onboarded", "250% user growth"],
      color: "emerald",
      slug: "ecoshop-marketplace"
    },
    {
      id: 4,
      title: "HealthSync Mobile",
      subtitle: "Healthcare Management App",
      category: "Mobile Application",
      description: "Connecting Patients and Providers Through Technology",
      image: "https://cdn.dribbble.com/userupload/7011384/file/original-028df0655370c6d2f0b12adb638cd4a8.png?resize=2048x1536&vertical=center",
      fallbackImage: "https://cdn.dribbble.com/userupload/44133119/file/original-d3e01ee9d6d6d0f95ff2729fe4fb3ca2.jpg?resize=2048x1536&vertical=center",
      gallery: [
        "https://cdn.dribbble.com/userupload/16697593/file/original-17ef16d31ea131120e9b71bf64777826.jpg?resize=2048x1536&vertical=center",
        "https://cdn.dribbble.com/userupload/13732777/file/original-1d5308001465a565476a33677e246818.jpg?resize=1504x1128&vertical=center",
        "https://cdn.dribbble.com/userupload/43834626/file/original-b4512f5e10c8326f78cf8387c7bffaef.jpg?resize=2048x1547&vertical=center",
        "https://cdn.dribbble.com/userupload/42738109/file/original-665bd2baa68be85ea6debfea2e9365c6.png?resize=2048x1536&vertical=center",
        "https://cdn.dribbble.com/userupload/17691755/file/original-178bb549a586d5229ec8bc8a4cd6a3bc.jpg?resize=2048x1536&vertical=center"
      ],
      technologies: ["React Native", "Firebase", "TypeScript", "GraphQL"],
      metrics: ["50,000+ active users", "98% satisfaction"],
      color: "purple",
      slug: "healthsync-mobile"
    },
    {
      id: 5,
      title: "FinanceTracker Pro",
      subtitle: "Financial Management System",
      category: "Web Application",
      description: "AI-Powered Personal Finance Management Platform",
      image: "https://cdn.dribbble.com/userupload/43452774/file/original-158850f42f486a196bbab9a84a75bde1.png?resize=1200x900&vertical=center",
      fallbackImage: "https://cdn.dribbble.com/userupload/13346009/file/original-753f8ab1568bf3ee8a5a3bf00c256ddd.png?resize=2048x1536&vertical=center",
      gallery: [
        "https://cdn.dribbble.com/userupload/42705579/file/original-b90314b2f14d7f45622579974eb8019e.png?resize=2048x1536&vertical=center",
        "https://cdn.dribbble.com/userupload/18432047/file/original-08781d3dbea876231b70f9db3a3e3ea3.png?resize=2048x1536&vertical=center",
        "https://cdn.dribbble.com/userupload/9331151/file/original-001c441a25ad64d7f1e4e82cd68b923d.png?resize=2048x1536&vertical=center"
      ],
      technologies: ["Angular", "Spring Boot", "MySQL", "Azure"],
      metrics: ["100,000+ users", "85% savings improvement"],
      color: "amber",
      slug: "financetracker-pro"
    },
    {
      id: 6,
      title: "EventMaster App",
      subtitle: "Event Management Solution",
      category: "Mobile Application",
      description: "Comprehensive Event Management Solution",
      image: "https://cdn.dribbble.com/userupload/43131711/file/original-126d815217ad8e19e53b3b75ebf6dff3.png?resize=2048x1558&vertical=center",
      fallbackImage: "https://cdn.dribbble.com/userupload/43131874/file/original-56597ce808ee84c3c689bfafd4c603bb.png?resize=2048x1558&vertical=center",
      gallery: [
        "https://cdn.dribbble.com/userupload/43131992/file/original-bba8dde6708791b1cba4242993b72135.png?resize=2048x1558&vertical=center",
        "https://cdn.dribbble.com/userupload/43419701/file/original-af23bd57805a15e6ad7427b2ee4dd822.png?resize=2048x1510&vertical=center",
        "https://cdn.dribbble.com/userupload/42699826/file/original-d86be81df3fc817543642b76b3c16877.png?resize=2048x1558&vertical=center"
      ],
      technologies: ["Flutter", "Node.js", "Redis", "Google Cloud"],
      metrics: ["1M+ events managed", "5M+ tickets sold"],
      color: "indigo",
      slug: "eventmaster-app"
    }
  ];

  const categories = ['all', 'Custom Apps', 'E-commerce', 'POS', 'Automation'];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      emerald: 'from-emerald-500 to-emerald-600',
      purple: 'from-purple-500 to-purple-600',
      rose: 'from-rose-500 to-rose-600',
      amber: 'from-amber-500 to-amber-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  const filteredProjects = portfolioItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const openModal = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setShowRequestForm(false);
    setRequestSuccess(false);
    document.body.style.overflow = 'unset';
  };

  const shareProject = (platform: string, project: PortfolioItem) => {
    const url = `https://elegantcodes.com/portfolio/${project.slug}`;
    const text = `Check out this amazing project: ${project.title} by ElegantCodes`;
    
    const shareUrls = {
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
    };
    
    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  const handleRequestSimilar = () => {
    setShowRequestForm(true);
  };

  const handleRequestSuccess = () => {
    setRequestSuccess(true);
    setTimeout(() => {
      closeModal();
    }, 3000);
  };

  const handleRequestError = (error: string) => {
    console.error('Portfolio request error:', error);
  };

  return (
    <div className="min-h-screen bg-[#1A2A44]">
      <Header />
      
      <main>
        {/* Hero Section with Image Gallery */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Background with SVG Wave */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,400 C300,300 900,500 1200,400 L1200,800 L0,800 Z" fill="url(#gradient1)"/>
              <path d="M0,600 C400,500 800,700 1200,600 L1200,800 L0,800 Z" fill="url(#gradient2)"/>
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A017" stopOpacity="0.1"/>
                  <stop offset="100%" stopColor="#D4A017" stopOpacity="0.05"/>
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A017" stopOpacity="0.05"/>
                  <stop offset="100%" stopColor="#D4A017" stopOpacity="0.02"/>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4A017]/10 rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-40 right-20 w-24 h-24 bg-[#D4A017]/10 rounded-full blur-3xl animate-float-delayed"></div>
            <div className="absolute bottom-20 left-20 w-28 h-28 bg-[#D4A017]/10 rounded-full blur-3xl animate-float"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-md rounded-full mb-8">
                <span className="text-white/90 text-sm font-semibold">Our Work</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 font-poppins leading-tight">
                Our <span className="text-transparent bg-gradient-to-r from-[#D4A017] to-[#F4D03F] bg-clip-text">Portfolio</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed mb-12">
                Discover our successful projects and innovative solutions that have transformed businesses across various industries.
              </p>

              {/* Strategic Search Bar */}
              <div className="max-w-md mx-auto mb-12">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:border-[#D4A017] transition-all duration-300"
                  />
                  <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 text-xl"></i>
                </div>
              </div>

              {/* Filter Dropdown */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                      activeFilter === category
                        ? 'bg-[#D4A017] text-[#1A2A44] shadow-lg'
                        : 'bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white/20'
                    }`}
                  >
                    {category === 'all' ? 'All Projects' : category}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center justify-center space-x-8 text-slate-400">
                <div className="flex items-center">
                  <i className="ri-check-line text-[#D4A017] mr-2"></i>
                  <span className="text-sm">150+ Projects</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#D4A017] mr-2"></i>
                  <span className="text-sm">50+ Clients</span>
                </div>
                <div className="flex items-center">
                  <i className="ri-check-line text-[#D4A017] mr-2"></i>
                  <span className="text-sm">99% Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((item) => (
                <article 
                  key={item.id} 
                  className="group relative bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={item.image}
                      alt={`${item.title} - ${item.description}`}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = item.fallbackImage || 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAwIiBoZWlnaHQ9IjM1MCIgdmlld0JveD0iMCAwIDUwMCAzNTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI1MDAiIGhlaWdodD0iMzUwIiBmaWxsPSIjMUUyQjQ0Ii8+CjxwYXRoIGQ9Ik0xMDAgMTAwaDMwMHYxNTBIMTAwVjEwMHoiIGZpbGw9IiM0QTU1N0YiLz4KPHN2ZyB4PSIxMjAiIHk9IjEyMCIgd2lkdGg9IjI2MCIgaGVpZ2h0PSIxMTAiPgo8cmVjdCB3aWR0aD0iMjYwIiBoZWlnaHQ9IjExMCIgZmlsbD0iIzFBMkE0NCIvPgo8cmVjdCB4PSIxMCIgeT0iMTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0Q0QTAxNyIvPgo8cmVjdCB4PSI4MCIgeT0iMTAiIHdpZHRoPSI0MCIgaGVpZ2h0PSIyMCIgZmlsbD0iI0Q0QTAxNyIvPgo8cmVjdCB4PSIxMzAiIHk9IjEwIiB3aWR0aD0iNDAiIGhlaWdodD0iMjAiIGZpbGw9IiNEQ0EwMTciLz4KPHN2ZyB4PSIxMCIgeT0iNDAiIHdpZHRoPSIxMDAiIGhlaWdodD0iNjAiPgo8cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjYwIiBmaWxsPSIjM0M0QTU1Ii8+Cjx0ZXh0IHg9IjUwIiB5PSIzNSIgZmlsbD0id2hpdGUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SW1hZ2U8L3RleHQ+Cjx0ZXh0IHg9IjI1MCIgeT0iMjAwIiBmaWxsPSJ3aGl0ZSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ob3QgQXZhaWxhYmxlPC90ZXh0Pgo8L3N2Zz4K';
                      }}
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`bg-gradient-to-r ${getColorClasses(item.color)} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                        {item.category}
                      </span>
                    </div>
                    
                    {/* Share Button */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => shareProject('linkedin', item)}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <i className="ri-linkedin-fill text-sm"></i>
                        </button>
                        <button
                          onClick={() => shareProject('twitter', item)}
                          className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                        >
                          <i className="ri-twitter-fill text-sm"></i>
                        </button>
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2A44]/90 via-[#1A2A44]/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                      <div className="p-6 w-full space-y-3">
                        <Link
                          href={`/portfolio/${item.slug}`}
                          className="inline-flex items-center text-white font-semibold hover:text-[#D4A017] transition-colors duration-200"
                        >
                          View Project
                          <i className="ri-external-link-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                        </Link>
                        <button
                          onClick={() => openModal(item)}
                          className="inline-flex items-center text-white font-semibold hover:text-[#D4A017] transition-colors duration-200"
                        >
                          View Details
                          <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-3 font-poppins group-hover:text-[#D4A017] transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className={`text-sm font-semibold mb-4 bg-gradient-to-r ${getColorClasses(item.color)} bg-clip-text text-transparent`}>
                      {item.subtitle}
                    </p>
                    
                    <p className="text-slate-300 mb-6 font-inter leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, index) => (
                          <span 
                            key={index} 
                            className="bg-white/10 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-white/20 transition-colors duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Metrics */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Key Metrics</h4>
                      <div className="space-y-2">
                        {item.metrics.map((metric, index) => (
                          <div key={index} className="flex items-center text-sm text-slate-300">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getColorClasses(item.color)} mr-3`}></div>
                            {metric}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="space-y-3">
                      <Link
                        href={`/portfolio/${item.slug}`}
                        className={`inline-flex items-center justify-center w-full bg-gradient-to-r ${getColorClasses(item.color)} text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg group-hover:shadow-xl`}
                      >
                        View Project
                        <i className="ri-external-link-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                      </Link>
                      <button
                        onClick={() => openModal(item)}
                        className="inline-flex items-center justify-center w-full bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-white/20 group-hover:shadow-xl border border-white/20"
                      >
                        View Details
                        <i className="ri-arrow-right-line ml-2 group-hover:translate-x-1 transition-transform duration-200"></i>
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Sticky Explore More Button */}
            <div className="sticky bottom-8 mt-16 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center bg-gradient-to-r from-[#D4A017] to-[#F4D03F] text-[#1A2A44] px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Explore More Projects
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </section>

        {/* Project Modal */}
        {isModalOpen && selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Modal Header */}
                <div className="p-8 border-b border-slate-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-2 font-poppins">
                        {selectedProject.title}
                      </h2>
                      <p className={`text-lg font-semibold bg-gradient-to-r ${getColorClasses(selectedProject.color)} bg-clip-text text-transparent`}>
                        {selectedProject.subtitle}
                      </p>
                    </div>
                    <button
                      onClick={closeModal}
                      className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors duration-200"
                    >
                      <i className="ri-close-line text-xl"></i>
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  {!showRequestForm ? (
                    <>
                      {/* Image Gallery */}
                      <div className="mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {selectedProject.gallery.map((image, index) => (
                            <img
                              key={index}
                              src={image}
                              alt={`${selectedProject.title} - Image ${index + 1}`}
                              className="w-full h-48 object-cover rounded-xl shadow-lg"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Project Details */}
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-4">Project Overview</h3>
                          <p className="text-slate-600 mb-6 leading-relaxed">
                            {selectedProject.description}
                          </p>
                          
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {selectedProject.technologies.map((tech, index) => (
                              <span 
                                key={index} 
                                className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Metrics and CTA */}
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Key Achievements</h4>
                          <div className="space-y-3 mb-8">
                            {selectedProject.metrics.map((metric, index) => (
                              <div key={index} className="flex items-center text-slate-600">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getColorClasses(selectedProject.color)} mr-3`}></div>
                                {metric}
                              </div>
                            ))}
                          </div>

                          <div className="space-y-4">
                            <Link
                              href={`/portfolio/${selectedProject.slug}`}
                              className={`block w-full bg-gradient-to-r ${getColorClasses(selectedProject.color)} text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                            >
                              View Full Project
                            </Link>
                            <button
                              onClick={handleRequestSimilar}
                              className="block w-full bg-slate-900 text-white px-6 py-4 rounded-xl font-semibold text-center transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                            >
                              Request Similar Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    /* Request Form */
                    <div className="max-w-2xl mx-auto">
                      {requestSuccess ? (
                        <div className="text-center py-12">
                          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <i className="ri-check-line text-3xl text-green-600"></i>
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 mb-4">Request Sent Successfully!</h3>
                          <p className="text-slate-600 mb-6">
                            Thank you for your interest in a similar project. We'll get back to you within 24 hours with a detailed proposal.
                          </p>
                          <button
                            onClick={closeModal}
                            className="bg-gradient-to-r from-[#D4A017] to-[#F4D03F] text-[#1A2A44] px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                          >
                            Close
                          </button>
                        </div>
                      ) : (
                        <EmailForm
                          formType="portfolio"
                          title={`Request Similar to ${selectedProject.title}`}
                          subtitle={`Tell us about your project requirements and we'll create a custom solution inspired by ${selectedProject.title}.`}
                          submitText="Send Request"
                          showCompany={true}
                          showProjectType={true}
                          showPhone={true}
                          showBudget={true}
                          showTimeline={true}
                          onSuccess={handleRequestSuccess}
                          onError={handleRequestError}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
} 