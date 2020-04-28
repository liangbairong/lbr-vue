---
title: 'lbr-loading'
---
# loading加载

## Dome
<iframe src="https://903529487.github.io/lbr-vue/dist/#/pop" width="350" height="500" frameborder="no"></iframe>

### 调用方法
```html
<template>
  <lbr-button @click="loading">loading</lbr-button>
</template>
```
```js
impoxt {LbrLoading} from 'lbr-vue-ui'
export default {
  name: "pop",
  data() {
    return {};
  },
  methods: {
    loading() {
      LbrLoading.open({title:'loading'});
      setTimeout(() => {
        LbrLoading.close();
      }, 1000);
    },
  }
};
```

### 属性
| 名字     | 类型   | 默认值 | 说明     |
| -------- | ------ | ------ | -------- |
| title    | string |    加载中    | 提示文字 |

### 方法
| 方法名     | 类型   |  说明     |
| -------- | ------ | -------- |
| open    | Function | 显示 |
| close    | Function | 关闭 |



