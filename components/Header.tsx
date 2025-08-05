
'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

interface SearchResult {
  type: 'service' | 'portfolio' | 'blog';
  title: string;
  description: string;
  url: string;
  thumbnail?: string;
  category?: string;
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'About', href: '/#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Mock search data - in production, this would come from an API
  const searchData: SearchResult[] = [
    {
      type: 'service',
      title: 'Mobile Apps (iOS, Android)',
      description: 'Native and cross-platform mobile development',
      url: '/services',
      category: 'Custom Applications',
      thumbnail: 'https://readdy.ai/api/search-image?query=mobile%20app%20development%20icon&width=40&height=40&seq=search-mobile&orientation=squarish'
    },
    {
      type: 'service',
      title: 'Web Applications',
      description: 'Scalable and responsive web solutions',
      url: '/services',
      category: 'Custom Applications',
      thumbnail: 'https://readdy.ai/api/search-image?query=web%20development%20icon&width=40&height=40&seq=search-web&orientation=squarish'
    },
    {
      type: 'service',
      title: 'E-commerce Solutions',
      description: 'Complete online store platforms',
      url: '/services',
      category: 'E-commerce',
      thumbnail: 'https://readdy.ai/api/search-image?query=ecommerce%20shopping%20icon&width=40&height=40&seq=search-ecom&orientation=squarish'
    },
    {
      type: 'service',
      title: 'POS Systems',
      description: 'Advanced point-of-sale solutions',
      url: '/services',
      category: 'POS Systems',
      thumbnail: 'https://readdy.ai/api/search-image?query=point%20of%20sale%20icon&width=40&height=40&seq=search-pos&orientation=squarish'
    },
    {
      type: 'portfolio',
      title: 'TechFlow CRM',
      description: 'Custom CRM solution for technology companies',
      url: '/portfolio/techflow-crm',
      category: 'Web Apps',
      thumbnail: 'https://readdy.ai/api/search-image?query=CRM%20dashboard%20thumbnail&width=40&height=40&seq=search-crm&orientation=squarish'
    },
    {
      type: 'portfolio',
      title: 'RetailPro POS',
      description: 'Advanced POS system for retail chains',
      url: '/portfolio/retailpro-pos',
      category: 'POS Systems',
      thumbnail: 'https://readdy.ai/api/search-image?query=retail%20POS%20thumbnail&width=40&height=40&seq=search-retail&orientation=squarish'
    },
    {
      type: 'blog',
      title: 'The Future of Custom Software Development',
      description: 'Exploring emerging trends in software development',
      url: '/blog/future-of-custom-software-development',
      category: 'Development',
      thumbnail: 'https://readdy.ai/api/search-image?query=software%20development%20blog%20icon&width=40&height=40&seq=search-blog1&orientation=squarish'
    },
    {
      type: 'blog',
      title: 'E-commerce Optimization Strategies',
      description: 'Essential strategies to maximize conversions',
      url: '/blog/ecommerce-optimization-strategies-2025',
      category: 'E-commerce',
      thumbnail: 'https://readdy.ai/api/search-image?query=ecommerce%20optimization%20icon&width=40&height=40&seq=search-blog2&orientation=squarish'
    },
  ];

  useEffect(() => {
    setIsMounted(true);
    
    // Load high contrast preference
    const savedTheme = localStorage.getItem('highContrast');
    if (savedTheme === 'true') {
      setIsHighContrast(true);
      document.documentElement.classList.add('high-contrast');
    }

    // Close search on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.length > 1) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category?.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const toggleHighContrast = () => {
    const newValue = !isHighContrast;
    setIsHighContrast(newValue);
    localStorage.setItem('highContrast', newValue.toString());
    
    if (newValue) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'service': return 'ri-service-line';
      case 'portfolio': return 'ri-briefcase-line';
      case 'blog': return 'ri-article-line';
      default: return 'ri-search-line';
    }
  };

