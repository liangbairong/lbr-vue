---
title: 'lbr-srcoll'
---
# 滚动组件，上拉刷新和下拉加载更多

## Dome
<iframe src="https://903529487.github.io/lbr-vue/dist/#/srcoll" width="350" height="500" frameborder="no"></iframe>

## 调用方法
```html
<lbr-srcoll @refresh="refresh">
      <ul>
        <li v-for="(item,index) in 20"  :key="index">aaa</li>
      </ul>
</lbr-srcoll>

```


## 方法
| 方法名     | 类型   |  说明     |
| -------- | ------ | -------- |
| refresh    | Function | 刷新回调 |
| loadMove    | Function | 加载更多 |

