
// 导入组件，组件必须声明 name
import lbrButton from './src/lbr-button'

// 为组件提供 install 安装方法，供按需引入
lbrButton.install = function (Vue) {
  Vue.component(lbrButton.name, lbrButton)
}

// 默认导出组件
export default lbrButton
