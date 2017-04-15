var countDownTimerOptionInput = document.getElementById("count-down-timer-option-input");
var countDownTimerOptionButton = document.getElementById("count-down-timer-option-button");

countDownTimerOptionButton.addEventListener("click", function() {
	var timerValue = countDownTimerOptionInput.value;
	console.log(timerValue);
	if (timerValue !== "") {
		localStorage.setItem("timerValue", timerValue);
		alert("Successfully set new timer value");
	} else{
		alert("Please enter a valid number");
	}
});

countDownTimerOptionInput.addEventListener("keyup", function(event) {
	if (event.which == 13 || event.keyCode == 13) {
		countDownTimerOptionButton.click();
	}
});

