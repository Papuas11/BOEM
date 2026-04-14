import Link from 'next/link';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { CtaButton } from '@/components/ui/CtaButton';
import { type Locale, t } from '@/lib/i18n';

export function Header({ locale, dict }: { locale: Locale; dict: Record<string, any> }) {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-dark/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href={`/${locale}`} className="text-lg font-semibold tracking-wide">DANEM</Link>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link href={`/${locale}/about`}>{t(dict, 'nav.about')}</Link>
          <Link href={`/${locale}/services`}>{t(dict, 'nav.services')}</Link>
          <Link href={`/${locale}/countries`}>{t(dict, 'nav.countries')}</Link>
          <Link href={`/${locale}/blog`}>{t(dict, 'nav.blog')}</Link>
          <Link href={`/${locale}/contacts`}>{t(dict, 'nav.contacts')}</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher locale={locale} />
          <CtaButton href={`/${locale}/request-quote`}>{t(dict, 'nav.quote')}</CtaButton>
        </div>
      </div>
    </header>
  );
}
