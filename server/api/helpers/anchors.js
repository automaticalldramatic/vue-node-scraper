const Url = require('url');

exports.get = function(url, document) {
    // request done
    // var that = this
    var returnArr = [],
        str="";

    console.log("URL - ", url);
    // console.log(document); // document object

    const $ = document.$; // cheerio
    $('a').each(function(index, node) {
        // if (index <= 10) {
        var skipLink = 0;
        var href = '';
        var $node = $(node);
        if($node.attr('href') == undefined) {
            return false;
        }
        if($node.attr('href').match(/mailto:([^\?]*)/) == null) {
            href = $node.attr('href').split('#')[0];
        } else {
            skipLink = 1;
        }
        // var href = $node.attr('href');
        console.log("link found - " + index + " => ", Url.resolve(url, $node.attr('href')));
        if(skipLink != 1) {
            returnArr.push("URL - " + Url.resolve(url, href));
            // scraper.queue(Url.resolve(url, href), function(err, url, document) { console.log(document.title);});
        }
        // } else {
            // return false;
        // }
    });
    for (let i = returnArr.length - 1; i >= 0; i--) {
        str += returnArr[i] + '<br>';
    };

    return str;
}
