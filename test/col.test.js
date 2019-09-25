const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('offset-1')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                pc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-pc-1')).to.equal(true)
        expect(vm.$el.classList.contains('offset-pc-2')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                ipad: { span: 3, offset: 4 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-ipad-3')).to.equal(true)
        expect(vm.$el.classList.contains('offset-ipad-4')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrow-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                narrowPc: { span: 5, offset: 6 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-narrow-pc-5')).to.equal(true)
        expect(vm.$el.classList.contains('offset-narrow-pc-6')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 wide-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                widePc: { span: 7, offset: 8 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(vm.$el.classList.contains('col-wide-pc-7')).to.equal(true)
        expect(vm.$el.classList.contains('offset-wide-pc-8')).to.equal(true)
        div.remove()
        vm.$destroy()
    })
})