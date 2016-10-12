var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
	console.log('有人来了')
	if(req.url == '/index.html'){
		fs.readFile('./index.html',function(err,data){
			res.write(data);
			res.end()
		})
	}else if(req.url == '/index.css'){
		fs.readFile('./index.css',function(err,data){
			res.write(data);
			res.end()
		})
	}else if(req.url == '/404.jpg'){
		fs.readFile('./404.jpg',function(err,data){
			res.write(data)
			res.end()
		})
	}else if(req.url == '/data'){
		console.log('23232')
		res.end(new Date().toLocaleString());
	}
}).listen(3000)