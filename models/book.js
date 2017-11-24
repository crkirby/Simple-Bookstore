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