//variable declaration and modules requires
var five = require("johnny-five"),
  board, led;
var Firebase = require("firebase");

board = new five.Board(); /*The Board class constructs objects that represent the physical board itself. All device objects depend on 
an initialized and ready board object*/

//when the board has reported that it is ready
board.on("ready", function() {
	//create a led instance
	led = new five.Led(13);
	//create a reference to firebase database
	var myFirebaseRef = new Firebase("https://testing-8e65b.firebaseio.com/buttons/");

	
	//wait info from firebase
	myFirebaseRef.on("value", function(snapshot) {
	    var ledState = snapshot.val();
	    //check value from ledState to turn the led on or off
	    if(ledState == "on"){
	      led.on();
	    }else{
	      led.off("off");
	    }
	});
});