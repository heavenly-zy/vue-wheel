# ClariS - 一个 Vue UI 组件

[![Build Status](https://www.travis-ci.org/heavenly-zy/vue-wheel-demo.svg?branch=master)](https://www.travis-ci.org/heavenly-zy/vue-wheel-demo)

## 介绍

## 开始使用

1. 安装

使用本框架前，请在 CSS 中开启 border-box

``` 
*,*::before,*::after{box-sizing:border-box}
```

IE 8 及以上浏览器都支持此样式

另外，你还需要设置默认颜色等变量（后续会改为 SCSS 变量）

``` 
:root {
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    }
```

IE 15 及以上浏览器都支持此样式

2. 安装 wheel

``` 
npm i --save vue-wheel-demo
```

3. 引入 wheel

``` 
import {Button, ButtonGroup, Icon} from 'vue-wheel-demo'
import 'vue-wheel-demo/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button,
        'g-button': Icon
    }
}
```

4. 引入 svg symbols

``` 
<script src="//at.alicdn.com/t/font_1428190_732wox2qvos.js"></script>
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

