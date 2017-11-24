var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


Genre = require('./models/genre'); //accessing genre
Book = require('./models/book'); //accessing books

//Connect to Mongoose

mongoose.connect('mongodb://localhost/bookstore', { useMongoClient: true });

var db = mongoose.connection;

//Routes and handling requests

app.get('/', function(req,res){
	res.send("Hello Cameron!"); //send to browser
});

app.get('/api/genres', function(req,res){
	Genre.getGenres(function (err, genres) {
		if(err){
			throw err;
		}
		res.json(genres); //server response in json -> genres
	});
});

app.get('/api/books', function(req,res){
	Book.getBooks(function (err, books) {
		if(err){
			throw err;
		}
		res.json(books); //server response in json -> books
	});
});
/*
app.get('/api/book/:id', function(req,res){
	Book.getBook(function (err, book) {
		if(err){
			throw err;
		}
		res.json(book); //server response in json -> books
	});
});*/


app.listen(3000);
console.log("Running on 3000");