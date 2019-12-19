
import '@/assets/css/public.scss'
import resetInput from './resetInput/index'
import vTap from './v-tap/v-tap'
import LbrButton from './lbr-button'
import LbrSrcoll from './lbr-load-moves'
import LbrMessage from './lbr-message'
import LbrLoading from './lbr-loading'
import lbrDatepicker from './lbr-datepicker'
import LbrSwipe from './lbr-swipe'
import LbrSwipeItem from './lbr-swipe-item'

import LbrForm from './lbr-form'
import LbrFormItem from './lbr-form-item'
import LbrInput from './lbr-input'
// import picker from './picker'


// 存储组件列表
const components = [
  LbrButton,
  LbrSrcoll,
  lbrDatepicker,
  LbrSwipe,
  LbrSwipeItem,
  LbrForm,
  LbrFormItem,
  LbrInput,

]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$LbrMessage = LbrMessage
  Vue.prototype.$LbrLoading = LbrLoading
  Vue.use(resetInput);
}
// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export { vTap, LbrMessage,  LbrLoading, LbrButton, LbrSrcoll, lbrDatepicker, LbrSwipe, LbrSwipeItem, LbrForm,
  LbrFormItem,
  LbrInput }
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  LbrButton,
  LbrSrcoll,
  lbrDatepicker,
  LbrMessage,
  LbrSwipe,
  LbrSwipeItem,
  LbrLoading,

  LbrForm,
  LbrFormItem,
  LbrInput
}
