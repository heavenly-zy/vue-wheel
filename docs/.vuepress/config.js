module.exports = {
    base: '/vue-wheel-demo/',
    title: 'Wheel-UI',
    description: '一个好用的 UI 框架',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { text: 'GitHub', link: 'https://github.com/heavenly-zy/vue-wheel-demo' },
        ],
        sidebar: [
            {
                title: '入门',
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tabs',
                    '/components/popover',
                    '/components/collapse',
                ]
            }
        ]
    }
}