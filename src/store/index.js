import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        'scrapedObj': {
            'url': '',
            'a': [],
            'html': {},
            'title': '',
            'headers': {},
            'forms': ''
        }
    },
    mutations,
    actions,
    getters: {
        // we will fill our getters here
    }
})
