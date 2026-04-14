import { ContactForm } from '@/components/forms/ContactForm';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata('Contacts', 'Contact international compliance experts and regional offices.', '/contacts');

export default function ContactsPage() {
  return (
    <section className="section grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="section-title">Contacts</h1>
        <p className="mt-4 text-brand-dark/70">Turkey, Italy, Latvia, France, Germany, Switzerland, India, China, South Korea, UAE.</p>
      </div>
      <ContactForm />
    </section>
  );
}
