import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export default function CtaSection({
  title = 'See Venqora EHR in action',
  text = 'Get a personalized walkthrough of scheduling, charting, billing and the patient portal — with your workflows, not a canned script.',
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div className="hero-glow left-1/4 top-0 h-96 w-96 bg-brand-600/30" aria-hidden="true" />
      <div className="hero-glow hero-glow-delay-2 right-0 bottom-0 h-80 w-80 bg-teal-glow/15" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <AnimateIn variant="fade-up">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={100}>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-400">{text}</p>
        </AnimateIn>
        <AnimateIn variant="fade-up" delay={200}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-base font-semibold text-brand-700 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-brand-50"
            >
              Request a free demo
            </Link>
            <Link
              href="/pricing/"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              View pricing plans
            </Link>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
