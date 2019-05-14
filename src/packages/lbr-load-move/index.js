// 导入组件，组件必须声明 name
import lbrLoadMove from './src/lbr-load-move'

// 为组件提供 install 安装方法，供按需引入
lbrLoadMove.install = function (Vue) {
    Vue.component(lbrLoadMove.name, lbrLoadMove)
}

// 默认导出组件
export default lbrLoadMove