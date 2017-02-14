/**
 * Simple HTTP server returning Hello World as plain text.
 */

// Require the module
var http = require('http');

var data = {
    text : "Hej Världen!"
};


// Use the createServer function to create the simple server
var server = http.createServer((req, res) => {

    var ipAddress;

    // Log incoming requests
    ipAddress = req.connection.remoteAddress;
    console.log("Incoming request from ip " + ipAddress);

    // Write header with text/plain as content type and 200 HTTP status code
    res.writeHead(200, { 'Content-Type': 'application/json' });

    // Reply with a string
    res.end(JSON.stringify(data));
});

// Export the server as a module.
export default server;
