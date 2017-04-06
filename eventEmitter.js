//nodejs所有事件机制都是用观察者模式来实现
//eventEmitter的核心就是触发与事件监听器功能的封装
//eventEmitter.on(name, func)相当于observer.subscribe();
//eventEmitter.emit(name)相当于observer.publish()

//引入events模块
var events = require('events');
//创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

//创建事件处理程序
var connectHandler = function connected(){
	console.log('connect success.');
	//触发data_received事件
	eventEmitter.emit('data_received');
}

//绑定connectHandler事件
eventEmitter.on('connection', connectHandler);

//为data_received绑定一个匿名事件
eventEmitter.on('data_received',function(){
	console.log('receive success.');
})

eventEmitter.emit('connection');
console.log('finished.')

//EventEmitter的每个事件由一个事件名和若干个参数组成，对于每个事件，eventEmitter支持若干个事件监听器
eventEmitter.on('someEvent', function(arg1, arg2){
	console.log('listener1', arg1, arg2);
});
eventEmitter.on('someEvent', function(arg1, arg2){
	console.log('listener2', arg1, arg2);
})

eventEmitter.emit('someEvent', 'ARGUMENT 1', 'ARGUMENT 2');