  const handleSearchResultClick = (url: string) => {
    setShowSearchResults(false);
    setSearchQuery('');
    
    // Handle different types of navigation
    if (url.startsWith('/services')) {
      // For services, we need to navigate to the services page and set the active service
      window.location.href = url;
    } else if (url.startsWith('/portfolio')) {
      // For portfolio items, navigate directly
      window.location.href = url;
    } else if (url.startsWith('/blog')) {
      // For blog posts, navigate directly
      window.location.href = url;
    } else if (url.startsWith('#')) {
      // For anchor links, scroll to the element
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Default navigation
      window.location.href = url;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Far Left */}
          <div className="flex items-center flex-shrink-0">
            <Link href="#home" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg group-hover:bg-amber-400 transition-colors duration-200">
                <i className="ri-code-s-slash-line text-slate-900 text-lg"></i>
              </div>
              <span className="text-white font-bold text-xl font-inter">ElegantCodes</span>
            </Link>
          </div>

          {/* Desktop Navigation - Center Left with Better Spacing */}
          <nav className="hidden lg:flex items-center space-x-8 flex-shrink-0 ml-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 rounded px-2 py-1"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Global Search - Center with More Space */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8 relative" ref={searchRef}>
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                onFocus={() => searchQuery.length > 1 && setShowSearchResults(true)}
                placeholder="Search services, projects, articles..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors duration-200"
                aria-label="Global search"
              />
              <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
              
              {/* Search Results Dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-700 rounded-lg shadow-xl max-h-96 overflow-y-auto z-50">
                  {searchResults.map((result, index) => (
                    <div
                      key={`${result.type}-${index}`}
                      className="flex items-center px-4 py-3 hover:bg-slate-700 transition-colors duration-200 border-b border-slate-700 last:border-b-0 cursor-pointer"
                      onClick={() => handleSearchResultClick(result.url)}
                    >
                      <img
                        src={result.thumbnail}
                        alt=""
                        className="w-8 h-8 rounded object-cover mr-3"
                        loading="lazy"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <i className={`${getTypeIcon(result.type)} text-amber-400 text-sm`}></i>
                          <span className="text-amber-400 text-xs uppercase tracking-wide">{result.type}</span>
                          {result.category && (
                            <span className="text-slate-400 text-xs">• {result.category}</span>
                          )}
                        </div>
                        <h4 className="text-white font-medium text-sm">{result.title}</h4>
                        <p className="text-slate-400 text-xs mt-1 line-clamp-1">{result.description}</p>
                      </div>
                      <i className="ri-arrow-right-line text-slate-400"></i>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Actions - Far Right */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            {/* High Contrast Toggle */}
            {isMounted && (
              <button
                onClick={toggleHighContrast}
                className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-colors duration-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
                aria-label={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
                title={`${isHighContrast ? 'Disable' : 'Enable'} high contrast mode`}
              >
                <i className="ri-contrast-2-line text-lg"></i>
              </button>
            )}

            <a
              href="/#contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 text-sm"
            >
              Contact
            </a>
            <a
              href="/#quote"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-sm"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Search Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-9 h-9 flex items-center justify-center text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
              aria-label="Toggle search"
            >
              <i className="ri-search-line text-lg"></i>
            </button>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white p-2 cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50 rounded"
              aria-label="Toggle mobile menu"
            >
              <i className={`${isMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Search */}
              <div className="px-3 py-2" ref={searchRef}>
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery.length > 1 && setShowSearchResults(true)}
                    placeholder="Search services, projects, articles..."
                    className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-amber-400 focus:outline-none transition-colors duration-200"
                  />
                  <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"></i>
                  
                  {/* Mobile Search Results */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-slate-700 border border-slate-600 rounded-lg shadow-xl max-h-64 overflow-y-auto z-50">
                      {searchResults.map((result, index) => (
                        <div
                          key={`mobile-${result.type}-${index}`}
                          className="flex items-center px-3 py-2 hover:bg-slate-600 transition-colors duration-200 border-b border-slate-600 last:border-b-0 cursor-pointer"
                          onClick={() => {
                            handleSearchResultClick(result.url);
                            setIsMenuOpen(false);
                          }}
                        >
                          <img
                            src={result.thumbnail}
                            alt=""
                            className="w-6 h-6 rounded object-cover mr-2"
                            loading="lazy"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-1 mb-1">
                              <i className={`${getTypeIcon(result.type)} text-amber-400 text-xs`}></i>
                              <span className="text-amber-400 text-xs uppercase tracking-wide">{result.type}</span>
                            </div>
                            <h4 className="text-white font-medium text-xs truncate">{result.title}</h4>
                            <p className="text-slate-400 text-xs mt-1 line-clamp-1">{result.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Mobile Navigation */}
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-slate-300 hover:text-amber-400 hover:bg-slate-700 rounded-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-opacity-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile High Contrast Toggle */}
              {isMounted && (
                <div className="flex items-center justify-between px-3 py-2">
                  <button
                    onClick={toggleHighContrast}
                    className="flex items-center text-slate-300 hover:text-amber-400 transition-colors duration-200"
                  >
                    <i className="ri-contrast-2-line mr-2"></i>
                    High Contrast
                  </button>
                </div>
              )}
              
              {/* Mobile Action Buttons */}
              <div className="px-3 pt-2 space-y-2">
                <a
                  href="#contact"
                  className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-900 rounded-md font-semibold py-2 text-center cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                <a
                  href="#quote"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-md font-semibold py-2 text-center cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
