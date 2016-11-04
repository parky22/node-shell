// The stdin 'data' event fires after a user types in a line
var fs = require('fs');

exports.pwd = function(){
	process.stdout.write(process.cwd());
}

exports.date = function(){
	process.stdout.write(Date());
}

exports.ls = function(){
	fs.readdir('.', function(err, files) {
	  if (err) throw err;
	  files.forEach(function(file) {
	    process.stdout.write(file.toString() + "\n");
	  })
	  //process.stdout.write("prompt > ");
	});
}

//module.exports;
//exports{pwd: fn, date: fn}