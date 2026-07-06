'use client';

import { getApiBase, getProductSlug, usesBlogApi as usesAventrexApi } from '@/lib/aventrex-blog-config';
import { mapApiPlan } from '@/lib/map-pricing-plan';

function pricingUrl() {
  const base = getApiBase();
  const product = getProductSlug();
  return `${base}/api/pricing?product=${encodeURIComponent(product)}`;
}

/**
 * Fetch live pricing plans from Aventrex (browser — no rebuild needed on Hostinger).
 * @returns {Promise<{ plans: ReturnType<typeof mapApiPlan>[], source: 'api' | 'fallback' }>}
 */
export async function fetchPricingPlansClient() {
  if (!usesAventrexApi()) {
    throw new Error('Aventrex API URL is not configured');
  }

  const res = await fetch(pricingUrl(), { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(`Pricing API error: ${res.status}`);
  }

  const data = await res.json();
  const plans = Array.isArray(data.plans) ? data.plans : [];

  if (plans.length === 0) {
    return { plans: [], source: 'fallback' };
  }

  return { plans: plans.map(mapApiPlan), source: 'api' };
}
