import { renderOgImage, ogSize, ogContentType } from '@/lib/og-image';

export const dynamic = 'force-static';
export const alt = 'Venqora EHR pricing — per-provider EHR plans for clinics';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: 'Pricing',
    title: 'Simple per-provider EHR plans',
    subtitle: 'Scheduling, charting, e-prescribing, billing & RCM — one platform.',
  });
}
