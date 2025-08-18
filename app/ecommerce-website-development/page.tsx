import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'E-commerce Website Development Company | Custom Online Store Solutions',
  description: 'Leading e-commerce website development company offering custom online store solutions, Shopify development, WooCommerce, Magento, and multi-platform e-commerce solutions for businesses worldwide.',
  keywords: [
    'e-commerce website development',
    'custom online store solutions',
    'Shopify development company',
    'WooCommerce development',
    'Magento e-commerce',
    'online store development',
    'e-commerce platform development',
    'custom e-commerce solutions',
    'B2B e-commerce development',
    'B2C e-commerce development',
    'marketplace development',
    'dropshipping website development',
    'subscription e-commerce',
    'mobile e-commerce development',
    'progressive web app e-commerce',
    'e-commerce integration services',
    'payment gateway integration',
    'inventory management systems',
    'order management systems',
    'customer relationship management'
  ],
  openGraph: {
    title: 'E-commerce Website Development Company | Custom Online Store Solutions',
    description: 'Leading e-commerce website development company offering custom online store solutions, Shopify development, WooCommerce, Magento, and multi-platform e-commerce solutions.',
    url: 'https://www.elegantcodes.com/ecommerce-website-development',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-ecommerce-development.jpg',
        width: 1200,
        height: 630,
        alt: 'E-commerce Website Development Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Website Development Company | Custom Online Store Solutions',
    description: 'Leading e-commerce website development company offering custom online store solutions, Shopify development, WooCommerce, Magento, and multi-platform e-commerce solutions.',
    images: ['https://www.elegantcodes.com/og-image-ecommerce-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/ecommerce-website-development',
  },
}

const faqs = [
  {
    question: "What e-commerce platforms does ElegantCodes develop?",
    answer: "ElegantCodes develops custom e-commerce solutions across all major platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom-built platforms tailored to your specific business needs."
  },
  {
    question: "How long does it take to develop an e-commerce website?",
    answer: "E-commerce website development typically takes 4-8 weeks depending on complexity, features, and customization requirements. We follow agile development to ensure timely delivery."
  },
  {
    question: "What payment gateways do you integrate?",
    answer: "We integrate all major payment gateways including Stripe, PayPal, Square, Authorize.net, and regional payment solutions to ensure seamless transactions for your customers."
  },
  {
    question: "Do you provide ongoing e-commerce support?",
    answer: "Yes, we provide comprehensive ongoing support including maintenance, updates, security patches, performance optimization, and feature enhancements for your e-commerce platform."
  },
  {
    question: "Can you integrate with existing business systems?",
    answer: "Absolutely! We specialize in integrating e-commerce platforms with existing ERP, CRM, inventory management, and accounting systems to streamline your business operations."
  }
]

