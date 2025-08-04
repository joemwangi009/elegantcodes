
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReadingProgressBar from '@/components/ReadingProgressBar';
import StickyShareSidebar from '@/components/StickyShareSidebar';
import NewsletterSignup from '@/components/NewsletterSignup';
import CommentsSection from '@/components/CommentsSection';
import CodeHighlight from '@/components/CodeHighlight';

const blogData = {
  'future-of-custom-software-development': {
    title: 'The Future of Custom Software Development',
    author: 'Sarah Johnson',
    date: 'December 15, 2024',
    category: 'Development',
    readTime: '5 min read',
    metaDescription: 'Exploring emerging trends and technologies shaping the future of bespoke software solutions for businesses, including AI-powered tools and cloud-native architectures.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20software%20development%20concepts%20visualization%20with%20elegant%20coding%20interfaces%2C%20futuristic%20programming%20environment%20with%20dark%20navy%20and%20gold%20theme%2C%20sophisticated%20technology%20trends%20illustration%2C%20clean%20tech%20industry%20blog%20header%20design%2C%20professional%20software%20engineering%20concepts&width=800&height=400&seq=blog-1-hero&orientation=landscape',
    content: `
      <p className="text-lg text-slate-700 mb-6 leading-relaxed">The landscape of custom software development is rapidly evolving, driven by emerging technologies, changing business requirements, and new development paradigms. As we look toward the future, several key trends are shaping how we approach bespoke software solutions.</p>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Low-Code and No-Code Platforms</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">The rise of low-code and no-code platforms is democratizing software development, allowing business users to create applications with minimal coding knowledge. These platforms are becoming increasingly sophisticated, offering:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Visual development interfaces that reduce complexity</li>
        <li>Pre-built components and integrations</li>
        <li>Automated deployment and scaling capabilities</li>
        <li>Reduced time-to-market for simple applications</li>
      </ul>
      
      <div className="my-8 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
        <div className="flex items-start space-x-3">
          <i className="ri-lightbulb-line text-amber-600 text-xl mt-1"></i>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Pro Tip</h4>
            <p className="text-slate-700">While low-code platforms excel at rapid prototyping, complex business logic and performance-critical applications still benefit from traditional coding approaches.</p>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">AI-Powered Development Tools</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Artificial intelligence is revolutionizing how we write, test, and maintain code. AI-powered development tools are providing:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Intelligent code completion and suggestion</li>
        <li>Automated bug detection and fixing</li>
        <li>Code optimization recommendations</li>
        <li>Natural language to code conversion</li>
      </ul>
      
      <div className="my-8">
        <img src="https://readdy.ai/api/search-image?query=AI%20powered%20code%20development%20interface%20with%20intelligent%20suggestions%2C%20modern%20IDE%20with%20AI%20assistance%20features%2C%20dark%20navy%20coding%20environment%20with%20gold%20highlights%2C%20sophisticated%20development%20tools%20visualization%2C%20clean%20programming%20interface%20design&width=700&height=400&seq=ai-dev-tools&orientation=landscape" alt="AI-Powered Development Tools" className="w-full rounded-lg shadow-lg" />
        <p className="text-sm text-slate-500 mt-2 text-center">AI development tools are transforming how developers write and optimize code</p>
      </div>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Cloud-Native Architecture</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">The shift toward cloud-native development continues to accelerate, with microservices, containers, and serverless architectures becoming the norm. This approach offers:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Enhanced scalability and reliability</li>
        <li>Improved development velocity</li>
        <li>Better resource utilization</li>
        <li>Simplified maintenance and updates</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Security by Design</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">With increasing cyber threats, security is being integrated into every stage of the development lifecycle. Modern approaches include:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>DevSecOps practices</li>
        <li>Automated security testing</li>
        <li>Zero-trust architecture principles</li>
        <li>Continuous vulnerability assessment</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">The Human Element</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Despite technological advances, the human element remains crucial in custom software development. The future will require developers who can:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Understand business context and user needs</li>
        <li>Collaborate effectively with AI tools</li>
        <li>Focus on architecture and strategic decisions</li>
        <li>Ensure ethical and responsible development practices</li>
      </ul>
      
      <div className="my-8 p-6 bg-slate-50 rounded-lg border border-slate-200">
        <h4 className="font-semibold text-slate-900 mb-3">Key Takeaways</h4>
        <ul className="text-slate-700 space-y-2">
          <li className="flex items-start space-x-3">
            <i className="ri-check-line text-amber-600 mt-1"></i>
            <span>AI and low-code platforms are accelerating development speed</span>
          </li>
          <li className="flex items-start space-x-3">
            <i className="ri-check-line text-amber-600 mt-1"></i>
            <span>Cloud-native architectures provide better scalability and reliability</span>
          </li>
          <li className="flex items-start space-x-3">
            <i className="ri-check-line text-amber-600 mt-1"></i>
            <span>Security must be built into the development process from day one</span>
          </li>
          <li className="flex items-start space-x-3">
            <i className="ri-check-line text-amber-600 mt-1"></i>
            <span>Human expertise remains essential for strategic decisions</span>
          </li>
        </ul>
      </div>
      
      <p className="text-base text-slate-700 mb-6 leading-relaxed">As we move forward, the most successful custom software development projects will be those that effectively combine technological innovation with human insight, creating solutions that are not just technically sound but truly valuable to businesses and users.</p>
    `
  },
  'ecommerce-optimization-strategies-2025': {
    title: 'E-commerce Optimization Strategies for 2025',
    author: 'Michael Chen',
    date: 'December 10, 2024',
    category: 'E-commerce',
    readTime: '7 min read',
    metaDescription: 'Essential strategies to maximize conversions and enhance user experience in modern e-commerce platforms, including personalization, mobile-first design, and advanced analytics.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20e-commerce%20optimization%20dashboard%20with%20sales%20analytics%2C%20modern%20online%20retail%20performance%20metrics%2C%20dark%20navy%20business%20interface%20with%20gold%20accents%2C%20sophisticated%20digital%20commerce%20visualization%2C%20clean%20business%20growth%20charts%20and%20data&width=800&height=400&seq=blog-2-hero&orientation=landscape',
    content: `
      <p className="text-lg text-slate-700 mb-6 leading-relaxed">As e-commerce continues to evolve at breakneck speed, businesses must stay ahead of the curve to remain competitive. The strategies that worked yesterday may not be sufficient for tomorrow's market demands. Here's your comprehensive guide to e-commerce optimization for 2025.</p>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Personalization at Scale</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Modern consumers expect personalized experiences that feel tailored to their individual preferences and behaviors. To achieve this at scale:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Implement AI-driven recommendation engines that learn from user behavior</li>
        <li>Create dynamic content that adapts to user preferences</li>
        <li>Use predictive analytics to anticipate customer needs</li>
        <li>Develop personalized email marketing campaigns</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Mobile-First Optimization</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">With mobile commerce continuing to grow, your mobile experience can make or break your business:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Implement progressive web app (PWA) technology</li>
        <li>Optimize page load speeds for mobile networks</li>
        <li>Design thumb-friendly navigation and checkout processes</li>
        <li>Enable mobile payment options like Apple Pay and Google Pay</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Voice Commerce Integration</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Voice-activated shopping is becoming mainstream, requiring new optimization strategies:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Optimize product descriptions for voice search</li>
        <li>Implement voice-activated customer service</li>
        <li>Create conversational commerce experiences</li>
        <li>Develop voice-optimized product discovery</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Advanced Analytics and Attribution</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Understanding your customer journey is crucial for optimization:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Implement multi-touch attribution modeling</li>
        <li>Use cohort analysis to understand customer lifetime value</li>
        <li>Track micro-conversions and engagement metrics</li>
        <li>Leverage real-time analytics for immediate optimizations</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Sustainable and Social Commerce</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Modern consumers care about sustainability and social impact:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Highlight eco-friendly products and practices</li>
        <li>Implement carbon-neutral shipping options</li>
        <li>Create social proof through user-generated content</li>
        <li>Enable social media integration for seamless shopping</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Conversion Rate Optimization (CRO)</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Focus on converting more of your existing traffic:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>A/B testing for continuous improvement</li>
        <li>Streamline the checkout process</li>
        <li>Implement exit-intent popups and retargeting</li>
        <li>Use social proof and urgency tactics effectively</li>
      </ul>
      
      <p className="text-base text-slate-700 mb-6 leading-relaxed">Success in e-commerce optimization requires a holistic approach that combines technology, data insights, and customer understanding. By implementing these strategies, you'll be well-positioned to thrive in the competitive e-commerce landscape of 2025.</p>
    `
  },
  'building-scalable-pos-systems': {
    title: 'Building Scalable POS Systems',
    author: 'Emily Rodriguez',
    date: 'December 5, 2024',
    category: 'POS Systems',
    readTime: '6 min read',
    metaDescription: 'Best practices for developing point-of-sale systems that can grow with your business needs, including architecture principles and performance optimization.',
    image: 'https://readdy.ai/api/search-image?query=Modern%20point%20of%20sale%20system%20architecture%20diagram%2C%20professional%20retail%20technology%20infrastructure%20visualization%2C%20dark%20navy%20and%20gold%20themed%20business%20system%20design%2C%20sophisticated%20POS%20development%20concepts%2C%20clean%20technical%20illustration%20for%20business%20systems&width=800&height=400&seq=blog-3-hero&orientation=landscape',
    content: `
      <p className="text-lg text-slate-700 mb-6 leading-relaxed">Point-of-sale systems are the backbone of retail operations, handling everything from transactions to inventory management. As businesses grow, their POS systems must scale seamlessly to accommodate increased volume, locations, and complexity.</p>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Architecture Principles for Scalability</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Building a scalable POS system starts with the right architectural foundation:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Microservices architecture for independent scaling of components</li>
        <li>Event-driven design for real-time data synchronization</li>
        <li>API-first approach for seamless integrations</li>
        <li>Cloud-native deployment for elastic scaling</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Data Management Strategies</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Effective data management is crucial for POS system performance:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Implement database sharding for large transaction volumes</li>
        <li>Use caching layers for frequently accessed data</li>
        <li>Design for eventual consistency in distributed systems</li>
        <li>Implement robust backup and disaster recovery</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Real-Time Synchronization</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Modern POS systems must synchronize data across multiple channels:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Inventory updates across all locations and channels</li>
        <li>Customer data synchronization for omnichannel experiences</li>
        <li>Real-time reporting and analytics</li>
        <li>Price and promotion synchronization</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Payment Processing Integration</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Secure and efficient payment processing is paramount:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>PCI DSS compliance for security</li>
        <li>Multiple payment gateway integrations</li>
        <li>Support for various payment methods</li>
        <li>Fraud detection and prevention</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Offline Capability</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Reliable offline functionality ensures business continuity:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Local data storage for critical operations</li>
        <li>Queue-based synchronization when connectivity returns</li>
        <li>Offline reporting and analytics</li>
        <li>Graceful degradation of features</li>
      </ul>
      
      <h2 className="text-2xl font-bold text-slate-900 mt-8 mb-4">Performance Optimization</h2>
      <p className="text-base text-slate-700 mb-4 leading-relaxed">Optimize your POS system for speed and reliability:</p>
      <ul className="list-disc pl-6 mb-6 text-slate-700 space-y-2">
        <li>Load balancing for high availability</li>
        <li>Database query optimization</li>
        <li>Efficient caching strategies</li>
        <li>Monitoring and alerting systems</li>
      </ul>
      
      <p className="text-base text-slate-700 mb-6 leading-relaxed">Building scalable POS systems requires careful planning, robust architecture, and continuous optimization. By following these best practices, you can create systems that grow with your business while maintaining performance and reliability.</p>
    `
  }
};

