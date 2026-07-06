/** EHR buyer review directories — set profile URLs in .env.local when listings are live. */

export const EHR_REVIEW_PLATFORMS = [
  {
    id: 'g2',
    name: 'G2',
    href: process.env.NEXT_PUBLIC_G2_URL || '',
    color: '#FF492c',
  },
  {
    id: 'capterra',
    name: 'Capterra',
    href: process.env.NEXT_PUBLIC_CAPTERRA_URL || '',
    color: '#016CA2',
  },
  {
    id: 'software-advice',
    name: 'Software Advice',
    href: process.env.NEXT_PUBLIC_SOFTWARE_ADVICE_URL || '',
    color: '#00A4E4',
  },
  {
    id: 'getapp',
    name: 'GetApp',
    href: process.env.NEXT_PUBLIC_GETAPP_URL || '',
    color: '#2DB84B',
  },
];
