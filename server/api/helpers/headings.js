exports.get = function ($) {
    let returnObj = {},
        validHeadingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"]

    for (let i = validHeadingTypes.length - 1; i >= 0; i--) {
        let hx = validHeadingTypes[i];
        returnObj[hx] = {};
        if($(hx).length > 0) {
            returnObj[validHeadingTypes[i]]["length"] = $(validHeadingTypes[i]).length
            $(hx).each(function (index, dom) {
                let hhx = returnObj[hx][index] = {};
                hhx["text"] = $(dom).text();
                hhx["html"] = $(dom).html();
            })
        } else {
            returnObj[validHeadingTypes[i]]["length"] = $(validHeadingTypes[i]).length
        }
    };
    return returnObj;
}
