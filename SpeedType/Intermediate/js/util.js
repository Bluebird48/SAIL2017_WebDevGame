/* Generates a random word (alphabet characters only) with a minimum and maximum length */
var generateRandomWord = function() {
	/* Feel free to change minWordLength and maxWordLength! */
	var maxWordLength = 10;
	var minWordLength = 2;
	var alphabet = "abcdefghijklmnopqrstuvwxyz";
	/* http://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range */
	var randomLength = Math.floor(Math.random() * (maxWordLength - minWordLength + 1)) + minWordLength;
	var word = "";

	for (var i = 0; i < randomLength; i++) {
		word += alphabet.charAt(Math.floor(Math.random() * alphabet.length));
	}

	return word;
};