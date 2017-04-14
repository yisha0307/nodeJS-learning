//readable stream
var fs  = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/input.txt', 'utf8');

myReadStream.on('data', function(chunk){
	console.log('new chunk received');
	console.log(chunk);
});