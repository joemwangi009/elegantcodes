import { MetadataRoute } from 'next';
import { siteConfig, generateRegionalSitemap, keywordClusters, regionalConfig } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const currentDate = new Date().toISOString();
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  // Regional pages
  const regionalPages = Object.keys(regionalConfig).map(region => ({
    url: `${baseUrl}/${region}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.9,
  }));

  // Service pages for each region
  const regionalServicePages = Object.keys(regionalConfig).flatMap(region =>
    keywordClusters.map(cluster => ({
      url: `${baseUrl}/${region}/services/${cluster.id}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  // Global service pages
  const globalServicePages = keywordClusters.map(cluster => ({
    url: `${baseUrl}/services/${cluster.id}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Blog posts for each region
  const regionalBlogPages = Object.keys(regionalConfig).flatMap(region => {
    const posts = [];
    for (let i = 1; i <= 50; i++) {
      posts.push({
        url: `${baseUrl}/${region}/blog/post-${i}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      });
    }
    return posts;
  });

  // Global blog posts
  const globalBlogPages = Array.from({ length: 100 }, (_, i) => ({
    url: `${baseUrl}/blog/post-${i + 1}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Portfolio pages for each region
  const regionalPortfolioPages = Object.keys(regionalConfig).flatMap(region => {
    const projects = [];
    for (let i = 1; i <= 20; i++) {
      projects.push({
        url: `${baseUrl}/${region}/portfolio/project-${i}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
    return projects;
  });

  // Global portfolio pages
  const globalPortfolioPages = Array.from({ length: 50 }, (_, i) => ({
    url: `${baseUrl}/portfolio/project-${i + 1}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Case study pages for each region
  const regionalCaseStudyPages = Object.keys(regionalConfig).flatMap(region => {
    const caseStudies = [];
    for (let i = 1; i <= 15; i++) {
      caseStudies.push({
        url: `${baseUrl}/${region}/case-studies/case-${i}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
      });
    }
    return caseStudies;
  });

  // Global case study pages
  const globalCaseStudyPages = Array.from({ length: 30 }, (_, i) => ({
    url: `${baseUrl}/case-studies/case-${i + 1}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Industry-specific pages for each region
  const industries = ['finance', 'healthcare', 'retail', 'manufacturing', 'education', 'real-estate', 'logistics', 'travel'];
  const regionalIndustryPages = Object.keys(regionalConfig).flatMap(region =>
    industries.map(industry => ({
      url: `${baseUrl}/${region}/industries/${industry}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  // Global industry pages
  const globalIndustryPages = industries.map(industry => ({
    url: `${baseUrl}/industries/${industry}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Technology-specific pages for each region
  const technologies = ['react', 'nodejs', 'flutter', 'aws', 'azure', 'google-cloud', 'kubernetes', 'docker'];
  const regionalTechnologyPages = Object.keys(regionalConfig).flatMap(region =>
    technologies.map(tech => ({
      url: `${baseUrl}/${region}/technologies/${tech}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  );

  // Global technology pages
  const globalTechnologyPages = technologies.map(tech => ({
    url: `${baseUrl}/technologies/${tech}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // FAQ pages for each region
  const regionalFAQPages = Object.keys(regionalConfig).map(region => ({
    url: `${baseUrl}/${region}/faq`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Global FAQ page
  const globalFAQPage = {
    url: `${baseUrl}/faq`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  };

  // Team pages for each region
  const regionalTeamPages = Object.keys(regionalConfig).map(region => ({
    url: `${baseUrl}/${region}/team`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }));

  // Global team page
  const globalTeamPage = {
    url: `${baseUrl}/team`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  };

  // Pricing pages for each region
  const regionalPricingPages = Object.keys(regionalConfig).map(region => ({
    url: `${baseUrl}/${region}/pricing`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Global pricing page
  const globalPricingPage = {
    url: `${baseUrl}/pricing`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  };

  // Combine all sitemap entries
  return [
    ...staticPages,
    ...regionalPages,
    ...regionalServicePages,
    ...globalServicePages,
    ...regionalBlogPages,
    ...globalBlogPages,
    ...regionalPortfolioPages,
    ...globalPortfolioPages,
    ...regionalCaseStudyPages,
    ...globalCaseStudyPages,
    ...regionalIndustryPages,
    ...globalIndustryPages,
    ...regionalTechnologyPages,
    ...globalTechnologyPages,
    ...regionalFAQPages,
    globalFAQPage,
    ...regionalTeamPages,
    globalTeamPage,
    ...regionalPricingPages,
    globalPricingPage,
  ];
} 