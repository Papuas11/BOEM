'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { CtaButton } from '@/components/ui/CtaButton';
import { services } from '@/lib/data/services';
import { countries } from '@/lib/data/countries';
import { type Locale, t } from '@/lib/i18n';

export function HomeSections({ locale, dict }: { locale: Locale; dict: Record<string, any> }) {
  return (
    <>
      <section className="section min-h-[78vh] py-24">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-5 text-sm uppercase tracking-[0.2em] text-brand-red">
          International Compliance Company
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight md:text-7xl">
          {t(dict, 'hero.title')}
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-6 max-w-2xl text-lg text-brand-dark/70">
          {t(dict, 'hero.subtitle')}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mt-10 flex flex-wrap gap-4">
          <CtaButton href={`/${locale}/request-quote`}>{t(dict, 'hero.primary')}</CtaButton>
          <CtaButton href={`/${locale}/book-meeting`} secondary>{t(dict, 'hero.secondary')}</CtaButton>
        </motion.div>
      </section>

      <section className="section grid gap-4 border-y border-brand-dark/10 py-8 text-sm md:grid-cols-4">
        {['Global offices', 'ATEX / IECEx / CE / ISO / GCC', 'Transparent process', 'International market expertise'].map((item) => (
          <p key={item} className="font-medium">{item}</p>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title">Services that move products to markets faster</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.slice(0, 6).map((service) => (
            <Link key={service.slug} href={`/${locale}/services/${service.slug}`} className="rounded-3xl border border-brand-dark/10 bg-white p-7 shadow-premium hover:-translate-y-0.5">
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-3 text-sm text-brand-dark/70">{service.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">How it works</h2>
        <ol className="mt-8 grid gap-4 md:grid-cols-4">
          {['Scope your product', 'Define certification path', 'Test and prepare documentation', 'Move to approval and market access'].map((step, i) => (
            <li key={step} className="rounded-2xl border border-brand-dark/10 p-5 text-sm">
              <p className="text-brand-red">0{i + 1}</p>
              <p className="mt-2 font-medium">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="section">
        <h2 className="section-title">Markets we support</h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {countries.slice(0, 6).map((country) => (
            <Link key={country.slug} href={`/${locale}/countries/${country.slug}`} className="rounded-2xl border border-brand-dark/10 p-5 hover:bg-brand-mist">
              {country.name}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="rounded-3xl border border-brand-dark/10 bg-brand-mist p-8 lg:p-12">
          <h2 className="section-title">Tell us what product you want to certify</h2>
          <p className="mt-3 max-w-2xl text-brand-dark/70">Receive a structured certification plan with scope, required standards, and next steps.</p>
          <div className="mt-7"><CtaButton href={`/${locale}/request-quote`}>Get My Certification Plan</CtaButton></div>
        </div>
      </section>
    </>
  );
}
