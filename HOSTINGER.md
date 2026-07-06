# Deploy Venqora EHR website to Hostinger (no GitHub required)

**Live URL:** [https://venqora.aventrexdigital.com/](https://venqora.aventrexdigital.com/)

Hostinger shared hosting serves **static files** only. You build the site on your
computer, then upload the `/out` folder. No Node.js server or GitHub connection
needed on Hostinger.

If you see Hostinger’s “You Are All Set to Go!” page, the subdomain is ready but
**no site files are uploaded yet** — follow the upload steps below.

## One-time setup on your computer

```bash
cd EhrSystem/aventrex-ehr
npm install
cp .env.production.example .env.production
```

Edit `.env.production`:

```
AVENTREX_API_URL=https://aventrexdigital.com
NEXT_PUBLIC_AVENTREX_API_URL=https://aventrexdigital.com
AVENTREX_PRODUCT_SLUG=venqora-ehr
NEXT_PUBLIC_AVENTREX_PRODUCT_SLUG=venqora-ehr
```

Blog posts and **pricing plans** are fetched **live from the Aventrex API** when visitors open `/blog/` or `/pricing/` (no rebuild needed after admin changes). The build still pre-renders known slugs for SEO; new posts are served via `/blog/article/` + Apache rewrite in `.htaccess`.

**Admin checklist** when creating Venqora posts:

- **Scope:** Product (not Aventrex Digital)
- **Product:** Venqora EHR
- **Status:** Published

**Pricing plans** — edit **Admin → Products → Venqora EHR → Pricing plans** on Aventrex Digital. Changes appear on Venqora `/pricing/` within ~1 minute (live API fetch; no Venqora rebuild).

`lib/site.js` is already set to `https://venqora.aventrexdigital.com` for SEO,
sitemap, and Open Graph tags.

## Build the site

```bash
npm run build:hostinger
```

This creates `EhrSystem/aventrex-ehr/out/` with your full website.

Optional — zip for easier upload:

```bash
npm run package:hostinger
```

Creates `out/venqora-site.zip`.

## Upload to Hostinger (subdomain)

For **`venqora.aventrexdigital.com`**, upload to the **subdomain’s** document root —
not the main `aventrexdigital.com` `public_html` unless you intentionally share one folder.

### Find the correct folder in hPanel

1. Log in to [Hostinger hPanel](https://hpanel.hostinger.com)
2. **Websites** → **aventrexdigital.com** → **Subdomains**
3. Confirm `venqora` exists → open its **File Manager** or note the folder path

Common paths:

| Layout | Upload folder |
|--------|----------------|
| Subdomain with own folder | `domains/venqora.aventrexdigital.com/public_html` |
| Some plans | `public_html/venqora` |

Open the folder that shows the default Hostinger `index.html` (“You Are All Set to Go!”).

### Upload files

1. **Delete** the default Hostinger `index.html` (and any other placeholder files)
2. Upload **everything inside** local `/out` — not the `out` folder itself:
   - `index.html`, `blog/`, `_next/`, `assets/`, `.htaccess`, etc. must sit directly in that folder
3. Or upload `venqora-site.zip` → **Extract** in place

### FTP (FileZilla)

Connect to Hostinger FTP and navigate to the subdomain folder above, then upload all contents of `/out`.

## SSL

Enable free SSL for `venqora.aventrexdigital.com` in hPanel → **SSL** (if not already active).

## Verify after upload

- [https://venqora.aventrexdigital.com/](https://venqora.aventrexdigital.com/) — Venqora home (not Hostinger default page)
- [https://venqora.aventrexdigital.com/blog/](https://venqora.aventrexdigital.com/blog/) — Resources
- [https://venqora.aventrexdigital.com/sitemap.xml](https://venqora.aventrexdigital.com/sitemap.xml)
- [https://venqora.aventrexdigital.com/robots.txt](https://venqora.aventrexdigital.com/robots.txt)

## Updating the site (new blog posts, copy changes)

1. On your computer: `npm run build:hostinger`
2. Re-upload the contents of `/out` to the subdomain folder (overwrite files)

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Still shows “You Are All Set to Go!” | Files uploaded to wrong folder — use subdomain `public_html`, not main domain |
| Blog shows old/fallback articles | Set `AVENTREX_API_URL` in `.env.production` before build |
| 404 on `/blog/slug/` | Rebuild after publishing new posts in Aventrex admin |
| Styles missing | Ensure entire `_next/` folder uploaded |
| Wrong canonical URLs | Rebuild after changing `SITE_URL` in `lib/site.js` |

## Later: custom domain (venqoraehr.com)

When you move to `www.venqoraehr.com`, update `SITE_URL` in `lib/site.js`, rebuild,
upload to that domain’s `public_html`, and update the Venqora product `live_url` in
Aventrex admin.
