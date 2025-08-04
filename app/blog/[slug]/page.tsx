import BlogArticle from './BlogArticle';

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
    { slug: 'devops-automation-modern-teams' },
    { slug: 'blockchain-integration-business-solutions' },
    { slug: 'ux-design-enterprise-applications' },
  ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogArticle slug={params.slug} />;
}