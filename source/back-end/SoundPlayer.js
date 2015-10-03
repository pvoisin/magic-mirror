var inherit = require("util").inherits;
var EventEmitter = require("events").EventEmitter;
var ChildProcess = require("child_process");
var helper = require("lodash");


function SoundPlayer() {
	EventEmitter.call(this);
}

inherit(SoundPlayer, EventEmitter);


SoundPlayer.prototype.play = function play(options, callback) {
	if(typeof arguments[0] === "function") {
		callback = arguments[0];
		options = {};
	}

	options = helper.merge({
		file: "synthesis.wav"
	}, options);

//	options.input = options.input || FileSystem.createReadStream(options.file);

	log("SoundPlayer> Playing...");

//	var command = "play -t s16 -r 16000 -c 1 ${file}";
	var command = "aplay ${file}";
	command = helper.template(command)(options);

	log("SoundPlayer> Command:", command);

	ChildProcess.exec(command, function(error, output) {
		if(error) {
			return exit(error);
		}

		exit();
	});

	function exit() {
		return callback && callback.apply(this, arguments);
	}
};

function log() {
	if(arguments[0] instanceof Error) {
		return dumpError(arguments[0]);
	}

	return console.log.apply(console, arguments);
}

function dumpError(error) {
	console.error(error.stack);
}


module.exports = SoundPlayer;