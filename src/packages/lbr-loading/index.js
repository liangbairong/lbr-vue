import Vue from 'vue'
import lbrLoading from './src/lbr-loading'
const Indicator = Vue.extend(lbrLoading);
var instance;
export  default  {
  open(options = {}) {
     instance = new Indicator({
      el: document.createElement('div')
    }); 
    instance.title= options.title || '加载中'
    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.show = true;
    });
  },

  close() {
    if (instance) {
      instance.show = false;
      Vue.nextTick(()=>{
        document.body.removeChild(instance.$el) 
        instance=null;
      })
    }
  }
};
