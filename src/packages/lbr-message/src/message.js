
import Vue from 'vue'
import lbrMessage from './lbr-message'
function Message(param={}) {
  Vue.component(lbrMessage.name, lbrMessage)
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
      param.callBack && (typeof param.callBack === 'function') && param.callBack()
    }, 300)
  }, duration)
  return newMessage
}

export default Message;
