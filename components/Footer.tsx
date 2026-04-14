import Link from 'next/link';
import { type Locale } from '@/lib/i18n';

export function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="border-t border-brand-dark/10 bg-brand-mist">
      <div className="section grid gap-10 py-14 md:grid-cols-4">
        <div>
          <p className="text-lg font-semibold">DANEM</p>
          <p className="mt-3 text-sm text-brand-dark/70">Global certification, testing and market access partner.</p>
        </div>
        <div>
          <p className="font-medium">Navigation</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-dark/70">
            <li><Link href={`/${locale}/about`}>About</Link></li>
            <li><Link href={`/${locale}/services`}>Services</Link></li>
            <li><Link href={`/${locale}/countries`}>Countries</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-medium">Offices</p>
          <p className="mt-3 text-sm text-brand-dark/70">Switzerland, Turkey, Germany, Italy, France, UAE, India, China</p>
        </div>
        <div>
          <p className="font-medium">Legal</p>
          <ul className="mt-3 space-y-2 text-sm text-brand-dark/70">
            <li><Link href="#">Privacy</Link></li>
            <li><Link href="#">Terms</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
