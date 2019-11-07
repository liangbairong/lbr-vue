---
title: 'lbr-srcoll'
---
# 滚动组件，上拉刷新和下拉加载更多


## 调用方法
```html
<lbr-srcoll @refresh="refresh">
      <ul>
        <li v-for="(item,index) in 20"  :key="index">aaa</li>
      </ul>
</lbr-srcoll>

```

## 属性
| 名字     | 类型   | 默认值 | 说明     |
| -------- | ------ | ------ | -------- |


## 方法
| 方法名     | 类型   |  说明     |
| -------- | ------ | -------- |
| refresh    | Function | 刷新回调 |
| hide    | Function | 隐藏 |

