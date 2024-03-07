const siteConfig = require('./site-config');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: siteConfig.url,
  generateRobotsTxt: true,
priority: 0.7,
    changefreq: 'daily',

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
