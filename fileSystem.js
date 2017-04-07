//fs是node.js提供的文件操作API
//fs中的方法都有异步和同步版本，例如读取文件的异步的fs.readFile()和同步的readFileSync()
var fs = require('fs');
//异步
fs.readFile('input.txt', function(err, data){
	if(err){
		return console.error(err);
	}
	console.log('异步读取:'+ data.toString('utf8'));
});
//同步
//同步不用写callback函数
var data = fs.readFileSync('input.txt');
console.log('同步读取:' + data.toString());
console.log('程序执行完毕');

fs.open('input.txt', 'r+', function(err,fd){
	if(err){
		return cosole.error(err);
	}
	console.log('文件打开成功!');
})

fs.writeFile('input.txt', 'www.google.com/haha?!', function(err){
	if(err){
		return console.error(err);
	}
	console.log('数据写入成功');
	fs.readFile('input.txt', function(err, data){
		if(err){
			return console.error(err);
		}
		console.log('异步读取文件数据:'+ data.toString());
	});
});

//截取文件
var buf = new Buffer(1024);
console.log('准备打开文件');
fs.open('input.txt', 'r+', function(err, fd){
	if(err){
		return console.error(err);
	}
	console.log('文件打开成功！');
	console.log('截取10字节后的文件内容');
	//开始截取
	//input.txt会变成截取后的状态
	fs.ftruncate(fd, 10, function(err){
		if(err){
			console.log(err);
		}
		console.log('文件截取成功');
		console.log('读取文件');
		//异步读取
		fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
			if(err){
				console.log(err);
			}
			if(bytes > 0){
				console.log(buf.slice(0, bytes).toString());
			}
			fs.close(fd, function(err){
				if(err){
					console.log(err);
				}
				console.log('文件关闭成功!');
			})
		})
	})
});

