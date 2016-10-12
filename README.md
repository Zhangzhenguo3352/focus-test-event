#1，events 事件
```
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

http.createServer(function(req,res){
	console.log('有人来了')
	// 设置响应的类型
	
	if(req.url == '/data'){
		console.log('23232')
		res.end(new Date().toLocaleString());
	}else{
		// path.extname() 取后缀
		res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8')
		fs.readFile('.'+req.url,function(err,data){
			res.write(data);
			res.end()
		})
	}



	// 上面的是简化

	// if(req.url == '/index.html'){
	// 	fs.readFile('./index.html',function(err,data){
	// 		res.write(data);
	// 		res.end()
	// 	})
	// }else if(req.url == '/index.css'){
	// 	fs.readFile('./index.css',function(err,data){
	// 		res.write(data);
	// 		res.end()
	// 	})
	// }else if(req.url == '/404.jpg'){
	// 	fs.readFile('./404.jpg',function(err,data){
	// 		res.write(data)
	// 		res.end()
	// 	})
	// }else if(req.url == '/data'){
	// 	console.log('23232')
	// 	res.end(new Date().toLocaleString());
	// }
}).listen(3000)
```
# 小的 node 服务 server.js
```
var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

http.createServer(function(req,res){
	console.log('有人来了')
	// 设置响应的类型
	
	if(req.url == '/data'){
		console.log('23232')
		res.end(new Date().toLocaleString());
	}else{
		// path.extname() 取后缀
		res.setHeader('Content-Type',mime.lookup(req.url)+';charset=utf-8')
		fs.readFile('.'+req.url,function(err,data){
			res.write(data);
			res.end()
		})
	}


	// 上面的是简化

	// if(req.url == '/index.html'){
	// 	fs.readFile('./index.html',function(err,data){
	// 		res.write(data);
	// 		res.end()
	// 	})
	// }else if(req.url == '/index.css'){
	// 	fs.readFile('./index.css',function(err,data){
	// 		res.write(data);
	// 		res.end()
	// 	})
	// }else if(req.url == '/404.jpg'){
	// 	fs.readFile('./404.jpg',function(err,data){
	// 		res.write(data)
	// 		res.end()
	// 	})
	// }else if(req.url == '/data'){
	// 	console.log('23232')
	// 	res.end(new Date().toLocaleString());
	// }
}).listen(3000)
```
