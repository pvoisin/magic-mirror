#!/usr/bin/env node
var Request = require("request");
var FileSystem = require("fs");

var index = process.argv.indexOf("-i");
if(index < 0) {
	console.log("Please specify the input file with `-i`.");
	process.exit(1);
}

var Nuance = require("../source/back-end/Nuance");

var input = process.argv[index + 1];
console.log(process.cwd());
input = FileSystem.createReadStream(input);

var options = {
	applicationId: "NMDPTRIAL_kevin_vicrey_nexu_org20151003145106",
	applicationKey: "ab074e6dcbbd686115ffb7a8fffbb10c81d72c0fbd063b4cc0be10bcce2f6f7936bee6027b4f63904e1a394d15ea5997c185a67e8ce1ca4c9fdb086e0a78e740",
	language: "fr-CA"
};

Nuance.sendSpeechForTextRecognition(input, options, function(error, result) {
	error && console.error(error.stack);
	console.log(result);
});
