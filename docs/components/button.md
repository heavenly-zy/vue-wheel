---
title: Button - 按钮
---

# 按钮

提供单个按钮和组合形式的按钮，同时也可为按钮设置图标，调节图标位置。

## 单个按钮

- 预览

   <ClientOnly>
   <button-demos></button-demos>
   </ClientOnly>

- 使用方法
```html
<g-button>默认</g-button>
<g-button icon="settings">设置</g-button>
<g-button :loading="true">加载中/g-button>
<g-button disabled>禁用</g-button>
```
```html
<g-button icon="settings" :loading="loading" @click="loading = !loading">状态切换</g-button>
```
```js
data:{
  loading: false
}
```

## 按钮组合

- 预览

   <ClientOnly>
   <button-group-demos></button-group-demos>
   </ClientOnly>

- 使用方法
``` html
<g-button-group>
  <g-button icon="left">上一页</g-button>
  <g-button>更多</g-button>
  <g-button icon="right" icon-position="right">下一页</g-button>
</g-button-group>
```