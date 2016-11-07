// The stdin 'data' event fires after a user types in a line
var fs = require('fs');

exports.pwd = function(args){
	process.stdout.write(process.cwd());
	process.stdout.write('\nprompt > ');
}

exports.date = function(args){
	process.stdout.write(Date());
	process.stdout.write('\nprompt > ');
}

exports.ls = function(args){
	fs.readdir('.', function(err, files) {
	  if (err) throw err;
	  files.forEach(function(file) {
	    process.stdout.write(file.toString() + "\n");
	  })
	  process.stdout.write("\nprompt > ");
	});
}

exports.echo = function(args){
	 if(args[0] == "$"){
      //environment variable
      var environ = args.slice(1); //PATH
      var args = process.env[environ];
    }
	process.stdout.write(args);
	process.stdout.write('\nprompt > ');
}

exports.cat = function(args){
	fs.readFile(args, function(err, data){
		if (err) throw err;
		process.stdout.write(data);
		process.stdout.write("\nprompt > ");
	});
}

exports.head = function(args){
	fs.readFile(args, function(err, data){
		if (err) throw err;
		var lines = data.toString().split("\n");
		var result = lines.slice(0,5).join("\n");

		process.stdout.write(result);
		process.stdout.write("\nprompt > ");
	});
}

exports.tail = function(args){
	fs.readFile(args, function(err, data){
		if (err) throw err;
		var lines = data.toString().split("\n");
		var result = lines.slice(-5).join("\n");

		process.stdout.write(result);
		process.stdout.write("\nprompt > ");
	});
}

exports.sort = function(args){
	fs.readFile(args, function(err, data){
		if (err) throw err;
		var lines = data.toString().split("\n").sort().join("\n");
		process.stdout.write(lines);
		process.stdout.write("\nprompt > ");
	});
}

exports.wc = function(args){
	fs.readFile(args, function(err, data){
		if (err) throw err;
		var lines = data.toString().split("\n").length.toString();
		process.stdout.write(lines);
		process.stdout.write("\nprompt > ");
	});
}

exports.uniq = function(args){
	fs.readFile(args, function(err, data){
		if (err) throw err;
		var lines = data.toString().split("\n");
		var newline = lines.filter(function(current, index, array){
			if(array.indexOf(current) === index){
				return true;
			}
			else{
				return false;
			}


			// if(index === 0){
			// 	return true;
			// }
			// if(current === array[index-1]) return false;
			// else return true;
		});

		process.stdout.write(newline.join("\n"));
		process.stdout.write("\nprompt > ");
	});
}



//module.exports;
//exports{pwd: fn, date: fn}