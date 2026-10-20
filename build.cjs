const fs = require('node:fs');
const raw = process.env.SITE_URL || process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
if (!raw) throw new Error('Endereço ausente. Na Vercel, habilite as variáveis de ambiente do sistema. Para testar localmente, defina SITE_URL.');
const url = new URL(raw.includes('://') ? raw : `https://${raw}`);
if (!['http:', 'https:'].includes(url.protocol)) throw new Error('Endereço inválido.');
fs.mkdirSync('dist', { recursive: true });
const html = fs.readFileSync('index.html', 'utf8').replaceAll('__SITE_URL__', url.origin);
fs.writeFileSync('dist/index.html', html);
fs.copyFileSync('convite.jpg', 'dist/convite.jpg');
console.log('Página e imagem de prévia preparadas.');

fs.copyFileSync('previa-convite-v2.jpg', 'dist/previa-convite-v2.jpg');
fs.copyFileSync('dist/index.html', 'dist/convite-v2.html');

fs.copyFileSync('dist/index.html', 'dist/convite-v3.html');

fs.copyFileSync('dist/index.html', 'dist/convite-v4.html');
