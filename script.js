var countDownDate = new Date();
countDownDate.setHours(7, 0, 0, 0); // Set the countDownDate to 7 am today
countDownDate.setHours(countDownDate.getHours() + 18); // Add 18 hours to reach 1 am tomorrow
var x = setInterval(function () {
	var now = new Date().getTime();
	var distance = countDownDate - now;
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	var invested = 18 - hours;
	var Mininvested = 60 - minutes;
	if (hours == 0 && Mininvested - 1 == 0 && seconds == 0) {
		clearInterval(x);
		document.getElementById("demo").innerHTML = "EXPIRED";
		document.getElementById("demo1").innerHTML = "EXPIRED";
		var audio = new Audio("alarm.mp3");
		audio.play();
		return;
	} else {
		var audio = new Audio("tick.mp3");
		audio.play();
	}
	document.getElementById("demo").innerHTML =
		hours + "h " + minutes + "m " + seconds + "s ";
	document.getElementById("demo1").innerHTML =
		invested + "h " + (Mininvested - 1) + "m ";
}, 1000);
