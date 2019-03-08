var util = require('util')
function Base () {
	this.name = 'base'
	this.base = 1991
	this.sayHello = function () {
		console.log(`hello ${this.name}`)
	}
}

Base.prototype.showName = function () {
	console.log(this.name)
}

function Sub () {
	this.name = 'sub'
}

util.inherits(Sub, Base)
var obj = new Base()
obj.showName()
obj.sayHello()
console.log(obj)

// sub仅仅继承base在原型中定义的函数，构造函数内部的属性和函数都没有被sub继承
var objSub = new Sub()
objSub.showName()
// objSub.sayHello()
console.log(objSub)

function Person () {
	this.name = 'byvoid'
	this.toString = function () {
		return this.name
	}
}

var objobj = new Person()
console.log(util.inspect(objobj))
console.log(util.inspect(objobj, true))