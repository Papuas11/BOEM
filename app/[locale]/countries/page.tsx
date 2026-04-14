import Link from 'next/link';
import { countries } from '@/lib/data/countries';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata('Countries', 'Country-specific certification and compliance pages for market entry.', '/countries');

export default async function CountriesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <section className="section">
      <h1 className="section-title">Countries</h1>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <Link key={country.slug} href={`/${locale}/countries/${country.slug}`} className="rounded-2xl border border-brand-dark/10 p-5 hover:bg-brand-mist">
            <p className="font-medium">{country.name}</p>
            <p className="mt-2 text-sm text-brand-dark/70">{country.intro}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
