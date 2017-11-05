
var gameArea = document.getElementById("gameArea");
gameArea.addEventListener("mouseover", areaOver);
var overStart = false;
var overTreat = false;
var colorArea;
function areaOver(argument) {
	var area = argument.target;

	if (area.id == "start") {
		document.getElementById("info").innerText = "";
		document.getElementById("info").style.opacity = 0;
		overStart = true;
		overTreat = false;
	} 
	if ((area.id == "v1" || 
		area.id == "v2" || 
		area.id == "v3" || 
		area.id == "v4" || 
		area.id == "v5" || 
		area.id == "v6" || 
		area.id == "v7" || 
		area.id == "v8" || 
		area.id == "v9") && overStart == true) {
		area.style.backgroundColor = "red";
	colorArea = area;
	gameLose();
} 
if (area.id == "passTreat") {
	overTreat = true;
} 
if (area.id == "end") {
	if (overTreat == true && overStart == true) {
		gameTreat();
	} else if(overStart && !overTreat){
		setTimeout(gameWin(), 1000);
	}
}
}

// function jduge() {

// }


function gameWin() {
	document.getElementById("info").innerText = "You win";
	document.getElementById("info").style.opacity = 1;
	overStart = false;
	overTreat = false;
}
function gameLose() {
	document.getElementById("info").innerText = "You Lose";
	document.getElementById("info").style.opacity = 1;
	overStart = false;
	overTreat = false;
	colorArea.addEventListener("mouseout", function() {
		colorArea.style.backgroundColor = "#EEEEEE";
	});
}
function gameTreat() {
	document.getElementById("info").innerText = "Don't cheat, you should start form the 'S' and move to the 'E' inside the maze!";
	document.getElementById("info").style.opacity = 1;
	overStart = false;
	overTreat = false;
}