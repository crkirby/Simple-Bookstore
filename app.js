var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


Genre = require('.models/genre'); //accessing genre

//Connect to Mongoose

mongoose.connect('mongodb://localhost/bookstore', { useMongoClient: true });

var db = mongoose.connection;

//Routes and handling requests

app.get('/', function(req,res){
	res.send("Hello Cameron!"); //send to browser
});

app.get('/api/genres', function(req,res){
	res.send("Genres!"); //send to browser
});

app.listen(3000);
console.log("Running on 3000");