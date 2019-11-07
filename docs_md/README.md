# 安装说明
```
npm i lbr-vue-ui
cnpm i lbr-vue-ui
```
# 使用
## 全局注册
```js
// 导入组件库
import lbr from 'lbr-vue-ui'
import 'lbr-vue-ui/lib/lbr-vue-ui.css'
// 注册组件库
Vue.use(lbr)
```

## 按需引用
```vue
<lbr-button>按钮</lbr-button>
```
```js
// 导入组件库
import { lbrButton } from 'lbr-vue-ui'
export default {
  components:{
    'lbr-button': lbrButton
  },
};
```
# 注意事项
该组件库样式基于px2rem，需在项目配置pex2rem。


# Dome
https://903529487.github.io/lbr-vue/dist/#/


 <!-- <iframe src="https://903529487.github.io/lbr-vue/dist/#/"></iframe> -->