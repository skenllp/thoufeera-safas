# Thoufeera & Muhammad Safas — Wedding Invitation

Plain HTML/CSS/JS static site. Deploy the folder as-is on Vercel, Netlify, GitHub Pages, etc.

## Before sharing the link
`index.html` uses the token `%SITE_URL%` for the canonical URL and social-sharing image URLs
(link previews require absolute URLs). After you know the live address, run:

    node set-site-url.mjs https://your-domain.com

(or find/replace `%SITE_URL%` in `index.html`). Nothing else needs changing.

## Where things live
- `index.html` – content
- `assets/css/style.css`, `assets/js/main.js`
- `assets/video/opening.mp4` + `assets/img/poster.jpg` – curtain opening
- `assets/img/hero.png`, `assets/img/og-image.jpg` – artwork (names are part of the image)
- `assets/audio/music.mp3` – background music
