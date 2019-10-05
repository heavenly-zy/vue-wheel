---
title: Popover - 弹出层
---

# 弹出层

popover 组件，支持 click 和 hover 两种触发方式

## 引入 Popover 组件
```js
import { Popover, Button } from "vue-wheel-demo";

export default {
  components: {
    "g-popover": Popover,
    "g-button": Button
  }
};
```

## click 触发

::: tip 提示
popover 默认触发方式为 click
:::

- 预览

   <ClientOnly>
   <popover-demo-1></popover-demo-1>
   </ClientOnly>

- 使用示例

```html
<g-popover>
  <g-button>上方弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
<g-popover position="bottom">
  <g-button>下方弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
<g-popover position="left">
  <g-button>左边弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
<g-popover position="right">
  <g-button>右边弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
```

## hover 触发

- 预览

   <ClientOnly>
   <popover-demo-2></popover-demo-2>
   </ClientOnly>

- 使用示例

```html
<g-popover trigger="hover">
  <g-button>上方弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
<g-popover position="bottom" trigger="hover">
  <g-button>下方弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
<g-popover position="left" trigger="hover">
  <g-button>左边弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
<g-popover position="right" trigger="hover">
  <g-button>右边弹出</g-button>
  <template slot="content">弹出内容</template>
</g-popover>
```
::: tip 提示
popover的弹出内容同样支持 HTML
:::