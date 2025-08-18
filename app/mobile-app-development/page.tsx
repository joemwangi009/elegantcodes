import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Mobile App Development Company | iOS Android Flutter React Native Apps',
  description: 'Leading mobile app development company offering iOS app development, Android app development, Flutter development, React Native apps, and cross-platform mobile solutions for businesses worldwide.',
  keywords: [
    'mobile app development company',
    'iOS app development',
    'Android app development',
    'Flutter app development',
    'React Native development',
    'cross-platform app development',
    'native mobile app development',
    'mobile app design',
    'app development services',
    'mobile app consulting',
    'app store optimization',
    'mobile app testing',
    'app maintenance services',
    'enterprise mobile apps',
    'startup app development',
    'custom mobile applications',
    'mobile app prototyping',
    'app performance optimization',
    'mobile app security',
    'app analytics and tracking'
  ],
  openGraph: {
    title: 'Mobile App Development Company | iOS Android Flutter React Native Apps',
    description: 'Leading mobile app development company offering iOS app development, Android app development, Flutter development, React Native apps, and cross-platform mobile solutions.',
    url: 'https://www.elegantcodes.com/mobile-app-development',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-mobile-app-development.jpg',
        width: 1200,
        height: 630,
        alt: 'Mobile App Development Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mobile App Development Company | iOS Android Flutter React Native Apps',
    description: 'Leading mobile app development company offering iOS app development, Android app development, Flutter development, React Native apps, and cross-platform mobile solutions.',
    images: ['https://www.elegantcodes.com/og-image-mobile-app-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/mobile-app-development',
  },
}

const faqs = [
  {
    question: "What mobile app development services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive mobile app development services including iOS development, Android development, Flutter development, React Native development, cross-platform solutions, and custom mobile applications for all business types."
  },
  {
    question: "How long does it take to develop a mobile app?",
    answer: "Mobile app development typically takes 8-16 weeks depending on complexity, features, and platform requirements. We follow agile development to ensure timely delivery and quality."
  },
  {
    question: "What platforms do you support for mobile app development?",
    answer: "We support all major mobile platforms including iOS (iPhone/iPad), Android, and cross-platform solutions using Flutter and React Native for maximum reach and cost efficiency."
  },
  {
    question: "Do you provide app store optimization services?",
    answer: "Yes, we provide comprehensive app store optimization including keyword research, app store listing optimization, screenshots, descriptions, and ASO strategies to improve app visibility and downloads."
  },
  {
    question: "Can you integrate mobile apps with existing business systems?",
    answer: "Absolutely! We specialize in integrating mobile apps with existing ERP, CRM, payment systems, and other business applications to create seamless workflows and data synchronization."
  }
]

