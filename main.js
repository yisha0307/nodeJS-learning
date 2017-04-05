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