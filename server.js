
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

// port number
var port = process.env.PORT || 8080;


//connection to database

mongoose.connect('mongodb://127.0.0.1:27017', { useNewUrlParser: true });


app.use(bodyParser.json());
//parsing json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.use(bodyParser.urlencoded({ extended: true }));
//http method 
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));



//routes



require('./app.js/routes')(app);
//listen to port
app.listen(port);

console.log('App started at port : ' + port);

exports = module.exports = app;