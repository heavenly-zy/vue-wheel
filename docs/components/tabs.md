---
title: Tabs - 标签页
---

# 标签页

tabs 组件，提供分页功能

## 引入 Tabs 组件
```js
import { Tabs, TabsHead, TabsBody, TabsItem, TabsPanel } from "vue-wheel-demo";

export default {
  components: {
    "g-tabs": Tabs,
    "g-tabs-head": TabsHead,
    "g-tabs-body": TabsBody,
    "g-tabs-item": TabsItem,
    "g-tabs-panel": TabsPanel
  }
};
```

## 示例

- 预览

   <ClientOnly>
   <tabs-demos></tabs-demos>
   </ClientOnly>

- 使用示例

```html
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">P1</g-tabs-item>
    <g-tabs-item name="2">P2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-panel name="1">content 1</g-tabs-panel>
    <g-tabs-panel name="2">content 2</g-tabs-panel>
  </g-tabs-body>
</g-tabs>
```

同时你需要指定默认选中的内容

```js
data() {
  return {
    selected: "1"
  };
}
```