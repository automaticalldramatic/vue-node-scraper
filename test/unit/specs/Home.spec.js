import Vue from 'vue'
import Home from '@/components/Home'

describe('Home.vue', () => {
    it('should render correct contents', () => {
        const Constructor = Vue.extend(Home)
        const vm = new Constructor().$mount(document.querySelector('#app'))
        expect(vm.$el.querySelector('.column-50 p').textContent)
            .to.equal('Enter a URL to get information about the website')
    })
})
