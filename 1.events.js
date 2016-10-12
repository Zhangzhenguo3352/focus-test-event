var EventEmitter = require('events').EventEmitter;

var E = new EventEmitter();

// 订阅
E.on('go',function(aaa,bbb){
	console.log('events 事件如果简单 '+ aaa,bbb)
})
// 发布
E.emit('go', '111', '222');




// var EventEmitter2 = require('events');
// var util = require('util');
// // var E = new EventEmitter2();

// function Girl(){

// }
// util.inherits(Girl,EventEmitter2)
// var E = new Girl()
// E.on('go',function(aaa,bbb){
// 	console.log('events 事件如果简单')
// })
// E.emit('go', '111', '222');


