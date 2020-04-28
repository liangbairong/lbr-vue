---
title: 'lbr-message'
---
# 消息提示
该组件只能全局引用
## Dome
<iframe src="https://903529487.github.io/lbr-vue/dist/#/pop" width="350" height="500" frameborder="no"></iframe>
## 调用方法
```js
this.$lbrMessage({title:"普通消息"}).then(()=>{
  console.log("提示消失回调")
});
```

## 属性
| 名字     | 类型   | 默认值 | 说明     |
| -------- | ------ | ------ | -------- |
| title    | string |        | 提示内容 |
| duration | number | 3000ms | 显示时间 |

