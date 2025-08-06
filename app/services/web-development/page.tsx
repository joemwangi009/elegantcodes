'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function WebDevelopmentPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8V2ViJTIwRGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFdlYiUyMERldmVsb3BtZW50fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1659114538192-0f8caaaaa698?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1576595580361-90a855b84b20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1542744173-b3cd6377db95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHdlYiUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={images[currentImageIndex]}
              alt="Web Development"
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Web Development</h1>
            <p className="text-xl md:text-2xl mb-8">Custom websites and web applications built with modern technologies</p>
            <Link
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
            >
              Get Started
            </Link>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Web Development Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We create modern, responsive, and scalable web solutions that drive business growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-responsive-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Responsive Design</h3>
                <p className="text-slate-600">Websites that look and work perfectly on all devices - desktop, tablet, and mobile.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-search-line text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">SEO Optimization</h3>
                <p className="text-slate-600">Built-in search engine optimization to improve your website's visibility and rankings.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-speed-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Performance</h3>
                <p className="text-slate-600">Lightning-fast loading times and optimized performance for better user experience.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Security</h3>
                <p className="text-slate-600">Robust security measures to protect your website and user data from threats.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-code-s-slash-line text-amber-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Custom Development</h3>
                <p className="text-slate-600">Tailored solutions built from scratch to meet your specific business requirements.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-customer-service-2-line text-indigo-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Support & Maintenance</h3>
                <p className="text-slate-600">Ongoing support, updates, and maintenance to keep your website running smoothly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Technologies We Use</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to build robust and scalable web applications
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'React', icon: 'ri-reactjs-line', color: 'text-blue-500' },
                { name: 'Next.js', icon: 'ri-nextjs-line', color: 'text-black' },
                { name: 'Vue.js', icon: 'ri-vuejs-line', color: 'text-green-500' },
                { name: 'Node.js', icon: 'ri-nodejs-line', color: 'text-green-600' },
                { name: 'TypeScript', icon: 'ri-code-line', color: 'text-blue-600' },
                { name: 'PostgreSQL', icon: 'ri-database-2-line', color: 'text-blue-700' },
                { name: 'MongoDB', icon: 'ri-database-line', color: 'text-green-500' },
                { name: 'AWS', icon: 'ri-cloud-line', color: 'text-orange-500' },
                { name: 'Docker', icon: 'ri-container-line', color: 'text-blue-600' },
                { name: 'Stripe', icon: 'ri-bank-card-line', color: 'text-purple-500' },
                { name: 'GraphQL', icon: 'ri-links-line', color: 'text-pink-600' },
                { name: 'Redis', icon: 'ri-stack-line', color: 'text-red-500' }
              ].map((tech, index) => (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                    <i className={`${tech.icon} ${tech.color} text-3xl`}></i>
                  </div>
                  <h3 className="font-semibold text-slate-900">{tech.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Development Process</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Planning',
                  description: 'We analyze your requirements and create a detailed project plan'
                },
                {
                  step: '02',
                  title: 'Design & Prototyping',
                  description: 'Create wireframes and design mockups for your approval'
                },
                {
                  step: '03',
                  title: 'Development',
                  description: 'Build your website using modern technologies and best practices'
                },
                {
                  step: '04',
                  title: 'Testing & Launch',
                  description: 'Thorough testing and deployment to production environment'
                }
              ].map((process, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-lg text-center">
                  <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{process.title}</h3>
                  <p className="text-slate-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Website?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's discuss your project and create something amazing together
            </p>
            <Link
              href="/#contact"
              className="bg-amber-500 hover:bg-amber-600 text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block"
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
} 