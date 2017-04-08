var net = require('net');
var server = net.createServer(function(connection){
	console.log('client connected.');
	connection.on('end', function(){
		console.log('客户端关闭连接');
	});
	connection.write('hello world!');
	connection.pipe(connection);
});

server.listen(8080, function(){
	console.log('server is listening!');
});
//connect连接端口和主机host，host默认为localhost
var client = net.connect({port: 8080}, function(){
	console.log('连接到服务器！');
});
client.on('data', function(data){
	console.log(data.toString());
	client.end();
});
client.on('end', function(){
	console.log('断开与服务器的链接！');
})