import type { APIRoute } from 'astro';

const siteUrl = 'https://pluta-liquitool.net';

const pages = [
  { url: '', changefreq: 'weekly', priority: 1.0 },
  { url: '/ueber-uns', changefreq: 'monthly', priority: 0.8 },
  { url: '/impressum', changefreq: 'yearly', priority: 0.3 },
];

export const GET: APIRoute = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
