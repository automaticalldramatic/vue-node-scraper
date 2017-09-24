const Helpers = require('../helpers');

exports.scraper = function (url, document) {
    let dataObj = {
        'a'         : Helpers.anchors.get(url, document),
        'html'      : Helpers.html.version(document.$),
        'title'     : Helpers.title.get(document.$),
        'headers'   : Helpers.headers.get(document.$),
    }
    return dataObj;
}
