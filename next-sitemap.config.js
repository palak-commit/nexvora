/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://nexvora.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 5000,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'Googlebot', allow: '/' },
    ],
    additionalSitemaps: [
      'https://nexvora.vercel.app/sitemap.xml',
    ],
  },
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/best-ai-tools-for-students'),
    await config.transform(config, '/best-ai-tools-for-designers'),
    await config.transform(config, '/best-ai-tools-for-developers'),
    await config.transform(config, '/best-ai-tools-for-youtubers'),
    await config.transform(config, '/best-ai-image-generators'),
    await config.transform(config, '/best-ai-coding-tools'),
    await config.transform(config, '/best-free-ai-tools'),
    await config.transform(config, '/best-ai-productivity-tools'),
    await config.transform(config, '/best-ai-video-tools'),
    await config.transform(config, '/best-ai-logo-makers'),
    await config.transform(config, '/best-chatgpt-alternatives'),
    await config.transform(config, '/about'),
    await config.transform(config, '/contact'),
    await config.transform(config, '/privacy-policy'),
    await config.transform(config, '/disclaimer'),
  ],
}
