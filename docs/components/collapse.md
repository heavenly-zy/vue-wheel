---
title: Collapse - 手风琴
---

# 手风琴

二级导航菜单

## 引入 Collapse 组件
```js
import { Collapse, CollapseItem } from "vue-wheel-demo";

export default {
  components: {
    "g-collapse": Collapse,
    "g-collapse-item": CollapseItem
  }
};
```

## 普通用法

- 预览

<ClientOnly>
<collapse-demo-1></collapse-demo-1>
</ClientOnly>

- 使用示例

```html
<g-collapse :selected.sync="selectedTab">
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3<br/></g-collapse-item>
</g-collapse>

```
```js {2}
data: {
  selectedTab: ['1', '2', '3']
}
```

::: tip 提示
内容默认全部展开，可以选中多个 item 展开，每个 item 不互斥
:::

## single 模式

- 预览

<ClientOnly>
<collapse-demo-2></collapse-demo-2>
</ClientOnly>

- 使用示例

```html
<g-collapse :selected.sync="selectedTab" single>
  <g-collapse-item title="标题1" name="1">内容1</g-collapse-item>
  <g-collapse-item title="标题2" name="2">内容2<br>内容2</g-collapse-item>
  <g-collapse-item title="标题3" name="3">内容3</g-collapse-item>
</g-collapse>
```
```js {2}
data: {
  selectedTab: ['2']
}
```

::: tip 提示
在 single 模式下，只能有一个 item 展开，每个 item 是互斥的
:::