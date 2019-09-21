import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el: "#app",
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
})

// 单元测试
import chai from 'chai'
const expect = chai.expect

{
    console.log(Button) // 由打印结果可知button是一个对象
    const Constructor = Vue.extend(Button) // 把Button组件变成一个构造函数
    console.log(Constructor) // 函数
    const vm = new Constructor({ // vm(ViewModel)是一个Vue实例，这里是Button的一个实例对象
        propsData:{
            icon:'settings' // 设置icon的值为'settings'
        }
    }) // 实例化构造函数
    vm.$mount('#test') // 将实例挂载到id为test的标签上
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings') // 我期望use的href是'#i-settings'
    vm.$el.remove() // 测试用例通过就把这个vm元素移除
    vm.$destroy() // 删除vm对象
}
{
    const Constructor = Vue.extend(Button) 
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            loading:true
        }
    }) 
    vm.$mount() 
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading') // 我期望use的href是'#i-settings'
    vm.$el.remove() 
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button) 
    const vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    }) 
    vm.$mount(div) 
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('1') 
    vm.$el.remove()
    vm.$destroy()
}
{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button) 
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'
        }
    }) 
    vm.$mount(div) 
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2') 
    vm.$el.remove()
    vm.$destroy()
}
