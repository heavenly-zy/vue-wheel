---
title: Layout - 默认布局
---

# 默认布局

这里提供简单的默认布局和有侧边栏的布局

## 简单布局

- 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

- 使用方法
```html
<g-layout style="color: white; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-content style="height: 100px; background:deepskyblue;">
    content
  </g-content>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```

## 简单布局 + 内侧边栏

- 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

- 使用方法
``` html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-header style="height: 50px; background:lightskyblue;">
    header
  </g-header>
  <g-layout>
    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
      sider
    </g-sider>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
  </g-layout>
  <g-footer style="height: 50px; background:lightskyblue;">
    footer
  </g-footer>
</g-layout>
```

## 简单布局 + 外侧边栏

- 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

- 使用方法

```html
<g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
  <g-sider style=" background:#ddd; width:200px; color: black;">
    sider
  </g-sider>
  <g-layout>
    <g-header style="height: 50px; background:lightskyblue;">
      header
    </g-header>
    <g-content style="height: 100px; background:deepskyblue;">
      content
    </g-content>
    <g-footer style="height: 50px; background:lightskyblue;">
      footer
    </g-footer>
  </g-layout>
</g-layout>
```