---
title: 'v-tap'
---
# 移动端点击事件
该组件只能全局引用

## 使用方法
```vue
<button v-tap="{methods:accountBind,index:'1',data:20}" class="sub_btn bindbtn" >确 定</button>

```
```js
  accountBind(params) {
      console.log(params.index);  //'1'
      console.log(params.data);  //20
  }
```

