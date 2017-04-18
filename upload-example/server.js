var http = require('http');
var url = require('url');

function start(route){
	http.createServer(function(req,res){
		var pathname = url.parse(req.url).pathname;
		console.log('Request for '+ req.url + ' received.');

		route(pathname);
		
		res.writeHead(200, {'Content-Type':'text/plain'});
		res.write('hello world');
		res.end()
	}).listen(8888);
	console.log('Server has started');
}

exports.start = start;