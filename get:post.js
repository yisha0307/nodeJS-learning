//表单提交用到的GET/POST请求
//post: 直接获取url的参数
var http = require('http');
var url = require('url');
var util = require('util');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var params = url.parse(req.url, true).query;
    res.write('网站名：'+ params.name);
    res.write('\n');
    res.write('网站URL: '+ params.url);
    res.end();
}).listen(3000);

//post: nodeJS默认不会解析请求体
var queryString = require('queryString');
http.createServer(function(req,res){
	var post = '';
	//通过req的data函数监听数据，每当接受到请求体的时候，就加到post变量中
	req.on('data', function(chunk){
		post +=chunk;
	});
	req.on('end', function(){
		//用queryString.parse()把post解析为真正的post请求格式
		post = queryString.parse(post);
		res.end(util.inspect(post));
	});
}).listen(3000);