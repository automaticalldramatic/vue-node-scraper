const scrape    = require('./controllers/scrape'),
    path        = require('path'),
    cors        = require('cors');

module.exports = function(app) {

    app.use(cors())
    /**
     * Post route for the API
     */
    app.post('/scrape', scrape.search)

    /**
     * Catch all route for all get calls to this server
     */
    app.all('*', function(req, res, next) {
        var err = new Error();
        err.status = 404;
        next(err);
    });

    /**
     * Catch all function for other routes
     * We can improve this with a folder with all error templates
     *
     * @param  {object} err
     * @param  {object} req
     * @param  {object} res
     * @param  {object} next
     * @return {object}
     */
    app.use(function(err, req, res, next) {
        if(err.status !== 404) {
            return next();
        }

        res.status(404);
        res.send(err.message || '<center style="margin: 0 auto;"><h1>Nothing to see here!</h1></center>');
    });

}
