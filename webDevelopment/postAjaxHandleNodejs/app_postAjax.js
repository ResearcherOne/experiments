var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({extended: false}); /*{extended: false} option do "force the use of the native querystring Node library"*/

app.use(express.static('public'));

app.post('/hardwarelibrary/add', parseUrlencoded, function (request, response){
	var newHardware = request.body;
	var responseObject = {name: newHardware.name, status: "request is recieved"};
	response.status(201).json(responseObject);
	console.log("Hardware Name:"+newHardware.name+" Hardware Description:"+newHardware.description);
});

app.listen(80, function () {
  console.log('Example app listening on port 80!');
});

