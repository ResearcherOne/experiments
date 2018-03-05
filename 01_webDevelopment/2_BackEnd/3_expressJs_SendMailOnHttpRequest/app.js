var express = require('express');
var app = express();

var sendGridAPIkey = ""; //your sendgrid API key goes here.
var sendgrid = require("sendgrid")(sendGridAPIkey);
var email = new sendgrid.Email();

function sendMail(buttonOwner){
	email.addTo("birkan.kolcu@ozu.edu.tr");
	email.setFrom("birkan.kolcu@ozudevelopers.com");
	email.setSubject("Button is triggered.");
	email.setHtml(buttonOwner+" pushed to button!");
	sendgrid.send(email);
} 

app.get('/mailbutton/:buttonowner', function (request, response) { //Request coming to "yourdomain.com/nodemcuboard" will be handled.
  var buttonOwner = request.params.buttonowner;
  response.send('Button is succesfully pressed.');
  sendMail(buttonOwner);
  console.log("request is recieved.");
});

app.listen(80, function () { //Request that is coming to port 80 will be handled.
  console.log('Example app listening on port 80!');
});