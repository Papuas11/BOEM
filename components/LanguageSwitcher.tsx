'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { locales, type Locale } from '@/lib/i18n';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-2 rounded-full border border-brand-dark/10 bg-white p-1 text-xs">
      {locales.map((item) => {
        const target = pathname.replace(`/${locale}`, `/${item}`);
        return (
          <Link key={item} href={target} className={`rounded-full px-2 py-1 uppercase ${item === locale ? 'bg-brand-dark text-white' : 'text-brand-dark/60'}`}>
            {item}
          </Link>
        );
      })}
    </div>
  );
}
