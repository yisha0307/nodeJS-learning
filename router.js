var http = require('http');
var url = require('url');

function start(route){
	function onRequest(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log('Request for '+ pathname+ ' received.');

		route(pathname);

		response.writeHead(200, {'Content-Type': 'text/plain'});
		response.write('Hello World');
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('Server has started.')
}

exports.start = start;
//表示当前正在执行的脚本的文件名
console.log(__filename);
//表示当前执行脚本所在的目录
console.log(__dirname);