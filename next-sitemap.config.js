const siteConfig = require('./site-config');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true, 

  autoLastmod: true,sitemapSize: 7000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};