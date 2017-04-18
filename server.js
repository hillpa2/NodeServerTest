var http = require("http");

var PORT = 7000;

function serverResponse (request, result) {
	//do something here
	result.end("FUNCTIONAL COMPLIMENTS, path hit:" + request.url)
}

var server = http.createServer(serverResponse);

server.listen(PORT, function () {
	//do something when we start up the server
	console.log("SERVER COMPLIMENTS YOU, listening on: http://localhost:" + PORT);
});

//---------------------------------------------------
var PORTB = 7500;

function serverResponseB (request, result) {
	//do something here
	result.end("FUNCTIONAL COMPLAINTS, path hit:" + request.url)
}

var serverB = http.createServer(serverResponseB);

serverB.listen(PORTB, function () {
	//do something when we start up the server
	console.log("SERVER HAS COMPLAINTS FOR YOU, listening on: http://localhost:" + PORTB);
});