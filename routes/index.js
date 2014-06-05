var fs = require('fs');

exports.index = function(req, res){
  res.render('index');
};

exports.partials = function(req, res) {
	var name = req.params.name;
	res.render('partials/'+name);
};

function forEach(array, fn) {
  for(var i = 0;i<array.length;i++) {
    fn(array[i]);
  }
}