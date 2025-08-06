'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MobileDevelopmentPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1609851451108-e937620f1210?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW9iaWxlJTIwQXBwcyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1vYmlsZSUyMEFwcHMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1551650992-ee4fd47df41f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fE1vYmlsZSUyMEFwcHMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1661593486413-d279b1a02e28?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9iaWxlJTIwQXBwcyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1609921141835-710b7fa6e438?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fE1vYmlsZSUyMEFwcHMlMjBkZXNpZ258ZW58MHx8MHx8fDA%3D"
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
              alt="Mobile App Development"
              className="w-full h-full object-cover transition-opacity duration-1000"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl md:text-2xl mb-8">Native and cross-platform mobile applications for iOS and Android</p>
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
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Mobile Development Services</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We create powerful, user-friendly mobile applications that drive engagement and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-smartphone-line text-blue-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Native Development</h3>
                <p className="text-slate-600">Platform-specific apps built for optimal performance on iOS and Android.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-global-line text-green-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cross-platform</h3>
                <p className="text-slate-600">Single codebase apps that work seamlessly across multiple platforms.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-app-store-line text-purple-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">App Store Optimization</h3>
                <p className="text-slate-600">Optimize your app for better visibility and downloads in app stores.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-notification-line text-red-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Push Notifications</h3>
                <p className="text-slate-600">Engage users with targeted push notifications and messaging.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-cloud-line text-amber-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Cloud Integration</h3>
                <p className="text-slate-600">Seamless integration with cloud services for data sync and storage.</p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="w-16 h-16 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-indigo-600 text-2xl"></i>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Security & Testing</h3>
                <p className="text-slate-600">Comprehensive security measures and thorough testing protocols.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Mobile Technologies</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                We use the latest mobile development frameworks and tools
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                { name: 'React Native', icon: 'ri-reactjs-line', color: 'text-blue-500' },
                { name: 'Flutter', icon: 'ri-flutter-line', color: 'text-blue-600' },
                { name: 'Swift', icon: 'ri-apple-line', color: 'text-gray-600' },
                { name: 'Kotlin', icon: 'ri-android-line', color: 'text-green-500' },
                { name: 'Firebase', icon: 'ri-firebase-line', color: 'text-orange-500' },
                { name: 'AWS', icon: 'ri-cloud-line', color: 'text-orange-600' }
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

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Build Your Mobile App?</h2>
            <p className="text-xl text-slate-300 mb-8">
              Let's create a mobile app that your users will love
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