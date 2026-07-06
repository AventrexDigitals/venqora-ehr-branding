import Link from 'next/link';
import Icon from '@/components/Icon';
import JsonLd from '@/components/JsonLd';
import AnimateIn from '@/components/AnimateIn';
import AnimateStagger from '@/components/AnimateStagger';
import CtaSection from '@/components/CtaSection';
import FaqList from '@/components/FaqList';
import ImagePlaceholder from '@/components/ImagePlaceholder';
import PricingCards from '@/components/PricingCards';
import ReviewedOnSection from '@/components/ReviewedOnSection';
import { FEATURES, FEATURE_DETAIL_PAGES_ENABLED } from '@/lib/features';
import { FAQS } from '@/lib/faqs';
import { PLAN_HIGHLIGHTS } from '@/lib/plans';
import { getPricingPlans } from '@/lib/pricing';
import { softwareApplicationJsonLd } from '@/lib/software-schema';
import { SITE_URL, SITE_NAME, DEFAULT_DESCRIPTION } from '@/lib/site';

export const metadata = {
  title: `${SITE_NAME} — All-in-One Electronic Health Record (EHR) Software for Clinics`,
  description: DEFAULT_DESCRIPTION,
  alternates: { canonical: '/' },
};

const ROLES = [
  {
    role: 'Physicians',
    text: 'Structured notes, full charts, clinical decision support, e-prescribing and diagnostic orders — documented in minutes, not evenings.',
  },
  {
    role: 'Nurses',
    text: 'Triage with vitals capture and automatic unit conversions, worklists of today’s appointments and instant access to the chart.',
  },
  {
    role: 'Front desk',
    text: 'Booking, guided confirmation forms, copay collection, printed receipts, eligibility checks and a live token queue board.',
  },
  {
    role: 'Billers',
    text: 'Eligibility, claims, clearinghouse submission, ERA auto-posting, denial management, superbills, invoices and payment tracking.',
  },
  {
    role: 'Administrators',
    text: 'Clinics, users, roles, timetables, fees and catalogs managed centrally — with analytics dashboards across every location.',
  },
  {
    role: 'Patients',
    text: 'Find a doctor, book and pay online, complete intake, chat with the care team, view results and request refills 24/7.',
  },
];

const DIFFERENTIATORS = [
  {
    title: 'Live waiting-room token board',
    text: 'A real-time queue display patients can see on any screen — a feature most EHRs simply don’t have.',
  },
  {
    title: 'Real-time patient–care team chat',
    text: 'Appointment-linked instant messaging over secure websockets, not slow inbox-style portal messages.',
  },
  {
    title: 'Break-glass emergency access',
    text: 'Supervised, time-boxed, fully audited emergency access to restricted records — enterprise-grade compliance in every plan.',
  },
  {
    title: 'Built-in payments & fax',
    text: 'Stripe-powered online payments and integrated fax transmission included — no third-party bolt-ons to buy and wire up.',
  },
  {
    title: 'True multi-clinic architecture',
    text: 'Per-clinic providers, timetables, fees and queues with network-wide administration — built in from day one.',
  },
  {
    title: 'Patient privacy workflows',
    text: 'Electronic consents, consent templates and formal patient data-request handling support HIPAA right-of-access out of the box.',
  },
];

const TRUST_STATS = [
  { value: '8', label: 'Integrated modules' },
  { value: '6', label: 'Role-based workspaces' },
  { value: '3', label: 'Flexible pricing tiers' },
  { value: '100%', label: 'HIPAA-compliant by design' },
];

