var globalTimeElapsed = 0;

/* Responsible for setting up everything to start the game */
var startGame = function() {
	var wordInput = document.getElementById("wordInput");
	var wordToType = document.getElementById("wordToType");

	var start = false;
	var acpm = 0;
	var wordCount = 0;
	var characterCount = 0;
	var timer1 = null;

	/* Detect value change on the input box */
	wordInput.addEventListener("input", function() {

		if (start) {
			var inputText = wordToType.textContent;
			if (this.value === inputText) {
				wordToType.textContent = generateRandomWord();
				wordCount++;
				characterCount += inputText.length;
				/* Update the statistics */
				updateStats(wordCount, characterCount);
				/* Reset the Timer! */
				timer1 = resetTimer(timer1);
				wordInput.value = "";
			} 
		} else {
			if (this.value === wordToType.textContent) {
				start = true;
				wordToType.textContent = generateRandomWord();
				timer1 = startTimer();
				wordInput.value = "";
			}
		}
	});
}

var updateStats = function(wordCount, characterCount) {
	var wordCountContainer = document.getElementById("word-count");
	var characterCountContainer = document.getElementById("character-count");
	var wpm = document.getElementById("wpm");
	var cpm = document.getElementById("cpm");

	wordCountContainer.textContent = wordCount;
	characterCountContainer.textContent = characterCount;
	wpm.textContent = (wordCount / (globalTimeElapsed / 60)).toFixed(3);
	cpm.textContent = (characterCount / (globalTimeElapsed / 60)).toFixed(3);
}

var restartGame = function() {
	startGame();
}
/* 
Without calling the startGame() function, we can't "start" our game!
So let's start the game! 
*/
startGame();





