// const fs = require('fs');
const path = require('path');

module.exports = {
  host: '0.0.0.0',
  port: '3004',
  base: '/',
  title: 'test',
  description: 'test',
  head: [
    [
      'meta',
      {
        'http-equiv': 'X-UA-Compatible',
        content: 'ie=edge'
      }
    ],
    [
      'meta',
      {
        name: 'icon Shortcut Bookmark',
        href: '/favicon.ico'
      }
    ]
  ],
  // theme: 'vuepress-theme-cola',
  theme: path.resolve(__dirname, '../../theme'),
  themeConfig: {
    testKey: 1
  },
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  }
  // plugins: ['@vuepress/nprogress', '@vuepress/back-to-top', '@vuepress/medium-zoom']
};
