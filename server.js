var http = require('http');

//使用http.createServer创建服务器
http.createServer(function(request, response){
	//发送http头部
	//http状态值为200:ok
	//内容类型：text/plain
	response.writeHead(200, {'Content-Type': 'text/plain'});

	//发送响应数据'hello world'
	response.end('Hello world');
}).listen(8888); //用listen绑定8888端口

console.log('Server running at http://127.0.0.1:8888/');