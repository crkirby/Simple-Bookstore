var mongoose = require('mongoose');
var bookSchema = mongoose.Schema({
	title:{
		type:String,
		required:true
	},
	author:{
		type:String,
		required:true
	},
	price:{
		type:Number
	},
	description:{
		type:String
	},
	genre:{
		type:String,
		required:true
	},
	pages:{
		type:Number
	},
	publisher:{
		type:String
	},
	isbn:{
		type:String
	},
	create_date:{
		type:Date,
		default:Date.now
	},
	buy_url:{
		type:String
	}

	image_url:{
		type:String
	}
	
});

var Book = module.exports = mongoose.model('Book', bookSchema);
//for encapsulation

//get books

//outside accessibilty of books
module.exports.getBooks = function (callback,limit) {
	Book.find(callback).limit(limit);
}

module.exports.getBook = function (id, callback,limit) {
	Book.findById(id,callback).limit(limit);
}

//add book

module.exports.addBook = function (book, callback){
	Book.create(book, callback);
}

module.exports.updateBook = function (id,book, callback){
	var query ={_id:id};
	var update = {
		title: book.title,
		author: book.author,
		price: book.price,
		description:book.description,
		genre:book.genre,
		pages:book.pages,
		publisher:book.publisher,
		isbn:book.isbn,
		buy_url: book.buy_url,
		image_url:book.image_url
	};
	Book.findOneAndUpdate(query, update,{}, callback);
}

module.exports.deleteBook = function (id, callback){
	var query = {_id: id};
	Book.remove(query, callback);
}
