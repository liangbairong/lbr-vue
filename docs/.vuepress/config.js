module.exports = {
  title: 'lbr-vue-ui文档',  // 设置网站标题
  description : 'Adroi',
  themeConfig : {
    nav : [
        { text: '接口定义', link: '/apiword' },
        { text: '接口字段定义', link: '/api' },
        { text: '附录：错误码', link: '/error' }
    ],
    sidebar: { 
        '/' : [
          {
            title: '前言',
            children: [
              '/lbr-message',
              '/aaa'
            ]
          },
          {
            title: '组件',
            children: [
              '/lbr-message',
              '/aaa'
            ]
          },

        ]
    },
    sidebarDepth : 2
  }
}