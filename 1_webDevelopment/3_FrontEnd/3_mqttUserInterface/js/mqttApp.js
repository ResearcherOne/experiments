
var mqttApp = (function(){
	var messageRecievedCallback = null;
	
	var testTopic = "";
	
	var client;
	
	return {
		setMessageRecievedCallback: function(callback){
			messageRecievedCallback = callback;
		},
		
		publishMessage: function(message){
			 message = new Paho.MQTT.Message(message);
			 message.destinationName = testTopic;
			 client.send(message);
		},
		
		initialize: function(config, topic){
			var mqttConfig = config;
			testTopic = topic;
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
			  client.subscribe(testTopic);
			  message = new Paho.MQTT.Message("UI is alive.");
			  message.destinationName = testTopic;
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