import type { Metadata, Viewport } from 'next';
import BlogArticle from './BlogArticle';
import { notFound } from 'next/navigation';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const blogData = {
    'future-of-custom-software-development': {
      title: 'The Future of Custom Software Development',
      description: 'Exploring emerging trends and technologies shaping the future of bespoke software solutions for businesses, including AI-powered tools and cloud-native architectures.',
    },
    'ecommerce-optimization-strategies-2025': {
      title: 'E-commerce Optimization Strategies for 2025',
      description: 'Essential strategies to maximize conversions and enhance user experience in modern e-commerce platforms.',
    },
    'building-scalable-pos-systems': {
      title: 'Building Scalable POS Systems',
      description: 'Best practices for developing point-of-sale systems that can grow with your business needs.',
    },
    'api-security-best-practices': {
      title: 'API Security Best Practices',
      description: 'Comprehensive guide to securing your APIs and protecting sensitive business data from threats.',
    },
    'mobile-app-performance-optimization': {
      title: 'Mobile App Performance Optimization',
      description: 'Techniques to ensure your mobile applications deliver exceptional speed and user experience.',
    },
    'cloud-migration-strategies': {
      title: 'Cloud Migration Strategies',
      description: 'Step-by-step approach to successfully migrating your business applications to the cloud.',
    },
    'ai-integration-business-applications': {
      title: 'AI Integration in Business Applications',
      description: 'How artificial intelligence is revolutionizing business processes and creating new opportunities.',
    },
    'database-design-high-performance': {
      title: 'Database Design for High-Performance Applications',
      description: 'Essential principles for designing databases that can handle massive scale and deliver fast performance.',
    },
    'microservices-architecture-best-practices': {
      title: 'Microservices Architecture Best Practices',
      description: 'Complete guide to designing and implementing microservices for scalable enterprise applications.',
    },
    'blockchain-integration-business-solutions': {
      title: 'Blockchain Integration for Business Solutions',
      description: 'Exploring practical applications of blockchain technology in modern business environments.',
    },
    'devops-automation-modern-teams': {
      title: 'DevOps Automation for Modern Teams',
      description: 'Streamline your development workflow with automated testing, deployment, and monitoring solutions.',
    },
    'ux-design-enterprise-applications': {
      title: 'User Experience Design for Enterprise Applications',
      description: 'Creating intuitive and efficient user interfaces for complex business software solutions.',
    },
  };

  const post = blogData[slug as keyof typeof blogData];
  
  if (!post) {
    return {
      title: 'Article Not Found - ElegantCodes Blog',
      description: 'The requested blog article could not be found.',
    };
  }

  return {
    title: `${post.title} - ElegantCodes Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'future-of-custom-software-development' },
    { slug: 'ecommerce-optimization-strategies-2025' },
    { slug: 'building-scalable-pos-systems' },
    { slug: 'api-security-best-practices' },
    { slug: 'mobile-app-performance-optimization' },
    { slug: 'cloud-migration-strategies' },
    { slug: 'ai-integration-business-applications' },
    { slug: 'database-design-high-performance' },
    { slug: 'microservices-architecture-best-practices' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const validSlugs = [
    'future-of-custom-software-development',
    'ecommerce-optimization-strategies-2025',
    'building-scalable-pos-systems',
    'api-security-best-practices',
    'mobile-app-performance-optimization',
    'cloud-migration-strategies',
    'ai-integration-business-applications',
    'database-design-high-performance',
    'microservices-architecture-best-practices',
  ];

  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return <BlogArticle slug={slug} />;
}