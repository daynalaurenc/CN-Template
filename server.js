
// ./server.js
// Load dependencies
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan       = require('morgan');

var app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/cntemplate", { useNewUrlParser: true });


app.set('port', process.env.PORT || 4000);

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
}));

// Routes
require('./routes')(app);

var port = app.get('port');
app.listen(port, function () {
    console.log('App running at ' + port);
});