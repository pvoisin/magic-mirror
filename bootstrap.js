var MagicMirror = require("./source/back-end/MagicMirror");
var GestureAnalyzer = require("./source/back-end/GestureAnalyzer");

var mirror = new MagicMirror();
var gestureAnalyzer;

mirror.start(function() {
/*
	gestureAnalyzer = new GestureAnalyzer();
	gestureAnalyzer.on("gesture", function(gesture) {
		log("GestureAnalyzer> Gesture:", gesture);

		mirror.handleGesture(gesture);
	});
//*/
});


function log() {
	if(arguments[0] instanceof Error) {
		return dumpError(arguments[0]);
	}

	return console.log.apply(console, arguments);
}

function dumpError(error) {
	console.error(error.stack);
}