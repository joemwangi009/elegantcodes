'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  slug: string;
  featured?: boolean;
  tags: string[];
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const allBlogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Custom Software Development',
      excerpt: 'Exploring emerging trends and technologies shaping the future of bespoke software solutions for businesses.',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      category: 'Development',
      readTime: '5 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&crop=center',
      slug: 'future-of-custom-software-development',
      featured: true,
      tags: ['AI', 'Cloud Computing', 'Microservices', 'DevOps']
    },
    {
      id: 2,
      title: 'E-commerce Optimization Strategies for 2025',
      excerpt: 'Essential strategies to maximize conversions and enhance user experience in modern e-commerce platforms.',
      author: 'Michael Chen',
      date: 'December 10, 2024',
      category: 'E-commerce',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop&crop=center',
      slug: 'ecommerce-optimization-strategies-2025',
      featured: true,
      tags: ['Conversion', 'UX Design', 'Analytics', 'Mobile Commerce']
    },
    {
      id: 3,
      title: 'Building Scalable POS Systems',
      excerpt: 'Best practices for developing point-of-sale systems that can grow with your business needs.',
      author: 'Emily Rodriguez',
      date: 'December 5, 2024',
      category: 'POS Systems',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=500&fit=crop&crop=center',
      slug: 'building-scalable-pos-systems',
      tags: ['Retail', 'Payment Processing', 'Inventory Management', 'Cloud POS']
    },
    {
      id: 4,
      title: 'API Security Best Practices',
      excerpt: 'Comprehensive guide to securing your APIs and protecting sensitive business data from threats.',
      author: 'Sarah Johnson',
      date: 'November 28, 2024',
      category: 'Security',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      slug: 'api-security-best-practices',
      tags: ['Cybersecurity', 'API Design', 'Authentication', 'Data Protection']
    },
    {
      id: 5,
      title: 'Mobile App Performance Optimization',
      excerpt: 'Techniques to ensure your mobile applications deliver exceptional speed and user experience.',
      author: 'Michael Chen',
      date: 'November 20, 2024',
      category: 'Mobile',
      readTime: '4 min read',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=center',
      slug: 'mobile-app-performance-optimization',
      tags: ['Mobile Development', 'Performance', 'User Experience', 'Analytics']
    },
    {
      id: 6,
      title: 'Cloud Migration Strategies',
      excerpt: 'Step-by-step approach to successfully migrating your business applications to the cloud.',
      author: 'Emily Rodriguez',
      date: 'November 15, 2024',
      category: 'Cloud',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center',
      slug: 'cloud-migration-strategies',
      tags: ['Cloud Computing', 'Migration', 'AWS', 'Azure']
    },
    {
      id: 7,
      title: 'AI Integration in Business Applications',
      excerpt: 'How artificial intelligence is revolutionizing business processes and creating new opportunities.',
      author: 'David Park',
      date: 'November 10, 2024',
      category: 'AI & Tech',
      readTime: '9 min read',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&crop=center',
      slug: 'ai-integration-business-applications',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Business Automation', 'Innovation']
    },
    {
      id: 8,
      title: 'Database Design for High-Performance Applications',
      excerpt: 'Essential principles for designing databases that can handle massive scale and deliver fast performance.',
      author: 'Lisa Wang',
      date: 'November 5, 2024',
      category: 'Database',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=center',
      slug: 'database-design-high-performance',
      tags: ['Database Design', 'Performance', 'Scalability', 'Architecture']
    },
    {
      id: 9,
      title: 'Microservices Architecture Best Practices',
      excerpt: 'Complete guide to designing and implementing microservices for scalable enterprise applications.',
      author: 'Alex Thompson',
      date: 'October 30, 2024',
      category: 'Architecture',
      readTime: '11 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=center',
      slug: 'microservices-architecture-best-practices',
      tags: ['Microservices', 'Architecture', 'Scalability', 'Enterprise']
    }
  ];

  const categories = ['all', 'Development', 'E-commerce', 'POS Systems', 'Security', 'Mobile', 'Cloud', 'AI & Tech', 'Database', 'Architecture'];

  const filteredPosts = allBlogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'latest') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
    return a.readTime.localeCompare(b.readTime);
  });

  const featuredPosts = sortedPosts.filter(post => post.featured);
  const regularPosts = sortedPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-poppins">
              Insights & Expertise
            </h1>
            <p className="text-xl lg:text-2xl text-amber-400 mb-8 font-inter">
              Discover the latest trends, best practices, and insights in custom software development
            </p>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-inter">
              Stay ahead of the curve with our expert analysis, practical guides, and industry insights 
              that help you make informed decisions about your technology investments.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles, topics, authors..."
                className="w-full pl-12 pr-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors duration-200 shadow-sm"
              />
              <i className="ri-search-line absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 text-lg"></i>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    activeCategory === category
                      ? 'bg-amber-500 text-slate-900 shadow-md'
                      : 'bg-white text-slate-600 hover:bg-amber-50 hover:text-slate-900 border border-slate-200'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:border-amber-500 focus:outline-none transition-colors duration-200 shadow-sm"
            >
              <option value="latest">Latest First</option>
              <option value="readTime">Quick Reads</option>
            </select>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 font-poppins">Featured Articles</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center px-3 py-1 bg-amber-500 text-slate-900 text-sm font-semibold rounded-full">
                          Featured
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="inline-flex items-center px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-slate-500 text-sm">{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-200 font-poppins">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-slate-900 font-semibold text-sm">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-slate-700 font-medium">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold transition-colors duration-200"
                        >
                          Read More
                          <i className="ri-arrow-right-line ml-2"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 font-poppins">
            {activeCategory === 'all' ? 'All Articles' : `${activeCategory} Articles`}
          </h2>
          
          {regularPosts.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-search-line text-slate-400 text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">No articles found</h3>
              <p className="text-slate-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <article key={post.id} className="group">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                        <span className="text-slate-500 text-xs">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors duration-200 font-poppins line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-slate-600 mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                      
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="inline-flex items-center px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-slate-900 font-semibold text-xs">
                              {post.author.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <span className="text-slate-700 text-sm font-medium">{post.author}</span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold text-sm transition-colors duration-200"
                        >
                          Read More
                          <i className="ri-arrow-right-line ml-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-poppins">
            Stay Updated with Our Latest Insights
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest articles, industry insights, and expert tips delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-white border border-slate-300 rounded-lg text-slate-900 placeholder-slate-500 focus:border-amber-500 focus:outline-none transition-colors duration-200"
            />
            <button className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-6 py-3 rounded-lg font-semibold transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}