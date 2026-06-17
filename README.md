# Talal Widatalla — Personal Website

A single-page personal/academic website. This is a **finished, static site** — plain HTML, CSS, and vanilla JS with **no build step**. The goal is to deploy it to **GitHub Pages**, replacing the existing site.

## What's in this folder

| File | Purpose |
|------|---------|
| `index.html` | The entire website — markup, inline styles, and a small vanilla `<script>` at the bottom (hover states, scroll-reveal, active-nav highlight). No framework, no bundler. |
| `headshot.jpg` | Hero portrait. Referenced relatively as `headshot.jpg`. |
| `cv_updated.pdf` | CV, linked from the nav "CV ↗" button and opened in a new tab. Referenced relatively as `cv_updated.pdf`. |

Fonts (Archivo, Hanken Grotesk, IBM Plex Mono) load from Google Fonts via a `<link>` in `<head>` — no local font files needed. The favicon is an inline SVG data-URI (no file).

**Do not change the design.** This site is approved as-is. Your job is deployment only — unless the owner asks for content/style edits.

## Deploy to GitHub Pages

The owner wants this to **replace an existing GitHub Pages site**. Two common setups — confirm which repo the current site lives in first (`git remote -v`, or check the repo's Settings → Pages).

### Option A — User site (`<username>.github.io`)
This serves at the root domain `https://<username>.github.io`.

1. Clone the existing repo (the one named `<username>.github.io`).
2. Remove the old site files (keep `.git`, and any `CNAME` file — see custom domain below).
3. Copy the three files in this folder (`index.html`, `headshot.jpg`, `cv_updated.pdf`) into the repo root.
4. Commit and push to the default branch (`main`).
   ```bash
   git add -A
   git commit -m "Replace site with new personal website"
   git push origin main
   ```
5. In the repo: **Settings → Pages** → Source = "Deploy from a branch", Branch = `main`, folder = `/ (root)`. Save.
6. Wait ~1 min; visit `https://<username>.github.io`.

### Option B — Project site / new repo
If they'd rather host from a project repo (served at `https://<username>.github.io/<repo>/`), create/choose a repo, put these files in the root (or a `/docs` folder), and point **Settings → Pages** at that branch/folder. Note: with a project path the relative asset links still work since everything is relative.

> Recommended: **Option A** so the URL is clean (`talalwidatalla.github.io`, and easy to map to a custom domain).

## Custom domain (optional — `talalwidatalla.com`)

The owner plans to buy `talalwidatalla.com`. To wire it up after purchase:

1. Add a file named `CNAME` (no extension) to the repo root containing one line:
   ```
   talalwidatalla.com
   ```
2. At the domain registrar's DNS, add:
   - Four `A` records for the apex `@` → GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - One `CNAME` record for `www` → `<username>.github.io`
3. In **Settings → Pages → Custom domain**, enter `talalwidatalla.com`, save, and tick **Enforce HTTPS** once the cert provisions (can take up to ~24h).

## Local preview

It's plain static files — open `index.html` directly, or:
```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Notes / gotchas

- **Asset filenames are referenced exactly** as `headshot.jpg` and `cv_updated.pdf`. If you rename either, update the matching reference in `index.html` (search for `headshot.jpg` and `cv_updated.pdf`).
- The "CV ↗" link points at `cv_updated.pdf`. Swap that file to update the CV — no markup change needed if the name stays the same.
- Contact email is `talal.widatalla@gmail.com` (appears twice: a chip in the hero and the button in the Contact section).
- Accent color is `#a06a34`, set once as `--accent` on the page wrapper `<div>`; other theme colors (`--ink`, `--muted`, `--paper`, `--surface`, `--hair`) are defined alongside it. To re-theme, change those CSS variables in the wrapper's inline `style`.
- No analytics, cookies, or external JS beyond Google Fonts.
