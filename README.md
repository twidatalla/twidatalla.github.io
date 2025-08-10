# Talal Widatalla — Research Website

Static site built from CV. Minimal, accessible, and fast.

## Local preview
Just open `index.html` in a browser.

## Deploy (GitHub Pages)
1. Create a new repository (e.g., `talal-site`) on GitHub.
2. Upload everything in this folder to the repository root.
3. In GitHub: **Settings → Pages** → Source: **Deploy from a branch**; Branch: **main**; Folder: **/** (root).
4. Wait ~30–60 seconds for your site to publish. You'll get a URL like `https://<your-username>.github.io/talal-site/`.

### Custom domain
- Add your domain in **Settings → Pages**.
- Create a `CNAME` record for `www` pointing to `<your-username>.github.io` (or to the project URL if you keep it as a project site).
- If you have an apex domain, follow GitHub’s A/ALIAS recommendations.
- Commit a `CNAME` file at repo root containing just your domain (e.g., `www.talal.bio`).

## Notes
- Replace `assets/cv/Talal_Widatalla_CV.tex` with a PDF when ready and change the link in `index.html` if desired.
- To add links for publications, paste URLs into the list items; a small script will append `[link]` automatically.