export default async function HomePage() {
  const plans = await getPricingPlans();
  const homeFaqs = [FAQS[0].items[0], FAQS[0].items[2], FAQS[2].items[0], FAQS[3].items[3]];

  return (
    <>
      <JsonLd data={softwareApplicationJsonLd({ plans })} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="hero-glow -left-40 top-0 h-[28rem] w-[28rem] bg-brand-400/25" aria-hidden="true" />
        <div className="hero-glow hero-glow-delay-1 right-0 top-20 h-80 w-80 bg-teal-glow/20" aria-hidden="true" />
        <div className="hero-glow hero-glow-delay-2 left-1/2 bottom-0 h-64 w-96 -translate-x-1/2 bg-brand-200/30" aria-hidden="true" />

        <div className="relative bg-gradient-to-b from-brand-50/80 via-white to-white">
          <div className="mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8 lg:pt-28">
            <div className="grid items-center gap-14 lg:grid-cols-2">
              <div>
                <p className="section-eyebrow animate-on-load">
                  <Icon name="shield" className="h-3.5 w-3.5" />
                  HIPAA Compliant · Audit-logged · Role-based access
                </p>
                <h1 className="font-display animate-on-load animate-on-load-delay-1 mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                  The all-in-one{' '}
                  <span className="text-shimmer bg-gradient-to-r from-brand-600 via-brand-400 to-brand-600 bg-clip-text text-transparent">
                    EHR platform
                  </span>{' '}
                  that runs your entire clinic
                </h1>
                <p className="animate-on-load animate-on-load-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
                  Venqora EHR unifies scheduling, clinical charting, e-prescribing, labs, medical
                  billing &amp; RCM, and a modern patient portal — with real-time chat, live queue
                  boards and compliance tooling that legacy EHRs charge extra for.
                </p>
                <div className="animate-on-load animate-on-load-delay-3 mt-9 flex flex-wrap gap-4">
                  <Link href="/contact/" className="btn-primary">
                    Request a free demo
                  </Link>
                  <Link href="/features/" className="btn-secondary">
                    Explore all features
                  </Link>
                </div>
                <ul className="animate-on-load animate-on-load-delay-4 mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
                  {['No hardware to install', 'Free data migration', 'Role-based training included'].map((t) => (
                    <li key={t} className="flex items-center gap-1.5">
                      <Icon name="check" className="h-4 w-4 text-brand-600" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-load-right">
                <ImagePlaceholder
                  src="/assets/screenshots/hero-dashboard.png"
                  alt="Venqora EHR dashboard showing appointments, patient queue and analytics"
                  label="Hero image — main product dashboard screenshot"
                  className="shadow-2xl shadow-brand-600/10 ring-1 ring-slate-200/60"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust stats */}
      <section className="border-y border-slate-100 bg-slate-50/50" aria-label="Platform highlights">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <AnimateStagger className="grid grid-cols-2 gap-8 lg:grid-cols-4" variant="fade-up" stagger={100}>
            {TRUST_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <p className="font-display text-3xl font-bold tracking-tight text-brand-600 sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-sm font-medium text-slate-600">{s.label}</p>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-24" aria-labelledby="features-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">Platform</p>
            <h2 id="features-heading" className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Every module a modern practice needs
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              One login, one database, one bill — instead of six disconnected tools.
            </p>
          </AnimateIn>
          <AnimateStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" variant="fade-up" stagger={70}>
            {FEATURES.map((f) => (
              <article key={f.slug} className="premium-card group p-6 hover:border-brand-300/60">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-brand-100/80 text-brand-600 transition group-hover:from-brand-600 group-hover:to-brand-700 group-hover:text-white group-hover:shadow-lg group-hover:shadow-brand-600/20">
                  <Icon name={f.icon} />
                </span>
                <h3 className="mt-4 text-base font-semibold text-slate-900">{f.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.short}</p>
                {FEATURE_DETAIL_PAGES_ENABLED ? (
                  <Link
                    href={`/features/${f.slug}/`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600"
                  >
                    Learn more <Icon name="arrow" className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                ) : null}
              </article>
            ))}
          </AnimateStagger>
        </div>
      </section>
      {/* Pricing preview — aligned with market plan */}
      <section className="relative overflow-hidden bg-slate-50 py-24" aria-labelledby="pricing-heading">
        <div className="hero-glow hero-glow-delay-1 right-0 top-0 h-80 w-80 bg-brand-300/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">Pricing</p>
            <h2 id="pricing-heading" className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple plans. The whole platform.
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Per-provider pricing with every core module included — no percent-of-collections contracts.
            </p>
          </AnimateIn>

          <AnimateStagger className="mt-10 flex flex-wrap justify-center gap-4" variant="scale" stagger={90}>
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
            <PricingCards compact initialPlans={plans} />
          </div>

          <AnimateIn variant="fade-up" delay={200}>
            <p className="mt-10 text-center">
              <Link
                href="/pricing/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Compare all plans &amp; pricing FAQs <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Differentiators */}
      <section className="relative overflow-hidden bg-slate-950 py-24 text-white" aria-labelledby="diff-heading">
        <div className="hero-glow hero-glow-delay-2 left-0 top-1/2 h-96 w-96 -translate-y-1/2 bg-brand-600/20" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">Why Venqora</p>
            <h2 id="diff-heading" className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Features other EHR systems make you pay extra for
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Comparable in scope to CareCloud and Oracle Health — with operational extras built in.
            </p>
          </AnimateIn>
          <AnimateStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" variant="fade-up" stagger={80}>
            {DIFFERENTIATORS.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 backdrop-blur transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80"
              >
                <h3 className="text-base font-semibold text-white">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{d.text}</p>
              </div>
            ))}
          </AnimateStagger>
          <AnimateIn variant="fade-up" delay={150} className="mt-12 text-center">
            <Link
              href="/why-venqora/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand-400 transition hover:text-brand-300"
            >
              See the full comparison <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Roles */}
      <section className="py-24" aria-labelledby="roles-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn className="mx-auto max-w-2xl text-center">
            <p className="section-eyebrow">Built for the whole team</p>
            <h2 id="roles-heading" className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A dedicated workspace for every role
            </h2>
          </AnimateIn>
          <AnimateStagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" variant="fade-up" stagger={75}>
            {ROLES.map((r) => (
              <div key={r.role} className="premium-card bg-gradient-to-br from-slate-50 to-white p-6">
                <h3 className="text-base font-semibold text-slate-900">{r.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{r.text}</p>
              </div>
            ))}
          </AnimateStagger>
        </div>
      </section>

      {/* Product screenshots band */}
      <section className="bg-slate-50 py-24" aria-labelledby="tour-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up">
            <h2 id="tour-heading" className="font-display text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A quick look inside
            </h2>
          </AnimateIn>
          <AnimateStagger className="mt-14 grid gap-6 md:grid-cols-3" variant="scale" stagger={120}>
            <ImagePlaceholder
              src="/assets/screenshots/tour-scheduling.png"
              alt="Appointment scheduling and token queue board in Venqora EHR"
              label="Screenshot — scheduling & queue board"
              ratio="aspect-[4/3]"
              objectFit="contain"
            />
            <ImagePlaceholder
              src="/assets/screenshots/tour-charting.png"
              alt="Clinical note editor with safety alerts in Venqora EHR"
              label="Screenshot — clinical charting"
              ratio="aspect-[4/3]"
              objectFit="contain"
            />
            <ImagePlaceholder
              src="/assets/screenshots/tour-billing.png"
              alt="Biller dashboard with claims and denials in Venqora EHR"
              label="Screenshot — billing & RCM"
              ratio="aspect-[4/3]"
              objectFit="contain"
            />
          </AnimateStagger>
        </div>
      </section>

      {/* Compliance strip */}
      <section className="py-24" aria-labelledby="compliance-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card grid items-center gap-10 p-8 lg:grid-cols-2 lg:p-12">
            <AnimateIn variant="slide-left">
              <p className="section-eyebrow">Security &amp; compliance</p>
              <h2 id="compliance-heading" className="font-display mt-4 text-3xl font-bold tracking-tight text-slate-900">
                HIPAA compliant by design
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  'Granular role-based access control for six distinct roles',
                  'Comprehensive audit logging of every record access',
                  'Supervised break-glass emergency access',
                  'Electronic consents and patient data-request workflows',
                  'Login monitoring and account security controls',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-slate-700">
                    <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {t}
                  </li>
                ))}
              </ul>
              <Link
                href="/features/"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                Explore all features <Icon name="arrow" className="h-4 w-4" />
              </Link>
              {/* /features/security-compliance/ — enable when module screenshots are ready (FEATURE_DETAIL_PAGES_ENABLED) */}
            </AnimateIn>
            <AnimateIn variant="slide-right" delay={100}>
              <ImagePlaceholder
                src="/assets/screenshots/compliance-audit.png"
                alt="Audit log and compliance controls in Venqora EHR"
                label="Screenshot — audit log / compliance console"
                className="ring-1 ring-slate-200/60"
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="bg-slate-50 py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <AnimateIn variant="fade-up">
            <h2 id="faq-heading" className="font-display text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </AnimateIn>
          <AnimateIn variant="fade-up" delay={120}>
            <div className="premium-card mt-10 px-6">
              <FaqList items={homeFaqs} />
            </div>
          </AnimateIn>
          <AnimateIn variant="fade-in" delay={200}>
            <p className="mt-6 text-center">
              <Link href="/faq/" className="text-sm font-semibold text-brand-600 hover:text-brand-700">
                See all questions →
              </Link>
            </p>
          </AnimateIn>
        </div>
      </section>

      <ReviewedOnSection />
      <CtaSection />
    </>
  );
}
