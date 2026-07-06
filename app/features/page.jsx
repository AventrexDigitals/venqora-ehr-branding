import Link from 'next/link';
import Icon from '@/components/Icon';
import PageHero from '@/components/PageHero';
import AnimateStagger from '@/components/AnimateStagger';
import CtaSection from '@/components/CtaSection';
import { FEATURES, FEATURE_DETAIL_PAGES_ENABLED } from '@/lib/features';

export const metadata = {
  title: 'EHR Features — Scheduling, Charting, e-Prescribing, Billing & More',
  description:
    'Explore every Venqora EHR module: patient scheduling, clinical documentation, e-prescribing, labs & diagnostics, medical billing & RCM, patient portal, security & HIPAA compliance, and multi-clinic practice management.',
  alternates: { canonical: '/features/' },
};

export default function FeaturesPage() {
  return (
    <>
      <PageHero
        eyebrow="Platform features"
        title="Everything your practice needs, in one EHR"
        lead={
          FEATURE_DETAIL_PAGES_ENABLED
            ? 'Eight integrated modules covering the full life of a patient visit — from online booking to paid claim. Click any module for a deep dive.'
            : 'Eight integrated modules covering the full life of a patient visit — from online booking to paid claim.'
        }
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateStagger className="grid gap-6 lg:grid-cols-2 lg:gap-8" variant="fade-up" stagger={90}>
            {FEATURES.map((f) => (
              <article
                key={f.slug}
                className="premium-card flex flex-col p-8 hover:border-brand-300/60"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon name={f.icon} />
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    {FEATURE_DETAIL_PAGES_ENABLED ? (
                      <Link href={`/features/${f.slug}/`} className="hover:text-brand-700">
                        {f.name}
                      </Link>
                    ) : (
                      f.name
                    )}
                  </h2>
                </div>
                <p className="mt-4 leading-relaxed text-slate-600">{f.short}</p>
                <ul className="mt-5 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                  {f.bullets.slice(0, 4).map((b) => (
                    <li key={b.title} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                      {b.title}
                    </li>
                  ))}
                </ul>
                {FEATURE_DETAIL_PAGES_ENABLED ? (
                  <Link
                    href={`/features/${f.slug}/`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
                  >
                    Explore {f.name.toLowerCase()} <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                ) : null}
                {/* /features/{f.slug}/ — hidden until screenshots exist (FEATURE_DETAIL_PAGES_ENABLED) */}
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
