
import ProjectDetail from './ProjectDetail';

export async function generateStaticParams() {
  return [
    { slug: 'techflow-crm' },
    { slug: 'retailpro-pos' },
    { slug: 'ecoshop-marketplace' },
    { slug: 'healthsync-mobile' },
    { slug: 'financetracker-pro' },
    { slug: 'eventmaster-app' },
  ];
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  return <ProjectDetail slug={params.slug} />;
}
