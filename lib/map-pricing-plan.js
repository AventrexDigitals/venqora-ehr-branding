/**
 * Map Aventrex /api/pricing plan → Venqora card shape.
 * @param {Record<string, unknown>} apiPlan
 */
export function mapApiPlan(apiPlan) {
  const interval = apiPlan.billing_interval;

  let cadence = 'volume pricing';
  if (interval === 'monthly') cadence = 'per provider / month';
  else if (interval === 'yearly') cadence = 'per provider / year';
  else if (interval === 'one_time') cadence = 'one-time payment';

  const ctaUrl =
    typeof apiPlan.cta_url === 'string' && apiPlan.cta_url.trim()
      ? apiPlan.cta_url.trim()
      : '/contact/';

  return {
    id: String(apiPlan.slug ?? apiPlan.name ?? 'plan'),
    name: String(apiPlan.name ?? 'Plan'),
    blurb: typeof apiPlan.description === 'string' ? apiPlan.description : '',
    price: typeof apiPlan.price_display === 'string' ? apiPlan.price_display : 'Contact us',
    cadence,
    highlighted: Boolean(apiPlan.is_featured),
    badge: apiPlan.is_featured ? 'Most popular' : undefined,
    features: Array.isArray(apiPlan.features) ? apiPlan.features : [],
    ctaLabel:
      typeof apiPlan.cta_label === 'string' && apiPlan.cta_label.trim()
        ? apiPlan.cta_label.trim()
        : 'Get a quote',
    ctaUrl,
  };
}
