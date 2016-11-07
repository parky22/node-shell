var commandsFile = require('./commands.js');


// Output a prompt
process.stdout.write('prompt > ');

process.stdin.on('data', function (data) {
  var cmd = data.toString().trim(); // remove the newline
  var word = cmd.split(" "); //[echo, hello, world]
  var command = word[0]; //[echo, hello, world]
  var args = word.slice(1).join(" ")

  if(commandsFile.hasOwnProperty(command)){
    commandsFile[command](args);
  }
  else{
    process.stdout.write('You typed: ' + cmd);
  }

  // if(command === "pwd"){
  // 	commandsFile.pwd();
  // }
  // else if(command === "date"){
  // 	commandsFile.date();
  // }
  // else if(command === 'ls'){
  // 	commandsFile.ls();
  // }
  // else if(command === 'echo'){
  //   commandsFile.echo(args);
  // }
  // else if (command === 'cat'){
  //   commandsFile.cat(args);
  // }
  // else if (command === 'head'){
  //   commandsFile.head(args);
  // }
  // else {
  // 	process.stdout.write('You typed: ' + cmd);
  // }

  
});
  


