// ---------------------------------------------------------------------------
// Central site configuration. Update SITE_URL before going live — it drives
// canonical URLs, the sitemap, robots.txt, Open Graph tags and structured data.
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://venqora.aventrexdigital.com';

export const SITE_NAME = 'Venqora EHR';

export const BRAND_NAME = 'Venqora';

export const LOGO_HORIZONTAL = '/assets/logos/main_logo.png';
export const LOGO_STACKED = '/assets/logos/logo.png';
export const LOGO_FOOTER = '/assets/logos/venqora_footer.png';
export const LOGO_FAVICON = '/assets/logos/favicon.png';

export const TAGLINE =
  'The all-in-one EHR platform for modern clinics — scheduling, charting, e-prescribing, billing and patient engagement in one place.';

export const CONTACT_EMAIL = 'sales@venqoraehr.com';

export const DEFAULT_DESCRIPTION =
  'Venqora EHR is a cloud-based electronic health record platform with smart scheduling, clinical documentation, e-prescribing, labs, revenue cycle management (RCM), a patient portal and HIPAA-compliant security — built for clinics, medical centers and multi-location practices.';

export const NAV_LINKS = [
  { href: '/features/', label: 'Features' },
  { href: '/why-venqora/', label: 'Why Venqora' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/blog/', label: 'Resources' },
  { href: '/faq/', label: 'FAQ' },
];

export const FOOTER_LINKS = {
  Product: [
    { href: '/features/', label: 'All features' },
    // Per-module feature pages — uncomment when screenshots are ready (FEATURE_DETAIL_PAGES_ENABLED in lib/features.js)
    // { href: '/features/scheduling-front-desk/', label: 'Scheduling & front desk' },
    // { href: '/features/clinical-documentation/', label: 'Clinical documentation' },
    // { href: '/features/e-prescribing/', label: 'e-Prescribing' },
    // { href: '/features/billing-rcm/', label: 'Billing & RCM' },
    // { href: '/features/patient-portal/', label: 'Patient portal' },
    // { href: '/features/security-compliance/', label: 'Security & HIPAA' },
  ],
  Company: [
    { href: '/about/', label: 'About us' },
    { href: '/why-venqora/', label: 'Why Venqora' },
    { href: '/pricing/', label: 'Pricing' },
    { href: '/contact/', label: 'Contact & demo' },
  ],
  Resources: [
    { href: '/blog/', label: 'Blog' },
    { href: '/faq/', label: 'FAQ' },
  ],
  Legal: [
    { href: '/privacy/', label: 'Privacy policy' },
    { href: '/terms/', label: 'Terms of service' },
  ],
};

export function absoluteUrl(path = '/') {
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
