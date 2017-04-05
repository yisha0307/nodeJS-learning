//阻塞代码
// var fs = require('fs');

// var data = fs.readFileSync('input.rtf');

// console.log(data.toString());
// console.log('程序执行结束！');
// 
// 非阻塞代码
var fs = require('fs');
fs.readFile('input.rtf', function(err, data){
	if(err) return console.error(err);
	console.log(data.toString());
});

console.log('程序执行结束！~');

//阻塞代码是在文件读取完之后才执行完程序；
//非阻塞代码不需要等待文件读取完才执行程序；
//阻塞是按照顺序执行的‘
//非阻塞不需要按照顺序执行