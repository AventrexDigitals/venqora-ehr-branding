'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/Icon';
import AnimateStagger from '@/components/AnimateStagger';
import { PLANS as FALLBACK_PLANS } from '@/lib/plans';
import { fetchPricingPlansClient } from '@/lib/aventrex-pricing-client';
import { usesBlogApi as usesAventrexApi } from '@/lib/aventrex-blog-config';

function PlanCta({ plan, highlighted }) {
  const className = `mt-8 rounded-xl px-5 py-3 text-center text-sm font-semibold transition ${
    highlighted
      ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-brand-600/30'
      : 'border border-slate-200 bg-white text-slate-700 hover:-translate-y-0.5 hover:border-brand-300 hover:text-brand-700'
  }`;
  const label = plan.ctaLabel || 'Get a quote';
  const href = plan.ctaUrl || '/contact/';

  if (href.startsWith('http://') || href.startsWith('https://')) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {label}
    </Link>
  );
}

/**
 * @param {{ compact?: boolean, initialPlans?: typeof FALLBACK_PLANS }} props
 */
export default function PricingCards({ compact = false, initialPlans = null }) {
  const [plans, setPlans] = useState(initialPlans ?? FALLBACK_PLANS);
  const [loading, setLoading] = useState(Boolean(usesAventrexApi()));
  const [liveFromAdmin, setLiveFromAdmin] = useState(false);

  useEffect(() => {
    if (!usesAventrexApi()) return;

    let cancelled = false;

    fetchPricingPlansClient()
      .then(({ plans: live, source }) => {
        if (cancelled) return;
        if (live.length > 0) {
          setPlans(live);
          setLiveFromAdmin(source === 'api');
        }
      })
      .catch(() => {
        /* keep build-time / fallback plans */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <div className="grid gap-6 lg:grid-cols-3 lg:gap-8" aria-busy="true" aria-label="Loading pricing plans">
        {[0, 1, 2].map((i) => (
          <div key={i} className="premium-card h-[420px] animate-pulse bg-slate-100/80 p-8" />
        ))}
      </div>
    );
  }

  return (
    <>
      {liveFromAdmin ? (
        <p className="mb-4 text-center text-xs font-medium text-brand-600">
          Plans synced from Aventrex admin
        </p>
      ) : null}
      <AnimateStagger className="grid gap-6 lg:grid-cols-3 lg:gap-8" variant="scale" stagger={120}>
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`premium-card relative flex flex-col p-8 ${
              plan.highlighted ? 'premium-card-highlight lg:-mt-2 lg:mb-2 lg:scale-[1.02]' : ''
            }`}
          >
            {plan.highlighted && plan.badge ? (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-brand-600/25">
                {plan.badge}
              </span>
            ) : null}
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-bold text-slate-900">{plan.name}</h3>
              {plan.highlighted ? (
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon name="sparkles" className="h-4 w-4" />
                </span>
              ) : null}
            </div>
            {plan.blurb ? (
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{plan.blurb}</p>
            ) : null}
            <div className="mt-6 border-b border-slate-100 pb-6">
              <p className="text-3xl font-bold tracking-tight text-slate-900">{plan.price}</p>
              <p className="mt-1 text-sm text-slate-500">{plan.cadence}</p>
            </div>
            <ul className={`mt-6 flex-1 space-y-3 ${compact ? 'space-y-2.5' : ''}`}>
              {(compact ? plan.features.slice(0, 5) : plan.features).map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {f}
                </li>
              ))}
              {compact && plan.features.length > 5 ? (
                <li className="text-sm font-medium text-brand-600">+ {plan.features.length - 5} more</li>
              ) : null}
            </ul>
            <PlanCta plan={plan} highlighted={plan.highlighted} />
          </div>
        ))}
      </AnimateStagger>
    </>
  );
}
