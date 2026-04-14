import { QuoteForm } from '@/components/forms/QuoteForm';

export default function RequestQuotePage() {
  return (
    <section className="section max-w-4xl">
      <h1 className="section-title">Request a Quote</h1>
      <p className="mt-4 text-brand-dark/70">Tell us your product and target market. We'll build a practical certification plan.</p>
      <div className="mt-8 rounded-3xl border border-brand-dark/10 p-6 lg:p-8">
        <QuoteForm />
      </div>
    </section>
  );
}
