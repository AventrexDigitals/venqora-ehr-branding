import Link from 'next/link';
import AnimateIn from '@/components/AnimateIn';

export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100">
      <div className="hero-glow -left-32 top-0 h-72 w-72 bg-brand-300/30" aria-hidden="true" />
      <div className="hero-glow hero-glow-delay-1 -right-24 top-12 h-64 w-64 bg-teal-glow/20" aria-hidden="true" />
      <div className="relative bg-gradient-to-b from-brand-50/70 via-white to-white">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          {eyebrow && <p className="section-eyebrow animate-on-load">{eyebrow}</p>}
          <h1 className="font-display animate-on-load animate-on-load-delay-1 mt-5 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem] lg:leading-[1.12]">
            {title}
          </h1>
          {lead && (
            <p className="animate-on-load animate-on-load-delay-2 mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
              {lead}
            </p>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
