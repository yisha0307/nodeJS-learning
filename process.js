//process是node环境里的一个全局变量
//stdout: 标准输出流
process.stdout.write('hello world!'+ '\n');
//process.argv属性返回一个数组，由命令行执行脚本时的各个参数组成
//第一个成员总是node,第二个是脚本文件
//print： 0:node  1:process.js
process.argv.forEach(function(val, index, array){
	console.log(index + ': '+val);
});

console.log(process.execPath);
console.log(process.platform);