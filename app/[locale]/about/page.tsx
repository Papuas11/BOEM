import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata('About Danem', 'International certification company with Swiss headquarters and global operations.', '/about');

export default function AboutPage() {
  return (
    <section className="section">
      <h1 className="section-title">About Danem</h1>
      <p className="mt-6 max-w-3xl text-brand-dark/70">Headquartered in Switzerland, Danem supports manufacturers with certification, testing, inspection, and market-access operations across Europe, MENA, and Asia.</p>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {['Global footprint', 'Engineering-first execution', 'Transparent process and pricing'].map((item) => (
          <div key={item} className="rounded-2xl border border-brand-dark/10 p-5">{item}</div>
        ))}
      </div>
    </section>
  );
}
