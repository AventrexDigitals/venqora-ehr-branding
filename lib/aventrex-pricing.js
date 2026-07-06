import { getApiBase, getProductSlug, usesBlogApi as usesAventrexApi } from '@/lib/aventrex-blog-config';
import { mapApiPlan } from '@/lib/map-pricing-plan';

export { mapApiPlan };

function pricingUrl(base, product) {
  return `${base}/api/pricing?product=${encodeURIComponent(product)}`;
}

/**
 * Server-side pricing fetch (build time). Falls back to static plans when API is unset.
 * @param {import('@/lib/plans').PLANS} fallbackPlans
 */
export async function fetchPricingPlansFromApi(fallbackPlans) {
  if (!usesAventrexApi()) {
    return fallbackPlans;
  }

  const url = pricingUrl(getApiBase(), getProductSlug());

  try {
    const res = await fetch(url, { next: { revalidate: 300 } });

    if (!res.ok) {
      console.error(`Aventrex pricing API error: ${res.status}`);
      return fallbackPlans;
    }

    const data = await res.json();
    const plans = Array.isArray(data.plans) ? data.plans : [];
    if (plans.length === 0) return fallbackPlans;

    return plans.map(mapApiPlan);
  } catch (err) {
    console.error('Aventrex pricing API fetch failed:', err);
    return fallbackPlans;
  }
}
