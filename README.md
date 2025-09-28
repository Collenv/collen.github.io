# Collen — publish, analytics, and SEO guide

## 1. Create the repo
- **Label:** Repo name  
  **Value:** collen-site
- **Label:** Visibility  
  **Value:** Public

## 2. Add files
- Create folders: `css/`, `js/`, `assets/`.
- Add the files in this bundle: `index.html`, `css/styles.css`, `js/main.js`, `assets/favicon-dark.svg`, `assets/favicon-light.svg`, `assets/logo-banner.svg`, `README.md`.
- Commit changes.

## 3. Enable GitHub Pages
- Repo → Settings → Pages → **Source:** Deploy from branch → `main` → `/ (root)`.
- Save. Wait 1–2 minutes.
- Your site URL will look like `https://your-username.github.io/collen-site/`.

## 4. Products — real download links
- **Option A (recommended):** GitHub Releases  
  1. Go to Releases → Draft a new release.  
  2. **Tag:** `v1.0.0` (match your product version).  
  3. Upload zip files (e.g., `ffmpeg-mobile-toolkit.zip`).  
  4. Publish; copy the asset URL and paste into `index.html`.
- **Option B:** Google Drive  
  1. Upload zip.  
  2. Set sharing: “Anyone with link can view.”  
  3. Copy the share link and paste into `index.html`.

## 5. Analytics (privacy-friendly)
- **Plausible (no cookies):**  
  - Create an account, add your site domain (the GitHub Pages URL).  
  - Replace `data-domain="your-username.github.io"` in `index.html` and **uncomment** the script.  
- **GoatCounter (no cookies):**  
  - Create an account; you get a site code like `YOURCODE`.  
  - Replace `data-goatcounter="https://YOURCODE.goatcounter.com/count"` and **uncomment** the script.

> Both are optional; the site works fully without analytics. Your local device-only view badge is enabled by default and does not track users.

## 6. SEO checklist
- **Title/description:** Already set in `<head>`.  
- **Canonical:** Update `href` to your final Pages URL.  
- **Open Graph/Twitter:** Provide a `assets/social-card.png` (1200×630).  
- **JSON-LD:** Uses Person schema; update `url` once Pages is live.  
- **Keywords in content:** Include your target phrases in headings and blurbs.

## 7. Edit on phone
- Colors: change `--accent` and `--bg` in `css/styles.css`.  
- Text: edit each `<section>` in `index.html`.  
- WhatsApp and email are already wired for: `+27 72 039 0167` and `tshakhanivhulendacolen@gmail.com`.

## 8. Download ZIP (optional)
- After publishing, open the repo → Code tab → **Code** button → **Download ZIP**.  
- Or use the GitHub app’s “Share as ZIP” option if available.
