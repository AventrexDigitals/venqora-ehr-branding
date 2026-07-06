import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

let logoDataUriPromise;

async function getLogoDataUri() {
  if (!logoDataUriPromise) {
    logoDataUriPromise = readFile(join(process.cwd(), 'public/assets/logos/main_logo.png')).then(
      (buf) => `data:image/png;base64,${buf.toString('base64')}`,
    );
  }
  return logoDataUriPromise;
}

/**
 * @param {{ eyebrow?: string; title: string; subtitle?: string; brand?: string }} opts
 */
export async function renderOgImage({ eyebrow, title, subtitle, brand = 'Venqora EHR' }) {
  const logoSrc = await getLogoDataUri();

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
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={logoSrc} alt="" height={64} style={{ height: 64, objectFit: 'contain' }} />
          <span style={{ fontSize: 22, color: '#8ec4ff', fontWeight: 600 }}>{brand}</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          {eyebrow ? (
            <span style={{ fontSize: 24, fontWeight: 600, color: '#8ec4ff', letterSpacing: '0.08em' }}>
              {eyebrow.toUpperCase()}
            </span>
          ) : null}
          <div style={{ display: 'flex', fontSize: 56, fontWeight: 700, lineHeight: 1.12, maxWidth: 1000 }}>
            {title}
          </div>
          {subtitle ? (
            <div style={{ display: 'flex', fontSize: 26, color: '#c5ddf7', maxWidth: 940, lineHeight: 1.35 }}>
              {subtitle}
            </div>
          ) : null}
        </div>

        <div style={{ display: 'flex', fontSize: 22, color: 'rgba(255,255,255,0.75)' }}>
          venqora.aventrexdigital.com
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
