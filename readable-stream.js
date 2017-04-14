//readable stream
var fs  = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
	console.log('request was made: '+ req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var myReadStream = fs.createReadStream(__dirname + '/input.txt', 'utf8');
	myReadStream.pipe(res);
	//response obj is writable 
});

server.listen(3000);
console.log('listen to port 3000');

//var myReadStream = fs.createReadStream(__dirname + '/input.txt', 'utf8');
//var myWriteStream = fs.createWriteStream(__dirname + '/output.txt');

// myReadStream.on('data', function(chunk){
// 	console.log('new chunk received');
// 	myWriteStream.write(chunk);
// });

//pipe
//myReadStream.pipe(myWriteStream);