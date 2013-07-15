var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
//var content = fs.readFileSync("/home/ubuntu/bitstarter/index.html", "utf-8");
var text = fs.readFileSync('index.html','utf8');

app.get('/', function(request, response) {
    
   response.send(text.toString("utf-8"));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
