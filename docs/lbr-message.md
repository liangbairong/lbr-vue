---
title: 'lbr-message'
---
# 消息提示

调用方法
```js
this.$lbrMessage({title:"普通消息"}).then(()=>{
  console.log("Sdd")
});
```

## 属性
| 名字     | 类型   | 默认值 | 说明     |
| -------- | ------ | ------ | -------- |
| title    | string |        | 提示内容 |
| duration | number | 3000ms | 显示时间 |
