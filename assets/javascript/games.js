var wins = 0;
var losses = 0;
var score = 0;
var goal = 0;
var crystals = {
	red: 0,
 	blue: 0,
	green: 0,
 	yellow: 0
 };
	
$("#blue").click(function() {
	crystalScore(crystals.blue);
});
$("#green").click(function() {
	crystalScore(crystals.green);
});
$("#red").click(function() {
	crystalScore(crystals.red);
});
$("#yellow").click(function() {
	crystalScore(crystals.yellow);
});

var win = function(){
	if (score == goal) {
		alert("You won the hardest game in the world!")
		wins++;
		document.getElementById("win").innerHTML = "Wins:" + wins;
		reset();
	}
	if (score > goal) {
		alert("You lost, but don't let this ruin your day.")
		losses++;
		document.getElementById("loss").innerHTML = "Losses:" + losses;
		reset();
	}
}
var random = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var reset = function() {
	score = 0;
	goal = random(19,120);
	crystals.blue = random(1,12);
	crystals.red = random(1,12);
	crystals.green = random(1,12);
	crystals.yellow = random(1,12);
	$("#score").text("Your Score: " + score);
	$("#target").text("Target: " + goal);
	
}

var crystalScore = function(crystal) {
	score += crystal;
	$("#score").text("Your Score: " + score);
	win();
}

reset();