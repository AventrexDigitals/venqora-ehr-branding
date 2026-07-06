import { renderOgImage, ogSize, ogContentType } from '@/lib/og-image';

export const dynamic = 'force-static';
export const alt = 'Venqora EHR blog — EHR guides and resources for clinics';
export const size = ogSize;
export const contentType = ogContentType;

export default async function Image() {
  return renderOgImage({
    eyebrow: 'Resources',
    title: 'EHR guides & resources',
    subtitle: 'Practical guides on electronic health records, billing, and compliance.',
  });
}