export default function EcommerceWebsiteDevelopmentPage() {
  const seoConfig = {
    title: 'E-commerce Website Development Company | Custom Online Store Solutions',
    description: 'Leading e-commerce website development company offering custom online store solutions, Shopify development, WooCommerce, Magento, and multi-platform e-commerce solutions for businesses worldwide.',
    keywords: [
      'e-commerce website development',
      'custom online store solutions',
      'Shopify development company',
      'WooCommerce development',
      'Magento e-commerce',
      'online store development'
    ],
    canonical: 'https://www.elegantcodes.com/ecommerce-website-development',
    ogImage: 'https://www.elegantcodes.com/og-image-ecommerce-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'E-commerce Website Development', url: 'https://www.elegantcodes.com/ecommerce-website-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="E-commerce Website Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                E-commerce Website Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading e-commerce website development company offering custom online store solutions, 
                Shopify development, WooCommerce, Magento, and multi-platform e-commerce solutions 
                for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your E-commerce Project
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View E-commerce Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive E-commerce Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Custom E-commerce Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Tailored e-commerce solutions designed specifically for your business model, 
                  industry requirements, and unique customer experience needs.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Custom Platform Development</li>
                  <li>• Industry-Specific Solutions</li>
                  <li>• Scalable Architecture</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏪 Shopify Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional Shopify development services including custom themes, 
                  app development, and advanced customization for your online store.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Custom Shopify Themes</li>
                  <li>• Shopify App Development</li>
                  <li>• Advanced Customization</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔌 WooCommerce Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Expert WooCommerce development for WordPress-based e-commerce sites 
                  with custom plugins, themes, and advanced functionality.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Custom WooCommerce Themes</li>
                  <li>• Plugin Development</li>
                  <li>• Advanced Features</li>
                  <li>• WordPress Integration</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Magento Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Enterprise-level Magento development for large-scale e-commerce 
                  operations with advanced features and scalability.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Magento 2 Development</li>
                  <li>• Enterprise Solutions</li>
                  <li>• Advanced Features</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Mobile E-commerce Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Mobile-first e-commerce solutions including responsive design, 
                  progressive web apps, and native mobile applications.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Responsive Design</li>
                  <li>• Progressive Web Apps</li>
                  <li>• Native Mobile Apps</li>
                  <li>• Mobile Optimization</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔗 E-commerce Integration
                </h3>
                <p className="text-slate-600 mb-4">
                  Seamless integration with payment gateways, shipping providers, 
                  accounting systems, and other business applications.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Payment Gateway Integration</li>
                  <li>• Shipping Provider APIs</li>
                  <li>• ERP/CRM Integration</li>
                  <li>• Third-party Services</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              E-commerce Solutions for Every Business Type
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 B2B E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional B2B e-commerce platforms with bulk ordering, 
                  account management, and enterprise features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Bulk Ordering Systems</li>
                  <li>• Account Management</li>
                  <li>• Volume Pricing</li>
                  <li>• Enterprise Features</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  👥 B2C E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Consumer-focused e-commerce solutions with user-friendly interfaces, 
                  mobile optimization, and social media integration.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• User-Friendly Interfaces</li>
                  <li>• Mobile Optimization</li>
                  <li>• Social Media Integration</li>
                  <li>• Customer Experience</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏪 Marketplace Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Multi-vendor marketplace platforms connecting buyers and sellers 
                  with advanced commission and management systems.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Multi-Vendor Support</li>
                  <li>• Commission Systems</li>
                  <li>• Vendor Management</li>
                  <li>• Advanced Features</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📦 Dropshipping Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Dropshipping e-commerce platforms with supplier integration, 
                  automated order processing, and inventory management.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Supplier Integration</li>
                  <li>• Automated Processing</li>
                  <li>• Inventory Management</li>
                  <li>• Order Fulfillment</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 Subscription E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Subscription-based e-commerce platforms with recurring billing, 
                  membership management, and customer retention features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Recurring Billing</li>
                  <li>• Membership Management</li>
                  <li>• Customer Retention</li>
                  <li>• Subscription Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🌍 International E-commerce
                </h3>
                <p className="text-slate-600 mb-4">
                  Multi-currency, multi-language e-commerce solutions for 
                  global markets with local payment and shipping options.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Multi-Currency Support</li>
                  <li>• Multi-Language Support</li>
                  <li>• Local Payment Methods</li>
                  <li>• International Shipping</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced E-commerce Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Frontend</h3>
                <p className="text-slate-600 text-sm">
                  React, Next.js, Vue.js, Angular, TypeScript, and modern UI frameworks
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">E-commerce Platforms</h3>
                <p className="text-slate-600 text-sm">
                  Shopify, WooCommerce, Magento, BigCommerce, and custom solutions
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Backend</h3>
                <p className="text-slate-600 text-sm">
                  Node.js, Python, PHP, Java, and cloud-native architectures
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Payment & Security</h3>
                <p className="text-slate-600 text-sm">
                  Stripe, PayPal, SSL, PCI compliance, and advanced security
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our E-commerce Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Discovery & Planning
                </h3>
                <p className="text-slate-600">
                  Business analysis, requirements gathering, platform selection, 
                  and project roadmap development
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Design & UX
                </h3>
                <p className="text-slate-600">
                  User experience design, interface design, mobile optimization, 
                  and conversion-focused layouts
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Agile development, feature implementation, comprehensive testing, 
                  and quality assurance
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Launch & Support
                </h3>
                <p className="text-slate-600">
                  Deployment, training, ongoing support, maintenance, 
                  and continuous optimization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your E-commerce Empire?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              e-commerce development services can transform your business and drive sales growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your E-commerce Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View E-commerce Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 