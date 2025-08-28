import { Metadata } from 'next'
import SEOHead from '@/components/SEOHead'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Portfolio | ElegantCodes - Custom Software Development & IT Solutions',
  description: 'Explore ElegantCodes portfolio of successful projects including custom software development, mobile apps, web applications, and IT consulting solutions.',
  keywords: [
    'ElegantCodes portfolio',
    'custom software projects',
    'mobile app portfolio',
    'web development projects',
    'IT consulting projects',
    'software development case studies',
    'technology solutions portfolio',
    'digital transformation projects',
    'enterprise software portfolio',
    'mobile application projects'
  ],
  openGraph: {
    title: 'Portfolio | ElegantCodes - Custom Software Development & IT Solutions',
    description: 'Explore ElegantCodes portfolio of successful projects including custom software development, mobile apps, web applications, and IT consulting solutions.',
    url: 'https://www.elegantcodes.com/portfolio',
    siteName: 'ElegantCodes - Premier IT Consulting',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-portfolio.jpg',
        width: 1200,
        height: 630,
        alt: 'ElegantCodes Portfolio - Custom Software Development Projects',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | ElegantCodes - Custom Software Development & IT Solutions',
    description: 'Explore ElegantCodes portfolio of successful projects including custom software development, mobile apps, web applications, and IT consulting solutions.',
    images: ['https://www.elegantcodes.com/og-image-portfolio.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/portfolio'
  }
};

export default function PortfolioPage() {
  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Portfolio', url: 'https://www.elegantcodes.com/portfolio' }
  ];

  const faqs = [
    {
      question: "What types of projects does ElegantCodes showcase in their portfolio?",
      answer: "ElegantCodes portfolio includes custom software development, mobile applications, web applications, e-commerce solutions, enterprise software, and IT consulting projects across various industries."
    },
    {
      question: "Can I see examples of ElegantCodes' work in my industry?",
      answer: "Yes, ElegantCodes has worked across multiple industries including healthcare, finance, retail, logistics, education, and manufacturing. Our portfolio demonstrates our versatility and industry expertise."
    },
    {
      question: "How can I get started with a project similar to those in the portfolio?",
      answer: "To get started with a project, contact ElegantCodes through our contact form or call us directly. We'll discuss your requirements and provide a customized solution based on your business needs."
    }
  ];

  const portfolioProjects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "A comprehensive e-commerce solution with advanced inventory management, payment processing, and analytics dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8RSUyMGNvbW1lcmNlJTIwd2Vic2l0ZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Development",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.",
      image: "https://images.unsplash.com/photo-1609851451108-e937620f1210?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9iaWxlJTIwQXBwcyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["React Native", "Firebase", "Biometric API"],
      link: "#"
    },
    {
      id: 3,
      title: "Enterprise CRM System",
      category: "Software Development",
      description: "Custom CRM solution with advanced reporting, workflow automation, and integration capabilities.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      technologies: ["Angular", "C#", "SQL Server", "Azure"],
      link: "#"
    },
    {
      id: 4,
      title: "Cloud Migration Project",
      category: "Cloud Solutions",
      description: "Complete cloud infrastructure migration with automated deployment pipelines and monitoring systems.",
      image: "https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=612x612&w=0&k=20&c=AcxzQAe1LY4lGp0C6EQ6reI7ZkFC2ftS09yw_3BVkpk=",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform"],
      link: "#"
    },
    {
      id: 5,
      title: "Healthcare Management System",
      category: "Software Development",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, and billing integration.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9iaWxlJTIwQXBwcyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
      technologies: ["Vue.js", "Python", "PostgreSQL", "HIPAA Compliant"],
      link: "#"
    },
    {
      id: 6,
      title: "Logistics Tracking App",
      category: "Mobile Development",
      description: "Real-time logistics tracking application with GPS integration, route optimization, and delivery management.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
      technologies: ["Flutter", "Google Maps API", "Firebase", "Real-time Updates"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 font-poppins">
              Our <span className="text-amber-500">Portfolio</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-inter leading-relaxed">
              Explore our successful projects and see how ElegantCodes transforms businesses through innovative 
              technology solutions across various industries and technologies.
            </p>
          </div>
        </section>

        {/* Portfolio Grid Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Featured <span className="text-amber-500">Projects</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                Discover how we've helped businesses achieve their digital transformation goals through 
                custom software development and innovative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project) => (
                <div key={project.id} className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 font-inter leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-700 mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-slate-200 text-slate-700 px-2 py-1 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <a
                      href={project.link}
                      className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200 inline-flex items-center"
                    >
                      View Project Details
                      <i className="ri-arrow-right-line ml-2"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-6 font-poppins">
                Our <span className="text-amber-500">Services</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto font-inter">
                Ready to start your next project? Explore our comprehensive range of IT solutions and services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-customer-service-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">IT Consulting</h3>
                <a 
                  href="/services/it-consulting" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-code-s-slash-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Software Development</h3>
                <a 
                  href="/services/software-development" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-smartphone-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Mobile Apps</h3>
                <a 
                  href="/services/mobile-apps" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 text-center">
                <div className="w-16 h-16 bg-amber-500 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <i className="ri-cloud-line text-3xl text-slate-900"></i>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Cloud Solutions</h3>
                <a 
                  href="/services/cloud-solutions" 
                  className="text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                >
                  Learn More →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-slate-300 mb-8 font-inter">
              Let ElegantCodes help you create the next success story in our portfolio with innovative 
              technology solutions tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/#contact" 
                className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                Start Your Project
              </a>
              <a 
                href="/services" 
                className="border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
              >
                View Our Services
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      <SEOHead 
        config={{
          title: 'Portfolio | ElegantCodes - Custom Software Development & IT Solutions',
          description: 'Explore ElegantCodes portfolio of successful projects including custom software development, mobile apps, web applications, and IT consulting solutions.',
          keywords: ['ElegantCodes portfolio', 'custom software projects', 'mobile app portfolio', 'web development projects'],
          canonical: 'https://www.elegantcodes.com/portfolio',
          ogImage: 'https://www.elegantcodes.com/og-image-portfolio.jpg',
          ogType: 'website'
        }}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
      />
    </div>
  );
} 