const path = require('path');

module.exports = (themeConfig, ctx) => {
  console.log(themeConfig, ctx);
  return {
    plugins: [
      [
        '@vuepress/blog',
        {
          /* options */
          // 目录配置 https://vuepress-plugin-blog.billyyyyy3320.com/config/#directories
          directories: [
            {
              id: 'js',
              dirname: 'js',
              path: '/post/',
              itemPermalink: '/post/:year/:month-:day/:slug',
            },
            {
              id: 'css',
              dirname: 'css',
              path: '/post/',
              itemPermalink: '/post/:year/:month-:day/:slug',
            }
            // {
            //   id: 'post',
            //   dirname: '_posts',
            //   path: '/',
            //   itemPermalink: '/post/:year/:month-:day/:slug',
            //   pagination: {
            //     lengthPerPage: 5
            //   }
            // },
            // {
            //   id: 'post2',
            //   dirname: './',
            //   path: '/pp/',
            //   itemPermalink: '/:year/:month/:day/:slug',
            //   pagination: {
            //     lengthPerPage: 2
            //   }
            // }
          ],
          // frontmatters 配置 https://vuepress-plugin-blog.billyyyyy3320.com/config/#pagination
          frontmatters: [
            {
              id: 'tag',
              keys: ['tag', 'tags'],
              path: '/tags/',
              layout: 'Tags',
              frontmatter: { title: 'Tag' },
              itemlayout: 'Tag'
            }
          ]
        }
      ]
    ]
  };
};
