const express   = require('express'),
    app       = express(),
    http      = require('http'),
    routes    = require('./api/routes.js'),
    port      = process.env.PORT || 8081;
// const database  = require('./config/database');

// to demo another way to include the file
routes(app);

app.use(function (error, request, response, next) {
    console.error(error.stack);
    response.status(400).send(error.message);
});

http.createServer(app).listen(port, function() {
    console.log('The magic happens at dragonstone.local:' + port);
});
