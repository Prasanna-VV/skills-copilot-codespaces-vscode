// Create a web server that can respond to requests for /comments.json
// with a JSON representation of an array of comments

var http = require('http');
var fs = require('fs');
var comments = require('./comments.json');

var server = http.createServer(function(req, res) {
	if (req.method === 'GET' && req.url === '/comments.json') {
		res.setHeader('Content-Type', 'application/json');
		res.end(JSON.stringify(comments));
	} else if (req.method === 'GET' && req.url === '/') {
		res.setHeader('Content-Type', 'text/html');
		fs.createReadStream('./public/index.html').pipe(res);
	} else if (req.method === 'GET' && req.url === '/app.js') {
		res.setHeader('Content-Type', 'application/javascript');
		fs.createReadStream('./public/app.js').pipe(res);
	} else if (req.method === 'POST' && req.url === '/comments') {
		var body = '';
		req.on('data', function(data) {
			body += data;
		});
		req.on('end', function() {
			var comment = JSON.parse(body);
			comments.push(comment);
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify(comment));
		});
	}
});

server.listen(8080);
console.log('Listening on port 8080');