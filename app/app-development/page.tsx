import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'Mobile App Development Company | Android iOS Flutter React Native Development',
  description: 'Leading mobile app development company offering Android app development, iOS app development, cross-platform app development, Flutter app development, and React development services globally.',
  keywords: [
    'mobile app development company',
    'Android app development',
    'iOS app development',
    'cross-platform app development',
    'Flutter app development',
    'React development services',
    'Node.js developers',
    'mobile app development Kenya',
    'mobile app development Europe',
    'mobile app development USA',
    'mobile app development Canada',
    'mobile app development Australia',
    'mobile app development UK',
    'mobile app development Germany',
    'mobile app development France',
    'Android app development Kenya',
    'iOS app development Europe',
    'Flutter app development USA',
    'React development services Canada',
    'Node.js developers Australia'
  ],
  openGraph: {
    title: 'Mobile App Development Company | Android iOS Flutter React Native Development',
    description: 'Leading mobile app development company offering Android app development, iOS app development, cross-platform app development, Flutter app development, and React development services globally.',
    url: 'https://www.elegantcodes.com/app-development',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-app-development.jpg',
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
    title: 'Mobile App Development Company | Android iOS Flutter React Native Development',
    description: 'Leading mobile app development company offering Android app development, iOS app development, cross-platform app development, Flutter app development, and React development services globally.',
    images: ['https://www.elegantcodes.com/og-image-app-development.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/app-development',
  },
}

const faqs = [
  {
    question: "What mobile app development services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive mobile app development services including native Android and iOS development, cross-platform development with Flutter and React Native, custom app solutions, app maintenance, and ongoing support for businesses worldwide."
  },
  {
    question: "How does ElegantCodes ensure quality in cross-platform app development?",
    answer: "Our cross-platform app development follows industry best practices including thorough testing across multiple devices, performance optimization, native-like user experience, and continuous quality assurance throughout the development lifecycle."
  },
  {
    question: "What makes ElegantCodes a leading mobile app development company?",
    answer: "We are recognized as a leading mobile app development company due to our technical expertise in multiple platforms, proven track record of successful app launches, client satisfaction, innovative solutions, and commitment to delivering high-quality mobile applications."
  },
  {
    question: "How does ElegantCodes approach Flutter app development?",
    answer: "Our Flutter app development approach includes modern UI/UX design, performance optimization, cross-platform compatibility, native functionality integration, and comprehensive testing to ensure smooth operation on both Android and iOS platforms."
  },
  {
    question: "What React development services does ElegantCodes provide?",
    answer: "We provide comprehensive React development services including React Native mobile apps, React web applications, component libraries, state management solutions, and custom React-based solutions tailored to your business requirements."
  }
]

export default function AppDevelopmentPage() {
  const seoConfig = {
    title: 'Mobile App Development Company | Android iOS Flutter React Native Development',
    description: 'Leading mobile app development company offering Android app development, iOS app development, cross-platform app development, Flutter app development, and React development services globally.',
    keywords: KEYWORD_CLUSTERS.APP_DEVELOPMENT,
    canonical: 'https://www.elegantcodes.com/app-development',
    ogImage: 'https://www.elegantcodes.com/og-image-app-development.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'App Development', url: 'https://www.elegantcodes.com/app-development' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="App Development"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                Mobile App Development Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading mobile app development company offering Android app development, 
                iOS app development, cross-platform app development, Flutter app development, 
                and React development services globally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your App Project
                </button>
                <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View App Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive Mobile App Development Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📱 Mobile App Development Company
                </h3>
                <p className="text-slate-600 mb-4">
                  Full-service mobile app development company specializing in creating 
                  innovative, user-friendly, and high-performance mobile applications.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Custom App Development</li>
                  <li>• App Strategy & Planning</li>
                  <li>• UI/UX Design</li>
                  <li>• App Testing & QA</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤖 Android App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Native Android app development using modern technologies and best practices 
                  to create powerful, scalable, and user-friendly applications.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Native Android Development</li>
                  <li>• Material Design</li>
                  <li>• Google Play Store</li>
                  <li>• Android SDK</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🍎 iOS App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Premium iOS app development with focus on Apple's design guidelines, 
                  performance optimization, and App Store compliance.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Native iOS Development</li>
                  <li>• Swift & Objective-C</li>
                  <li>• App Store Optimization</li>
                  <li>• iOS Design Guidelines</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 Cross-Platform App Development
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
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🦋 Flutter App Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Modern Flutter app development for beautiful, fast, and native 
                  applications that work seamlessly on both Android and iOS.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Flutter Framework</li>
                  <li>• Dart Programming</li>
                  <li>• Hot Reload</li>
                  <li>• Custom Widgets</li>
                </ul>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  ⚛️ React Development Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Comprehensive React development services including React Native mobile apps, 
                  React web applications, and custom React-based solutions.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• React Native Apps</li>
                  <li>• React Web Apps</li>
                  <li>• Component Libraries</li>
                  <li>• State Management</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Mobile Frameworks</h3>
                <p className="text-slate-600 text-sm">
                  Flutter, React Native, Xamarin, Ionic, and native Android/iOS development
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Programming Languages</h3>
                <p className="text-slate-600 text-sm">
                  Swift, Kotlin, JavaScript, TypeScript, Dart, C#, and Java for robust mobile development
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Backend Integration</h3>
                <p className="text-slate-600 text-sm">
                  REST APIs, GraphQL, Firebase, AWS, and custom backend solutions for mobile apps
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Testing & Deployment</h3>
                <p className="text-slate-600 text-sm">
                  Automated testing, CI/CD pipelines, App Store deployment, and monitoring tools
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our Mobile App Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
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
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Design & Prototyping
                </h3>
                <p className="text-slate-600">
                  UI/UX design, wireframing, prototyping, user testing, and design system creation
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Development & Testing
                </h3>
                <p className="text-slate-600">
                  Agile development, continuous testing, quality assurance, and performance optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Launch & Support
                </h3>
                <p className="text-slate-600">
                  App store submission, launch support, user feedback collection, and ongoing maintenance
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Expertise */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Global Mobile App Development Expertise
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇰🇪 Kenya</h3>
                <p className="text-slate-600 text-sm">
                  Mobile app development services tailored for the Kenyan market with local business understanding
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇪🇺 Europe</h3>
                <p className="text-slate-600 text-sm">
                  European mobile app development with GDPR compliance and regional market expertise
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇺🇸 USA</h3>
                <p className="text-slate-600 text-sm">
                  US mobile app development with cutting-edge technology and Silicon Valley innovation
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇨🇦 Canada</h3>
                <p className="text-slate-600 text-sm">
                  Canadian mobile app development with strong focus on quality and user experience
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇦🇺 Australia</h3>
                <p className="text-slate-600 text-sm">
                  Australian mobile app development with local market knowledge and business practices
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇬🇧 UK</h3>
                <p className="text-slate-600 text-sm">
                  UK mobile app development with British business standards and European compliance
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇩🇪 Germany</h3>
                <p className="text-slate-600 text-sm">
                  German mobile app development with precision engineering and quality focus
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">🇫🇷 France</h3>
                <p className="text-slate-600 text-sm">
                  French mobile app development with innovative design and European market expertise
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
                <div key={index} className="bg-emerald-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-emerald-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-xl text-emerald-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              mobile app development services can bring your app idea to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your App Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View App Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 