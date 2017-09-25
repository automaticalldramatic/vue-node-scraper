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
        getAnchorsToDisplay (state) {
            let anchors = state.scrapedObj.data.a
            let skipped = 0
            let internal = 0
            let external = 0
            let returnObj = {}

            for (var i = anchors.length - 1; i >= 0; i--) {
                if (anchors[i]['skipped'] === 1) {
                    skipped++
                }
                if (anchors[i]['internal'] === 1) {
                    internal++
                } else {
                    external++
                }
            }
            returnObj['total'] = anchors.length
            returnObj['skipped'] = skipped
            returnObj['internal'] = internal
            returnObj['external'] = external
            return returnObj
        },
        getHeadersToDisplay (state) {
            let headers = state.scrapedObj.data.headers
            headers['total'] = headers.h1.length + headers.h2.length + headers.h3.length + headers.h4.length + headers.h5.length + headers.h6.length
            return headers
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
