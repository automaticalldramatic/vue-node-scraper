const scrape    = require('./controllers/scrape'),
    path        = require('path');

module.exports = function(app) {

    app.get('/scrape', scrape.search)

}
