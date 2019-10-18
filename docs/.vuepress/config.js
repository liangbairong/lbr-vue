module.exports = {
  title: 'Adroi媒体API 接口文档',  // 设置网站标题
  description : 'Adroi',
  // base : '/v1/adroi-h5/adroiapi/',
  themeConfig : {
    nav : [
        { text: '接口定义', link: '/apiword' },
        { text: '接口字段定义', link: '/api' },
        { text: '附录：错误码', link: '/error' }
    ],
    sidebar: { 
        '/' : [
          '/index',
          {
            title: '侧边栏下拉框的标题1',
            children: [
              '/apiword',
              '/aaa'
            ]
          },

        ]
    },
    sidebarDepth : 2
  }
}