import Link from 'next/link';
import { services } from '@/lib/data/services';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata('Services', 'ATEX, CE, ISO, testing, inspection and consultancy services.', '/services');

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <section className="section">
      <h1 className="section-title">Services</h1>
      <p className="mt-4 max-w-2xl text-brand-dark/70">Structured certification and compliance services designed for faster market access.</p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {services.map((service) => (
          <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="rounded-2xl border border-brand-dark/10 p-6 hover:bg-brand-mist">
            <h2 className="text-xl font-semibold">{service.title}</h2>
            <p className="mt-2 text-sm text-brand-dark/70">{service.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
