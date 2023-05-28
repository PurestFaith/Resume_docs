module.exports = {
  title: 'PurestFaith',
  description: '',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'PurestFaith',
      description: ''
    }
  },
  themeConfig: {
    logo: '/assets/img/logo.webp',
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文档简介',
        link: '/guide/'
      },
      {
        text: '个人信息',
        link: '/dev/message'
      }
    ],
    sidebar: {
      '/dev/': ['message', 'resume']
    },
    sidebarDepth: 2,
    activeHeaderLinks: false,
    lastUpdated: '上次更新',
    repo: 'tlyboy/starter',
    docsRepo: 'tlyboy/starter',
    docsDir: 'vuepress/docs',
    docsBranch: 'main',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    smoothScroll: true
  },
  plugins: ['@vuepress/plugin-back-to-top', '@vuepress/plugin-medium-zoom'],
  markdown: {
    lineNumbers: true
  }
}
