// var kuwo = require('../models/kuwo');
const Scraper   = require('../../lib/scraper'),
    Helpers     = require('../helpers');

exports.search = function(req, res) {

    var scraper = new Scraper({
        concurrent: 5,
        logs: true,
        request: { // config for 'request' package
            headers: { 'user-agent': 'scout24-scraper' },
        },
        // If defined 'decodeTo' and not 'decodeFrom' then charset of 'response.body' will be detected automatically
        decodeTo: 'utf8',
        decodeFrom: '', // e.g. 'win-1251'
        callback: function (err, visited) {
            if (err) { throw err; }

            // all requests are done
            console.log('Done! Visited links:');
            console.log(visited);
        }
    });

    var handleRequest = (err, url, document) => {
        if (err) {
            console.log('Error url: '+ url);
            throw err;
        }

        var str = Helpers.anchors.get(url, document);

        res.send('Following URL\'s were found:<br><hr><br><pre>' + str + '</pre>');
    };

    // scraper.queue('http://www.imdb.com/title/tt1229340/', handleRequest);
    scraper.queue('http://www.imdb.com/title/tt5104604/', {/*  custom options for this link */}, handleRequest);
    // scraper.queue('https://www.facebook.com/automaticAllDramatic/', {/* custom options for this link */}, handleRequest);

};
