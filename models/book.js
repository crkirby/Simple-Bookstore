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
	}
	
});

var Book = module.exports = mongoose.model('Book', bookSchema);
//for encapsulation

//get books

//outside accessibilty of books
module.exports.getBooks = function (callback,limit) {
	Book.find(callback).limit(limit);
}



