---
title: 'lbr-swipe'
---
# 轮播图

## 调用方法
```html
    <h2>自动播放</h2>
    <lbr-swipe :auto="4000" @change="handleChange" style="height:200px">
      <lbr-swipe-item>1</lbr-swipe-item>
      <lbr-swipe-item>2</lbr-swipe-item>
      <lbr-swipe-item>3</lbr-swipe-item>
    </lbr-swipe>
    <h2>关闭自动播放</h2>
    <lbr-swipe :auto="0">
      <lbr-swipe-item>1</lbr-swipe-item>
      <lbr-swipe-item>2</lbr-swipe-item>
      <lbr-swipe-item>3</lbr-swipe-item>
    </lbr-swipe>
```

## 属性
| 名字     | 类型   | 默认值 | 说明     |
| -------- | ------ | ------ | -------- |
| auto    | number |    4000    | 自动切换时间，为0禁止自动切换 |
| speed | number | 3000ms | 动画持时（毫秒） |
| defaultIndex | number | 0 | 初始显示的轮播图的索引 |
| continuous | Boolean | true | 是否可以循环播放 |
| showIndicators | Boolean | true | 是否显示 indicators |
| prevent | Boolean | false | 是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能 |
| stopPropagation | Boolean | false | 是否在 touchstart 事件触发时阻止冒泡。 |

