module.exports = {
  locales: {
    '/': {
      title: 'Ziqiang Li',
      lang: 'en-US',
    }
  },
  // head: [
  // ],
  // plugins: [
  // ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog/' },
    ],
    repo: 'liziwl.github.io',
    docsRepo: 'liziwl.github.io',
    // editLinkText: '一起完善这本手册！',
    docsDir: 'docs',
    // repoLabel: '在Github上查看',
    editLinks: false,
    smoothScroll: true,
    // sidebarDepth: 2,
    sidebar: false,
    search: false,
    nextLinks: false,
    // 默认值是 true 。设置为 false 来禁用所有页面的 上一篇 链接
    prevLinks: false
  }
}
