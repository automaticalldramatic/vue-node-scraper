export default {
    SCRAPEDOBJ (state, data) {
        state.scrapedObj = data
        state.scrapedObj.fromParser = true
        state.error.data = {'message': ''}
        state.error.status = ''
    },

    ERROROBJ (state, data) {
        state.error = data
        state.scrapedObj.fromParser = false
    },

    reset (state, payload) {
        state.scrapedObj = {}
        state.scrapedObj.fromParser = false
    }
}
