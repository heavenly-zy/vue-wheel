module.exports = {
    title: 'Wheel-UI',
    description: '一个好用的 UI 框架',
    themeConfig: {
        nav: [
            { text: '主题', link: '/' },
            { text: '文档', link: '/guide/' },
            { text: '交流', link: '/https://baidu.com' },
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
                children: ['/components/button']
            }
        ]
    }
}