import { notFound } from 'next/navigation';
import { services } from '@/lib/data/services';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <section className="section">
      <h1 className="section-title">{service.title}</h1>
      <p className="mt-5 max-w-2xl text-brand-dark/70">{service.summary}</p>
      <h2 className="mt-12 text-2xl font-semibold">Scope / standards / frameworks</h2>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-brand-dark/80">
        {service.scope.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <h2 className="mt-12 text-2xl font-semibold">How the process works</h2>
      <p className="mt-3 text-brand-dark/70">Pre-assessment, test planning, documentation structuring, conformity review, and approval support.</p>
    </section>
  );
}
