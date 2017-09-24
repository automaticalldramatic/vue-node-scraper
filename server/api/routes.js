const scrape    = require('./controllers/scrape'),
    path        = require('path');

module.exports = function(app) {

    app.post('/scrape', scrape.search)

    app.get('*', function(req, res, next) {
        var err = new Error();
        err.status = 404;
        next(err);
    });

    app.use(function(err, req, res, next) {
        if(err.status !== 404) {
            return next();
        }

        res.status(404);
        res.send(err.message || '<center style="margin: 0 auto;"><h1>Nothing to see here!</h1></center>');
    });

}
