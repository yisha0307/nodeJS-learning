//js语言只有字符串数据类型，没有二进制数据类型
//但在处理TCP流或文件流的时候，必须用到二进制数据。
//因此在NODE里，定义了一个buff类，用来创建一个专门存放二进制数据的缓存区

//example 1
//创建一个256个字节的buffer实例
buf = new Buffer(256);
//返回实际写入的大小
len = buf.write('www.baidu.com');
console.log(len); //13,write的字符串的长度
console.log(buf.length); //256，不会随着buffer对象内容的改变而改变

//example 2
for(var i = 0; i < 26; i++){
	buf[i] = i+97;
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii', 0, 5));
console.log(buf.toString('utf8',0,5));
//默认为utf8
console.log(buf.toString(undefined, 0 ,5));

var buffer1 = new Buffer('菜鸟课程');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3.toString());

//copy
var buf1 = new Buffer('ABC');
var buf2 = new Buffer(3);
buf1.copy(buf2);
console.log(buf2.toString());
console.log(buf2.length);