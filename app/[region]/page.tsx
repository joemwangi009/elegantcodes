import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regionalConfig, keywordClusters, generateKeywordContent } from '@/lib/seo';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface RegionalPageProps {
  params: { region: string };
}

export async function generateMetadata({ params }: RegionalPageProps): Promise<Metadata> {
  const { region } = params;
  
  if (!regionalConfig[region as keyof typeof regionalConfig]) {
    notFound();
  }
  
  const regional = regionalConfig[region as keyof typeof regionalConfig];
  
  return {
    title: `IT Solutions in ${region.toUpperCase()} | Custom Software Development | ElegantCodes`,
    description: `Transform your business with custom IT solutions in ${region.toUpperCase()}. Expert mobile apps, web applications, e-commerce platforms, POS systems, and business automation. Local expertise, global standards.`,
    keywords: [
      `IT solutions ${region}`,
      `software development ${region}`,
      `cloud services ${region}`,
      `AI development ${region}`,
      `mobile app development ${region}`,
      `cybersecurity ${region}`,
      `web development ${region}`,
      `IT consulting ${region}`,
      `custom software ${region}`,
      `digital transformation ${region}`,
      `IT outsourcing ${region}`,
      `technology solutions ${region}`,
      `enterprise IT ${region}`,
      `fintech solutions ${region}`,
      `healthcare IT ${region}`,
      `retail IT ${region}`,
      `manufacturing IT ${region}`,
      `education technology ${region}`,
      `real estate software ${region}`,
      `logistics IT ${region}`,
      `travel app development ${region}`,
      `Node.js developers ${region}`,
      `React development ${region}`,
      `Flutter development ${region}`,
      `AWS cloud consulting ${region}`,
      `Azure services ${region}`,
      `Google Cloud ${region}`,
      `penetration testing ${region}`,
      `ethical hacking ${region}`,
      `managed security ${region}`,
      `network security ${region}`,
      `SOC services ${region}`,
      `cyber threat management ${region}`,
      `machine learning ${region}`,
      `AI chatbot ${region}`,
      `natural language processing ${region}`,
      `computer vision ${region}`,
      `next-gen IT ${region}`,
      `web3 development ${region}`,
      `blockchain development ${region}`,
      `metaverse development ${region}`,
      `progressive web apps ${region}`,
      `cross-platform development ${region}`,
      `DevOps consulting ${region}`,
      `Kubernetes ${region}`,
      `Docker containers ${region}`,
      `cloud migration ${region}`,
      `cloud infrastructure ${region}`,
      `ecommerce development ${region}`,
      `offshore development ${region}`,
      `end-to-end IT ${region}`,
      `scalable IT ${region}`,
      `affordable IT ${region}`,
      `award winning IT ${region}`,
      `leading software ${region}`,
      `trusted IT ${region}`,
      `best IT company ${region}`,
      `top IT services ${region}`
    ],
    openGraph: {
      title: `IT Solutions in ${region.toUpperCase()} | Custom Software Development | ElegantCodes`,
      description: `Transform your business with custom IT solutions in ${region.toUpperCase()}. Expert mobile apps, web applications, e-commerce platforms, POS systems, and business automation. Local expertise, global standards.`,
      url: `/${region}`,
      siteName: 'ElegantCodes',
      locale: regional.language === 'en' ? 'en_US' : regional.language,
      type: 'website',
      images: [
        {
          url: `/images/og-${region}.jpg`,
          width: 1200,
          height: 630,
          alt: `IT Solutions in ${region.toUpperCase()} - ElegantCodes`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `IT Solutions in ${region.toUpperCase()} | ElegantCodes`,
      description: `Transform your business with custom IT solutions in ${region.toUpperCase()}. Expert mobile apps, web applications, e-commerce platforms, POS systems, and business automation.`,
      images: [`/images/og-${region}.jpg`]
    },
    alternates: {
      canonical: `/${region}`,
    }
  };
}

export default function RegionalPage({ params }: RegionalPageProps) {
  const { region } = params;
  
  if (!regionalConfig[region as keyof typeof regionalConfig]) {
    notFound();
  }
  
  const regional = regionalConfig[region as keyof typeof regionalConfig];
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">
              IT Solutions in {region.toUpperCase()}
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Transform your business with custom IT solutions in {region.toUpperCase()}. 
              Expert mobile apps, web applications, e-commerce platforms, POS systems, and business automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Free Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Our IT Services in {region.toUpperCase()}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keywordClusters.map((cluster) => (
                <div key={cluster.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                    {cluster.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {cluster.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cluster.keywords.slice(0, 3).map((keyword, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={`/${region}/services/${cluster.id}`}
                    className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-16">
              Why Choose ElegantCodes in {region.toUpperCase()}?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Local Expertise</h3>
                <p className="text-gray-600">Deep understanding of {region.toUpperCase()} market and regulations</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Global Standards</h3>
                <p className="text-gray-600">World-class development practices and security standards</p>
              </div>
              
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock support in {regional.timezone} timezone</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Team of Experts</h3>
                <p className="text-gray-600">Certified professionals with years of experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business in {region.toUpperCase()}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Get in touch with our {region.toUpperCase()} team for a free consultation and discover how our IT solutions can drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg mb-2">Contact Information:</p>
              <p className="text-lg mb-1">Phone: {regional.localPhone}</p>
              <p className="text-lg">Address: {regional.localAddress}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 