
import type { Metadata, Viewport } from 'next';
import ProjectDetail from './ProjectDetail';
import { projectsData } from './data';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  
  const projectData = {
    'techflow-crm': {
      title: 'TechFlow CRM - Customer Relationship Management System',
      description: 'A comprehensive CRM solution designed to streamline customer management, sales tracking, and business operations for modern enterprises.',
    },
    'retailpro-pos': {
      title: 'RetailPro POS - Advanced Point of Sale System',
      description: 'Modern point-of-sale solution with inventory management, customer tracking, and comprehensive reporting for retail businesses.',
    },
    'ecoshop-marketplace': {
      title: 'EcoShop Marketplace - Multi-Vendor E-commerce Platform',
      description: 'A sophisticated marketplace platform connecting vendors and customers with advanced features and seamless user experience.',
    },
    'healthsync-mobile': {
      title: 'HealthSync Mobile - Healthcare Management App',
      description: 'Mobile application for healthcare providers and patients with appointment scheduling, medical records, and telemedicine capabilities.',
    },
    'financetracker-pro': {
      title: 'FinanceTracker Pro - Financial Management System',
      description: 'Comprehensive financial management platform for businesses with budgeting, expense tracking, and financial reporting capabilities.',
    },
    'eventmaster-app': {
      title: 'EventMaster App - Event Management Solution',
      description: 'Complete event management platform for organizers with ticketing, attendee management, and event analytics.',
    },
  };

  const project = projectData[slug as keyof typeof projectData];
  
  if (!project) {
    return {
      title: 'Project - ElegantCodes Portfolio',
      description: 'Explore our custom software development projects and solutions.',
    };
  }

  return {
    title: `${project.title} - ElegantCodes Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: 'article',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title: project.title,
      description: project.description,
    },
  };
}

export async function generateStaticParams() {
  return [
    { slug: 'techflow-crm' },
    { slug: 'retailpro-pos' },
    { slug: 'ecoshop-marketplace' },
    { slug: 'healthsync-mobile' },
    { slug: 'financetracker-pro' },
    { slug: 'eventmaster-app' },
  ];
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Get the project data based on the slug
  const project = projectsData[slug as keyof typeof projectsData];
  
  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail project={project} />;
}
