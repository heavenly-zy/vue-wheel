---
title: Input - 输入框
---

# 输入框

提供单个按钮和组合形式的按钮，同时也可为按钮设置图标，调节图标位置。

## 简单用法

- 预览

   <ClientOnly>
   <input-demos></input-demos>
   </ClientOnly>

- 使用方法

```html
<g-input value="普通"></g-input>
<g-input value="禁用" :disabled="true"></g-input>
<g-input value="只读" :readonly="true"></g-input>
<g-input value="错误" error="错误信息"></g-input>
```

## 支持双向绑定

- 预览

   <ClientOnly>
   <input-model-demos></input-model-demos>
   </ClientOnly>

- 使用方法
``` html
<g-input v-model="value"></g-input>
<div>value: {{value}}</div>
```
```js
data:{
  loading: "默认值"
}
```