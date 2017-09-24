var weight = 0;

exports.login = function ($) {
    if($('input[type="password"]').length > 0) {
        weight +=1;
    }

    if($('input[type="email"]').length > 0) {
        weight +=1;
    }

    $('form').children().map(function (i, elem) {
        if($(elem).html().match(/signup([^\?]*)/i)
            || $(elem).html().match(/login([^\?]*)/i)
            || $(elem).html().match(/log in([^\?]*)/i)) {

            weight += 1;
        }
    });

    if($('input[type="submit"]').length > 0) {
        if($('input[type="submit"]').html().match(/signup([^\?]*)/i)
            || $('input[type="submit"]').html().match(/login([^\?]*)/i)
            || $('input[type="submit"]').html().match(/log in([^\?]*)/i)) {

            weight += 1;
        }
    }

    return weight;
}
