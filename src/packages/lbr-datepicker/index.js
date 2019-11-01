
// 导入组件，组件必须声明 name
import lbrDatePicker from './src/index'

// 为组件提供 install 安装方法，供按需引入
lbrDatePicker.install = function (Vue) {
  Vue.component(lbrDatePicker.name, lbrDatePicker)
}

// 默认导出组件
export default lbrDatePicker
