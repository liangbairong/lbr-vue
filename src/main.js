import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import '@/assets/css/public.scss'
Vue.config.productionTip = false

// 导入组件库
import lbr from '@/packages/index'
// 注册组件库
Vue.use(lbr)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')