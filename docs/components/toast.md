---
title: Toast - 提示框
---

# 提示框

Toast - 弹出提示框，您可以自定义提示框的弹出位置、关闭按钮、自动关闭时间等属性

## 引入 Toast 组件

```js
import { Toast, plugin, Button } from "vue-wheel-demo";
import Vue from "vue";
Vue.use(plugin);

export default {
  components: {
    "g-toast": Toast,
    "g-button": Button
  }
};
```

## 自定义弹出位置

- 预览

   <ClientOnly>
   <toast-demo-1></toast-demo-1>
   </ClientOnly>

- 使用示例
```html
<g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
<g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

## 自定义关闭按钮

- 预览

   <ClientOnly>
   <toast-demo-2></toast-demo-2>
   </ClientOnly>

- 使用示例
``` html
<g-button @click="onClickButton">自定义关闭按钮</g-button>
```
```js
methods: {
  onClickButton() {
    this.$toast("弹出提示", {
      closeButton: {
        text: "xxx",
        callback: () => {
          console.log("xxx");
        }
      }
    });
  }
}
```

## 支持 HTML

::: tip 提示
仅有弹出提示支持 HTML，按钮不支持。
:::

- 预览

   <ClientOnly>
   <toast-demo-3></toast-demo-3>
   </ClientOnly>

- 使用示例

```html
<g-button @click="onClickButton">支持 HTML</g-button>
```
```js
methods: {
  onClickButton() {
    this.$toast('<span style="color:green">我是绿色的</span>', {
      enableHTML: true
    });
  }
}
```

## 自定义是否自动关闭

- 预览

   <ClientOnly>
   <toast-demo-4></toast-demo-4>
   </ClientOnly>

- 使用示例

```html
<g-button @click="onClickButton1">3秒后自动关闭</g-button>
```
```js
methods: {
  onClickButton1() {
    this.$toast("3秒后自动关闭", {
      autoClose: 3
    });
  }
}
```

::: tip 提示
若未设置 autoClose 或设置 autoClose:false 则默认5秒后会自动关闭
:::