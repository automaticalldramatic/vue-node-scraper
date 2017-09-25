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
            'forms': '',
            'fromParser': false
        },
        'error': {
            'data': {
                'message': ''
            },
            'status': ''
        }
    },
    mutations,
    actions,
    getters: {
        scrapedObj (state) {
            return state.scrapedObj
        },
        scrapedURL (state) {
            return state.scrapedObj.url
        },
        getError (state) {
            return state.error
        },
        getErrorMsg (state) {
            return state.error.data.message
        },
        getErrorStatus (state) {
            return state.error.status
        }
    }
})
