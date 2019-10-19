// 导入组件，组件必须声明 name
import lbrLoading from './src/lbr-loading'
lbrLoading.install = function (Vue) {
    Vue.component(lbrLoading.name, lbrLoading)
}

export default lbrLoading