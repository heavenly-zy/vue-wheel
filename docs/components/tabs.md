---
title: Tabs - 标签页
---

# 标签页

tabs 组件，提供分页功能

## 示例

- 预览

   <ClientOnly>
   <tabs-demos></tabs-demos>
   </ClientOnly>

- 使用方法

```html
<g-tabs :selected="selected">
  <g-tabs-head>
    <g-tabs-item name="1">P1</g-tabs-item>
    <g-tabs-item name="2">P2</g-tabs-item>
  </g-tabs-head>
  <g-tabs-body>
    <g-tabs-pane name="1">content 1</g-tabs-pane>
    <g-tabs-pane name="2">content 2</g-tabs-pane>
  </g-tabs-body>
</g-tabs>
```