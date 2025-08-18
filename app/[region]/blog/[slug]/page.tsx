import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regionalConfig, keywordClusters } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPostProps {
  params: { region: string; slug: string };
}

// Generate static params for blog posts
export async function generateStaticParams() {
  const regions = Object.keys(regionalConfig);
  const posts = Array.from({ length: 50 }, (_, i) => `post-${i + 1}`);
  
  return regions.flatMap(region =>
    posts.map(slug => ({
      region,
      slug,
    }))
  );
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { region, slug } = params;
  
  if (!regionalConfig[region as keyof typeof regionalConfig]) {
    notFound();
  }
  
  const regional = regionalConfig[region as keyof typeof regionalConfig];
  
  // Generate blog post title and content based on slug
  const postNumber = parseInt(slug.replace('post-', ''));
  const cluster = keywordClusters[postNumber % keywordClusters.length];
  const keywords = cluster.keywords.slice(0, 5);
  
  const title = `${cluster.name} in ${region.toUpperCase()} - Complete Guide ${postNumber}`;
  const description = `Expert guide on ${cluster.name.toLowerCase()} in ${region.toUpperCase()}. Learn about ${keywords.join(', ')} and more. Transform your business with our ${region.toUpperCase()} IT solutions.`;
  
  return {
    title: `${title} | ElegantCodes`,
    description,
    keywords: [
      ...keywords,
      `${cluster.name} ${region}`,
      `IT solutions ${region}`,
      `software development ${region}`,
      `technology ${region}`,
      `digital transformation ${region}`,
      ...cluster.keywords.slice(5, 10)
    ],
    openGraph: {
      title: `${title} | ElegantCodes`,
      description,
      url: `/${region}/blog/${slug}`,
      siteName: 'ElegantCodes',
      locale: regional.language === 'en' ? 'en_US' : regional.language,
      type: 'article',
      publishedTime: new Date().toISOString(),
      modifiedTime: new Date().toISOString(),
      authors: ['ElegantCodes Team'],
      tags: keywords,
      images: [
        {
          url: `/images/blog/${cluster.id}-${region}.jpg`,
          width: 1200,
          height: 630,
          alt: `${cluster.name} in ${region.toUpperCase()}`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ElegantCodes`,
      description,
      images: [`/images/blog/${cluster.id}-${region}.jpg`]
    },
    alternates: {
      canonical: `/${region}/blog/${slug}`,
    }
  };
}

export default function BlogPost({ params }: BlogPostProps) {
  const { region, slug } = params;
  
  if (!regionalConfig[region as keyof typeof regionalConfig]) {
    notFound();
  }
  
  const regional = regionalConfig[region as keyof typeof regionalConfig];
  const postNumber = parseInt(slug.replace('post-', ''));
  const cluster = keywordClusters[postNumber % keywordClusters.length];
  const keywords = cluster.keywords.slice(0, 8);
  
  // Generate dynamic content based on cluster and region
  const generateContent = () => {
    const sections = [
      {
        title: `What is ${cluster.name}?`,
        content: `${cluster.name} represents the cutting-edge of technology solutions that can transform your business operations. In ${region.toUpperCase()}, businesses are increasingly adopting ${cluster.name.toLowerCase()} to stay competitive in the digital marketplace.`
      },
      {
        title: `Benefits of ${cluster.name} in ${region.toUpperCase()}`,
        content: `Implementing ${cluster.name.toLowerCase()} in ${region.toUpperCase()} provides numerous advantages including improved efficiency, cost savings, enhanced security, and competitive advantage. Our expert team understands the unique challenges and opportunities in the ${region.toUpperCase()} market.`
      },
      {
        title: `Key Features of Our ${cluster.name} Solutions`,
        content: `Our ${cluster.name.toLowerCase()} services in ${region.toUpperCase()} include ${keywords.slice(0, 3).join(', ')}, and more. We provide comprehensive solutions tailored to your specific business needs and industry requirements.`
      },
      {
        title: `Why Choose ElegantCodes for ${cluster.name} in ${region.toUpperCase()}?`,
        content: `As a leading ${cluster.name.toLowerCase()} provider in ${region.toUpperCase()}, we offer local expertise combined with global standards. Our team understands the ${region.toUpperCase()} market dynamics and regulatory requirements, ensuring your project's success.`
      },
      {
        title: `Implementation Process`,
        content: `Our proven implementation process for ${cluster.name.toLowerCase()} in ${region.toUpperCase()} includes thorough planning, expert development, rigorous testing, and ongoing support. We ensure seamless integration with your existing systems.`
      },
      {
        title: `Case Studies and Success Stories`,
        content: `We have successfully delivered ${cluster.name.toLowerCase()} solutions to businesses across ${region.toUpperCase()}. Our portfolio includes projects in various industries, demonstrating our expertise and commitment to excellence.`
      },
      {
        title: `Getting Started with ${cluster.name} in ${region.toUpperCase()}`,
        content: `Ready to transform your business with ${cluster.name.toLowerCase()}? Contact our ${region.toUpperCase()} team for a free consultation. We'll assess your needs and provide a customized solution that drives results.`
      }
    ];
    
    return sections;
  };
  
  const contentSections = generateContent();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-500 mb-8">
            <a href={`/${region}`} className="hover:text-blue-600">Home</a>
            <span className="mx-2">/</span>
            <a href={`/${region}/blog`} className="hover:text-blue-600">Blog</a>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{slug}</span>
          </nav>
          
          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {cluster.name} in {region.toUpperCase()} - Complete Guide {postNumber}
            </h1>
            <div className="flex items-center text-gray-600 mb-6">
              <span>By ElegantCodes Team</span>
              <span className="mx-3">•</span>
              <span>{new Date().toLocaleDateString()}</span>
              <span className="mx-3">•</span>
              <span>{region.toUpperCase()}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {keywords.map((keyword, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {keyword}
                </span>
              ))}
            </div>
          </header>
          
          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            {contentSections.map((section, index) => (
              <section key={index} className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {section.content}
                </p>
                
                {/* Add more detailed content for each section */}
                {index === 0 && (
                  <div className="bg-gray-50 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-4">Quick Facts:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Industry-leading expertise in {region.toUpperCase()}</li>
                      <li>Proven track record of successful implementations</li>
                      <li>24/7 support in {regional.timezone} timezone</li>
                      <li>Compliance with {region.toUpperCase()} regulations</li>
                    </ul>
                  </div>
                )}
                
                {index === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Cost Efficiency</h4>
                      <p className="text-green-700 text-sm">Reduce operational costs by up to 40%</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Performance</h4>
                      <p className="text-blue-700 text-sm">Improve system performance by 60%</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Security</h4>
                      <p className="text-purple-700 text-sm">Enterprise-grade security standards</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Scalability</h4>
                      <p className="text-orange-700 text-sm">Grow with your business needs</p>
                    </div>
                  </div>
                )}
              </section>
            ))}
            
            {/* Call to Action */}
            <section className="bg-blue-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Business in {region.toUpperCase()}?
              </h2>
              <p className="text-xl mb-6">
                Get started with {cluster.name.toLowerCase()} today and see the difference our expertise makes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Get Free Consultation
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Portfolio
                </button>
              </div>
            </section>
          </article>
          
          {/* Related Posts */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 3 }, (_, i) => {
                const relatedPostNumber = (postNumber + i + 1) % 50;
                const relatedCluster = keywordClusters[relatedPostNumber % keywordClusters.length];
                return (
                  <article key={i} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {relatedCluster.name} Solutions in {region.toUpperCase()}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Discover how {relatedCluster.name.toLowerCase()} can transform your business operations in {region.toUpperCase()}.
                      </p>
                      <a 
                        href={`/${region}/blog/post-${relatedPostNumber + 1}`}
                        className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        Read More →
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
} 