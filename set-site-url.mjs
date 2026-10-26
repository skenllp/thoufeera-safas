// Usage: node set-site-url.mjs https://your-domain.com
// Replaces the %SITE_URL% token in index.html (canonical, og:url, og:image, twitter:image).
import { readFileSync, writeFileSync } from 'node:fs';
const url = (process.argv[2] || '').replace(/\/+$/, '');
if (!/^https?:\/\/[^\s/]+/.test(url)) { console.error('Usage: node set-site-url.mjs https://your-domain.com'); process.exit(1); }
const f = new URL('./index.html', import.meta.url);
writeFileSync(f, readFileSync(f, 'utf8').split('%SITE_URL%').join(url));
console.log('Site URL set to', url);
