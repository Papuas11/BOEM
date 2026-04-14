import { notFound } from 'next/navigation';
import { countries } from '@/lib/data/countries';

export function generateStaticParams() {
  return countries.map((country) => ({ slug: country.slug }));
}

export default async function CountryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = countries.find((item) => item.slug === slug);
  if (!country) notFound();

  return (
    <section className="section">
      <h1 className="section-title">{country.name} Certification & Compliance</h1>
      <p className="mt-4 max-w-3xl text-brand-dark/70">{country.intro}</p>
      <h2 className="mt-10 text-2xl font-semibold">Common required services</h2>
      <p className="mt-3 text-brand-dark/70">ATEX/IECEx, CE directives, ISO systems, third-party inspection, and documentation consultancy.</p>
    </section>
  );
}
