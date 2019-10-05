# vue-wheel - 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.org/heavenly-zy/vue-wheel-demo.svg?branch=master)](https://www.travis-ci.org/heavenly-zy/vue-wheel-demo)

[![NPM](https://nodei.co/npm/vue-wheel-demo.png)](https://npmjs.org/package/vue-wheel-demo)

## 介绍

这是我在学习 Vue.js 过程中写的一个 UI 框架，希望对你有帮助

由于水平有限，目前只包含 Button、Input、Grid、Layout、Toast、Tabs、Popover、Collapse 这 8 个简单轮子

外观借鉴了一些成熟 UI 框架（如 Framework7、Element UI 和 Ant Design）的外观

## 开始使用

1. 添加 CSS 样式

使用本框架前，请在 CSS 中开启 border-box

``` css
*,*::before,*::after{box-sizing:border-box}
```

IE 8 及以上浏览器都支持此样式

2. 安装 vue-wheel

``` sh
npm install vue-wheel-demo
```

3. 引入 vue-wheel

``` js
import { Button } from "vue-wheel-demo";
import 'vue-wheel-demo/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button
    }
}
```

## 文档

[官网](https://heavenly-zy.github.io/vue-wheel-demo/)

## 提问

## 联系方式

## 贡献代码

