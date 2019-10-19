
import '@/assets/css/public.scss'
import {createElement, timeout} from './utils'
import vTap from './v-tap/v-tap'
import LbrButton from './lbr-button'
import LbrLoadMove from './lbr-load-move'
import LbrMessage from './lbr-message'
import LbrLoading from './lbr-loading'
// 存储组件列表
const components = [
  LbrButton,
  LbrLoadMove,
  LbrMessage,
  LbrLoading
]

const install = function (Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))


  messageOffer(Vue);
  loadingOffer(Vue);

}
// 消息提示
function messageOffer(Vue) {
  function msg(param, callBack) {
    let msg;
    let duration = param.duration || 3000;
    if (typeof param.title === 'string') {
      msg = param.title
    } else if (param.title instanceof Object) {
      msg = param.title || ''
      if (param.duration) {
        duration = param.duration
      }
    }
    let VueMessage = Vue.extend({
      render(h) {
        let props = {
          text: msg,
          show: this.show
        }
        return h('lbr-message', { props })
      },
      data() {
        return {
          show: false
        }
      }
    })
    let newMessage = new VueMessage()
    let vm = newMessage.$mount()
    let el = vm.$el
    document.body.appendChild(el) // 把生成的提示的dom插入body中
    vm.show = true
    let t1 = setTimeout(() => {
      clearTimeout(t1)
      vm.show = false  //隐藏提示组件，此时会有300ms的动画效果，等动画效果过了再从body中移除dom
      let t2 = setTimeout(() => {
        clearTimeout(t2)
        document.body.removeChild(el) //从body中移除dom
        newMessage.$destroy()
        vm = null // 设置为null，好让js垃圾回收算法回收，释放内存

        callBack && (typeof callBack === 'function') && callBack()
        // 如果有回调函数就执行，没有就不执行，用&&操作符，
        // 只有&&左边 的代码为true才执行&&右边的代码，避免用面条代码：
        // if(true){
        //   ... 
        //   if(true){
        //   ...
        //   }
        // }
      }, 300)
    }, duration)
  }
  // 挂载到vue原型上，暴露四个方法
  Vue.prototype.$lbrMessage = (param) => {
    return new Promise((succ) => {
      if (!param.title) return
      msg(param, () => {
        succ();
      })
    })
  }

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
      vm = new Vue(Loading).$mount('[von-loading]')
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
export { vTap, LbrButton, LbrLoadMove }
export default {
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  LbrButton,
  LbrLoadMove,
}
