var express = require('express');
var fs = require('fs')
var app = express.createServer(express.logger());
var content = fs.readFileSync("/home/ubuntu/bitstarter/index.html", "utf-8");

app.get('/', function(request, response) {
    
   response.send(buf.toString("utf-8", content));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
