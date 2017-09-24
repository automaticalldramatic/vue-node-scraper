import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    // can use the spread operator to pass props into the renderer
    // ...App
    // or use the h method, Vue internal renderer
    render: h => h(App)
})
