// var kuwo = require('../models/kuwo');
const Scraper   = require('../../lib/scraper');

exports.search = function(req, res) {
    var scraper = new Scraper({
        concurrent: 5,
        logs: true,
        request: { // config for 'request' package
            headers: { 'user-agent': 'vue-node-scraper' },
        },
        callback: function (err, visited) {
            // if (err) { throw err; }

            // all requests are done
            // console.log('Done! Visited links:');
            console.log(visited);
        }
    });

    var handleRequest = (err, url, document) => {
        let result = {}
        if (err) {
            console.error(err.stack)
            if(err.status !== '') {
                res.status(err.status).json({'status' : err.status, 'data' : {'message' : err.message}})
            } else {
                res.status(500).json({'status' : 500, 'data' : {'message' : err}})
                res.end()
            }
        } else {
            const Models = require('../models')
            result['data'] = Models.scraper(url, document)
            result['status'] = 200
            res.json(result)
        }
    };

    scraper.queue(req.body.url, handleRequest);
};
