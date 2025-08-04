import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12">
            <h1 className="text-6xl lg:text-8xl font-bold text-slate-900 mb-6 font-poppins">
              404
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 font-poppins">
              Page Not Found
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-inter leading-relaxed">
              The page you're looking for doesn't exist or has been moved. 
              Let us help you find what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-code-s-slash-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Our Services</h3>
              <p className="text-slate-600 mb-4 font-inter">
                Explore our comprehensive range of IT solutions and services.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                View Services
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-briefcase-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Our Portfolio</h3>
              <p className="text-slate-600 mb-4 font-inter">
                See our successful projects and case studies.
              </p>
              <Link
                href="/portfolio"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                View Portfolio
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-article-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-poppins">Our Blog</h3>
              <p className="text-slate-600 mb-4 font-inter">
                Read our latest insights and industry articles.
              </p>
              <Link
                href="/blog"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
              >
                Read Blog
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-4 font-poppins">
              Need Help?
            </h3>
            <p className="text-slate-600 mb-6 font-inter">
              Can't find what you're looking for? Our team is here to help you find the right solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block text-center"
              >
                Contact Us
              </Link>
              <Link
                href="/#quote"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 inline-block text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}