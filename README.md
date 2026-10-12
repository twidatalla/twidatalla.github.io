# Talal Widatalla — Personal Website

A single-page personal/academic website, live at **https://twidatalla.github.io**. Plain HTML, CSS, and vanilla JS with **no build step**, served by GitHub Pages from the `main` branch of `twidatalla/twidatalla.github.io` (root folder).

## What's in this folder

| File | Purpose |
|------|---------|
| `index.html` | The entire website — markup, inline styles, SEO metadata (Open Graph/Twitter tags, Person JSON-LD), and a small vanilla `<script>` at the bottom (hover states, scroll-reveal, active-nav highlight). No framework, no bundler. |
| `headshot.jpg` | Hero portrait (also used as the social-preview image). Referenced relatively as `headshot.jpg`. |
| `cv_updated.pdf` | CV, linked from the nav "CV ↗" button and opened in a new tab. Referenced relatively as `cv_updated.pdf`. |
| `robots.txt`, `sitemap.xml` | Search-engine crawl hints. |

Fonts (Archivo, Hanken Grotesk, IBM Plex Mono) load from Google Fonts via a `<link>` in `<head>` — no local font files needed. The favicon is an inline SVG data-URI (no file).

**Keep the design as-is** unless the owner asks for content/style edits.

## Updating the site

Edit the files, then commit and push to `main`:
```bash
git add -A
git commit -m "Describe the change"
git push origin main
```
GitHub Pages rebuilds in about a minute (check **Actions** or **Settings → Pages**). Browsers may cache the old page for up to 10 minutes — hard-refresh to see changes.

## Custom domain (optional — `talalwidatalla.com`)

The owner plans to buy `talalwidatalla.com`. To wire it up after purchase:

1. Add a file named `CNAME` (no extension) to the repo root containing one line:
   ```
   talalwidatalla.com
   ```
2. At the domain registrar's DNS, add:
   - Four `A` records for the apex `@` → GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `twidatalla.github.io`
3. In **Settings → Pages → Custom domain**, enter `talalwidatalla.com`, save, and tick **Enforce HTTPS** once the cert provisions (can take up to ~24h).

## Local preview

It's plain static files — open `index.html` directly, or:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Notes / gotchas

- **Asset filenames are referenced exactly** as `headshot.jpg` and `cv_updated.pdf`. If you rename either, update the matching reference in `index.html` (search for `headshot.jpg` and `cv_updated.pdf`).
- The "CV ↗" link points at `cv_updated.pdf`. Swap that file to update the CV — no markup change needed if the name stays the same.
- Contact email is `talal.widatalla@gmail.com` (appears twice: the 'Email' chip in the hero and the one-line Contact section below it).
- Accent color is `#a06a34`, set once as `--accent` on the page wrapper `<div>`; other theme colors (`--ink`, `--muted`, `--paper`, `--surface`, `--hair`) are defined alongside it. To re-theme, change those CSS variables in the wrapper's inline `style`.
- No analytics, cookies, or external JS beyond Google Fonts.
