import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import PricingCards from '@/components/PricingCards';
import AnimateIn from '@/components/AnimateIn';
import AnimateStagger from '@/components/AnimateStagger';
import JsonLd from '@/components/JsonLd';
import { PLAN_HIGHLIGHTS, PRICING_FAQS } from '@/lib/plans';
import { getPricingPlans } from '@/lib/pricing';
import { absoluteUrl } from '@/lib/site';
import { softwareApplicationJsonLd } from '@/lib/software-schema';

export const metadata = {
  title: 'Pricing — Simple Per-Provider EHR Plans',
  description:
    'Venqora EHR pricing: simple per-provider monthly plans covering scheduling, charting, e-prescribing, billing & RCM, patient portal and compliance. No percent-of-collections contracts. Free demo.',
  alternates: { canonical: '/pricing/' },
};

const FAQ_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: PRICING_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default async function PricingPage() {
  const plans = await getPricingPlans();

  return (
    <>
      <JsonLd data={softwareApplicationJsonLd({ pageUrl: absoluteUrl('/pricing/'), plans })} />
      <JsonLd data={FAQ_JSONLD} />
      <PageHero
        eyebrow="Pricing"
        title="Simple plans. The whole platform."
        lead="Per-provider pricing with every core module included — no percent-of-collections contracts, no per-module surprises. Final pricing depends on practice size; request a quote."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateStagger className="flex flex-wrap justify-center gap-4" variant="scale" stagger={90}>
            {PLAN_HIGHLIGHTS.map((h) => (
              <div
                key={h.label}
                className="rounded-2xl border border-slate-200/80 bg-white px-5 py-3 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <p className="text-sm font-semibold text-slate-900">{h.label}</p>
                <p className="mt-0.5 text-xs text-slate-500">{h.detail}</p>
              </div>
            ))}
          </AnimateStagger>

          <div className="mt-14">
            <PricingCards initialPlans={plans} />
          </div>

          <AnimateIn variant="fade-up" delay={100}>
            <p className="mt-10 text-center text-sm text-slate-500">
              All plans include HIPAA-compliant security controls, audit logging, encrypted data in
              transit, and continuous updates.
            </p>
          </AnimateIn>
        </div>
      </section>

      <section className="bg-slate-50 py-20" aria-label="Pricing FAQs">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up">
            <h2 className="font-display text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Pricing questions
            </h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={120}>
            <div className="premium-card mt-10 px-6">
              <FaqList items={PRICING_FAQS} />
            </div>
          </AnimateIn>
        </div>
      </section>

      <CtaSection
        title="Get an exact quote for your practice"
        text="Tell us your provider count and locations and we'll send a tailored quote within one business day."
      />
    </>
  );
}
