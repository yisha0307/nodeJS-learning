var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
	console.log('request was made: '+ req.url);
	if(req.url === '/home' || req.url === '/'){
		res.writeHead(200, {'Content-Type' : 'text/html'});
		fs.createReadStream(__dirname +'/index.html').pipe(res);
	}else if(req.url === '/some'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		fs.createReadStream(__dirname + '/sample.html').pipe(res);
	}else if(req.url === '/api/ninjas'){
		var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi',age:32 }];
		res.writeHead(200, {'Content-Type': 'application/json'});
		res.end(JSON.stringify(ninjas));
	}
});

server.listen(3000);
console.log('now listening to port 3000');