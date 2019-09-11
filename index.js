var http = require('http')

http.createServer(function (request, response) {
	response.WriteHead(200, {"Content-Type": "text/plain"})
	response.end("Hello, World!\n")
}).listen(process.env.PORT)