export default function MobileAppDevelopmentPage() {
  const seoConfig = {
    title: 'Mobile App Development Company | iOS Android Flutter React Native Apps',
    description: 'Leading mobile app development company offering iOS app development, Android app development, Flutter development, React Native apps, and cross-platform mobile solutions for businesses worldwide.',
    keywords: [
      'mobile app development company',
      'iOS app development',
      'Android app development',
      'Flutter app development',
      'React Native development',
      'cross-platform app development'
    ],
    canonical: 'https://www.elegantcodes.com/mobile-app-development',
    ogImage: 'https://www.elegantcodes.com/og-image-mobile-app-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'Mobile App Development', url: 'https://www.elegantcodes.com/mobile-app-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="Mobile App Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Mobile App Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading mobile app development company offering iOS app development, Android app development, 
                Flutter development, React Native apps, and cross-platform mobile solutions for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your App Project
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View App Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Mobile App Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 iOS App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional iOS app development for iPhone and iPad with 
                  native performance, Apple design guidelines, and App Store optimization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• iPhone App Development</li>
                  <li>• iPad App Development</li>
                  <li>• Swift & Objective-C</li>
                  <li>• App Store Optimization</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤖 Android App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Expert Android app development with native performance, 
                  Material Design, and Google Play Store optimization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Native Android Apps</li>
                  <li>• Material Design</li>
                  <li>• Kotlin & Java</li>
                  <li>• Google Play Optimization</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🦋 Flutter App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Cross-platform Flutter development for iOS and Android with 
                  single codebase, native performance, and beautiful UI.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cross-Platform Development</li>
                  <li>• Single Codebase</li>
                  <li>• Native Performance</li>
                  <li>• Custom Widgets</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ⚛️ React Native Development
                </h3>
                <p className="text-slate-600 mb-4">
                  React Native development for cross-platform mobile apps with 
                  JavaScript/TypeScript and native performance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Cross-Platform Apps</li>
                  <li>• JavaScript/TypeScript</li>
                  <li>• Native Performance</li>
                  <li>• Component Libraries</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 Cross-Platform Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Efficient cross-platform development solutions that work seamlessly 
                  across multiple platforms while maintaining native performance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Multi-Platform Support</li>
                  <li>• Code Reusability</li>
                  <li>• Native Performance</li>
                  <li>• Cost Efficiency</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎨 Mobile App Design
                </h3>
                <p className="text-slate-600 mb-4">
                  Professional mobile app design with user experience focus, 
                  modern UI/UX principles, and platform-specific design guidelines.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• User Experience Design</li>
                  <li>• Interface Design</li>
                  <li>• Platform Guidelines</li>
                  <li>• Prototyping</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* App Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Mobile App Solutions for Every Business Type
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏢 Enterprise Mobile Apps
                </h3>
                <p className="text-slate-600 mb-4">
                  Enterprise-grade mobile applications with advanced security, 
                  integration capabilities, and scalable architecture.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Advanced Security</li>
                  <li>• System Integration</li>
                  <li>• Scalable Architecture</li>
                  <li>• Enterprise Features</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🚀 Startup App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Innovative mobile apps for startups with rapid development, 
                  MVP focus, and growth-oriented features.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Rapid Development</li>
                  <li>• MVP Focus</li>
                  <li>• Growth Features</li>
                  <li>• Cost Optimization</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 E-commerce Mobile Apps
                </h3>
                <p className="text-slate-600 mb-4">
                  Mobile commerce applications with secure payments, 
                  inventory management, and seamless shopping experience.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Secure Payments</li>
                  <li>• Inventory Management</li>
                  <li>• Shopping Experience</li>
                  <li>• Order Tracking</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare Mobile Apps
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare applications with HIPAA compliance, 
                  patient management, and telemedicine capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• HIPAA Compliance</li>
                  <li>• Patient Management</li>
                  <li>• Telemedicine Features</li>
                  <li>• Health Tracking</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Fintech Mobile Apps
                </h3>
                <p className="text-slate-600 mb-4">
                  Financial technology applications with secure transactions, 
                  banking features, and regulatory compliance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Secure Transactions</li>
                  <li>• Banking Features</li>
                  <li>• Regulatory Compliance</li>
                  <li>• Financial Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎮 Gaming Mobile Apps
                </h3>
                <p className="text-slate-600 mb-4">
                  Mobile gaming applications with engaging gameplay, 
                  social features, and monetization strategies.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Engaging Gameplay</li>
                  <li>• Social Features</li>
                  <li>• Monetization</li>
                  <li>• Performance Optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Mobile App Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">iOS Development</h3>
                <p className="text-slate-600 text-sm">
                  Swift, Objective-C, SwiftUI, UIKit, and iOS SDK
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Android Development</h3>
                <p className="text-slate-600 text-sm">
                  Kotlin, Java, Android SDK, Jetpack Compose, and Material Design
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cross-Platform</h3>
                <p className="text-slate-600 text-sm">
                  Flutter, React Native, Xamarin, and Ionic
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Backend & APIs</h3>
                <p className="text-slate-600 text-sm">
                  Node.js, Python, Firebase, AWS, and REST/GraphQL APIs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Mobile App Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Discovery & Strategy
                </h3>
                <p className="text-slate-600">
                  Market research, user persona development, app strategy planning, 
                  and technical feasibility analysis
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Design & Prototyping
                </h3>
                <p className="text-slate-600">
                  UI/UX design, wireframing, prototyping, user testing, 
                  and design system creation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Agile development, continuous testing, quality assurance, 
                  and performance optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Launch & Support
                </h3>
                <p className="text-slate-600">
                  App store submission, launch support, user feedback collection, 
                  and ongoing maintenance
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
                <div key={index} className="bg-blue-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              mobile app development services can bring your app idea to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your App Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View App Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 