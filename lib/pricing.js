import { PLANS as FALLBACK_PLANS } from '@/lib/plans';
import { fetchPricingPlansFromApi } from '@/lib/aventrex-pricing';

/** @returns {Promise<typeof FALLBACK_PLANS>} */
export async function getPricingPlans() {
  return fetchPricingPlansFromApi(FALLBACK_PLANS);
}
