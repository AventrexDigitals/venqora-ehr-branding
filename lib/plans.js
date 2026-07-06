// ---------------------------------------------------------------------------
// Market & pricing plan — single source of truth for tier names, features,
// and pricing copy across the homepage, pricing page, and structured data.
// ---------------------------------------------------------------------------

export const PLANS = [
  {
    id: 'essentials',
    name: 'Essentials',
    blurb: 'For small practices getting started with a complete EHR.',
    price: 'Contact us',
    cadence: 'per provider / month',
    highlighted: false,
    features: [
      'Scheduling & online patient self-booking',
      'Clinical documentation & patient charts',
      'e-Prescribing & refill management',
      'Patient portal with payments',
      'Email notifications',
      'Role-based access & audit logs',
      'Standard support',
    ],
  },
  {
    id: 'professional',
    name: 'Professional',
    blurb: 'The full platform for established clinics — including billing & RCM.',
    price: 'Contact us',
    cadence: 'per provider / month',
    highlighted: true,
    badge: 'Most popular',
    features: [
      'Everything in Essentials',
      'Full billing & RCM workspace (claims, ERA, denials)',
      'Insurance eligibility verification',
      'Labs & diagnostics with HL7 interface',
      'Real-time patient chat & live token board',
      'Integrated fax',
      'Priority support & training',
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    blurb: 'For multi-location groups and medical centers.',
    price: 'Custom',
    cadence: 'volume pricing',
    highlighted: false,
    features: [
      'Everything in Professional',
      'Unlimited clinics & locations',
      'Break-glass emergency access workflows',
      'Custom integrations & data migration',
      'Dedicated success manager',
      'SLA-backed uptime & support',
    ],
  },
];

export const PRICING_FAQS = [
  {
    q: 'How is Venqora EHR priced?',
    a: 'Plans are priced per provider per month, based on practice size and the modules you need. There are no percent-of-collections billing contracts and no surprise per-interface fees — contact sales for a quote tailored to your practice.',
  },
  {
    q: 'Is there a free demo or trial?',
    a: 'Yes. Every evaluation starts with a free personalized demo using workflows like yours, and qualified practices can get sandbox access to explore the platform hands-on.',
  },
  {
    q: 'Are implementation, migration and training extra?',
    a: 'Standard onboarding — clinic configuration, data migration and role-based training — is included with annual plans. Complex multi-system migrations are scoped during your quote.',
  },
  {
    q: 'Can I add providers or locations later?',
    a: 'Yes. Plans scale with you: add providers any time, and move to Enterprise when you add locations. Multi-clinic support is native to the platform.',
  },
];

export const PLAN_HIGHLIGHTS = [
  { label: 'Per-provider pricing', detail: 'No percent-of-collections contracts' },
  { label: 'All core modules', detail: 'Scheduling through billing in one platform' },
  { label: 'Free demo & migration', detail: 'Onboarding included on annual plans' },
];
