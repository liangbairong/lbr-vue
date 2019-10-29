import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const Home = r => require.ensure([], () => r(require('@/pages/Home')), 'modle_1')
const Button = r => require.ensure([], () => r(require('@/pages/Button')), 'modle_1')
const Srcoll = r => require.ensure([], () => r(require('@/pages/Srcoll')), 'modle_1')
export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        rank: 1,
        title: '首页'
      }
    },
    {
      path: '/button',
      name: 'button',
      component: Button,
      meta: {
        rank: 2,
        title: '按钮组件'
      }
    },
    {
      path: '/srcoll',
      name: 'srcoll',
      component: Srcoll,
      meta: {
        rank: 2,
        title: '下拉刷新'
      }
    }
  ],


})


Vue.mixin({
  beforeRouteLeave: function (to, from, next) {
    //此处判断是如果返回上一层，
    if (from && from.meta.rank && to.meta.rank && from.meta.rank > to.meta.rank) {
      if (this.$vnode && this.$vnode.data.keepAlive) {
        if (this.$vnode.parent && this.$vnode.parent.componentInstance && this.$vnode.parent.componentInstance.cache) {
          if (this.$vnode.componentOptions) {
            var key = this.$vnode.key == null ?
              this.$vnode.componentOptions.Ctor.cid + (this.$vnode.componentOptions.tag ? `::${this.$vnode.componentOptions.tag}` : '') :
              this.$vnode.key;
            var cache = this.$vnode.parent.componentInstance.cache;
            var keys = this.$vnode.parent.componentInstance.keys;
            if (cache[key]) {
              if (keys.length) {
                var index = keys.indexOf(key);
                if (index > -1) {
                  keys.splice(index, 1);
                }
              }
              delete cache[key];
            }
          }
        }
      }
      this.$destroy();
    }
    next();
  },
});