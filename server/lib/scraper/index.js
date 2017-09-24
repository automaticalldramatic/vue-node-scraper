/**
 * Decided to make the scraper as a lib that could be included into
 * main program execution.
 */

const Request   = require('request'),
    Encoding    = require('encoding'),
    Extend      = require('extend'),
    Url         = require('url'),
    _           = require('lodash'),
    Cheerio     = require('cheerio'),

    Document    = require('./document');


// Set defaults for callback function and options
var callbackDefault = function (err) {
    if (err) { throw err; }
};

 // These can be maintained through environment variables
let _defaults = {
    concurrent: 5,
    logs: true,
    request: {
        encoding: 'binary'
    }
};


function Scraper(_options, callback) {
    this._defaults = _defaults;
    this.options = this._defaults;
    this.options = this._getOptions(_options);

    this.callback = (_.isFunction(callback)) ? callback : callbackDefault;

    this.pending = [];
    this.active = [];
    this.visited = [];
}

Scraper.prototype = {
    constructor: Scraper,

    queue: function (url, options, callback) {
         var err = false;
         var args = _.toArray(arguments);

         if (typeof arguments[0] != 'undefined' && arguments[0]) {
            url = arguments[0];
            if (_.isPlainObject(url)) {
                url = Url.format(url);
            }
        } else {
            err = new TypeError('Parameter "url" must be defined');
        }

        if (typeof args[1] != 'undefined' && arguments[1]) {
            if (_.isFunction(args[1])) {
                callback = args[1];
                options = {};
            } else if (_.isPlainObject(arguments[1])) {
                options = args[1];
            } else {
                options = {};
            }
        } else {
            options = {};
        }

        if (typeof args[2] != 'undefined' && args[2]) {
            if (_.isFunction(args[2])) {
                callback = args[2];
            } else {
                callback = callbackDefault;
            }
        } else if (!callback) {
            callback = callbackDefault;
        }

        if (err) {
            return callback(err);
        }

        if (this._stackIsFull()) {
            this._log('Queueing', url);
            this.pending.push({
                url: url,
                options: options,
                callback: callback
            });
        } else {
            this._load(url, options, callback);
        }
    },

    clearQueue: function () {
        this.pending = [];
    },

    resolve: function (base, url) {
        return Url.resolve(base, url);
    },

    _sanitizeArgs: function (args) {

    },

    _getOptions: function (_options) {
        return Extend(true, {}, this.options, _options || {});
    },

    _load: function(url, options, callback) {
        this._log('Loading', url);
        this.active.push(url);

        options = this._getOptions(options);

        Request(Extend(options.request, {url: url}), (function (context, url) {
            return function(err, response, body) {
                var document;
                if (err) {
                    this._log('Error', url);
                    return callback(err, url);
                } else if (response.statusCode != 200) {
                    this._log('Response', response.statusCode);
                    var err = new Error();
                    err.status = response.statusCode;
                    err.message = "Server returned HTTP status : " + response.statusCode;
                    return callback(err, url);
                } else {
                    document = new Document(url, response);
                    process.nextTick(function () {
                        callback(null, url, document);
                    });
                    this._loadFinished(url);
                }
            }.bind(context);
        })(this, url));
    },

    _loadFinished: function(url) {
        this._log('Success', url);
        this.visited.push(url);
        var i = this.active.indexOf(url);
        this.active.splice(i, 1);

        if (!this._stackIsFull()) {
            this._dequeue();
        }
    },

    _stackIsFull: function () {
        return this.active.length >= this.options.concurrent;
    },

    _dequeue: function() {
        var next = this.pending.shift();
        var callback = this.callback;
        var visited = this.visited;
        if (next) {
            this._load(next.url, next.options, next.callback);
        } else if (this.active.length === 0) {
            process.nextTick(function () {
                callback(null, visited);
            });
        }
    },

    _log: function(status, url) {
        if (this.options.logs) {
            console.log('>>>', status, url);
        }
    }

};

module.exports = Scraper;
