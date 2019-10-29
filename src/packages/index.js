
import '@/assets/css/public.scss'
import Vue from 'vue'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
import './resetInput'
import {createElement, timeout} from './utils'
import vTap from './v-tap/v-tap'
import LbrButton from './lbr-button'
import LbrSrcoll from './lbr-load-moves'
import LbrMessage from './lbr-message'
import LbrLoading from './lbr-loading'
import lbrDatepicker from './lbr-datepicker'



// 存储组件列表
const components = [
  LbrButton,
  LbrSrcoll,
  LbrMessage,
  LbrLoading,
  lbrDatepicker
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  Vue.prototype.$LbrMessage=LbrMessage
  // messageOffer(Vue);
  loadingOffer(Vue);

}

function loadingOffer(Vue){
  function VonicLoading() {
    let vm = undefined
  
    function showToast(tips, duration) {
      if (vm && vm.getState() > 0) {
        vm.update({
          tips: tips
        })
  
        setTimeout(() => {
          vm.hide()
        }, duration || 1500)
        return
      }
  
      createElement('von-loading')
      vm = new Vue(LbrLoading).$mount('[von-loading]')
      vm.show({
        tips: tips
      })
  
      return timeout(duration || 1500).then(() => {
        return vm.hide()
      })
    }
  
    function showLoading(tips ="加载中") {
      if (vm && vm.getState() > 0) {
        vm.update({
          tips: tips,
          showSpinner: true
        })
        return
      }
  
      createElement('von-loading')
      vm = new Vue(LbrLoading).$mount('[von-loading]')
      vm.show({
        tips: tips,
        showSpinner: true
      })
    }
  
    function hide() {
      if (vm) vm.hide()
    }
  
    function update(options) {
      vm.update(options)
    }
  
    return {
      showToast,
      showLoading,
      hide,
      update
    }
  }
  
  let loading = new VonicLoading()
  
  window.$lbrLoading = {
    show: loading.showLoading,
    hide: loading.hide
  }
  Vue.prototype.$lbrLoading = window.$lbrLoading
}


// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export { vTap,LbrMessage, LbrButton, LbrSrcoll,lbrDatepicker }
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  LbrButton,
  LbrSrcoll,
  lbrDatepicker,
  LbrMessage
}
