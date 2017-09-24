exports.get = function ($) {
    let returnObj = {};
    validHeadingTypes = ["h1", "h2", "h3", "h4", "h5", "h6"]

    for (let i = validHeadingTypes.length - 1; i >= 0; i--) {
        returnObj[validHeadingTypes[i]] = {};
        if($(validHeadingTypes[i]).length > 0) {
            returnObj[validHeadingTypes[i]]["length"] = $(validHeadingTypes[i]).length
            $(validHeadingTypes[i]).each(function (index, dom) {
                returnObj[validHeadingTypes[i]][index] = {};
                returnObj[validHeadingTypes[i]][index]["text"] = $(dom).text();
                returnObj[validHeadingTypes[i]][index]["html"] = $(dom).html();
            })
        } else {
            returnObj[validHeadingTypes[i]]["length"] = $(validHeadingTypes[i]).length
        }
    };

    return returnObj;

}
