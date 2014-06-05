var mongoose = require('mongoose'),
	Schema = mongoose.Schema;
 	//bcrypt = require('bcrypt'),
	//SALT_WORK_FACTOR = 10;

var User = new Schema({
	firstName: String,
	lastName: String,
	username: String,
	email: String,
	password: String,
	badges: Array,
	Causes: Array
})

var Cause = new Schema({
	name: String,
	username: String,
	password: String,
	category: String,
	scope: String,
	location: String,
	causeSummary: String,
	financeSummary: String
})

var user = mongoose.model('user', User);
var cause = mongoose.model('cause', Cause);

mongoose.connect('mongodb://localhost/twentyfive');