var commandsFile = require('./commands.js');


// Output a prompt
process.stdout.write('Yoo-Nahs prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  if(cmd === "pwd"){
  	commandsFile.pwd();
  }
  else if(cmd === "date"){
  	commandsFile.date();
  }
  else if(cmd === 'ls'){
  	commandsFile.ls();
  }
  else {
  	process.stdout.write('You typed: ' + cmd);
  }

  process.stdout.write('\nprompt > ');
});
  


