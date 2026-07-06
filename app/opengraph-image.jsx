// Generates the Open Graph preview image (1200×630 PNG) at build time.

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';
import { SITE_NAME } from '@/lib/site';

export const dynamic = 'force-static';
export const alt = `${SITE_NAME} — the all-in-one electronic health record platform for modern clinics`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const logoPath = join(process.cwd(), 'public/assets/logos/main_logo.png');
  const logoData = await readFile(logoPath);
  const logoSrc = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: 'linear-gradient(135deg, #0a1f44 0%, #00337c 55%, #0057a8 100%)',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt={SITE_NAME} height={72} style={{ height: 72, objectFit: 'contain' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', fontSize: 62, fontWeight: 700, lineHeight: 1.15, maxWidth: 980 }}>
            The all-in-one EHR platform that runs your entire clinic
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#8ec4ff', maxWidth: 940, lineHeight: 1.4 }}>
            Scheduling · Clinical charting · e-Prescribing · Labs · Billing &amp; RCM · Patient portal
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16 }}>
          {['HIPAA Compliant', 'Cloud-based', 'Multi-clinic'].map((label) => (
            <div
              key={label}
              style={{
                display: 'flex',
                padding: '10px 22px',
                borderRadius: 999,
                border: '2px solid rgba(255,255,255,0.45)',
                fontSize: 24,
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
