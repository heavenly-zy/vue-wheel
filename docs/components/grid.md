---
title: Grid - 网格布局
---

# 网格布局

网格布局就是把一个 div 分成 N 个部分（N = 12,16,24...），每个部分无空隙或者有空隙。

::: warning 注意
使用该组件之前，请在 css 中开启 border-box
:::
```css
* {box-sizing: border-box;}
```

## 24 格网格

- 预览

<ClientOnly>
<grid-demo-1></grid-demo-1>
</ClientOnly>

- 使用方法

```html
<g-row>
  <g-col span="8">
    <div>8</div>
  </g-col>
  <g-col span="8">
    <div>8</div>
  </g-col>
  <g-col span="8">
    <div>8</div>
  </g-col>
</g-row>

<g-row>
  <g-col span="6">
    <div>6</div>
  </g-col>
  <g-col span="6">
    <div>6</div>
  </g-col>
  <g-col span="6">
    <div>6</div>
  </g-col>
  <g-col span="6">
    <div>6</div>
  </g-col>
</g-row>

<g-row>
  <g-col span="4">
    <div>4</div>
  </g-col>
  <g-col span="4">
    <div>4</div>
  </g-col>
  <g-col span="4">
    <div>4</div>
  </g-col>
  <g-col span="4">
    <div>4</div>
  </g-col>
  <g-col span="4">
    <div>4</div>
  </g-col>
  <g-col span="4">
    <div>4</div>
  </g-col>
</g-row>

<g-row>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
</g-row>
```

## 设置 gutter 

::: tip 提示
设置一行内相邻网格之间的距离相等，都为gutter
:::

- 预览

<ClientOnly>
<grid-demo-2></grid-demo-2>
</ClientOnly>

- 使用方法
``` html
<g-row gutter="10">
  <g-col span="8">
    <div>8</div>
  </g-col>
  <g-col span="8">
    <div>8</div>
  </g-col>
  <g-col span="8">
    <div>8</div>
  </g-col>
</g-row>

<g-row gutter="10">
  <g-col span="6">
    <div>6</div>
  </g-col>
  <g-col span="6">
    <div>6</div>
  </g-col>
  <g-col span="6">
    <div>6</div>
  </g-col>
  <g-col span="6">
    <div>6</div>
  </g-col>
</g-row>
```

## 设置 offset

::: tip 提示
设置一行内任意两个相邻网格之间的距离
:::

- 预览

<ClientOnly>
<grid-demo-3></grid-demo-3>
</ClientOnly>

- 使用方法
``` html
<g-row>
  <g-col span="8">
    <div>8</div>
  </g-col>
  <g-col span="8" offset="8">
    <div>8</div>
  </g-col>
</g-row>

<g-row>
  <g-col span="6" offset="6">
    <div>6</div>
  </g-col>
  <g-col span="6" offset="6">
    <div>6</div>
  </g-col>
</g-row>

<g-row>
  <g-col span="4">
    <div>4</div>
  </g-col>
  <g-col span="4" offset="4">
    <div>4</div>
  </g-col>
  <g-col span="4" offset="8">
    <div>4</div>
  </g-col>
</g-row>

<g-row>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div>2</div>
  </g-col>
  <g-col span="2">
    <div>2</div>
  </g-col>
  <g-col span="2" offset="2">
    <div>2</div>
  </g-col>
</g-row>
```
