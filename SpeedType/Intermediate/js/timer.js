/* Gets the time elapsed since this page was loaded */

var startTimer = function() {
	var startTime = Date.now();

	var interval = setInterval(function() {
			var elapsedTime = Date.now() - startTime;
			var timer = document.getElementById("timer");
			timer.innerHTML = (elapsedTime / 1000).toFixed(3) + " seconds";
	}, 0);
}
