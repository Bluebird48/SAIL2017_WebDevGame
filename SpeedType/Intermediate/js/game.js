/* Responsible for setting up everything to start the game */
var startGame = function() {
	var wordInput = document.getElementById("wordInput");
	var wordToType = document.getElementById("wordToType");
	startTimer();

	/* Detect value change on the input box */
	wordInput.addEventListener("input", function() {
		if (this.value === wordToType.textContent) {
			wordToType.textContent = generateRandomWord();
			wordInput.value = "";
		}
	});
}

/* 
Without calling the startGame() function, we can't "start" our game!
So let's start the game! 
*/
startGame();





