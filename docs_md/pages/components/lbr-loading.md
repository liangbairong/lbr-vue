---
title: 'lbr-loading'
---
# loading加载
该组件只能全局引用

## 调用方法
```js
// 显示loading
this.$lbrLoading.show('正在加载中呢');   
// 隐藏loading
this.$lbrLoading.hide();

//可根据window进行访问
window.$lbrLoading.show();
window.$lbrLoading.hide();

```

## 属性
| 名字     | 类型   | 默认值 | 说明     |
| -------- | ------ | ------ | -------- |
| title    | string |    加载中    | 提示文字 |

## 方法
| 方法名     | 类型   |  说明     |
| -------- | ------ | -------- |
| show    | Function | 显示 |
| hide    | Function | 隐藏 |

