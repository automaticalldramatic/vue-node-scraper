// var kuwo = require('../models/kuwo');
const Scraper   = require('../../lib/scraper');

exports.search = function(req, res) {
    var scraper = new Scraper({
        concurrent: 5,
        logs: true,
        request: { // config for 'request' package
            headers: { 'user-agent': 'scout24-scraper' },
        },
        callback: function (err, visited) {
            // if (err) { throw err; }

            // all requests are done
            // console.log('Done! Visited links:');
            console.log(visited);
        }
    });

    var handleRequest = (err, url, document) => {
        if (err) {
            console.error(err.stack)
            if(err.status !== '') {
                res.status(err.status).json({'status' : err.status, 'message' : err.message})
            } else {
                res.status(500).json({'status' : 500, 'error' : err})
                res.end()
            }
        } else {
            const Models = require('../models')
            let result = Models.scraper(url, document)
            res.json(result)
        }
    };

    scraper.queue(req.body.url, handleRequest);
};
