import { HomeSections } from '@/components/sections/HomeSections';
import { getDictionary, isLocale, type Locale } from '@/lib/i18n';
import { notFound } from 'next/navigation';
import { makeMetadata } from '@/lib/seo';

export const metadata = makeMetadata('Global Certification, Testing, and Market Access', 'Premium multinational compliance support for B2B manufacturers.', '/');

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = getDictionary(locale as Locale);
  return <HomeSections locale={locale as Locale} dict={dict} />;
}
