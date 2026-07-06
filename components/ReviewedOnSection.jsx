'use client';

import Link from 'next/link';
import { EHR_REVIEW_PLATFORMS } from '@/lib/review-platforms';

function StarRating() {
  return (
    <div className="flex items-center justify-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden>
          <path d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.9l-4.94 2.6.94-5.5-4-3.9 5.53-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

function PlatformBadge({ name, href, color }) {
  const inner = (
    <>
      <p className="text-lg font-bold tracking-tight" style={{ color }}>
        {name}
      </p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-400">Reviewed on</p>
      <div className="mt-2">
        <StarRating />
      </div>
    </>
  );

  const className =
    'flex min-h-[7.5rem] flex-col items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-5 text-center shadow-sm transition hover:border-brand-200 hover:shadow-md';

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} aria-label={`${name} reviews`}>
        {inner}
      </a>
    );
  }

  return (
    <div className={className} aria-label={`${name} — listing coming soon`}>
      {inner}
      <p className="mt-2 text-[10px] font-medium text-slate-400">Profile coming soon</p>
    </div>
  );
}

export default function ReviewedOnSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50/80 py-12" aria-label="EHR software review platforms">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">Trusted by clinics</p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Find Venqora on leading EHR review sites
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Compare Venqora EHR alongside other electronic health record platforms on G2, Capterra, and
            Software Advice.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {EHR_REVIEW_PLATFORMS.map((platform) => (
            <PlatformBadge key={platform.id} name={platform.name} href={platform.href} color={platform.color} />
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-slate-500">
          Are you a Venqora customer?{' '}
          <Link href="/contact/" className="font-semibold text-brand-600 hover:text-brand-700">
            Share your experience
          </Link>{' '}
          — we&apos;ll help you post a review.
        </p>
      </div>
    </section>
  );
}
