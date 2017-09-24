const express   = require('express'),
    app         = express(),
    http        = require('http'),
    routes      = require('./api/routes.js'),
    port        = process.env.PORT || 8081,
    bodyParser  = require('body-parser');
// const database  = require('./config/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to demo another way to require a module
// we pass the app instance to this one.
routes(app);

app.use(function (error, request, response, next) {
    console.error(error.stack);
    response.status(400).send(error.message);
});

http.createServer(app).listen(port, function() {
    console.log('The magic happens at dragonstone.local:' + port);
});
