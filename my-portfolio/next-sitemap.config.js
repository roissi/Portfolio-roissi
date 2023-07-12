/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://portfolio-roissi.vercel.app',
  generateRobotsTxt: true,
  include: [
    "/",
    "/fr",
    "/en"],
  exclude: [
    '/components/*',
    '/en/components/*',
    '/components/mobile/*',
  ],
  sitemapSize: 5000,
};