
'use client';

export default function Footer() {
  const socialLinks = [
    { name: 'LinkedIn', icon: 'ri-linkedin-fill', href: 'https://www.linkedin.com/company/elegantcodes' },
    { name: 'Instagram', icon: 'ri-instagram-fill', href: 'https://www.instagram.com/elegantcodes' },
    { name: 'TechBehemoths', icon: 'ri-global-line', href: 'https://www.techbehemoths.com/company/elegant-codes' }
  ];

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    { name: 'Custom Applications', href: '#services' },
    { name: 'E-commerce Solutions', href: '#services' },
    { name: 'POS Systems', href: '#services' },
    { name: 'Business Solutions', href: '#services' },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 flex items-center justify-center bg-amber-500 rounded-lg">
                <i className="ri-code-s-slash-line text-slate-900 text-lg"></i>
              </div>
              <span className="text-white font-bold text-xl font-inter">ElegantCodes</span>
            </div>
            <p className="text-slate-400 mb-4">
              Professional IT solutions tailored to your business needs. We create elegant, efficient, and scalable software solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 hover:bg-amber-500 rounded-lg transition-colors duration-200 cursor-pointer group"
                >
                  <i className={`${social.icon} text-slate-300 group-hover:text-slate-900`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-inter">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-inter">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-slate-400 hover:text-amber-400 transition-colors duration-200 cursor-pointer"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 font-inter">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-mail-line text-amber-400"></i>
                </div>
                <span className="text-slate-400">info@elegantcodes.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-phone-line text-amber-400"></i>
                </div>
                <span className="text-slate-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-map-pin-line text-amber-400"></i>
                </div>
                <span className="text-slate-400">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 ElegantCodes. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-400 hover:text-amber-400 text-sm transition-colors duration-200 cursor-pointer">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
