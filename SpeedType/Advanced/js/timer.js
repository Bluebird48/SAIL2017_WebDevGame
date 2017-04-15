/* Gets the time elapsed since this page was loaded */

var startTimer = function() {
	var defaultTimerValue = 5;
	var timerValue = defaultTimerValue;

	if (localStorage.getItem("timerValue") !== null) {
		timerValue = parseInt(localStorage.getItem("timerValue"));
	}

	var countDownTimer = new Date(); 
	countDownTimer.setSeconds(countDownTimer.getSeconds() + timerValue);

	var interval = setInterval(function() {
			var timeElapsed = countDownTimer - Date.now();
			var timer = document.getElementById("timer");
			var secondsElapsed = (timeElapsed / 1000).toFixed(3);
			globalTimeElapsed = globalTimeElapsed + parseFloat(timerValue) - parseFloat(secondsElapsed);
			timer.innerHTML = secondsElapsed + " seconds";

			if (timeElapsed <= 0) {
				var gameButtonContainer = document.getElementsByClassName("game-button-container")[0];	
				clearInterval(interval);
				timer.innerHTML = "0 seconds";
				alert("game over");

				gameButtonContainer.style.display = "block";
				var restartButton = document.getElementById("restart-button");
				restartButton.addEventListener("click", function() {
					location.reload();
				});
			}

	}, 0);

	return interval;
}

var resetTimer = function(timer) {
	clearInterval(timer);
	return startTimer();
}


