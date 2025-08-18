import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { regionalConfig, generateRegionalMetaTags, generateHreflangTags, generateRegionalSchema } from '@/lib/seo';

interface RegionalLayoutProps {
  children: React.ReactNode;
  params: { region: string };
}

export async function generateStaticParams() {
  return [
    { region: 'us' },
    { region: 'ke' },
    { region: 'ca' },
    { region: 'au' },
    { region: 'eu' },
    { region: 'global' }
  ];
}

export async function generateMetadata({ params }: RegionalLayoutProps): Promise<Metadata> {
  const { region } = params;
  
  if (!regionalConfig[region as keyof typeof regionalConfig]) {
    notFound();
  }
  
  const regional = regionalConfig[region as keyof typeof regionalConfig];
  
  return {
    title: `IT Solutions in ${region.toUpperCase()} | ElegantCodes`,
    description: `Professional IT solutions and software development services in ${region.toUpperCase()}. Expert cloud, AI, mobile, and web development solutions.`,
    keywords: [
      `IT solutions ${region}`,
      `software development ${region}`,
      `cloud services ${region}`,
      `AI development ${region}`,
      `mobile app development ${region}`,
      `cybersecurity ${region}`,
      `web development ${region}`,
      `IT consulting ${region}`
    ],
    openGraph: {
      title: `IT Solutions in ${region.toUpperCase()} | ElegantCodes`,
      description: `Professional IT solutions and software development services in ${region.toUpperCase()}. Expert cloud, AI, mobile, and web development solutions.`,
      url: `/`,
      siteName: 'ElegantCodes',
      locale: regional.language === 'en' ? 'en_US' : regional.language,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `IT Solutions in ${region.toUpperCase()} | ElegantCodes`,
      description: `Professional IT solutions and software development services in ${region.toUpperCase()}.`,
    },
    alternates: {
      canonical: `/`,
    },
    other: {
      'hreflang': generateHreflangTags('/').map(h => `${h.lang}:${h.href}`).join(', ')
    }
  };
}

export default function RegionalLayout({ children, params }: RegionalLayoutProps) {
  const { region } = params;
  
  if (!regionalConfig[region as keyof typeof regionalConfig]) {
    notFound();
  }
  
  const regional = regionalConfig[region as keyof typeof regionalConfig];
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateRegionalSchema(region))
        }}
      />
      <div className={`region-${region}`}>
        {children}
      </div>
    </>
  );
} 