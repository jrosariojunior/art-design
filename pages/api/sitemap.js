export default function handler(req, res) {
  const baseUrl = 'https://josecriativos.com';

  const pages = [
    { url: '/', changefreq: 'weekly', priority: '1.0' },
    { url: '/#servicos', changefreq: 'monthly', priority: '0.8' },
    { url: '/#portfolio', changefreq: 'weekly', priority: '0.8' },
    { url: '/#contato', changefreq: 'monthly', priority: '0.7' },
  ];

  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  pages.forEach((page) => {
    xml += '  <url>\n';
    xml += `    <loc>${baseUrl}${page.url}</loc>\n`;
    xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += '  </url>\n';
  });

  xml += '</urlset>';

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.write(xml);
  res.end();
}
