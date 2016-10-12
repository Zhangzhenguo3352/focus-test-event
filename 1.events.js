var EventEmitter = require('events').EventEmitter;
// on 的用法
	var E = new EventEmitter();

	// 订阅
	E.on('go',function(aaa,bbb){
		console.log('events 事件如果简单 '+ aaa,bbb)
	})
	// 发布
	E.emit('go', '111', '222'); // 执行第三遍
	E.emit('go', '333', '444'); // 执行第二遍
// once 只执行一次
	var E_aa = new EventEmitter();
	// 订阅
	E_aa.once('go',function(aaa,bbb){
		console.log('events 事件如果简单 '+ aaa,bbb)
	})
	E_aa.emit('go','111','222')  // 用了 once 只会执行一遍
	E_aa.emit('go','222','333')
	E_aa.emit('go','333','444')

// 移除对应的回调函数
	var E_bb = new EventEmitter();
	function callback(){
		console.log('回调函数执行')
	}
	E_bb.on('go',callback)
	E_bb.removeListener('go',callback)
	E_bb.emit('go')

//解除所有处理
	var E_cc = new EventEmitter();
	function callAll(){
		console.log('解除所有绑定的函数')
	}
	E_cc.on('go',callAll)

	E_cc.removeAllListeners('go')
	E_cc.emit('go');
	E_cc.emit('go');
	E_cc.emit('go');
	E_cc.emit('go');


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


