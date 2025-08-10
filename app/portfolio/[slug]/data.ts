export interface ProjectData {
  id: number;
  title: string;
  category: string;
  client: string;
  duration: string;
  technologies: string[];
  heroImage: string;
  description: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  gallery: Array<{
    image: string;
    caption: string;
  }>;
  features: string[];
  results: string[];
}

export const projectsData: Record<string, ProjectData> = {
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
      "Real-time inventory tracking and management",
      "Offline functionality for network interruptions",
      "Secure payment processing with PCI compliance",
      "Customer loyalty and rewards program integration",
      "Comprehensive reporting and analytics dashboard"
    ],
    results: [
      "40% faster checkout process",
      "99.9% system uptime and reliability",
      "30% reduction in inventory discrepancies",
      "25% increase in customer satisfaction"
    ]
  },
  "ecoshop-marketplace": {
    id: 3,
    title: "EcoShop Marketplace",
    category: "E-commerce Platform",
    client: "EcoShop Ventures",
    duration: "10 months",
    technologies: ["Next.js", "Stripe", "Prisma", "Vercel", "PostgreSQL", "Redis"],
    heroImage: "https://images.unsplash.com/photo-1385048587-0b9b0b0b0b0b?w=800&h=600&fit=crop&crop=center",
    description: "A sustainable e-commerce marketplace platform connecting conscious consumers with eco-friendly brands. Features advanced search, vendor management, and sustainability scoring.",
    overview: "EcoShop Marketplace is a comprehensive platform that makes sustainable shopping accessible and transparent. The platform features advanced search capabilities, vendor verification, and sustainability scoring to help consumers make informed purchasing decisions.",
    challenges: [
      "Complex multi-vendor marketplace architecture",
      "Real-time inventory synchronization across vendors",
      "Advanced search and filtering with sustainability metrics",
      "Secure payment processing and vendor payouts"
    ],
    solutions: [
      "Built scalable microservices architecture with event-driven design",
      "Implemented real-time inventory sync using WebSockets and Redis",
      "Created advanced search engine with Elasticsearch integration",
      "Designed secure payment system with automated vendor payouts"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1385048587-0b9b0b0b0b0b?w=800&h=600&fit=crop&crop=center",
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
      "Multi-vendor marketplace with vendor verification",
      "Advanced search and filtering with sustainability metrics",
      "Real-time inventory tracking across all vendors",
      "Secure payment processing and automated payouts",
      "Sustainability scoring and eco-friendly product badges",
      "Mobile-responsive design for on-the-go shopping"
    ],
    results: [
      "500+ sustainable brands onboarded",
      "250% user growth in first year",
      "40% increase in average order value",
      "95% vendor satisfaction rating"
    ]
  },
  "healthsync-mobile": {
    id: 4,
    title: "HealthSync Mobile",
    category: "Mobile Application",
    client: "HealthSync Healthcare",
    duration: "9 months",
    technologies: ["React Native", "Firebase", "TypeScript", "GraphQL", "AWS", "Twilio"],
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    description: "A comprehensive healthcare management mobile application connecting patients and providers through technology. Features appointment scheduling, telemedicine, and secure medical records.",
    overview: "HealthSync Mobile revolutionizes healthcare delivery by providing a seamless platform for patients and healthcare providers. The app streamlines appointment scheduling, enables telemedicine consultations, and securely manages medical records.",
    challenges: [
      "HIPAA compliance and secure medical data handling",
      "Real-time video consultations with screen sharing",
      "Integration with existing healthcare systems",
      "Cross-platform mobile development for iOS and Android"
    ],
    solutions: [
      "Implemented end-to-end encryption and HIPAA-compliant security",
      "Built real-time video platform with WebRTC and Twilio",
      "Created secure API integrations with major healthcare systems",
      "Developed cross-platform solution using React Native"
    ],
    gallery: [
      {
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
        caption: "Appointment Scheduling"
      },
      {
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&crop=center",
        caption: "Telemedicine Interface"
      },
      {
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
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