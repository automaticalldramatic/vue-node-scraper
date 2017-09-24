import Scrape from '@/api/scrape'

export default {
    search (store, key) {
        Scrape.search(key).then(data => {
            store.commit('SCRAPEDOBJ', data)
        })
    }
}
