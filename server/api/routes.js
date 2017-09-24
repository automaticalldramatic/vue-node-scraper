// const express   = require('express');
// const request   = require('request');
// const path      = require('path');
// const Url       = require('url');
// const Scraper   = require('../lib/scraper');
// const app       = module.exports = express.Router();

var scrape = require('./controllers/scrape')
var path = require('path')

module.exports = function(app) {

    app.get('/scrape', scrape.search)

}
// app.get('/scrape', (req, res) => {

        // Let's scrape Anchorman 2
    // url = 'http://www.imdb.com/title/tt1229340/';

    // request(url, (error, response, html) => {
    //     if (!error) {
    //         const $ = cheerio.load(html)

    //         let htmlStr = $.root().children()[0].prev.data
    //         if(htmlStr == "!DOCTYPE html") {
    //             console.log("HTML version is 5");
    //         } else {
    //             console.log("HTML version is - ", htmlStr.match(/\d+\.(\d+)?/g)[0]);
    //         }
    //         console.log('======', "\n");

    //         console.log("The title is - " + $('title').text());

    //         console.log('======', "\n");

    //         console.log("h1 length ->" + $('h1').length);

    //         console.log('======', "\n");

    //         console.log("h2 length ->" + $('h2').length);
    //     }

    //     res.send('Check your console!')
    // })
    //
// });
