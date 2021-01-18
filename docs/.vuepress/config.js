module.exports = {
  locales: {
    '/': {
      title: 'Ziqiang Li',
      lang: 'en-US',
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-172734433-1' // UA-00000000-0
      }
    ],
    [
      'sitemap', {
        hostname: 'https://liziwl.cn'
      }
    ]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Ins', link: 'https://www.instagram.com/lizi_arthur/' },
    ],
    repo: 'https://github.com/liziwl',

    editLinks: false,
    smoothScroll: true,
    sidebar: false,
    search: false,
    nextLinks: false,
    prevLinks: false // 默认值是 true
  }
}
