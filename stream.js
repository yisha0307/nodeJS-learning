var fs = require('fs');
var data ='';
//创建可读流
var readerStream = fs.createReadStream('input.rtf');
readerStream.setEncoding('UTF8'); //设置编码为utf8
//类似于eventEmitter类，用on绑定callback函数
//data事件：当有数据的时候触发
readerStream.on('data', function(chunk){
	data += chunk;
});
//end事件：没有更多数据可读时触发
readerStream.on('end', function(){
	console.log(data);
});
//error事件：在接受和写入过程中发生错误时触发
readerStream.on('error',function(err){
	console.log(err.stack);
});

console.log('finished.')

var fs1 = require('fs');
var data = '菜鸟教程官网地址 www.runoob.com';
//创建一个可写入流
var writerStream = fs1.createWriteStream('output.txt');
writerStream.write(data, 'UTF8');
//标记文件末尾
writerStream.end();
//处理流事件—— data, end, error
writerStream.on('finish', function(){
	console.log('写入完成.');
});
writerStream.on('error', function(err){
	console.log(err.stack);
});
console.log('程序执行完毕');

//创建管道流
var readerStream1 = fs.createReadStream('input.rtf');
var writerStream1 = fs.createWriteStream('output.txt');
//管道读写操作
//读取input.rtf的内容，输出到output.txt
readerStream1.pipe(writerStream1);

//创建链式流
//用管道流和链式流来压缩和解压文件
var zlib = require('zlib');
fs.createReadStream('input.rtf')
	.pipe(zlib.createGzip())
	.pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成.');



