//util是node的一个核心模块；
//提供常用函数的集合，用于弥补核心js过于精简的不足
//1、util.inherits(constructor, superConstructor);
var util = require('util');
function Base(){
	this.name = 'base';
	this.base = 1991;
	this.sayHello = function(){
		console.log('Hello' + this.name);
	};
}
Base.prototype.showName = function(){
	console.log(this.name);
};

function Sub(){
	//Base.call(this);
	//没有上面这一行的话Base构造函数里的几个this都不能继承
	this.name = 'sub';
}
//util.inherits(Constructor, superConstructor)是一个实现对象间原型继承的函数
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);

var objSub = new Sub();
objSub.showName();
//objSub.sayHello();
console.log(objSub);

//2、util.inspect
//将任意对象转换成字符串的方法
//var util = require('util');
function Person(){
	this.name = 'byvoid';
	this.toString = function(){
		return this.name;
	};
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true));//这边的true是指showHidden

//3、util.isArray(object)
//返回true or false
console.log(util.isArray([])); //true
console.log(util.isArray(new Array));	//true
console.log(util.isArray({}));	//false

//4、util.isRegExp(object)
//5、util.isDate()
//6、util.isError()
var reg = new RegExp('haha', 'i');
console.log(util.isRegExp(reg));

console.log(process);

