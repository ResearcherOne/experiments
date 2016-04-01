var express = require('express');
var app = express();

app.get('/nodemcuboard', function (req, res) { //Request coming to "yourdomain.com/nodemcuboard" will be handled.
  res.send('Hello World!');
  console.log('Get Request is recieved!');
});

app.listen(80, function () { //Request that is coming to port 80 will be handled.
  console.log('Example app listening on port 80!');
});