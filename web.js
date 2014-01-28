var express = require('express');
var fs = require('fs');
var path = require('./index.html');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var data = fs.readFile(path);
    response.send(data.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});