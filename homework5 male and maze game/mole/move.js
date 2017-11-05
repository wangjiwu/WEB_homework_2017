

//set first 
//onclick 
//if (check)
//cancle check
//score++
//reset check
//else
//score--
END_TIME = 30;
MAX_MALE_NUM = 24;
var start = document.getElementById("startGame");
var score = 0;
var c=END_TIME;
var play = false;
var t;

start.onclick = function() {
	if (play == false) {
		score = 0;
		play = true;
		mouseClear();
		mouseOut();
		document.getElementById("time").value = c;
		document.getElementById("score").value = 0;
		timedCount();
	} else {
		mouseClear();
		clearTimeout(t);
		play = false;
		c=END_TIME;
		document.getElementById("state").value = "GameOver";
	}
}

function timedCount()
{	
	document.getElementById('time').value=c;
	c=c-1;
	t=setTimeout("timedCount()",1000);
	if (c <= -1) {
		play = false;
		document.getElementById("state").value = "GameOver";
		setTimeout("alert('GameOver! your Score is ' + score)",100);
		mouseClear();
		clearTimeout(t);
		c = END_TIME;
	}
}


function mouseOut() {
	var moleNum = String(randomNum(1, MAX_MALE_NUM));
	var moleBtn = document.getElementById(moleNum);
	moleBtn.style.visibility = "visible";
	document.getElementById("state").value = "coming up game running";
}

function mouseClear() {
	score = 0;
	for (i = 1; i <= MAX_MALE_NUM; i++) {
		var moleBtn = document.getElementById(String(i));
		if (moleBtn.style.visibility = "visible") {
			moleBtn.style.visibility = "hidden";
		}
	}
}

function randomNum(minNum,maxNum){ 
	switch(arguments.length){ 
		case 1: 
		return parseInt(Math.random()*minNum+1,10); 
		break; 
		case 2: 
		return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
		break; 
		default: 
		return 0; 
		break; 
	} 
} 

var radioDiv = document.getElementById("radioDiv");
radioDiv.addEventListener('click', mouceHit);

function mouceHit(event) {
	var mouse = event.target;
	if (mouse.style.visibility == "visible" ) {
		mouse.style.visibility = "hidden";
		score++;
		mouseOut();
		document.getElementById("score").value = score;
	} else if (play == true) {
		score--;
		document.getElementById("score").value = score;
	}
}



