var fs = require('fs');
var mongoose = require('mongoose');
var user = mongoose.model('user');
var cause = mongoose.model('cause');

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function(req, res) {
	var name = req.params.name;
	res.render('partials/'+name);
};

exports.makeUser = function(req, res) {
  new user({
    username: req.body.username,
    password: req.body.password
  }).save(function(err){
    if(err) { console.log(err); } else {
      res.json(true)
    }
  })
}

exports.makeCause = function(req, res) {
  new cause({
    username: req.body.username,
    password: req.body.password
  }).save(function(err){
    if(err) { console.log(err); } else {
      res.json(true)
    }
  })
}

function forEach(array, fn) {
  for(var i = 0;i<array.length;i++) {
    fn(array[i]);
  }
}