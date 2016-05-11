
var mqttApp = (function(){
	var messageRecievedCallback = null;
	
	return {
		setMessageRecievedCallback: function(callback){
			messageRecievedCallback = callback;
		},
		
		initialize: function(){
			var mqttConfig = {
				hostname: "m21.cloudmqtt.com",
				port: "31348",
				clientID: "webUI_1",
				username: "webUI",
				password: "123456"
			};
			
			// Create a client instance
			client = new Paho.MQTT.Client(mqttConfig.hostname, Number(mqttConfig.port), mqttConfig.clientID);

			// set callback handlers
			client.onConnectionLost = onConnectionLost;
			client.onMessageArrived = onMessageArrived;

			// connect the client
			client.connect({onSuccess:onConnect, userName: mqttConfig.username, password: mqttConfig.password, useSSL: true});


			// called when the client connects
			function onConnect() {
			  // Once a connection has been made, make a subscription and send a message.
			  console.log("onConnect");
			  client.subscribe("/test");
			  message = new Paho.MQTT.Message("Hello");
			  message.destinationName = "/test";
			  client.send(message);
			}

			// called when the client loses its connection
			function onConnectionLost(responseObject) {
			  if (responseObject.errorCode !== 0) {
				console.log("onConnectionLost:"+responseObject.errorMessage);
			  }
			}

			// called when a message arrives
			function onMessageArrived(message) {
				if (messageRecievedCallback !== null) {
					messageRecievedCallback(message.payloadString);
				} else {
					console.log("onMessageArrived:"+message.payloadString);
					console.log("messageRecievedIsNotTruthyValue")
				}
			}
		}
	};
}());