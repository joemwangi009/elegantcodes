import { Metadata } from 'next'
import { KEYWORD_CLUSTERS } from '@/lib/seo'
import SEOHead from '@/components/SEOHead'

export const metadata: Metadata = {
  title: 'AI & Machine Learning Company | Custom AI Solutions & ML Development Services',
  description: 'Leading AI and Machine Learning company offering custom AI solutions, machine learning development, predictive analytics, natural language processing, and intelligent automation for businesses worldwide.',
  keywords: [
    'AI and machine learning company',
    'custom AI solutions',
    'machine learning development',
    'artificial intelligence services',
    'predictive analytics solutions',
    'natural language processing',
    'computer vision services',
    'deep learning development',
    'AI consulting services',
    'machine learning consulting',
    'AI integration services',
    'intelligent automation',
    'AI-powered applications',
    'data science services',
    'AI model development',
    'machine learning models',
    'AI algorithm development',
    'AI infrastructure setup',
    'AI training services',
    'AI maintenance and support'
  ],
  openGraph: {
    title: 'AI & Machine Learning Company | Custom AI Solutions & ML Development Services',
    description: 'Leading AI and Machine Learning company offering custom AI solutions, machine learning development, predictive analytics, natural language processing, and intelligent automation for businesses worldwide.',
    url: 'https://www.elegantcodes.com/ai-machine-learning',
    siteName: 'ElegantCodes - Global IT Solutions',
    images: [
      {
        url: 'https://www.elegantcodes.com/og-image-ai-machine-learning.jpg',
        width: 1200,
        height: 630,
        alt: 'AI & Machine Learning Company',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Machine Learning Company | Custom AI Solutions & ML Development Services',
    description: 'Leading AI and Machine Learning company offering custom AI solutions, machine learning development, predictive analytics, natural language processing, and intelligent automation for businesses worldwide.',
    images: ['https://www.elegantcodes.com/og-image-ai-machine-learning.jpg'],
  },
  alternates: {
    canonical: 'https://www.elegantcodes.com/ai-machine-learning',
  },
}

const faqs = [
  {
    question: "What AI and Machine Learning services does ElegantCodes offer?",
    answer: "ElegantCodes offers comprehensive AI and ML services including custom AI solutions, machine learning development, predictive analytics, natural language processing, computer vision, and intelligent automation for all business types."
  },
  {
    question: "How long does AI/ML development take?",
    answer: "AI/ML development typically takes 12-24 weeks depending on complexity, data requirements, and business needs. We follow iterative development to ensure optimal model performance."
  },
  {
    question: "What industries do you serve with AI solutions?",
    answer: "We serve various industries including finance, healthcare, manufacturing, retail, logistics, and technology with industry-specific AI solutions and machine learning models."
  },
  {
    question: "Do you provide AI model maintenance?",
    answer: "Yes, we provide comprehensive AI model maintenance including retraining, performance monitoring, accuracy improvements, and ongoing optimization for your machine learning systems."
  },
  {
    question: "Can you integrate AI with existing business systems?",
    answer: "Absolutely! We specialize in integrating AI solutions with existing ERP, CRM, databases, and other business applications to create intelligent workflows and data-driven insights."
  }
]

export default function AIMachineLearningPage() {
  const seoConfig = {
    title: 'AI & Machine Learning Company | Custom AI Solutions & ML Development Services',
    description: 'Leading AI and Machine Learning company offering custom AI solutions, machine learning development, predictive analytics, natural language processing, and intelligent automation for businesses worldwide.',
    keywords: [
      'AI and machine learning company',
      'custom AI solutions',
      'machine learning development',
      'artificial intelligence services',
      'predictive analytics solutions',
      'natural language processing'
    ],
    canonical: 'https://www.elegantcodes.com/ai-machine-learning',
    ogImage: 'https://www.elegantcodes.com/og-image-ai-machine-learning.jpg',
    ogType: 'website' as const,
  }

  const breadcrumbs = [
    { name: 'Home', url: 'https://www.elegantcodes.com' },
    { name: 'Services', url: 'https://www.elegantcodes.com/services' },
    { name: 'AI & Machine Learning', url: 'https://www.elegantcodes.com/ai-machine-learning' }
  ]

  return (
    <>
      <SEOHead 
        config={seoConfig}
        breadcrumbs={breadcrumbs}
        faqs={faqs}
        service="AI & Machine Learning"
      />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-pink-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
                AI & Machine Learning Company
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-4xl mx-auto">
                Leading AI and Machine Learning company offering custom AI solutions, 
                machine learning development, predictive analytics, natural language processing, 
                and intelligent automation for businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  Start Your AI Project
                </button>
                <button className="border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  View AI Portfolio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* AI Services Overview */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Comprehensive AI & Machine Learning Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🤖 Custom AI Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Tailored artificial intelligence solutions designed specifically for 
                  your business needs, industry requirements, and unique challenges.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Business-Specific AI</li>
                  <li>• Industry Solutions</li>
                  <li>• Custom Algorithms</li>
                  <li>• Intelligent Systems</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🧠 Machine Learning Development
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced machine learning models and algorithms for predictive analytics, 
                  pattern recognition, and data-driven decision making.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Predictive Models</li>
                  <li>• Pattern Recognition</li>
                  <li>• Data Analysis</li>
                  <li>• Model Training</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📊 Predictive Analytics
                </h3>
                <p className="text-slate-600 mb-4">
                  Data-driven predictive analytics solutions with forecasting models, 
                  trend analysis, and business intelligence insights.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Forecasting Models</li>
                  <li>• Trend Analysis</li>
                  <li>• Business Intelligence</li>
                  <li>• Risk Assessment</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  💬 Natural Language Processing
                </h3>
                <p className="text-slate-600 mb-4">
                  Advanced NLP solutions with text analysis, sentiment analysis, 
                  language understanding, and conversational AI capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Text Analysis</li>
                  <li>• Sentiment Analysis</li>
                  <li>• Language Understanding</li>
                  <li>• Conversational AI</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  👁️ Computer Vision Services
                </h3>
                <p className="text-slate-600 mb-4">
                  Computer vision solutions with image recognition, object detection, 
                  facial recognition, and visual data analysis capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Image Recognition</li>
                  <li>• Object Detection</li>
                  <li>• Facial Recognition</li>
                  <li>• Visual Analytics</li>
                </ul>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🔄 Intelligent Automation
                </h3>
                <p className="text-slate-600 mb-4">
                  AI-powered automation solutions with robotic process automation, 
                  workflow optimization, and intelligent decision-making systems.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Process Automation</li>
                  <li>• Workflow Optimization</li>
                  <li>• Intelligent Decisions</li>
                  <li>• Smart Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* AI Applications */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              AI Solutions for Every Industry
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏦 Financial AI Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  AI-powered financial solutions with fraud detection, 
                  risk assessment, and algorithmic trading capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Fraud Detection</li>
                  <li>• Risk Assessment</li>
                  <li>• Algorithmic Trading</li>
                  <li>• Credit Scoring</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏥 Healthcare AI
                </h3>
                <p className="text-slate-600 mb-4">
                  Healthcare AI solutions with medical diagnosis, 
                  patient monitoring, and drug discovery capabilities.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Medical Diagnosis</li>
                  <li>• Patient Monitoring</li>
                  <li>• Drug Discovery</li>
                  <li>• Health Analytics</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🏭 Manufacturing AI
                </h3>
                <p className="text-slate-600 mb-4">
                  Manufacturing AI with predictive maintenance, 
                  quality control, and supply chain optimization.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Predictive Maintenance</li>
                  <li>• Quality Control</li>
                  <li>• Supply Chain Optimization</li>
                  <li>• Production Planning</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🛒 Retail AI Solutions
                </h3>
                <p className="text-slate-600 mb-4">
                  Retail AI with customer behavior analysis, 
                  inventory optimization, and personalized recommendations.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Customer Behavior Analysis</li>
                  <li>• Inventory Optimization</li>
                  <li>• Personalized Recommendations</li>
                  <li>• Demand Forecasting</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  📦 Logistics AI
                </h3>
                <p className="text-slate-600 mb-4">
                  Logistics AI with route optimization, 
                  demand forecasting, and supply chain intelligence.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Route Optimization</li>
                  <li>• Demand Forecasting</li>
                  <li>• Supply Chain Intelligence</li>
                  <li>• Fleet Management</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">
                  🎓 Education AI
                </h3>
                <p className="text-slate-600 mb-4">
                  Education AI with personalized learning, 
                  student assessment, and educational analytics.
                </p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Personalized Learning</li>
                  <li>• Student Assessment</li>
                  <li>• Educational Analytics</li>
                  <li>• Adaptive Content</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Advanced AI & ML Technology Stack
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">ML Frameworks</h3>
                <p className="text-slate-600 text-sm">
                  TensorFlow, PyTorch, Scikit-learn, and Keras
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Programming</h3>
                <p className="text-slate-600 text-sm">
                  Python, R, Julia, and specialized ML libraries
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Cloud AI</h3>
                <p className="text-slate-600 text-sm">
                  AWS SageMaker, Azure ML, Google AI, and cloud platforms
                </p>
              </div>
              
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data & Analytics</h3>
                <p className="text-slate-600 text-sm">
                  Big Data, Data Lakes, Analytics platforms, and visualization
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
              Our AI & ML Development Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">1</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Data Analysis
                </h3>
                <p className="text-slate-600">
                  Data assessment, quality analysis, 
                  and feature engineering planning
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">2</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Model Development
                </h3>
                <p className="text-slate-600">
                  Algorithm selection, model training, 
                  and performance optimization
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">3</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Testing & Validation
                </h3>
                <p className="text-slate-600">
                  Model testing, validation, 
                  and accuracy assessment
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-pink-600">4</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Deployment & Monitoring
                </h3>
                <p className="text-slate-600">
                  Production deployment, performance monitoring, 
                  and continuous improvement
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
                <div key={index} className="bg-pink-50 p-6 rounded-lg">
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-pink-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Harness the Power of AI?
            </h2>
            <p className="text-xl text-pink-100 mb-8">
              Contact ElegantCodes today for a free consultation and discover how our 
              AI and Machine Learning services can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-pink-600 hover:bg-pink-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Your AI Project
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-pink-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                View AI Portfolio
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  )
} 