var http = require("http");
var WebSocket = require("faye-websocket");

var router = require("./src/router.js");

var api = require("./src/api.js");
api.docker.init();
api.redis.init();

http
	.createServer()
	.on("upgrade", function (request, socket, body) {
		if (!WebSocket.isWebSocket(request)) {
			return;
		}
		var ws = new WebSocket(request, socket, body);
		ws.on("message", router);
		ws.on("close", function(event) {
			ws = null;
		});
	})
	.listen(process.env.PORT || 8080);
