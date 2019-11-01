module.exports = {
  title: 'lbr-vue-ui文档',  // 设置网站标题
  description : 'Adroi',
  themeConfig : {
    nav : [
        { text: 'github', link: '/apiword' },
    ],
    sidebar: { 
        '/' : [
          {
            title: '前言',
            children: [
              '/pages/directions'
            ]
          },
          {
            title: '组件',
            children: [
              '/pages/components/lbr-button',
              '/pages/components/lbr-message',
              '/pages/components/lbr-loading',
              '/pages/components/lbr-srcoll',

            ]
          },
          {
            title: 'vue 指令',
            children: [
              '/pages/instruct/resetInput',
              '/pages/instruct/v-tap'
            ]
          },

        ]
    },
    sidebarDepth : 2
  }
}