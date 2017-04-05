//观察者模式
//version 1
// var pubsub = {};
// (function(q){
// 	var topics ={};
// 		subUid = -1;
// 	//发布方法
// 	q.publish = function(topic, args){
// 		if(!topics[topic]){
// 			return false;
// 		}
// 		setTimeout(function(){
// 			var subscribers = topics[topic],
// 				len = subscribers ? subscribers.length : 0;
// 			while(len--){
// 				subscribers[len].func(topic, args);
// 			}
// 		},0);
// 		return true;
// 	};
// 	//订阅方法
// 	q.subscribe = function(topic, func){
// 		if(!topics[topic]){
// 			topics[topic] = [];
// 		}
// 		var token = (++subUid).toString();
// 		topics[topic].push({
// 			token: token,
// 			func: func
// 		});
// 		return token;
// 	};
// 	//退订方法
// 	q.unsubscribe = function(token){
// 		for(var m in topics){
// 			if(topics[m]){
// 				for(var i = 0, j=topics[m].length; i<j; i++){
// 					if(topics[m][i].token === token){
// 						topics[m].splice(i,1);
// 						return token;
// 					}
// 				}
// 			}
// 		}
// 		return false;
// 	};
// }(pubsub));
// 
// pubsub.subscribe('example1', function(topics,data){
// 	console.log(topics + ":"+ data);
// });
// pubsub.publish('example1', 'hello world!');
// pubsub.publish('example1', ['test', 'a', 'b', 'c']);
// pubsub.publish('example1', [{ 'color': 'blue' }, { 'text': 'hello'}]);
// 
// version 2 (用原型)
// function Observer(){
// 	this.fns = [];
// }
// Observer.prototype = {
// 	subscribe : function(fn){
// 		this.fns.push(fn);
// 	},
// 	unsubscribe : function(fn){
// 		this.fns = this.fns.filter(
// 				function(el){
// 					if(el !== fn){
// 						return el;
// 					}
// 				}
// 			);
// 	},
// 	update: function(o,thisObj){
// 		var scope = thisObj || global;
// 		this.fns.forEach(
// 			function(el){
// 				el.call(scope, o);
// 			});
// 	}
// };

// var o = new Observer;
// var f1 = function(data){
// 	console.log('Robbin:'+ data+ ',hello!');
// };
// var f2 = function(data){
// 	console.log('Randall: '+data+', bye-bye!');
// }
// o.subscribe(f1);
// o.subscribe(f2);
// o.unsubscribe(f2);
// o.update('Tom is back!');

//version 3
var observer = {
	//subscribe
	addSubscriber: function(callback){
		this.subscribers[this.subscribers.length] = callback;
	},
	//unsubscribe
	removeSubscriber: function(callback){
		for(var i = 0; i<this.subscribers.length; i++){
			if(this.subscribers[i] === callback){
				delete(this.subscribers[i]);
			}
		}
	},
	//publish
	publish: function(what){
		for(var i = 0; i< this.subscribers.length; i++){
			if(typeof this.subscribers[i] === 'function'){
				this.subscribers[i](what);
			}
		}
	},
	make: function(o){
		for(var i in this){
			o[i] = this[i];
			o.subscribers = [];
		}
	}
};

var blogger = {
	recommend: function(id){
		var msg = 'dudu recommend: '+ id;
		this.publish(msg);
	}
};
var user = {
	vote: function(id){
		var msg = 'somebody vote for id= '+id;
		this.publish(id);
	}
};

observer.make(blogger);
observer.make(user);

var tom = {
    read: function (what) {
        console.log('Tom看到了如下信息：' + what)
    }
};

var mm = {
    show: function (what) {
        console.log('mm看到了如下信息：' + what)
    }
};
// 订阅
blogger.addSubscriber(tom.read);
blogger.addSubscriber(mm.show);
blogger.recommend(123); //调用发布

//退订
blogger.removeSubscriber(mm.show);
blogger.recommend(456); //调用发布

//另外一个对象的订阅
user.addSubscriber(mm.show);
user.vote(789); //调用发布