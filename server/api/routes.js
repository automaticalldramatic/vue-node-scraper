const scrape    = require('./controllers/scrape'),
    path        = require('path');

module.exports = function(app) {

    app.post('/scrape', scrape.search)

}
