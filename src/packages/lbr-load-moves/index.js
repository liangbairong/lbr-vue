// 导入组件，组件必须声明 name
import lbrSrcoll from './src/lbr-srcoll'

// 为组件提供 install 安装方法，供按需引入
lbrSrcoll.install = function (Vue) {
    Vue.component(lbrSrcoll.name, lbrSrcoll)
}

// 默认导出组件
export default lbrSrcoll