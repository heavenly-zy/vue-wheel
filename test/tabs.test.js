const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsBody from '../src/tabs-body'
import TabsItem from '../src/tabs-item'
import TabsPanel from '../src/tabs-panel'

Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-tabs-panel', TabsPanel)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    })
    it('接受 selected 属性', (done) => {

        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <g-tabs selected="aaa">
        <g-tabs-head>
          <template slot="actions">
          <g-tabs-item name="aaa">aaa</g-tabs-item>
          <g-tabs-item name="bbb">bbb</g-tabs-item>
          <g-tabs-item name="ccc">ccc</g-tabs-item>
        </g-tabs-head>
        <g-tabs-body>
          <g-tabs-panel name="aaa">111</g-tabs-panel>
          <g-tabs-panel name="bbb">222</g-tabs-panel>
          <g-tabs-panel name="ccc">333</g-tabs-panel>
        </g-tabs-body>
      </g-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let x = vm.$el.querySelector(`.tabs-item[data-name="aaa"]`)
            expect(x.classList.contains('active')).to.be.true
            done()
        })
    })
    it('可以接受 direction prop', () => {

    })

})