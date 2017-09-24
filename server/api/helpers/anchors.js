const Url = require('url');

exports.get = function(url, document) {

    let returnArr = [],
        str="";

    const $ = document.$; // cheerio

    $('a').each(function(index, node) {

        let returnObj = {},
            skipLink = 0,
            href = '',
            $node = $(node),
            uri = $node.attr('href');

        returnObj['uri'] = uri;
        returnObj['internal'] = 0;

        if(uri == undefined) {
            returnObj['skipped'] = returnObj['broken'] = 1;
            return false;
        }

        if(uri.match(/mailto:([^\?]*)/) == null && uri.match(/javascript:([^\?]*)/) == null && uri.match(/tel:([^\?]*)/) == null) {
            href = $node.attr('href').split('#')[0];
        } else {
            skipLink = returnObj['skipped'] = 1;
            returnObj['internal'] = 1;
        }

        let parsedUri = Url.parse(uri),
            parsedUrl = Url.parse(url);

        if(skipLink != 1) {
            if (/^(f|ht)tps?:\/\//i.test(uri)) {
                if(parsedUri.host == parsedUrl.host)
                    returnObj['internal'] = 1
                returnObj['url'] = uri;
            } else {
                returnObj['url'] = Url.resolve(url, href);
                returnObj['internal'] = 1
            }

            // -------------------------------------------------------------------------------------------
            // We can set a follow URL property to true and recursively check links, like a search engine.
            // // ----------------------------------------------------------------------------------------
            // scraper.queue(Url.resolve(url, href), function(err, url, document) { console.log(document.title);});
        }
        returnArr.push(returnObj);
    });

    return returnArr;
}
