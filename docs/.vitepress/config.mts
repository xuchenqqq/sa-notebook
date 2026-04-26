import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: '系统分析师学习笔记',
  description: '软考系统分析师知识点汇总与复习指南',

  // github pages 需要设置 base
  base: '/sa-notebook/',

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '学习指南', link: '/study-guide' },
      { text: '知识地图', link: '/knowledge-map' }
    ],

    sidebar: [
      {
        text: '快速导航',
        items: [
          { text: '首页', link: '/' },
          { text: '学习指南', link: '/study-guide' },
          { text: '知识地图', link: '/knowledge-map' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
