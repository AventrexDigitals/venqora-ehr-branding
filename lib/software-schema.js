import { PLANS as STATIC_PLANS } from '@/lib/plans';
import { SITE_NAME, SITE_URL, DEFAULT_DESCRIPTION, absoluteUrl } from '@/lib/site';
import { FEATURES } from '@/lib/features';

/** Accurate SoftwareApplication schema — quote-based pricing, no fake $0 price. */
export function softwareApplicationJsonLd(options = {}) {
  const { pageUrl = SITE_URL, plans = STATIC_PLANS } = options;

  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: SITE_NAME,
    applicationCategory: 'HealthApplication',
    applicationSubCategory: 'Electronic health record (EHR) software',
    operatingSystem: 'Web browser (cloud-based SaaS)',
    url: pageUrl,
    description: DEFAULT_DESCRIPTION,
    publisher: { '@id': `${SITE_URL}/#organization` },
    offers: {
      '@type': 'AggregateOffer',
      offerCount: plans.length,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      url: absoluteUrl('/pricing/'),
      description:
        'Per-provider monthly subscription. Essentials, Professional, and Enterprise plans — contact sales for a personalized quote.',
      offers: plans.map((plan) => ({
        '@type': 'Offer',
        name: `${SITE_NAME} — ${plan.name}`,
        description: plan.blurb,
        url: absoluteUrl('/pricing/'),
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
        category: 'Subscription',
      })),
    },
    featureList: FEATURES.map((f) => f.name).join(', '),
    screenshot: absoluteUrl('/assets/screenshots/hero-dashboard.png'),
  };
}
