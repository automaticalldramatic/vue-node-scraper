const express   = require('express'),
    app         = express(),
    http        = require('http'),
    routes      = require('./api/routes.js'),
    // Heroku or AWS EC2 would have this as a part of their environment config
    port        = process.env.PORT || 8081,
    bodyParser  = require('body-parser');
// const database  = require('./config/database');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// to demo another way to require a module
// we pass the app instance to this one.
routes(app);

// Create the server and display a message to indicate we are on
http.createServer(app).listen(port, function() {
    console.log('Demo API server for scraping a web page is up on :' + port);
});
