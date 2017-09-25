import Scrape from '@/api/scrape'

export default {
    search (store, key) {
        Scrape.search(key).then(data => {
            if (data.status === 200) {
                data['url'] = key
                store.commit('SCRAPEDOBJ', data)
            } else {
                store.commit('ERROROBJ', data)
            }
        })
    }
}
