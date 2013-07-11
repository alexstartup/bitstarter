var express = require('express');
var fs = require('fs');

var data2 = fs.readFileSync('index.html');
var buf2 = new Buffer(data2);
var filecontent2 = buf2.toString();

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(filecontent2);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

var fs = require('fs')
fs.readFileSync('index.html', function (err, data) {
  if (err) throw err;
  console.log(data);
});
