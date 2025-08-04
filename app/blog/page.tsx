'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function BlogPage() {
  const allBlogPosts = [
    {
      id: 1,
      title: 'The Future of Custom Software Development',
      excerpt: 'Exploring emerging trends and technologies shaping the future of bespoke software solutions for businesses.',
      author: 'Sarah Johnson',
      date: 'December 15, 2024',
      category: 'Development',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20software%20development%20concepts%20visualization%20with%20elegant%20coding%20interfaces%2C%20futuristic%20programming%20environment%20with%20dark%20navy%20and%20gold%20theme%2C%20sophisticated%20technology%20trends%20illustration%2C%20clean%20tech%20industry%20blog%20header%20design%2C%20professional%20software%20engineering%20concepts&width=400&height=250&seq=blog-1&orientation=landscape',
      slug: 'future-of-custom-software-development'
    },
    {
      id: 2,
      title: 'E-commerce Optimization Strategies for 2025',
      excerpt: 'Essential strategies to maximize conversions and enhance user experience in modern e-commerce platforms.',
      author: 'Michael Chen',
      date: 'December 10, 2024',
      category: 'E-commerce',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20optimization%20dashboard%20with%20sales%20analytics%2C%20modern%20online%20retail%20performance%20metrics%2C%20dark%20navy%20business%20interface%20with%20gold%20accents%2C%20sophisticated%20digital%20commerce%20visualization%2C%20clean%20business%20growth%20charts%20and%20data&width=400&height=250&seq=blog-2&orientation=landscape',
      slug: 'ecommerce-optimization-strategies-2025'
    },
    {
      id: 3,
      title: 'Building Scalable POS Systems',
      excerpt: 'Best practices for developing point-of-sale systems that can grow with your business needs.',
      author: 'Emily Rodriguez',
      date: 'December 5, 2024',
      category: 'POS Systems',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20point%20of%20sale%20system%20architecture%20diagram%2C%20professional%20retail%20technology%20infrastructure%20visualization%2C%20dark%20navy%20and%20gold%20themed%20business%20system%20design%2C%20sophisticated%20POS%20development%20concepts%2C%20clean%20technical%20illustration%20for%20business%20systems&width=400&height=250&seq=blog-3&orientation=landscape',
      slug: 'building-scalable-pos-systems'
    },
    {
      id: 4,
      title: 'API Security Best Practices',
      excerpt: 'Comprehensive guide to securing your APIs and protecting sensitive business data from threats.',
      author: 'Sarah Johnson',
      date: 'November 28, 2024',
      category: 'Security',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20cybersecurity%20concepts%20with%20API%20protection%20visualization%2C%20modern%20security%20infrastructure%20design%2C%20dark%20navy%20and%20gold%20themed%20security%20dashboard%2C%20sophisticated%20data%20protection%20illustration%2C%20clean%20technical%20security%20concepts%20for%20business&width=400&height=250&seq=blog-4&orientation=landscape',
      slug: 'api-security-best-practices'
    },
    {
      id: 5,
      title: 'Mobile App Performance Optimization',
      excerpt: 'Techniques to ensure your mobile applications deliver exceptional speed and user experience.',
      author: 'Michael Chen',
      date: 'November 20, 2024',
      category: 'Mobile',
      readTime: '4 min read',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20application%20performance%20monitoring%20dashboard%20with%20elegant%20metrics%20display%2C%20professional%20app%20optimization%20interface%2C%20dark%20navy%20mobile%20development%20theme%20with%20gold%20highlights%2C%20sophisticated%20mobile%20analytics%20visualization%2C%20clean%20app%20performance%20data&width=400&height=250&seq=blog-5&orientation=landscape',
      slug: 'mobile-app-performance-optimization'
    },
    {
      id: 6,
      title: 'Cloud Migration Strategies',
      excerpt: 'Step-by-step approach to successfully migrating your business applications to the cloud.',
      author: 'Emily Rodriguez',
      date: 'November 15, 2024',
      category: 'Cloud',
      readTime: '10 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20cloud%20infrastructure%20migration%20diagram%2C%20modern%20cloud%20computing%20architecture%20visualization%2C%20dark%20navy%20and%20gold%20themed%20enterprise%20cloud%20design%2C%20sophisticated%20cloud%20services%20illustration%2C%20clean%20technical%20cloud%20migration%20concepts&width=400&height=250&seq=blog-6&orientation=landscape',
      slug: 'cloud-migration-strategies'
    },
    {
      id: 7,
      title: 'AI Integration in Business Applications',
      excerpt: 'How artificial intelligence is revolutionizing business processes and creating new opportunities.',
      author: 'David Park',
      date: 'November 10, 2024',
      category: 'AI & Tech',
      readTime: '9 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20artificial%20intelligence%20business%20integration%20visualization%2C%20modern%20AI%20technology%20dashboard%20with%20neural%20networks%2C%20dark%20navy%20and%20gold%20themed%20AI%20interface%2C%20sophisticated%20machine%20learning%20concepts%2C%20clean%20tech%20innovation%20illustration&width=400&height=250&seq=blog-7&orientation=landscape',
      slug: 'ai-integration-business-applications'
    },
    {
      id: 8,
      title: 'Database Design for High-Performance Applications',
      excerpt: 'Essential principles for designing databases that can handle massive scale and deliver fast performance.',
      author: 'Lisa Wang',
      date: 'November 5, 2024',
      category: 'Database',
      readTime: '12 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20database%20architecture%20visualization%20with%20high%20performance%20metrics%2C%20modern%20database%20design%20concepts%2C%20dark%20navy%20and%20gold%20themed%20data%20infrastructure%2C%20sophisticated%20database%20management%20illustration%2C%20clean%20technical%20data%20visualization&width=400&height=250&seq=blog-8&orientation=landscape',
      slug: 'database-design-high-performance'
    },
    {
      id: 9,
      title: 'Microservices Architecture Best Practices',
      excerpt: 'Complete guide to designing and implementing microservices for scalable enterprise applications.',
      author: 'Alex Thompson',
      date: 'October 30, 2024',
      category: 'Architecture',
      readTime: '11 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20microservices%20architecture%20diagram%20with%20interconnected%20services%2C%20modern%20distributed%20systems%20visualization%2C%20dark%20navy%20and%20gold%20themed%20enterprise%20architecture%2C%20sophisticated%20system%20design%20illustration%2C%20clean%20technical%20architecture%20concepts&width=400&height=250&seq=blog-9&orientation=landscape',
      slug: 'microservices-architecture-best-practices'
    },
    {
      id: 10,
      title: 'DevOps Automation for Modern Teams',
      excerpt: 'Streamline your development workflow with automated testing, deployment, and monitoring solutions.',
      author: 'Rachel Kim',
      date: 'October 25, 2024',
      category: 'DevOps',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20DevOps%20automation%20pipeline%20visualization%2C%20modern%20CI%20CD%20workflow%20dashboard%2C%20dark%20navy%20and%20gold%20themed%20development%20operations%20interface%2C%20sophisticated%20automation%20tools%20illustration%2C%20clean%20technical%20DevOps%20concepts&width=400&height=250&seq=blog-10&orientation=landscape',
      slug: 'devops-automation-modern-teams'
    },
    {
      id: 11,
      title: 'Blockchain Integration for Business Solutions',
      excerpt: 'Exploring practical applications of blockchain technology in modern business environments.',
      author: 'James Foster',
      date: 'October 20, 2024',
      category: 'Blockchain',
      readTime: '13 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20blockchain%20technology%20business%20integration%20visualization%2C%20modern%20distributed%20ledger%20concepts%2C%20dark%20navy%20and%20gold%20themed%20blockchain%20interface%2C%20sophisticated%20cryptocurrency%20and%20DeFi%20illustration%2C%20clean%20technical%20blockchain%20concepts&width=400&height=250&seq=blog-11&orientation=landscape',
      slug: 'blockchain-integration-business-solutions'
    },
    {
      id: 12,
      title: 'User Experience Design for Enterprise Applications',
      excerpt: 'Creating intuitive and efficient user interfaces for complex business software solutions.',
      author: 'Sophie Miller',
      date: 'October 15, 2024',
      category: 'UX Design',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Professional%20user%20experience%20design%20process%20visualization%2C%20modern%20UI%20UX%20design%20concepts%2C%20dark%20navy%20and%20gold%20themed%20design%20interface%2C%20sophisticated%20user%20interface%20design%20illustration%2C%20clean%20design%20thinking%20methodology&width=400&height=250&seq=blog-12&orientation=landscape',
      slug: 'ux-design-enterprise-applications'
    }
  ];

  const categories = ['All', 'Development', 'E-commerce', 'POS Systems', 'Security', 'Mobile', 'Cloud', 'AI & Tech', 'Database', 'Architecture', 'DevOps', 'Blockchain', 'UX Design'];
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-32 pb-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-poppins">
                Tech <span className="text-amber-500">Insights</span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto font-inter">
                Discover the latest trends, best practices, and innovations in software development, 
                e-commerce, and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allBlogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-amber-500 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3 font-inter">
                      <span>{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins group-hover:text-amber-600 transition-colors duration-200">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4 font-inter leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200 cursor-pointer"
                    >
                      Read More
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}