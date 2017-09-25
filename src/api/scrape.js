import Vue from 'vue'
import VueResource from 'vue-resource'

const API_URL = 'http://localhost:8081/'
const SCRAPE_URL = API_URL + 'scrape'

Vue.use(VueResource)
// Vue.http.options.emulateJSON = true
Vue.http.headers.common['Accept'] = 'application/json'
Vue.http.headers.common['Content-Type'] = 'application/json'

export default {
    search (key) {
        return Vue.http.post(SCRAPE_URL, { 'url': key })
            .then(
                res => res.json(),
                res => {
                    console.error('error: ', res.status, res.body.data.message)
                    return res.json()
                }
            )
    }
}
