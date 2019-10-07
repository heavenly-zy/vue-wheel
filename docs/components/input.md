---
title: Input - 输入框
---

# 输入框

提供各种常用的输入框用法以及支持v-model双向绑定用法。

## 引入 Input 组件

```js
import { Input } from "vue-wheel-demo";

export default {
  components: {
    "g-input": Input
  }
};
```

## 简单用法

- 预览

   <ClientOnly>
   <input-demos></input-demos>
   </ClientOnly>

- 使用示例

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

- 使用示例
``` html
<g-input v-model="value"></g-input>
<div>value: {{value}}</div>
```
```js
data:{
  value: "默认值"
}
```