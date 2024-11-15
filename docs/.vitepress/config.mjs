import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "小兔鲜儿-小程序端",
  description: "A VitePress Site",
  head: [['link', { rel: 'icon', href: '/rabbit-h5-doc/favicon.ico' }]], 
  base: '/rabbit-h5-doc/', // 使用相对路径，线上部署非根路径时需要修改
  ignoreDeadLinks: true, // 忽略死链接
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目笔记', link: '/01-项目起步' },
      { text: '前端笔记', link: 'http://150.158.175.93:8268/doc/' }
    ],
    logo: '/image.png',
    search: {
      provider: 'local', // 可以开启本地搜索
    },

    sidebar: [
      {
        text: '开发指南',
        items: [
          { text: '项目起步', link: '/01-项目起步' },
          { text: '首页模块', link: '/02-首页模块' },
          { text: '推荐模块', link: '/03-推荐模块' },
          { text: '分类模块', link: '/04-分类模块' },
          { text: '详情模块', link: '/05-详情模块' },
          { text: '登录模块', link: '/06-登录模块' },
          { text: '用户模块', link: '/07-用户模块' },
          { text: '地址模块', link: '/08-地址模块' },
          { text: 'SKU模块', link: '/09-SKU模块' },
          { text: '购物车模块', link: '/10-购物车模块' },
          { text: '订单模块', link: '/11-订单模块' },
          { text: '项目打包', link: '/12-项目打包' },
          { text: 'Examples', link: '/vue-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ihong-he/rabbit-h5-doc' }
    ],
    footer: {
      // message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-2025 Panda工作室'
    },
  }
})
