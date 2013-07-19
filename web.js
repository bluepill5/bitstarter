var express = require('express');
var fs = require('fs');

// Read the file (without the option 'utf-8') return a buffer
var data = fs.readFileSync('./index.html', 'utf-8');
// Obtain the size (in bytes) required to create a buffer
var size = Buffer.byteLength(data)

// Create the buffer with the adecuate size
var buffer = new Buffer(size);
// Write the content of the file in the buffer
buffer.write(data, 'utf-8');


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  // Print the content of the buffer
  response.send(buffer.toString('utf-8'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
