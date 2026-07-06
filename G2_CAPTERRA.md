# Venqora EHR — G2 & Capterra listings

Review listings on G2, Capterra, Software Advice, and GetApp are **critical for EHR buyer traffic**. Most clinic buyers compare vendors on these sites before requesting a demo.

## What’s already on the site

- **ReviewedOn section** on the Venqora homepage (`components/ReviewedOnSection.jsx`)
- Profile links activate when you set env vars (see below)
- **SoftwareApplication schema** on home and pricing with accurate quote-based plans

## Step 1 — Create listings (manual, ~1–2 hours each)

### G2
1. Go to [G2 Vendor Portal](https://sell.g2.com/)
2. Claim or create **Venqora EHR** as a product
3. Category: **Electronic Medical Records (EMR)** or **Medical Practice Management**
4. Add logo, screenshots, pricing (“Contact vendor”), and product description
5. Copy your public product URL → set `NEXT_PUBLIC_G2_URL` in `.env.production`

### Capterra (owned by Gartner — syncs to Software Advice & GetApp)
1. Go to [Capterra Vendor Signup](https://www.capterra.com/vendors/)
2. List **Venqora EHR** under Healthcare / EMR
3. Complete profile: features checklist, pricing model (per-provider subscription), screenshots
4. Copy profile URL → `NEXT_PUBLIC_CAPTERRA_URL`

### Software Advice & GetApp
- Often created automatically when you list on **Capterra**
- Or set separate URLs:
  - `NEXT_PUBLIC_SOFTWARE_ADVICE_URL`
  - `NEXT_PUBLIC_GETAPP_URL`

## Step 2 — Wire URLs into Venqora

In `EhrSystem/aventrex-ehr/.env.production` (and `.env.local` for dev):

```env
NEXT_PUBLIC_G2_URL=https://www.g2.com/products/venqora-ehr
NEXT_PUBLIC_CAPTERRA_URL=https://www.capterra.com/p/XXXXXX/Venqora-EHR/
NEXT_PUBLIC_SOFTWARE_ADVICE_URL=https://www.softwareadvice.com/medical/venqora-ehr-profile/
NEXT_PUBLIC_GETAPP_URL=https://www.getapp.com/healthcare-pharmaceuticals-software/a/venqora-ehr/
```

Rebuild and redeploy:

```bash
npm run build:hostinger
```

## Step 3 — Get reviews

- Ask 3–5 early clinic customers for honest reviews (G2 + Capterra)
- Respond to every review within 48 hours
- Link to review profiles from sales emails

## Step 4 — Google Search Console

```env
GOOGLE_SITE_VERIFICATION=paste-meta-content-from-search-console
BING_SITE_VERIFICATION=paste-bing-meta-content
```

Add to `.env.production`, rebuild, verify in [Google Search Console](https://search.google.com/search-console).

## Checklist

- [ ] G2 product profile live
- [ ] Capterra profile live
- [ ] Env URLs set and site redeployed
- [ ] At least 3 verified reviews on G2 or Capterra
- [ ] Search Console verified for `venqora.aventrexdigital.com`
- [ ] Sitemap submitted in Search Console
