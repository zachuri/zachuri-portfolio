module.exports = {
  siteUrl: 'https://zachuri.com',
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', disallow: '/contact' },
      { userAgent: '*', allow: '/' }
    ]
  },
  exclude: ['/contact']
  // ...other options
};
