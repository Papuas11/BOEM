import Link from 'next/link';

export function CtaButton({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center rounded-full px-6 py-3 text-sm font-medium transition ${
        secondary ? 'border border-brand-dark/20 bg-white hover:border-brand-dark/40' : 'bg-brand-red text-white hover:bg-[#a91a28]'
      }`}
    >
      {children}
    </Link>
  );
}
