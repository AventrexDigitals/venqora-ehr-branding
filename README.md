# Venqora EHR — Marketing Website

Professional, SEO-optimized marketing site for the Venqora EHR platform.
Built with Next.js 15 (App Router) + Tailwind CSS 4, **statically exported** for
Hostinger and any static host.

## Quick start (local dev)

Run **Aventrex Digitals** (admin + API) on port 3000, then the Venqora site:

```bash
# Terminal 1 — Aventrex Digitals (admin + blog API)
cd aventrex-system/aventrex-digitals && npm run dev

# Terminal 2 — Venqora marketing site
cd EhrSystem/aventrex-ehr
npm install
cp .env.local.example .env.local   # points blog API at http://localhost:3000
npm run dev                        # http://localhost:3001 (or next free port)
```

Open **http://localhost:3001/blog/** — posts load live from the Digitals API.

**Admin posts must use:** Scope → **Product**, Product → **Venqora EHR**, Status → **Published**.

Without `.env.local`, dev falls back to static posts in `lib/posts.js` (no admin sync).

## Deploy to Hostinger (no GitHub)

**Full guide:** [HOSTINGER.md](HOSTINGER.md)

```bash
cp .env.production.example .env.production   # set AVENTREX_API_URL
npm run build:hostinger                      # outputs to /out
npm run package:hostinger                    # optional zip for File Manager
```

Upload everything inside `/out` to Hostinger **`public_html`** via File Manager
or FTP. Rebuild and re-upload when you publish new blog posts in Aventrex admin.

## Blog / Resources (Aventrex admin)

Articles on `/blog/` are managed in the **Aventrex Digitals admin** (Product scope
→ Venqora EHR). The live site fetches them from the API in the browser (no rebuild
needed after publishing).

| Env var | Purpose |
|---------|---------|
| `NEXT_PUBLIC_AVENTREX_API_URL` | Aventrex Digitals origin (required for live blogs) |
| `NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG` | Product slug (`venqora-ehr`) |

Local dev: set these in `.env.local`. Hostinger build: set in `.env.production` (see `build-hostinger.mjs`).

## Where things live

| Path | Purpose |
|------|---------|
| `lib/site.js` | Domain, name, nav, footer links |
| `lib/aventrex-blog.js` | Fetches blogs at build time |
| `lib/posts.js` | Fallback articles (offline dev) |
| `scripts/build-hostinger.mjs` | Production static build |
| `public/.htaccess` | Apache rules for Hostinger |
| `HOSTINGER.md` | Step-by-step Hostinger upload |

## Before launch

1. Set `SITE_URL` in `lib/site.js`
2. Configure `.env.production` with live `AVENTREX_API_URL`
3. Add images under `public/assets/`
4. Wire contact form in `components/ContactForm.jsx`
5. Submit sitemap in Google Search Console