interface BlogArticleProps {
  slug: string;
}

export default function BlogArticle({ slug }: BlogArticleProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(42);

  const article = blogData[slug as keyof typeof blogData];

  useEffect(() => {
    if (article) {
      // Set SEO meta tags
      document.title = `${article.title} | TechBlog`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', article.metaDescription);
      }
    }
  }, [article]);

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Article Not Found</h1>
            <Link href="/blog" className="text-amber-500 hover:text-amber-600 font-semibold">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = article.title;

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Article Header */}
        <section className="pt-32 pb-12 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="bg-amber-500 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold">
                {article.category}
              </span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins text-center">
              {article.title}
            </h1>

            <div className="flex items-center justify-center text-slate-300 mb-8 font-inter">
              <span>By {article.author}</span>
              <span className="mx-3">•</span>
              <span>{article.date}</span>
              <span className="mx-3">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </section>

        {/* Article Image */}
        <section className="py-0">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover object-top rounded-2xl shadow-2xl"
            />
          </div>
        </section>

        {/* Article Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              <div
                className="text-slate-700 font-inter leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article.content.replace(/\\n\\s+/g, '\\n') }}
                style={{
                  lineHeight: '1.8',
                }}
              />
            </div>
          </div>
        </section>

        {/* Article Actions */}
        <section className="py-8 border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-6">
                <button
                  onClick={handleLike}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    isLiked
                      ? 'bg-amber-500 text-white'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <i className={`ri-heart-${isLiked ? 'fill' : 'line'}`}></i>
                  <span>{likes}</span>
                </button>

                <div className="flex items-center space-x-2 text-slate-600">
                  <i className="ri-eye-line"></i>
                  <span>1,234 views</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-slate-600 font-medium">Share:</span>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-10 h-10 bg-slate-100 hover:bg-blue-500 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <i className="ri-twitter-x-line"></i>
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-10 h-10 bg-slate-100 hover:bg-blue-600 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <i className="ri-linkedin-line"></i>
                </button>
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-10 h-10 bg-slate-100 hover:bg-blue-700 hover:text-white rounded-lg flex items-center justify-center transition-all duration-200"
                >
                  <i className="ri-facebook-line"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Author Bio */}
        <section className="py-12 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center space-x-6">
                <img
                  src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20of%20${article.author}%20software%20engineer%2C%20clean%20corporate%20profile%20photo%20with%20professional%20business%20attire%2C%20modern%20LinkedIn%20style%20portrait%20with%20neutral%20background&width=80&height=80&seq=author-${slug}&orientation=squarish`}
                  alt={article.author}
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {article.author}
                  </h3>
                  <p className="text-slate-600 font-inter leading-relaxed">
                    Senior Software Engineer with 8+ years of experience in building scalable web applications and leading development teams. Passionate about emerging technologies and best practices in software architecture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center font-poppins">
              Related Articles
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(blogData).slice(0, 3).map(([relatedSlug, relatedArticle]) => (
                <article key={relatedSlug} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="p-6">
                    <span className="text-amber-500 text-sm font-semibold">
                      {relatedArticle.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3 font-poppins">
                      {relatedArticle.title}
                    </h3>
                    <Link
                      href={`/blog/${relatedSlug}`}
                      className="inline-flex items-center text-amber-500 hover:text-amber-600 font-semibold transition-colors duration-200"
                    >
                      Read More
                      <i className="ri-arrow-right-line ml-2"></i>
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/blog"
                className="bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block whitespace-nowrap cursor-pointer"
              >
                ← Back to All Articles
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
