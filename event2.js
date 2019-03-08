var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

// on用于绑定事件函数
event.on('some_event', function () {
    console.log("some_event 事件触发")
})
setTimeout(function () {
    event.emit('some_event')
}, 1000)

event.on('someEvent', function (arg1, arg2) {
    console.log('listen1', arg1, arg2)
})

event.on('someEvent', function (arg1, arg2) {
    console.log('listen2', arg1, arg2)
})

// emit用于触发一个事件
event.emit('someEvent', 'arg1', 'arg2')