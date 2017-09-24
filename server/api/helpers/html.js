exports.version = function ($) {
    let htmlStr = $.root().children()[0].prev.data
    let returnObj = {}
    if(htmlStr == "!DOCTYPE html") {
        returnObj['version'] = "5";
    } else {
        var version = htmlStr.match(/\d+\.(\d+)?/g)[0];
        returnObj['version'] = version;
    }

    return returnObj;
}
