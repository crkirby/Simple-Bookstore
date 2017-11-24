var mongoose = require('mongoose');
var genreSchema = mongoose.Schema({
	type:{
		type:String,
		required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);
//for encapsulation

//get genres

//outside accessibilty of genres
module.exports.getGenres = function (callback,limit) {
	Genre.find(callback).limit(limit);
}

//add genre

module.exports.addGenre = function (genre, callback){
	Genre.create(genre, callback);
}

module.exports.updateGenre = function (id, genre, callback){
	var query = {_id:id};
	var update = { type:genre.type };

	Genre.findOneAndUpdate(query, update, callback);
}

module.exports.deleteGenre = function (id, callback){
	var query = {_id: id};
	Genre.remove(query, callback);
}